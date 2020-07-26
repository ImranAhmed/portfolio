import '!file-loader!image-webpack-loader!style-loader!css-loader!sass-loader!./scss-loader.scss';
import { configure } from '@storybook/react';

configure(require.context('../components', true, /\.stories\.(j|t)sx?$/), module);
