import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Triggering deployment after visibility change
// https://vitejs.dev/config/
export default defineConfig({
  base: "/3d-portfolio/",
  plugins: [react()],
});
