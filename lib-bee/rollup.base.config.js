import nodeResolve from "rollup-plugin-node-resolve";
import multiEntry from "rollup-plugin-multi-entry";
import cjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";
import sourcemaps from "rollup-plugin-sourcemaps";
import viz from "rollup-plugin-visualizer";
import inject from "rollup-plugin-inject";

const pkg = require("./package.json");
const depNames = Object.keys(pkg.dependencies);
const input = "dist-esm/index.js";
const production = process.env.NODE_ENV === "production";

export function nodeConfig(test = false) {
  const externalNodeBuiltins = ["events"];
  const baseConfig = {
    input: input,
    external: depNames.concat(externalNodeBuiltins),
    output: { file: "dist/index.js", format: "cjs", sourcemap: true },
    preserveSymlinks: false,
    plugins: [
      sourcemaps(),
      replace({
        delimiters: ["", ""],
        values: {
          // replace dynamic checks with if (true) since this is for node only.
          // Allows rollup's dead code elimination to be more aggressive.
          "if (isNode)": "if (true)"
        }
      }),
      nodeResolve({ preferBuiltins: true }),
      cjs()
    ]
  };

  if (test) {
    // entry point is every test file
    baseConfig.input = "dist-esm/test/*.spec.js";
    baseConfig.plugins.unshift(multiEntry({ exports: false }));

    // different output file
    baseConfig.output.file = "test-dist/index.js";

    // mark assert as external
    baseConfig.external.push("assert");
  } else if (production) {
    baseConfig.plugins.push(terser());
  }

  return baseConfig;
}

export function browserConfig(test = false, production = false) {
  const baseConfig = {
    input: input,
    external: ["@azure/ms-rest-js"],
    output: {
      file: "browser/lib-bee.js",
      format: "umd",
      name: "ExampleClientB",
      sourcemap: true,
      globals: { "@azure/ms-rest-js": "msRest" }
    },
    preserveSymlinks: false,
    plugins: [
      sourcemaps(),
      replace({
        delimiters: ["", ""],
        values: {
          // replace dynamic checks with if (false) since this is for
          // browser only. Rollup's dead code elimination will remove
          // any code guarded by if (isNode) { ... }
          "if (isNode)": "if (false)"
        }
      }),
      nodeResolve({
        mainFields: ['module', 'browser'],
        preferBuiltins: false
      }),
      cjs({
        namedExports: { events: ["EventEmitter"] }
      }),

      inject({

        modules: {
       
        Buffer: ["buffer", "Buffer"],
       
        process: "process"
       
        },
       
        exclude: ["./**/package.json"]
       
        }),


      viz({ filename: "browser/browser-stats.html", sourcemap: false })
    ]
  };

  if (test) {
    baseConfig.input = "dist-esm/test/*.spec.js";
    baseConfig.plugins.unshift(multiEntry({ exports: false }));
    baseConfig.output.file = "test-browser/index.js";
  } else if (production) {
    baseConfig.output.file = "browser/lib-bee.min.js";
    baseConfig.plugins.push(terser());
  }

  return baseConfig;
}