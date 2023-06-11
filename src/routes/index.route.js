import router from './home.route.js';

const setRoutes = (app) => {
    // app.get('/', (req, res) => {
    //     res.render('index', { title: 'ExpressJS' });
    // });
    app.use('/', router);
}

export default setRoutes;