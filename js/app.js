(function(){
var app = angular.module('courier', []);


// esta directiva controla el comportamiento de los tabs del panel principal
// de ser necesario podria colocarla aparte en su propio ".js"
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




app.controller('courierController', function(){	
	//this.agencies = [];
});

/**
 	por los momentos, esta pagina deberia simplemente deberia conectar todos los modulos
*/

/* Por hacer:
	- Controladores aparte para cada modulo.
	- Session, Rates, Packages, Users, Agencies, Messages?, Token?, Tabulacion?
	- Formularios para cada uno. (Edit, Create, Update)
	- Archivos diferentes para los pedazos de la pagina.	
*/

//hacer el control de la agencia, de alli saldra lo de los demas.



//aqui deberia colocar los controladores de la agencia, dentro, obvio
app.controller('AgencyController',function(){
	this.agencies = agen;
});

var agen = [
		{"id":1,"name":"LuisUPS","phone":"02121111111","address":"poste1","created_at":"2014-11-08T02:36:50.884Z","updated_at":"2014-11-08T02:36:50.884Z"},
		{"id":2,"name":"CarlosMRW","phone":"02122222222","address":"poste2","created_at":"2014-11-08T02:36:50.910Z","updated_at":"2014-11-08T02:36:50.910Z"},
		{"id":3,"name":"LorenaUPS","phone":"02123333333","address":"poste3","created_at":"2014-11-08T02:36:50.925Z","updated_at":"2014-11-08T02:36:50.925Z"},
		{"id":4,"name":"MiguelFEDEX","phone":"02124444444","address":"poste4","created_at":"2014-11-08T02:36:50.940Z","updated_at":"2014-11-08T02:36:50.940Z"}
	]









app.directive('agencyCtrl', function(){
	return { 
		restrict:'E',
		templateUrl:'pages/Agency/index.html',

	};

});


})();



