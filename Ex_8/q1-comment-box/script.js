angular.module("commentApp", [])
.controller("CommentController", function ($scope) {
  $scope.comments = [];

  $scope.addComment = function () {
    if ($scope.newComment && $scope.newComment.trim() !== "") {
      $scope.comments.push($scope.newComment.trim());
      $scope.newComment = "";
    }
  };

  $scope.removeComment = function (index) {
    $scope.comments.splice(index, 1);
  };
});
