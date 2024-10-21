import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["ssh2-sftp-client"],
    },
  },
  plugins: [react(), yextSSG()],
});
