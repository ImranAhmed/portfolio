const path = require('path');

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
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
