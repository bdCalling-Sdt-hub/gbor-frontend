import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pluginRewriteAll from "vite-plugin-rewrite-all";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  server: {
    host: "192.168.10.16",
    port: "5000",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
