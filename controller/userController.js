(function(){

var app = angular.module('courier-user',[])



app.controller("userController",['$scope','$http','$location','localStorageService', function($scope,$http,$location,localStorageService){
	var courier = this;
	var	user = {};


	var BASE_URL = "http://torreta-163528.sae1.nitrousbox.com/api/v1";

	courier.users = [];

	//Consultos la paquetes que se encuentran en el API
	$scope.getusers = function(){
		$http({
			method: 'GET',
			url: BASE_URL + '/users.json',
		})
		.success(function(data,status,headers,config){
			console.log( data );
			courier.users = data;
		})
		.error(function(data,status,headers,config){
			// If user doesnt have a token, create one and signin
			//$scope.loginPOST();
		});

	}; //get users


	$scope.setuser = function(id){

		localStorage.setItem("id",id);
		console.log( "coloque con exito el valor " + localStorage.getItem("id")  );

	}; //add users


	$scope.showuser = function(){

		//console.log( "show en localst:" + localStorage.getItem("id") );

		if(localStorage.getItem("id") == undefined){

			console.log( "intente leer una paquete pero no habia valor" );
			//localStorage.removeItem("id");

		}else{
				console.log("buscopaquete de valor+ "+localStorage.getItem("id") );
			$http({
				method: 'GET',
				url: BASE_URL + '/users/'+localStorage.getItem("id")+".json",
			})
			.success(function(data,status,headers,config){
				console.log( "paquete consultada con exito" );
				console.log( data );
				$scope.user = data;

				if(localStorageService.isSupported){
						//console.log("Soporta Storage Service");
						localStorage.setItem("id",$scope.user.id);

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

	}; //show users


	$scope.updateuser = function(user){

		//console.log( "show en localst:" + localStorage.getItem("id") );

		if(localStorage.getItem("id") == undefined){

			console.log( "intente leer una paquete pero no habia valor" );
			//localStorage.removeItem("id");

		}else{
				console.log("busco actualizar paquete de valor "+localStorage.getItem("id") );
			$http({
				method: 'PUT',
				url: BASE_URL + '/users/'+localStorage.getItem("id")+".json",
				params:{
					'sender_id': $scope.user.sender_id,
					'receiver_id': $scope.user.receiver_id,
					'sender_agency_id': $scope.user.sender_agency_id,
					'receiver_agency_id': $scope.user.receiver_agency_id,
					'status': $scope.user.status,
					'lenght': $scope.user.lenght,
					'width': $scope.user.width,
					'height': $scope.user.height,
					'weight': $scope.user.weight,
					'value': $scope.user.value,
				}
			})
			.success(function(data,status,headers,config){
				console.log( "paquete Actualizada con exito" );
				console.log( data );
				$scope.user = data;

				if(localStorageService.isSupported){
						//console.log("Soporta Storage Service");
						localStorage.setItem("id",$scope.user.id);

						//si te provoca borrar: localStorage.removeItem("id");
						 localStorage.removeItem("id");

						  $location.path('/users');  
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

	}; //update users

	$scope.deleteuser = function(id){

		//console.log( "show en localst:" + localStorage.getItem("id") );

			console.log("busco borrar paquete de valor "+id );

		if( confirm("De verdad quieres borrar una paquete?!") ){
			$http({
				method: 'DELETE',
				url: BASE_URL + '/users/'+id,
			})
			.success(function(data,status,headers,config){
				console.log( "paquete Borrada con exito" );
				console.log( data );
				$scope.user = data;

				if(localStorageService.isSupported){
						//console.log("Soporta Storage Service");
						localStorage.setItem("id",$scope.user.id);

						//si te provoca borrar: localStorage.removeItem("id");
						 localStorage.removeItem("id");

						  $scope.getusers();  
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

	}; //delete users

	



	}]);//controller





})();
