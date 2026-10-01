export default function manifest() {
  return {
    name: "Super Furniture",
    short_name: "Super Furniture",
    description: "Home, office, hospital and restaurant furniture — 12, SS Khaled Road · 01819822833",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F1EA",
    theme_color: "#231B15",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
