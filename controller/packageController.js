(function(){

var app = angular.module('courier-packages',[])



app.controller("packageController",['$scope','$http','$location','localStorageService', function($scope,$http,$location,localStorageService){
	var courier = this;
	var	package = {};


	var BASE_URL = "http://torreta-163528.sae1.nitrousbox.com/api/v1";

	courier.packages = [];

	//Consultos la paquetes que se encuentran en el API
	$scope.getpackages = function(){
		$http({
			method: 'GET',
			url: BASE_URL + '/packages.json',
		})
		.success(function(data,status,headers,config){
			console.log( data );
			courier.packages = data;
		})
		.error(function(data,status,headers,config){
			// If user doesnt have a token, create one and signin
			//$scope.loginPOST();
		});

	}; //get packages

	$scope.addPackage = function(package){
		$http({
			method: 'POST',
			url: BASE_URL + '/packages.json',
			params:{
				'sender_id': $scope.package.sender_id,
				'receiver_id': $scope.package.receiver_id,
				'sender_agency_id': $scope.package.sender_agency_id,
				'receiver_agency_id': $scope.package.receiver_agency_id,
				'status': $scope.package.status,
				'lenght': $scope.package.lenght,
				'width': $scope.package.width,
				'height': $scope.package.height,
				'weight': $scope.package.weight,
				'value': $scope.package.value,
			}
		})
		.success(function(data,status,headers,config){
			console.log( "paquete creado" );
			console.log( data );
			courier.packages =  courier.packages + data;
			$scope.package = [];
			$location.path('/packages'); 
			//deberiamos enviar el mensaje de CREADO!
		})
		.error(function(data,status,headers,config){
			console.log( "error creacion paquete" );
			// If user doesnt have a token, create one and signin
			//$scope.loginPOST();
		});

	}; //add packages

	$scope.setPackage = function(id){

		localStorage.setItem("id",id);
		console.log( "coloque con exito el valor " + localStorage.getItem("id")  );

	}; //add packages


	$scope.showPackage = function(){

		//console.log( "show en localst:" + localStorage.getItem("id") );

		if(localStorage.getItem("id") == undefined){

			//console.log( "intente leer una paquete pero no habia valor" );
			//localStorage.removeItem("id");

		}else{
				console.log("buscopaquete de valor+ "+localStorage.getItem("id") );
			$http({
				method: 'GET',
				url: BASE_URL + '/packages/'+localStorage.getItem("id")+".json",
			})
			.success(function(data,status,headers,config){
				console.log( "paquete consultada con exito" );
				console.log( data );
				$scope.package = data;

				if(localStorageService.isSupported){
						//console.log("Soporta Storage Service");
						localStorage.setItem("id",$scope.package.id);

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

	}; //show packages


	$scope.updatePackage = function(package){

		//console.log( "show en localst:" + localStorage.getItem("id") );

		if(localStorage.getItem("id") == undefined){

			console.log( "intente leer una paquete pero no habia valor" );
			//localStorage.removeItem("id");

		}else{
				console.log("busco actualizar paquete de valor "+localStorage.getItem("id") );
			$http({
				method: 'PUT',
				url: BASE_URL + '/packages/'+localStorage.getItem("id")+".json",
				params:{
				'name': $scope.package.name,
				'phone': $scope.package.phone,
				'address': $scope.package.address
				}
			})
			.success(function(data,status,headers,config){
				console.log( "paquete Actualizada con exito" );
				console.log( data );
				$scope.package = data;

				if(localStorageService.isSupported){
						//console.log("Soporta Storage Service");
						localStorage.setItem("id",$scope.package.id);

						//si te provoca borrar: localStorage.removeItem("id");
						 localStorage.removeItem("id");

						  $location.path('/packages');  
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

	}; //update packages

	$scope.deletePackage = function(id){

		//console.log( "show en localst:" + localStorage.getItem("id") );

			console.log("busco borrar paquete de valor "+id );

		if( confirm("De verdad quieres borrar una paquete?!") ){
			$http({
				method: 'DELETE',
				url: BASE_URL + '/packages/'+id,
			})
			.success(function(data,status,headers,config){
				console.log( "paquete Borrada con exito" );
				console.log( data );
				$scope.package = data;

				if(localStorageService.isSupported){
						//console.log("Soporta Storage Service");
						localStorage.setItem("id",$scope.package.id);

						//si te provoca borrar: localStorage.removeItem("id");
						 localStorage.removeItem("id");

						  $location.path('/packages');  
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

	}; //delete packages

	



	}]);//controller





})();


// created_at: "2014-11-08T02:37:16.178Z"
// delivered_at: "2014-11-08T02:37:16.177Z"
// dispatched_at: "2014-11-08T02:37:16.177Z"
// height: "12.0"
// id: 2
// lenght: "15.0"
// receiver_agency_id: 1
// receiver_id: 2
// sender_agency_id: 3
// sender_id: 1
// status: "lost"
// updated_at: "2014-11-08T02:37:16.178Z"
// value: "150.0"
// weight: "8.0"
// width: "36.0"	