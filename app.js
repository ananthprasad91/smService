const express = require('express')
const { connectDB } = require('./utils/mongodb')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const storyRoutes = require('./routes/index')
const { resourceNotFound, accessDenied } = require('./controllers/storyManagement.controller')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yaml');


var index = require('./routes/index')

var app = express()

//DB Config
const db = require('./config/keys').MongoURI

//Connect To Mongo
connectDB(db)

//Log
app.use(logger('dev'))

//CORS
app.use(cors())

//BodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({strict: false}))

app.use(cookieParser())

app.use('/api/sm/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/sm', storyRoutes)

app.use('/api/*', resourceNotFound)

app.use('*', accessDenied)

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send('error');
// });

app.listen(5000, () => console.log('app listening on port 5000'))
module.exports = app
