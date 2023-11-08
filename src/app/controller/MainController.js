class MainController {
    index(req, res){
        res.render('home');
    }
}

module.exports = new MainController();