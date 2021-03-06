name = "MyAppdr";
requires = [];
appdr = angular.module(name, requires);

appdr.controller("dirCtrl", function ($scope) {
    console.log("This is controller dirCtrl");
    $scope.employee = {
        name: "subo",
        job: "cat",
        followers: ["chin", "adyakshaka", "aluu"]
    }

    $scope.employee2 = {
        name: "suvi",
        job: "dog",
        followers: ["aa", "bb", "ccc"]
    }
    $scope.sendNominations = function (name) {
        console.log(name + " Has nominated the employee! ");
    }

    console.log("parent ", $scope);
});

appdr.directive("employeeCard", function () {
    //$scope.employee={};

    return {
        templateUrl: 'employee_info.html',
        restrict: "AEC",
        //replace:true,
        scope: {
            employee: "=",
            sendNominations: "&"
        },
        controller: function ($scope) {
            $scope.follow = function (name) {
                $scope.employee.followers.push(name);
            }
            $scope.title = "myTitleqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";

            $scope.nominate = function (name) {
                $scope.sendNominations({'name': name});
            }

            /*
             $scope.employee={
             name:"subo",
             job:"cat",
             followers:["chin","adyakshaka","aluu"]
             }
             */
            console.log("child ", $scope);
        },

    }

});
//By assigning the scope value to true, the child scope itself can have seperdate values
//By adding employee:"=" parent scope variables can access by the directive
//
