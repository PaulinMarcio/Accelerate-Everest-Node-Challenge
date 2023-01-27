import express from 'express';
import { router } from './presentation/Routes';

const app = express();

const port = 8080;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});