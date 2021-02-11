require('dotenv').config();

const express = require('express');
const cors = require('cors'); // For Handling Cross-Origin Requests
const bodyParser = require('body-parser');

const routes = require('./routes');
const handle = require('./handlers');

const app = express();
const PORT = process.env.PORT || 8081;

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/memes', routes.meme);


app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(handle.error); // Error handling and validtion of form submissions

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
