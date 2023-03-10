import {dataBaseClienteInstance} from './infrastructure/mongodb/IndexMongoClient'
import {app} from './server';

const port = process.env.PORT;

app.listen(port, async () => {
  await dataBaseClienteInstance.connect()
    .then(console.log)
    .catch(() => dataBaseClienteInstance.close());
});
