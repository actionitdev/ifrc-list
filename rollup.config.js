import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";

export default [
  {
    //UMD
    input: "src/main.js",
    output: {
      file: `dist/${pkg.name}.min.js`,
      format: "umd",
      name: "ifrcList",
      esModule: false,
      exports: "named",
      sourcemap: true,
    },
    plugins: [
      json(),
      babel({
        babelHelpers: "bundled",
      }),
      terser(),
    ],
  },
  // ESM and CJS
  {
    input: "src/main.js",
    plugins: [json()],
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
  },
];
