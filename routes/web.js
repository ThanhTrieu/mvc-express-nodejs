//const cors = require('cors');
//your controllers
const login = require('../app/controllers/login');
const welcome = require('../app/controllers/welcome');
const dashboard = require('../app/controllers/dashboard');
const cate = require('../app/controllers/cate');
const posts = require('../app/controllers/post');
const tags = require('../app/controllers/tags');
const email = require('../app/controllers/sendmail');
const chat = require('../app/controllers/chat');
const service = require('../app/controllers/services/todo');

/*
const whitelist = ['http://localhost:5000']
const corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	}
}*/
//const origin = cors();

// app/routes.js
module.exports = function(app, passport) {
	app.group("/admin", (app) => {

		// golbal username
		app.get('/*', function(req, res, next) {
			if(req.session.user){
				res.locals.usernameGolbal = req.session.user;
			}
			next();
		});

		// =====================================
		// HOME PAGE (with login links) ========
		// =====================================
		app.get('/', welcome.index);

		// =====================================
		// LOGIN ===============================
		// =====================================
		// show the login form
		app.get('/login', login.login);

		// process the login form
		app.post('/login', passport.authenticate('local-login', {
							successRedirect : 'admin/dashboard', // redirect to the secure profile section
							failureRedirect : 'admin/login', // redirect back to the signup page if there is an error
							failureFlash : true // allow flash messages
			}),
			function(req, res) {
					if (req.body.remember) {
						req.session.cookie.maxAge = 1000 * 60 * 3;
					} else {
						req.session.cookie.expires = false;
					}
			res.redirect('/');
		});

		// =====================================
		// SIGNUP ==============================
		// =====================================
		// show the signup form
		app.get('/signup', login.register);

		// process the signup form
		app.post('/signup', passport.authenticate('local-signup', {
			successRedirect : 'admin/dashboard', // redirect to the secure profile section
			failureRedirect : 'admin/signup', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}));

		// =====================================
		// DASHBOARD SECTION =========================
		// =====================================
		// we will want this protected so you have to be logged in to visit
		// we will use route middleware to verify this (the isLoggedIn function)
		app.get('/dashboard', isLoggedIn, dashboard.index);
		

		// =====================================
		// CATEGORIES PAGE ========
		// =====================================
		app.get('/categories', isLoggedIn, cate.index);
		app.post('/category-add', isLoggedIn, cate.addCate);
		// app.get('/category-edit/:slug/:id', isLoggedIn, cate.editCate);


		// =====================================
		// POST PAGE ========
		// =====================================
		app.get('/create-post/:state?', isLoggedIn, posts.index);
		app.post('/add-post', isLoggedIn, posts.createPost);
		app.post('/upload-avatar', isLoggedIn, posts.upLoadAvatar);
		// app.get('/edit-post/:slug/:idPost', isLoggedIn, posts.createPost);


		// =====================================
		// TAG PAGE ========
		// =====================================
		app.get('/api/get-all-tags', isLoggedIn, tags.getAllTags);


		//======================================
		// SEND EMAIL
		//=====================================
		app.get('/send-email', isLoggedIn, email.index);
		app.post('/send-mail', isLoggedIn, email.sendEmail);


		//======================================
		// CHAT SOCKET IO
		//=====================================
		app.get('/chat-io', isLoggedIn, chat.index);


		//======================================
		// SERVICE FOR APP TODO
		//=====================================
		app.post('/service/v1/add-todo',service.addTodo);
		app.get('/service/v1/get-type-work', service.getDataTypeWork);
		app.get('/service/v1/list-todo', service.listDataWorkTodo);

		// =====================================
		// T ==============================
		// =====================================
		app.get('/logout', function(req, res) {
			req.logout();
			req.session.destroy(); // delete session in database
			res.redirect('/admin/login');
		});


		// route middleware to make sure
		function isLoggedIn(req, res, next) {

			// if user is authenticated in the session, carry on
			if (req.isAuthenticated()) {
				return next();
			}

			// if they aren't redirect them to the home page
			res.redirect('/admin/login');
		}

	});
}
