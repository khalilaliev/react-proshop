import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api": {
      //   target: "http://localhost:5001",
      //   changeOrigin: true,
      //   secure: false,
      // },
      // "/uploads": "http://localhost:5000",
      "/api": "http://localhost:5001",
      "/uploads": "http://localhost:5001",
    },
  },
});
