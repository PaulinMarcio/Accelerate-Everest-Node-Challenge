import "reflect-metadata";
import "./shared/container/index";
import express from 'express';
import router from './presentation/Routes';
import { serve, setup} from 'swagger-ui-express'
import {readFileSync} from 'fs'
import {parse} from 'yamljs'

const app = express();

const file  = readFileSync('./docs/index.yaml', 'utf8')
const swaggerDocument = parse(file)
app.use(express.json());
app.use(router);
app.use('/docs', serve, setup(swaggerDocument));

export {app}