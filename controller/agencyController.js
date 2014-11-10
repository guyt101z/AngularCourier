(function(){

var app = angular.module('courier-agencies',[])



app.controller("AgencyController",['$scope','$http','$location','localStorageService', function($scope,$http,$location,localStorageService){
	var courier = this;
	var	agency = {};


	var BASE_URL = "http://torreta-163528.sae1.nitrousbox.com/api/v1";

	courier.agencies = [];

	//Consultos la agencias que se encuentran en el API
	$scope.getAgencies = function(){
		$http({
			method: 'GET',
			url: BASE_URL + '/agencies.json',
		})
		.success(function(data,status,headers,config){
			console.log( data );
			courier.agencies = data;
		})
		.error(function(data,status,headers,config){
			// If user doesnt have a token, create one and signin
			//$scope.loginPOST();
		});

	}; //get Agencies

	$scope.addAgency = function(agency){
		$http({
			method: 'POST',
			url: BASE_URL + '/agencies.json',
			params:{
				'name': $scope.agency.name,
				'phone': $scope.agency.phone,
				'address': $scope.agency.address
			}
		})
		.success(function(data,status,headers,config){
			console.log( "agencia creada" );
			console.log( data );
			courier.agencies =  courier.agencies + data;
			$scope.agency = [];
			$location.path('/agencies'); 
			//deberiamos enviar el mensaje de CREADO!
		})
		.error(function(data,status,headers,config){
			console.log( "error creacion agencia" );
			// If user doesnt have a token, create one and signin
			//$scope.loginPOST();
		});

	}; //add Agencies

	$scope.setAgency = function(id){

		localStorage.setItem("id",id);
		console.log( "coloque con exito el valor " + localStorage.getItem("id")  );

	}; //add Agencies


	$scope.showAgency = function(){

		//console.log( "show en localst:" + localStorage.getItem("id") );

		if(localStorage.getItem("id") == undefined){

			//console.log( "intente leer una agencia pero no habia valor" );
			//localStorage.removeItem("id");

		}else{
				console.log("buscoAgencia de valor+ "+localStorage.getItem("id") );
			$http({
				method: 'GET',
				url: BASE_URL + '/agencies/'+localStorage.getItem("id")+".json",
			})
			.success(function(data,status,headers,config){
				console.log( "agencia consultada con exito" );
				console.log( data );
				$scope.agency = data;

				if(localStorageService.isSupported){
						//console.log("Soporta Storage Service");
						localStorage.setItem("id",$scope.agency.id);

						// si te provoca borrar: localStorage.removeItem("id");
						// localStorage.removeItem("id");
					}else{
						alert("Your browser does not support localStorage");
					}
				//deberiamos enviar el mensaje de CREADO!
			})
			.error(function(data,status,headers,config){
				console.log( "error consulta agencia" );
				// If user doesnt have a token, create one and signin
				//$scope.loginPOST();
			});
		};

	}; //show Agencies


	$scope.updateAgency = function(agency){

		//console.log( "show en localst:" + localStorage.getItem("id") );

		if(localStorage.getItem("id") == undefined){

			console.log( "intente leer una agencia pero no habia valor" );
			//localStorage.removeItem("id");

		}else{
				console.log("busco actualizar Agencia de valor "+localStorage.getItem("id") );
			$http({
				method: 'PUT',
				url: BASE_URL + '/agencies/'+localStorage.getItem("id")+".json",
				params:{
				'name': $scope.agency.name,
				'phone': $scope.agency.phone,
				'address': $scope.agency.address
				}
			})
			.success(function(data,status,headers,config){
				console.log( "agencia Actualizada con exito" );
				console.log( data );
				$scope.agency = data;

				if(localStorageService.isSupported){
						//console.log("Soporta Storage Service");
						localStorage.setItem("id",$scope.agency.id);

						//si te provoca borrar: localStorage.removeItem("id");
						 localStorage.removeItem("id");

						  $location.path('/agencies');  
					}else{
						alert("Your browser does not support localStorage");
					}
				//deberiamos enviar el mensaje de CREADO!
			})
			.error(function(data,status,headers,config){
				console.log( "error Actualizando agencia" );
				// If user doesnt have a token, create one and signin
				//$scope.loginPOST();
			});
		};

	}; //update Agencies

	$scope.deleteAgency = function(id){

		//console.log( "show en localst:" + localStorage.getItem("id") );

			console.log("busco borrar Agencia de valor "+id );

		if( confirm("De verdad quieres borrar una agencia?!") ){
			$http({
				method: 'DELETE',
				url: BASE_URL + '/agencies/'+id,
			})
			.success(function(data,status,headers,config){
				console.log( "agencia Borrada con exito" );
				console.log( data );
				$scope.agency = data;

				if(localStorageService.isSupported){
						//console.log("Soporta Storage Service");
						localStorage.setItem("id",$scope.agency.id);

						//si te provoca borrar: localStorage.removeItem("id");
						 localStorage.removeItem("id");

						  $location.path('/agencies');  
					}else{
						alert("Your browser does not support localStorage");
					}
				//deberiamos enviar el mensaje de CREADO!
			})
			.error(function(data,status,headers,config){
				console.log( "error borrando agencia" );
				// If user doesnt have a token, create one and signin
				//$scope.loginPOST();
			});
		};

	}; //delete Agencies

	



	}]);//controller





})();


