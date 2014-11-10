(function(){

var app = angular.module('courier-rates',[])



app.controller("rateController",['$scope','$http','$location','localStorageService', function($scope,$http,$location,localStorageService){
	var courier = this;
	var	rate = {};


	var BASE_URL = "http://torreta-163528.sae1.nitrousbox.com/api/v1";

	courier.rates = [];

	//Consultos la paquetes que se encuentran en el API
	$scope.getrates = function(){
		$http({
			method: 'GET',
			url: BASE_URL + '/rates.json',
		})
		.success(function(data,status,headers,config){
			console.log( data );
			courier.rates = data;
		})
		.error(function(data,status,headers,config){
			// If user doesnt have a token, create one and signin
			//$scope.loginPOST();
		});

	}; //get rates

	$scope.addrate = function(rate){
		$http({
			method: 'POST',
			url: BASE_URL + '/rates.json',
			params:{
				'creator_id': $scope.rate.creator_id,
				'constant': $scope.rate.constant,
				'K_value': $scope.rate.K_value,
			}
		})
		.success(function(data,status,headers,config){
			console.log( "paquete creado" );
			console.log( data );
			courier.rates =  courier.rates + data;
			$scope.rate = [];
			$location.path('/rates'); 
			//deberiamos enviar el mensaje de CREADO!
		})
		.error(function(data,status,headers,config){
			console.log( "error creacion paquete" );
			// If user doesnt have a token, create one and signin
			//$scope.loginPOST();
		});

	}; //add rates

	$scope.setrate = function(id){

		localStorage.setItem("id",id);
		console.log( "coloque con exito el valor " + localStorage.getItem("id")  );

	}; //add rates


	$scope.showrate = function(){

		//console.log( "show en localst:" + localStorage.getItem("id") );

		if(localStorage.getItem("id") == undefined){

			console.log( "intente leer una paquete pero no habia valor" );
			//localStorage.removeItem("id");

		}else{
				console.log("buscopaquete de valor+ "+localStorage.getItem("id") );
			$http({
				method: 'GET',
				url: BASE_URL + '/rates/'+localStorage.getItem("id")+".json",
			})
			.success(function(data,status,headers,config){
				console.log( "paquete consultada con exito" );
				console.log( data );
				$scope.rate = data;

				if(localStorageService.isSupported){
						//console.log("Soporta Storage Service");
						localStorage.setItem("id",$scope.rate.id);

						// si te provoca borrar: localStorage.removeItem("id");
						// localStorage.removeItem("id");
					}else{
						alert("Your browser does not support localStorage");
					}
				//deberiamos enviar el mensaje de CREADO!
			})
			.error(function(data,status,headers,config){
				console.log( "error consulta paquete" );
				// If user doesnt have a token, create one and signin
				//$scope.loginPOST();
			});
		};

	}; //show rates


	$scope.updaterate = function(rate){

		//console.log( "show en localst:" + localStorage.getItem("id") );

		if(localStorage.getItem("id") == undefined){

			console.log( "intente leer una paquete pero no habia valor" );
			//localStorage.removeItem("id");

		}else{
				console.log("busco actualizar paquete de valor "+localStorage.getItem("id") );
			$http({
				method: 'PUT',
				url: BASE_URL + '/rates/'+localStorage.getItem("id")+".json",
				params:{
					'creator_id': $scope.rate.creator_id,
					'constant': $scope.rate.constant,
					'K_value': $scope.rate.K_value,
				}
			})
			.success(function(data,status,headers,config){
				console.log( "paquete Actualizada con exito" );
				console.log( data );
				$scope.rate = data;

				if(localStorageService.isSupported){
						//console.log("Soporta Storage Service");
						localStorage.setItem("id",$scope.rate.id);

						//si te provoca borrar: localStorage.removeItem("id");
						 localStorage.removeItem("id");

						  $location.path('/rates');  
					}else{
						alert("Your browser does not support localStorage");
					}
				//deberiamos enviar el mensaje de CREADO!
			})
			.error(function(data,status,headers,config){
				console.log( "error Actualizando paquete" );
				// If user doesnt have a token, create one and signin
				//$scope.loginPOST();
			});
		};

	}; //update rates

	$scope.deleterate = function(id){

		//console.log( "show en localst:" + localStorage.getItem("id") );

			console.log("busco borrar paquete de valor "+id );

		if( confirm("De verdad quieres borrar una paquete?!") ){
			$http({
				method: 'DELETE',
				url: BASE_URL + '/rates/'+id,
			})
			.success(function(data,status,headers,config){
				console.log( "paquete Borrada con exito" );
				console.log( data );
				$scope.rate = data;

				if(localStorageService.isSupported){
						//console.log("Soporta Storage Service");
						localStorage.setItem("id",$scope.rate.id);

						//si te provoca borrar: localStorage.removeItem("id");
						 localStorage.removeItem("id");

						  $scope.getrates();  
					}else{
						alert("Your browser does not support localStorage");
					}
				//deberiamos enviar el mensaje de CREADO!
			})
			.error(function(data,status,headers,config){
				console.log( "error borrando paquete" );
				// If user doesnt have a token, create one and signin
				//$scope.loginPOST();
			});
		};

	}; //delete rates

	



	}]);//controller





})();
