angular.module("todoApp", [])
.controller("TodoController", function ($scope) {
  $scope.tasks = [];

  $scope.addTask = function () {
    if ($scope.title && $scope.title.trim() !== "") {
      $scope.tasks.push($scope.title.trim());
      $scope.title = "";
    }
  };

  $scope.removeTask = function (index) {
    $scope.tasks.splice(index, 1);
  };
});
