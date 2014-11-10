
var app = angular.module('courier', ['courier-agencies','ngRoute']);

app.config(function($routeProvider){

//all routes
  $routeProvider.when('/', {
    templateUrl: 'pages/home.html',

  });
  $routeProvider.when('/login', {
    templateUrl: 'pages/session/login.html',
  });

  $routeProvider.when('/agencies', {
    templateUrl: 'pages/Agency/index.html',
  });


  $routeProvider.otherwise('/');

});


app.run(function($rootScope) {
  $rootScope.hello = function() {
    console.log('hello');
  }
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

    },
    controllerAs: 'panel'
  };

});

//esta directiva se encarga de desplegar el div principal donde se depliegan todos los demas div
app.directive('panelViews', function(){
  return { 
    restrict:'E',
    templateUrl:'pages/panel-views.html',
  };

});




