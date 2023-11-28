import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.tsx",
  output: {
    dir: "build",
    format: "cjs",
  },
  plugins: [
    resolve({
      extensions: [".ts", ".tsx"],
    }),
    commonjs(),
    terser(),
  ],
};
