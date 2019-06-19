exports.login = (req, res) => {
    res.render('login/login', { message: req.flash('loginMessage') });
}

exports.register = (req, res) => {
    res.render('login/signup',{ message: req.flash('signupMessage') });
}