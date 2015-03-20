var IndexModel = require('../models/index');

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
