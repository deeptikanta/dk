/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:42 AM
 * To change this template use File | Settings | File Templates.
 */
var a =angular.module('myapp');
a.controller('myCtrl', function($scope,$location,$http,Database) {

    $scope.submit=function(x,y)
    {
        $scope.customStyle1 = {};
        if(x==undefined||y==undefined)
            $location.path('/');



            else{

            var password=y;
            var obj;

            Database.getNames().then(function(response) {

                  obj=response.data;

                    for(z in obj)
                    {
                        console.log(obj[z].email +"----"+obj[z].password1);

                        if(obj[z].email==x && obj[z].password1==password)
                        {

                            $location.path('/dashboard');
                            break;
                        }
                        else{
                           $scope.myVar=true;
                            $scope.customStyle1.style1 = {"color":"red"};
                        }

                    }
                });

                }
    }
    $scope.reg=function()
    {
        $location.path('/register');

    }
    });
