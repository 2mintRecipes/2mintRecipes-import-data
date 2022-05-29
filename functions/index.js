import express from 'express';
import router from './routes/index.js';
import swaggerDocs from './swagger.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  swaggerDocs(app, port);
});

// app.get('/', (req, res) => res.status(200).send('Hey there!'));
// app.post('/entries', addEntry);
// app.get('/entries', getAllEntries);
// app.delete('/entries/:entryId', deleteEntry);
// app.patch('/entries/:entryId', updateEntry);

// exports.app = functions.https.onRequest(app);
