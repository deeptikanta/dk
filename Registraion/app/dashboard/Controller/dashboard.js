/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/17/16
 * Time: 10:41 AM
 * To change this template use File | Settings | File Templates.
 */
var app=angular.module('myapp');
app.controller('mycntrl1', function($scope, $http,User,$modal) {

$scope.user=new User();
  var refresh=function()
    {
        $scope.users = User.query();
        $scope.user="";
    }
    refresh();
    $scope.remove = function(user) {
        user.$delete(function(){
            refresh();
        });
    };
    $scope.edit = function(id)
    {
        $modal.open({
            templateUrl: 'dashboard/view/model.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope,$modalInstance)
            {
                $scope.user = User.get({ id:id});


                $scope.update = function(user) {

                    user.$update(function(){

                        refresh();
                        $modalInstance.dismiss('cancel');
                    });
                };

            }



        });
    }


    $http.get("http://localhost:3000/Main").then(function(response) {
        $scope.option = response.data;
    $scope.click=function(num)
    {
        console.log(num);
        $scope.value1=false;
        $scope.value2=false;
        $scope.value3=false;
        $scope.value4=false;
        $scope.value5=false;
        $scope.value6=false;
        $scope.value7=false;
        $scope.value8=false;
        $scope.value9=false;
        $scope.valuea=false;
        $scope.valueb=false;
        $scope.valuec=false;
        switch(num)
        {
            case "1": $scope.value1=true;
                       $scope.valuea=true;
                break;
            case "2": $scope.value2=true;
                $scope.valuea=true;
                break;
            case "3": $scope.value3=true;
                $scope.valuea=true;
                break;
            case "4": $scope.value4=true;
                $scope.valueb=true;
                break;

            case "5": $scope.value5=true;
                $scope.valueb=true;
                break;
            case "6": $scope.value6=true;
                $scope.valueb=true;
                break;
            case "7": $scope.value7=true;
                $scope.valuec=true;
                break;
            case "8": $scope.value8=true;
                $scope.valuec=true;
                break;
            case "9": $scope.value9=true;
                $scope.valuec=true;
                break;
            case "a":
                $scope.valuea=true;
                break;
            case "b":
                $scope.valueb=true;
                break;
            case "c":
                $scope.valuec=true;
                break;

        }



    }  });
});
