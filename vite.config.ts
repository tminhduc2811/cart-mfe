import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cart-mfe",
      filename: "cart-mfe-entry.js",
      shared: ["react", "react-dom", "zustand"],
      exposes: {
        "./App": "./src/App.tsx",
        "./store": "./src/store",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  base: "/cart-mfe/",
});
