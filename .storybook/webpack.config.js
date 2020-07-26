const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [require.resolve('babel-preset-react-app')],
        },
    });
    config.module.rules.push({
        test: /\.(sass|scss)$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    sassOptions: {
                        indentWidth: 4,
                        includePaths: [path.resolve(__dirname, 'node_modules')],
                    },
                },
            },
        ],
    });
    config.module.rules.push({
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
            'file-loader',
            {
                loader: 'image-webpack-loader',
                options: {
                    disable: true,
                },
            },
        ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.plugins.push(
        new CopyWebpackPlugin({
            patterns: [{ from: 'public/images', to: 'images' }],
        }),
    );
    return config;
};
