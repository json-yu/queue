const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const dbRouter = require('./routes/dbRouter.js');

const apiRouter = require('./routes/api');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Yelp API calls
app.use('', apiRouter);
app.use('/dbRouter', dbRouter);

app.use('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../src/index.html')))


app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
})
// test
module.exports = app;