import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Latin King Detailing",
    short_name: "Latin King",
    description:
      "Premium mobile car detailing, ceramic coating and paint correction in Urmston, Manchester.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#C41E3A",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
