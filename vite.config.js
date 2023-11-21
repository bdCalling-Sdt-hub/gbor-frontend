import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pluginRewriteAll from "vite-plugin-rewrite-all";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  server: {
    host: "167.99.205.107",
    port: "3000",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
