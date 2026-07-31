import { defineConfig } from "orval";

export default defineConfig({
  taskmanager: {
    output: {
      mode: "tags-split",
      target: "./src/api",
      client: "fetch",
      clean: true,
      formatter: "prettier",
    },
    input: "http://localhost:8080/api/v1/docs.yaml",
  },
});
