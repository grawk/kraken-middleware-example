'use strict';


module.exports = function (router) {



    router.get('/', function(req, res, next) {
        req.model = {name: '/'};
        next();
    });
    router.get('/login', function(req, res, next) {
        req.model = {name: '/login'};
        next();
    });
    router.get('/foo/login', function(req, res, next) {
        req.model = {name: '/login'};
        next();
    });
    router.get('/foo/bar', function(req, res, next) {
        req.model = {name: '/login'};
        next();
    });
    router.get('/logout', function(req, res, next) {
        req.model = {name: '/logout'};
        next();
    });
    router.get('/login/failure', function(req, res, next) {
        req.model = {};
        req.model = {name: '/login/failure'};
        next();
    });
    router.get('/create', function(req, res, next) {
        req.model = req.model || {};
        req.model.name = (req.model.name) ? req.model.name + ' /create' : ' /create';
        next();
    });
    router.get('/addCard/foo', function(req, res, next) {
        req.model = req.model || {};
        req.model.name = (req.model.name) ? req.model.name + ' /addCard/foo' : ' /addCard/foo';

        next();
    });
    router.get('/autho', function(req, res, next) {
        req.model = {name: '/autho'};
        next();
    });
};


