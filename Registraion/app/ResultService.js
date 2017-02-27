/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:33 AM
 * To change this template use File | Settings | File Templates.
 */
var app =angular.module('myapp',['ngRoute','ngResource','ui.bootstrap','pascalprecht.translate']);

app.config(function($routeProvider,$translateProvider)
{
    $translateProvider.translations('en', {
        TITLE: 'Welcome'

    })
        .translations('sv', {
            TITLE: 'Välkommen'

        })
    .translations('russian', {
    TITLE: ' добро пожаловать'
});

    $translateProvider.preferredLanguage('en');





    $routeProvider
    .when('/',
     {
     templateUrl:"loginpage/view/login.html" ,
         controller:"myCtrl"

     })
    .when('/dashboard',
    {
        templateUrl:"dashboard/view/dashboard.html" ,
        controller:"mycntrl1"

    })
    .when('/register',
    {
        templateUrl:"Registraionpage/view/register.html" ,
        controller:"mycntrl2"

    })


});