/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 11/23/16
 * Time: 2:09 PM
 * To change this template use File | Settings | File Templates.
 */
var app=angular.module('myapp');

app.controller( 'UploadController' , function ($scope, fileReader) {


    $scope.name="SP14_00077_A1023_kg45_58fkf_454p";
   // $scope.name1;
    $scope.values = $scope.name.split("_");
    //$scope.name1=$scope.values;
    $scope.name2=$scope.name.split("_");
        $scope.myvar=true;
    $scope.myvar1=false;
      $scope.sign="_";

    $(function() {

        $( ".sortable-1" ).sortable({axis:"x"});

    });


    $scope.cl=function(ss)
    {

      for(var i =0;i<$scope.name2.length;i++)
        {
            if(ss==$scope.name2[i])
            {
                 $scope.name2.splice(i,1);
                break;
            }
            else if(i==$scope.name2.length-1)
            {
                $scope.name2.push(ss);
                break;
            }

        }
    }



    $scope.ff=function()
    {

      // $scope.values=$scope.name.replace(/_/g,$scope.sign);
        $scope.myvar=false;
        $scope.myvar1=true;



    }


    $scope.chunkedData = chunk($scope.values, 3);
    function chunk(arr, size) {


        var newArr = [];
        for (var i=0; i<arr.length; i+=size) {

            newArr.push(arr.slice(i, i+size));
        }

        return newArr;

    }


    $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
                $scope.imageSrc = result;

            });
    };

});
















app.directive("ngFileSelect",function(){

    return {
        link: function($scope,el){

            el.bind("change", function(e){

                $scope.file = (e.srcElement || e.target).files[0];
                $scope.getFile();
            })

        }

    }


})