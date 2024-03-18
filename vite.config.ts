import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "TriceraTask",
        background_color: "#f0f0f0",
        theme_color: "#f0f0f0",
        icons: [
          {
            src:
              "https://res.cloudinary.com/the-devoyage/image/upload/v1693794214/TriceraTasks_1_xyr72r.png",
            sizes: "192x192",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
