import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "build",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    PeerDepsExternalPlugin(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    terser(),
  ],
};
