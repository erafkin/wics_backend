import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './router';
// initialize
const app = express();

// enable/disable cross origin resource sharing if necessary
app.use(cors());

// enable/disable http request logging
app.use(morgan('dev'));

dotenv.config(); // load environment variables

// database setup
const { mongoURI } = process.env;
mongoose.connect(mongoURI, { useNewUrlParser: true });

mongoose.connection.on('open', (ref) => {
  console.log('Connected to mongo');
});

mongoose.connection.on('error', (err) => {
  console.log('Could not connect to mongo! ');
  return console.log(err);
});

// set mongoose promises to es6 default
mongoose.Promise = global.Promise;

// enable only if you want templating
app.set('view engine', 'ejs');

// enable only if you want static assets from folder static
app.use(express.static('static'));

// this just allows us to render ejs from the ../app/views directory
// app.set('views', path.join(__dirname, '../src/views'));

// enable json message body for posting data to API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// additional init stuff should go before hitting the routing
app.use('/friends', router);

// default index route
app.get('/', (req, res) => {
  res.send('hi, this is the api!');
});

// START THE SERVER
// =============================================================================
const port = process.env.PORT || 9090;
app.listen(port);

console.log(`listening on: ${port}`);
