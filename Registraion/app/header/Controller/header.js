/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:39 AM
 * To change this template use File | Settings | File Templates.
 */
var app=angular.module('myapp').directive("w3TestDirective", function() {
    return {
        restrict : "E",
        templateUrl :"header/view/header.html"

    }});

    app.controller('HomeCtrl', function($translate) {
        var ctrl = this;

        ctrl.language = 'en';

        ctrl.languages = ['en','sv','russian'];

        ctrl.updateLanguage = function() {
            $translate.use(ctrl.language);
        };
    });




