import { defineConfig } from "vite";
import { dirname } from "path";
import { fileURLToPath } from "url";
import https from "https";
import react from "@vitejs/plugin-react";

if (
  process.env.npm_lifecycle_event === "build" &&
  !process.env.CI &&
  !process.env.SHOPIFY_API_KEY
) {
  console.warn(
    "\nBuilding the frontend app without an API key. The frontend build will not run without an API key. Set the SHOPIFY_API_KEY environment variable when running the build command.\n"
  );
}
const FRONTEND_PORT = 3000
const proxyOptions = {
  target: `http://127.0.0.1:${process.env.BACKEND_PORT}`,
  changeOrigin: false,
  secure: true,
  ws: false,
};

const host = process.env.HOST
  ? process.env.HOST.replace(/https?:\/\//, "")
  : "localhost";
let hmrConfig;
if (host === "localhost") {
  hmrConfig = {
    protocol: "ws",
    host: "localhost",
    port: FRONTEND_PORT,
    clientPort: FRONTEND_PORT,
  };
} else {
  hmrConfig = {
    protocol: "ws",
    host: "localhost",
    port: FRONTEND_PORT,
    clientPort: FRONTEND_PORT,
  };
}

export default defineConfig({
  root: dirname(fileURLToPath(import.meta.url)),
  plugins: [react()],
  define: {
    "process.env.SHOPIFY_API_KEY": JSON.stringify(process.env.SHOPIFY_API_KEY),
  },
  resolve: {
    preserveSymlinks: true,
  },
  server: {
    host: "localhost",
    port: FRONTEND_PORT,
    hmr: hmrConfig,
    // proxy: {
    //   "^/(\\?.*)?$": proxyOptions,
    //   "^/api(/|(\\?.*)?$)": proxyOptions,
    // },
  },
});
