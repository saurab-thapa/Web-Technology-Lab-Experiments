angular.module("calculatorApp", [])
.controller("CalculatorController", function ($scope) {
  $scope.a = 0;
  $scope.b = 0;
  $scope.operator = "+";

  $scope.calculate = function () {
    var a = Number($scope.a) || 0;
    var b = Number($scope.b) || 0;

    if ($scope.operator === "+") return a + b;
    if ($scope.operator === "-") return a - b;
    if ($scope.operator === "*") return a * b;
    if ($scope.operator === "/") {
      return b === 0 ? "Cannot divide by zero" : a / b;
    }
  };

  $scope.clear = function () {
    $scope.a = 0;
    $scope.b = 0;
    $scope.operator = "+";
  };
});
