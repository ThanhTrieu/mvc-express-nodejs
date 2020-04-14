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
	

	//app.group("/admin", (app) => {
		// golbal username
		app.get('admin/*', function(req, res, next) {
			if(req.session.user){
				console.log(req.session.user)
				res.locals.usernameGolbal = req.session.user;
			}
			next();
		});
		// =====================================
		// HOME PAGE (with login links) ========
		// =====================================
		app.get('/admin/', welcome.index);

		// =====================================
		// LOGIN ===============================
		// =====================================
		// show the login form
		app.get('/admin/login', login.login);

		// =====================================
		// DASHBOARD SECTION =========================
		// =====================================
		// we will want this protected so you have to be logged in to visit
		// we will use route middleware to verify this (the isLoggedIn function)
		app.get('/admin/dashboard', isLoggedIn, dashboard.index);
		

		// =====================================
		// CATEGORIES PAGE ========
		// =====================================
		app.get('/admin/categories', isLoggedIn, cate.index);
		app.post('/admin/category-add', isLoggedIn, cate.addCate);
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
		app.get('/admin/api/get-all-tags', isLoggedIn, tags.getAllTags);


		//======================================
		// SEND EMAIL
		//=====================================
		app.get('/admin/send-email', isLoggedIn, email.index);
		//app.post('/send-mail-post', isLoggedIn, email.sendEmail);


		//======================================
		// CHAT SOCKET IO
		//=====================================
		app.get('/admin/chat', isLoggedIn, chat.index);


		//======================================
		// SERVICE FOR APP TODO
		//=====================================
		app.post('/admin/service/v1/add-todo',service.addTodo);
		app.get('/admin/service/v1/get-type-work', service.getDataTypeWork);
		app.get('/admin/service/v1/list-todo', service.listDataWorkTodo);

		// =====================================
		// T ==============================
		// =====================================
		app.get('/admin/logout', function(req, res) {
			req.logout();
			req.session.destroy(); // delete session in database
			res.redirect('/admin/login');
		});
	//});

	//app.get('/send-email', isLoggedIn, email.index);
	app.post('/admin/send-mail-post', isLoggedIn, email.sendEmail);

	// process the login form
	app.post('/admin/login', passport.authenticate('local-login', {
		successRedirect : '/admin/dashboard', // redirect to the secure profile section
		failureRedirect : '/admin/login', // redirect back to the signup page if there is an error
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
	app.get('/admin/signup', login.register);

	// process the signup form
	app.post('/admin/signup', passport.authenticate('local-signup', {
		successRedirect : '/admin/dashboard', // redirect to the secure profile section
		failureRedirect : '/admin/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// route middleware to make sure
	function isLoggedIn(req, res, next) {
		// if user is authenticated in the session, carry on
		if (req.isAuthenticated()) {
			return next();
		}
		// if they aren't redirect them to the home page
		res.redirect('/admin/login');
	}
}
