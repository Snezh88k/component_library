

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };

import postcss from 'rollup-plugin-postcss'


export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss()
        ],
    },
    {
        input: "dist/est/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "est" }],
        plugins: [dts.default()],

        external: [/\.css$/]
    },
];