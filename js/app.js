
var app = angular.module('courier', ['ngRoute']);

app.config(function($routeProvider){
//all routes
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',

  });
  $routeProvider.when('/login', {
    templateUrl: 'partials/login.html',

  });


  $routeProvider.otherwise('/');

});


app.run(function($rootScope) {
  $rootScope.hello = function() {
    console.log('hello');
  }
});