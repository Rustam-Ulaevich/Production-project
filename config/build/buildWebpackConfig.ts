import { BuildOptions } from './types/config';
import webpack from "webpack";
import { buildplugins } from './buildPlugins'
import { buildLoarders } from './buildLoaders'
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    
    const {paths, mode} = options
    
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildplugins(options),
        module: {
            rules: buildLoarders(),
        },
        resolve: buildResolvers(),
    }
}