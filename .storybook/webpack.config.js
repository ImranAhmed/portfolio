module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [require.resolve('babel-preset-react-app')],
        },
    });

    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: require.resolve('file-loader'),
        query: {
            name: 'static/media/[name].[hash:8].[ext]',
        },
    });
    return config;
};
