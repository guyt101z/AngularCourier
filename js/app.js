
var app = angular.module('courier', ['courier-agencies','courier-sessions','ngRoute','LocalStorageModule']);

app.config(function($routeProvider){

//all routes
  $routeProvider.when('/', {
    templateUrl: 'pages/home.html',

  });
  //Vistas de Session
  $routeProvider.when('/login', {
    templateUrl: 'pages/session/login.html',
  });
  $routeProvider.when('/signup', {
    templateUrl: 'pages/session/signup.html',
  });
  $routeProvider.when('/logout', {
    templateUrl: 'pages/session/logout.html',
    controler: 'sessionController'
  });
  //Vistas de Agencias
  $routeProvider.when('/agencies', {
    templateUrl: 'pages/Agency/index.html',
    controler: 'agencyController'
  });
  $routeProvider.when('/agencies/new', {
    templateUrl: 'pages/Agency/create.html',
    controler: 'agencyController'
  });
  $routeProvider.when('/agencies/:id', {
    templateUrl: 'pages/Agency/show.html',
    controler: 'agencyController'
  });
    $routeProvider.when('/agencies/:id/edit', {
    templateUrl: 'pages/Agency/edit.html',
    controler: 'agencyController'
  });



  $routeProvider.otherwise('/');

});

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('myapp')
    .setStorageType('sessionStorage')
    .setNotify(true, true)
});

app.directive('panelTabs', function(){
  return { 
    restrict:'E',
    templateUrl:'pages/panel-tabs.html',
    controller: function(){

        this.tab = 1;

        this.selectTab = function(setTab){
          this.tab = setTab;
        };
        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };

        this.logged = function(){
          if(localStorage.getItem("is_logged") == undefined){
            return false;
          }else{
            return false;
          };
        };


    },
    controllerAs: 'panel'
  };

});


app.run(function($rootScope) {
  $rootScope.hello = function() {
    console.log('hello');
  }
});