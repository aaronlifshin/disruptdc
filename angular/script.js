var app=angular.module('single-page-app',['ngRoute', 'picardy.fontawesome']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'sector.html'
          })
          .when('/sector/:sector_name',{
                templateUrl: 'sector.html'
          });


});


app.controller('cfgController',function($scope){

      $scope.message="Hello world";

});

app.controller('sectorController',['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

    $http.get('http://transparencydata.com/api/1.0/aggregates/pol/4148b26f6f1c437cb50ea9ca4699417a/contributors/industries.json?cycle=2012&limit=20&apikey=390dd7fa73c94cb483d53e671a6ee216').
      success(function(data, status, headers, config) {
        console.log(data);
        // this callback will be called asynchronously
        // when the response is available
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

}]);
