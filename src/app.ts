import express from 'express';
import http from 'http';
import cors from 'cors';
import { errors } from 'celebrate';
import midleware from './middleware';
import routes from './modules/routes';
import './database';

const app = express();
const server = new http.Server(app);

app.use(express.json());
app.use(cors());
app.use(midleware);
app.use(routes);
app.use(errors());

export default server;
