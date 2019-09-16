const home = require('../frontend/controllers/home');

module.exports = function(app) {
    app.get("/home", home.index);
};