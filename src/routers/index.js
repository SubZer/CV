const mainRouter = require('./main');
const adminRouter = require('./admin');

function route(app){
    app.use('/admin', adminRouter);
    app.use('/', mainRouter);
}

module.exports = route;