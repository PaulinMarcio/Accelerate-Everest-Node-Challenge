import "reflect-metadata";
import "./shared/container/index";
import express from 'express';
import { router } from './presentation/Routes';

const app = express();

app.use(express.json());
app.use(router);

export default app;