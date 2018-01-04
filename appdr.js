name="MyAppdr";
requires=[];

appdr=angular.module(name,requires);



appdr.controller("dirCtrl",function($scope){
    console.log("This is controller dirCtrl");
    $scope.employee={
      name:"subodhi",
      job:"cat",
      followers:["chin","adyakshaka","aluu"]
    }
    console.log("parent ",$scope);
    /*
$scope.follow=function(name){
    $scope.employee.followers.push(name);
}
*/
});

appdr.directive("employeeCard",function(){
return{
  templateUrl:'employee_info.html',
  restrict:"AEC",
//  replace:true,
  controller:function($scope){
    $scope.follow=function(name){
        $scope.employee.followers.push(name);
  }

},
scope:true


}
console.log("dir  ",$scope);
});
