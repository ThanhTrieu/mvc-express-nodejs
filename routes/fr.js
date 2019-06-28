const home = require('../frontend/controllers/home');

module.exports = function(app) {
    app.group("/admin", (router) => {
        router.get("/home", home.index);
    });
};