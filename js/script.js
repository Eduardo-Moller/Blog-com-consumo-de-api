angular.module("blog", []);
angular.module("blog").controller("Rest", function ($scope, $http) {
  $http
    .get("https://api.thecatapi.com/v1/images/search?size=full")
    .success(function (data) {
      var url = data[0]["url"];
      $scope.url = url;
    });
});
