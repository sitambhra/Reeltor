import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase to 1MB to avoid chunk size warnings
    target: "esnext", // For modern JS compatibility
    modulePreload: true, // For proper module handling
  },
  esbuild: {
    jsx: "react", // Ensures JSX is properly transpiled for React
  },
});
