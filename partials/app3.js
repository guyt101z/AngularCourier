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
// app.controller('AgencyController',function(){
// 	this.agencies = agen;
// });

app.directive('agencyIndexCtrl', function(){
	return { 
		restrict:'E',
		templateUrl:'pages/Agency/index.html',

	};
});


//esta 
app.controller('AgencyController',['$http', function($http){
	var courier = this;
	var	agencyx = [];
		courier.agencies = [];

		//Carga inicial de la vista de index
		$http.get("http://torreta-163528.sae1.nitrousbox.com/api/v1/agencies.json").success(function(data){
			// console.log( data );
			courier.agencies = data;
		});

		this.addAgency = function(agencyx){
			// courier.agencies.push(this.agency2);
			console.log( agencyx);
			this.agency = {};
		};

}]);


app.directive('AGENCtrl', function($scope){
	return { 
		restrict:'E',
		templateUrl:'pages/Agency/index.html',

	};
});
	


/////////////////////////////////////////////////////este es fin del este modulo
})();



