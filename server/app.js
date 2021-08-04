const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const moongoose = require('mongoose');
const cors = require('cors');
const app = express();
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(
  cors({
    origin: process.env.APP_URL || null,
  })
);

moongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
moongoose.connection.once('open', () => {
  console.log('Connect to database successfully!');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: (process.env.NODE_ENV = 'production' ? false : true),
  })
);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on port ${process.env.PORT || 5000}`);
});
