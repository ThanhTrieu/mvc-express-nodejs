exports.index = (req, res) => {  
    const header = {
        title: 'Dashboard'
    }  
    res.render('home/index', header);
}