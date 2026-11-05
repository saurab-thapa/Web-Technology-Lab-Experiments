angular.module("registrationApp", [])
.controller("RegistrationController", function ($scope) {
  $scope.user = {};
  $scope.submitted = false;

  $scope.submitForm = function () {
    $scope.submitted = true;
  };
});
