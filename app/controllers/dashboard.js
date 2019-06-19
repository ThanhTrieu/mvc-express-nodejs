exports.index = (req, res) => {  
    const header = {
        title: 'Dashboard',
        user: req.session.user
    }  
    res.render('home/index', header);
}