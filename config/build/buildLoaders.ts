import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: [{
            loader: 'ts-loader',
            options: {
                compilerOptions: {
                    sourceMap: isDev && true,
                },
            },
        }],
        exclude: /node_modules/,
    }
    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract',
                        {
                            nsSeparator: '~',
                            locales: ['en', 'ru'],
                            keyAsDefaultValue: true,
                        }],
                ],
            },
        },
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: ['file-loader'],
    }
    const cssLoader = buildCssLoader(isDev)
    const svgLoader = buildSvgLoader()

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ]
}
