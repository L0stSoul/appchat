import Express from 'express';
import {http, app} from './server.js';

app.use(Express.static('bundle'));

http.listen(3005);
