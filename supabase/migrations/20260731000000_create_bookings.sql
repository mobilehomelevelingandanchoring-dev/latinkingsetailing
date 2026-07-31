-- ============================================================
-- Latin King Detailing — bookings table
-- Migration: 20260731000000_create_bookings
-- ============================================================

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- Customer details
  full_name text not null,
  phone text not null,
  email text,
  address text,
  area text,

  -- Booking details
  service text not null,
  vehicle text,
  preferred_date date,
  preferred_time text,
  notes text,

  -- Internal tracking
  status text not null default 'new'
    check (status in ('new','contacted','confirmed','completed','cancelled')),
  source text default 'website'
);

create index if not exists bookings_created_at_idx on bookings (created_at desc);
create index if not exists bookings_status_idx    on bookings (status);

-- ============================================================
-- Row Level Security
-- ============================================================
alter table bookings enable row level security;

-- Public (anon) can INSERT only — powers the booking form
create policy "anon can insert bookings"
  on bookings
  for insert
  to anon
  with check (true);

-- Authenticated users / service_role can SELECT + UPDATE (owner reviews via dashboard)
create policy "authenticated can select bookings"
  on bookings
  for select
  to authenticated
  using (true);

create policy "authenticated can update bookings"
  on bookings
  for update
  to authenticated
  using (true)
  with check (true);

-- service_role bypasses RLS by default — no extra policy needed
