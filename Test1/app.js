const express = require('express');
const db = require('./pkg/db/index.js');
const academies = require('./services/handlers/academyHandler.js');

const app = express();

app.use(express.json());

db.init();

app.get('/academies', academies.getAll);
app.post('/academies', academies.create);
app.patch('/academies/:id', academies.update);
app.delete('/academies/:id', academies.delete);

app.listen(process.env.PORT, (err) => {
    if (err) {
      return console.log('Could not start service');
    }
    console.log(`Service started successfully on port ${process.env.PORT}`);
});
  