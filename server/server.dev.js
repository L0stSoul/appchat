
import {http, app} from './server.js';

import Webpack from 'webpack';
import WebpackConfig from '../webpack.dev.config.js';
import WebpackDevMiddleware from 'webpack-dev-middleware';

app.use(WebpackDevMiddleware(Webpack(WebpackConfig), { noinfo: true }));

http.listen(3000);
