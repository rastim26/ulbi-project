import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {BuildOptions} from "./types/config"

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: [{
            loader: 'ts-loader',
            options: {
                compilerOptions: {
                    sourceMap: isDev && true,
                }
            }
        }],
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
                            ? '[local]__[hash:base64:3]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }
    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract',
                        {
                            "nsSeparator": "~",
                            "locales": ["en", "ru"],
                            "keyAsDefaultValue": true,
                        }]
                ],
            }
        }
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
        babelLoader,
        typescriptLoader,
        cssLoader,
    ]
}