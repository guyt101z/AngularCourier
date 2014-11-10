
var app = angular.module('courier', ['courier-agencies','courier-sessions','courier-calculadora','courier-packages','ngRoute','LocalStorageModule']);

app.config(function($routeProvider){

//all routes
  $routeProvider.when('/', {
    templateUrl: 'pages/home.html',

  });
  //Vistas simples
  $routeProvider.when('/about', {
    templateUrl: 'pages/about.html',
  });
  
  $routeProvider.when('/pricing', {
    templateUrl: 'pages/pricing.html',
    controler: 'calculatorController'
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
  //Vistas de Packages
  $routeProvider.when('/packages', {
    templateUrl: 'pages/Package/index.html',
    controler: 'packageController'
  });
  $routeProvider.when('/packages/new', {
    templateUrl: 'pages/Package/create.html',
    controler: 'packageController'
  });




  //default
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
    controller: function(localStorageService){

        this.tab = 1;

        this.selectTab = function(setTab){
          this.tab = setTab;
        };
        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };

        this.logged = function(){
          if(localStorage.getItem("is_loged") == undefined){
            return false;
          }else{
            return true;
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