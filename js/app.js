
var app = angular.module('courier', ['courier-agencies',
                                      'courier-sessions',
                                      'courier-calculadora',
                                      'courier-user',
                                      'courier-packages',
                                      'courier-rates',
                                      'ngRoute',
                                      'LocalStorageModule']);

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
  $routeProvider.when('/packages/:id', {
    templateUrl: 'pages/Package/show.html',
    controler: 'packageController'
  });
  $routeProvider.when('/packages/:id/edit', {
    templateUrl: 'pages/Package/edit.html',
    controler: 'packageController'
  });
  //Vistas de Users
  $routeProvider.when('/users', {
    templateUrl: 'pages/User/index.html',
    controler: 'userController'
  });
  $routeProvider.when('/users/new', {
    templateUrl: 'pages/User/create.html',
    controler: 'userController'
  });
  $routeProvider.when('/users/:id', {
    templateUrl: 'pages/User/show.html',
    controler: 'userController'
  });
  $routeProvider.when('/users/:id/edit', {
    templateUrl: 'pages/User/edit.html',
    controler: 'userController'
  });
  $routeProvider.when('/profile', {
    templateUrl: 'pages/User/clave.html',
    controler: 'userController'
  });
  //Vistas de Rates
  $routeProvider.when('/rates', {
    templateUrl: 'pages/Rate/index.html',
    controler: 'rateController'
  });
  $routeProvider.when('/rates/new', {
    templateUrl: 'pages/RAte/create.html',
    controler: 'rateController'
  });
  $routeProvider.when('/rates/:id', {
    templateUrl: 'pages/Rate/show.html',
    controler: 'rateController'
  });
  $routeProvider.when('/rates/:id/edit', {
    templateUrl: 'pages/Rate/edit.html',
    controler: 'rateController'
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

        this.setuser = function(){
          //console.log('si entro a setuserx');
          localStorage.setItem("id",localStorage.getItem("user_id"));
          //console.log( "coloque con exito el valor " + localStorage.getItem("id")  );
          //Aqui deberia colocar un mensaje o refactorizar
        }; //add users

    },
    controllerAs: 'panel'
  };

});


app.run(function($rootScope) {
  $rootScope.hello = function() {
    console.log('hello');
  }
});