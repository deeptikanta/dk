/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:43 AM
 * To change this template use File | Settings | File Templates.
 */
var app=angular.module('myapp');
app.controller('mycntrl2',function($scope,User,$location)
{    $scope.User = new User();
    var refresh = function() {

        $scope.User = User.query();
        $scope.User ="";
    }
    refresh();
    $scope.checkQuestions=function(q,y)
    {
        $scope.customStyle = {};
        if (q!=y) {

            $scope.customStyle.style = {"color":"red"};

            return true;
        }
        else {
            $scope.customStyle.style = {"color":"green"};
            return false;
        }
    }
    $scope.submit=function(user)
    {        console.log(user.fname);

        if(user.fname==undefined||user.lname==undefined||user.gender1==undefined|| user.email==undefined|| user.phno==undefined|| user.password1==undefined)
        {

         $location.path('/register')
        }
       else{
            console.log(user);
            User.save(user);
        $location.path('/')
        }
    }


});