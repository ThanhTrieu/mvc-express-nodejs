
exports.createPostv2 = (req, res) => {
    if(req.method == "POST"){
        console.log(req.body);
    }
    res.send('Fuck');
}