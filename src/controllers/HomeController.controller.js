
class HomeController {
    async index(req, res) {
        console.log('cho thu')
        res.render('index', { title: 'Express' });
    }
}

export default new HomeController();