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
			//deberiamos enviar el mensaje de CREADO!
		})
		.error(function(data,status,headers,config){
			console.log( "error creacion agencia" );
			// If user doesnt have a token, create one and signin
			//$scope.loginPOST();
		});

	}; //add Agencies

		$scope.getAgency = function(agency){
			console.log( agency );
		$http({
			method: 'GET',
			url: BASE_URL + '/agencies/'+agency.id+".json",
		})
		.success(function(data,status,headers,config){
			console.log( "agencia consultada con exito" );
			console.log( data );
			$scope.agency = data;

			if(localStorageService.isSupported){
					console.log("Soporta Storage Service");
					console.log(  $scope.agency.id +" esta en data storage" );

					localStorageService.set("id", $scope.agency.id);

					$location.path("/");

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

	}; //add Agencies




	}]);//controller





})(); //class



