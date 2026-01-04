import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {BuildOptions} from "./types/config"

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings // extracts CSS into separate files from JS
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[folder]__[local]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: ['file-loader'],
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ]
}