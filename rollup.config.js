const rollup = require("rollup");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const typescript = require("rollup-plugin-typescript2");
const pkg = require("./package.json");

const deps = pkg.dependencies ? Object.keys(pkg.dependencies) : [];
const peerDeps = pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : [];

export default {
  input: "./src/index.ts",
  output: {
    format: "cjs",
    file: "dist/index.js",
    exports: "named",
  },
  // external(id) {
  //   return (
  //     deps.some((k) => new RegExp(`^${k}`).test(id)) ||
  //     peerDeps.some((k) => new RegExp(`^${k}`).test(id))
  //   );
  // },
  plugins: [
    nodeResolve(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
        },
        exclude: ["node_modules"],
      },
      abortOnError: false,
    }),
  ],
};
