const createError = require('http-errors');
const express = require('express');
require('express-group-routes');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const session  = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const engine = require('ejs-blocks');
const expressValidator = require('express-validator');
const paginate = require('express-paginate');
const Router = require('named-routes');

// Import the library:
const cors = require('cors');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(function(req, res, next){
  res.io = io;
  next();
});

// cors other domain 
app.use(cors());

const router = new Router();
router.extendExpress(app);
router.registerAppHelpers(app);

const passport = require('passport');
const flash    = require('connect-flash');
// keep this before all routes that will use pagination
app.use(paginate.middleware(30,50));

const options = {
	// Host name for database connection:
	host: 'localhost',
	// Port number for database connection:
	port: 3306,
	// Database user:
	user: 'root',
	// Password for the above database user:
	password: '',
	// Database name:
	database: 'express',
	// Whether or not to automatically check for and clear expired sessions:
	clearExpired: true,
	// How frequently expired sessions will be cleared; milliseconds:
	checkExpirationInterval: 900000,
	// The maximum age of a valid session; milliseconds:
	expiration: 86400000,
	// Whether or not to create the sessions database table, if one does not already exist:
	createDatabaseTable: true,
	// Number of connections when creating a connection pool:
	connectionLimit: 1,
	// Whether or not to end the database connection when the store is closed.
	// The default value of this option depends on whether or not a connection was passed to the constructor.
	// If a connection object is passed to the constructor, the default value for this option is false.
	endConnectionOnClose: true,
	charset: 'utf8mb4_bin',
	schema: {
		tableName: 'sessions',
		columnNames: {
			session_id: 'session_id',
			expires: 'expires',
			data: 'data'
		}
	}
};

const sessionStore = new MySQLStore(options);

// connect to our database
require('./config/passport')(passport, app); // pass passport for configuration

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
// use ejs-blocks for all ejs templates:
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'storage')));

// required for passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
  	saveUninitialized: true,
  	store: sessionStore,
  	cookie : { httpOnly: true, maxAge: 8*60*60*1000  }
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// routes ======================================================================
require('./routes/web')(app, passport);
require('./routes/fr')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = {app: app, server: server};;
