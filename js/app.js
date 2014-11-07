(function(){
var app = angular.module('courier', []);


/**
 	por los momentos, esta pagina deberia simplemente deberia conectar todos los modulos
*/

app.controller('courierController', function(){	
	this.agencies = [];
});



/* Por hacer:
	- Controladores aparte para cada modulo.
	- Session, Rates, Packages, Users, Agencies, Messages?, Token?, Tabulacion?
	- Formularios para cada uno. (Edit, Create, Update)
	- Archivos diferentes para los pedazos de la pagina.	
*/

//tarea actual?, tabulacion  (aqui en adelante es area de desarrollo, antes de poner codigo en segmentos separados)


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



})();



