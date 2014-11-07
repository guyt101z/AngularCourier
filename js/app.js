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
	this.agencies = [];
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

//tarea actual?, tabulacion  (aqui en adelante es area de desarrollo, antes de poner codigo en segmentos separados)





})();



