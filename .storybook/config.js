import '!file-loader!style-loader!css-loader!sass-loader!./scss-loader.scss';
import { configure } from '@storybook/react';
configure(require.context('../components', true, /\.stories\.(j|t)sx?$/), module);
