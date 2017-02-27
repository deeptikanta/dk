/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/21/16
 * Time: 1:59 PM
 * To change this template use File | Settings | File Templates.
 */
var app=angular.module("myapp");
app.factory('User', function($resource) {
    return $resource('/api/users1/:id', { id: '@_id' },{update:{method:'PUT'}})});
angular.module('myapp').factory('Database',['$http', function($http){


    var dataFactory = {};
    dataFactory.getNames = function () {
        return $http.get('/api/users1');
    }
return dataFactory;
}]);
