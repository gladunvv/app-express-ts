import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import mongoose from 'mongoose';
import config from 'config';
import bluebird from 'bluebird';
import router from './routes';

const app = express();

mongoose.Promise = bluebird;
mongoose.connect(config.get('mongoUri'), {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

export default app;
