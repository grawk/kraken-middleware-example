var IndexModel = require('../models/index');

module.exports.bs = function() {
    function squirrel(req, res, next) {
        req.squirrel = 'bushy';
        next();
    };
    return squirrel;
}
module.exports.as = function() {
    console.log('register conmid');

    function postsquirrel(req, res, next) {
        console.log('req.squirrel', req.squirrel);
        req.model = req.model || {name: 'squirrel ' + req.model.name}
        console.log('postsquirrel model', req.model);
        next();
    };
    return postsquirrel;
};
module.exports.res = function() {
    function response(req, res) {
        res.render('index', req.model);
    };
    return response;
}
module.exports.auth = function() {
    function autho(req, res, next) {
        req.model = {name: req.model.name + ' ::autho'}
        next();
    };
    return autho;
}
module.exports.risk = function() {
    function risk(req, res, next) {

        req.model = req.model || {};
        req.model.name = (req.model.name) ? req.model.name + ' ::risky' : ' ::risky';
        //req.model.name: ' ::risky'};
        console.log('execute risk middleware');
        next();
    }
    return risk;
}
