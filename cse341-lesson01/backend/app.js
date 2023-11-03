// const express = require('express');
// const bodyParser : BodyParser = require('body-parser');

// const professionalRoutes : Router = require('./routes/professional');
 
// const app : Express = express();

// app.use(bodyParser.json());
 
// app.use((req : Request<ParamsDictionary, a..., res : Response<any, Record<String..., next : NextFunction) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// });

// app.use('/professional', professionalRoutes);

// app.listen(8080);

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const professionalRoutes = require('./routes/professional');

const port = process.env.PORT || 8080;
const app = express();

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/professional', professionalRoutes);

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });   