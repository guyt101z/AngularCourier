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

	$scope.signup = function(){
		if($scope.user.password_confirmation == $scope.user.password){
			$http({
				method: 'POST',
				url: BASE_URL+'/users',
				params:{
					'email': $scope.user.email,
					'password': $scope.user.password,						
					'role': $scope.user.role,
					'cedula': $scope.user.cedula,
					'name': $scope.user.name,
					'lastname': $scope.user.lastname,
					'phone': $scope.user.phone

				}
			})
			.success(function(data,status,headers,config){
				console.log("Usuario creado con exito");
				//hay que poner aunquesea un mensaje XD
				$location.path("/users");
			})
			.error(function(data,status,headers,config){
				// Error handling
				console.log('it doesnt work');
			});
		}else{ console.log("Password dispares")};
	};

	$scope.setuser = function(id){

		localStorage.setItem("id",id);
		console.log( "coloque con exito el valor " + localStorage.getItem("id")  );

	}; //add users


	$scope.showUser = function(){

		//console.log( "show en localst:" + localStorage.getItem("id") );

		if(localStorage.getItem("id") == undefined){

			console.log( "intente leer una paquete pero no habia valor" );
			//localStorage.removeItem("id");

		}else{
				console.log("busco user de valor+ "+localStorage.getItem("id") );
			$http({
				method: 'GET',
				url: BASE_URL + '/users/'+localStorage.getItem("id")+".json",
			})
			.success(function(data,status,headers,config){
				console.log( "Usuario consultada con exito" );
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


	$scope.updateUser = function(user){
		if($scope.user.password_confirmation == $scope.user.password){
		//console.log( "show en localst:" + localStorage.getItem("id") );

			if(localStorage.getItem("id") == undefined){

				console.log( "intente leer una persona pero no habia valor" );
				//localStorage.removeItem("id");

			}else{
					console.log("busco actualizar usuario de valor "+localStorage.getItem("id") );
				$http({
					method: 'PUT',
					url: BASE_URL + '/users/'+localStorage.getItem("id")+".json",
					params:{
							'email': $scope.user.email,
							'password': $scope.user.password,						
							'role': $scope.user.role,
							'cedula': $scope.user.cedula,
							'name': $scope.user.name,
							'lastname': $scope.user.lastname,
							'phone': $scope.user.phone
						}
				})
				.success(function(data,status,headers,config){
					console.log( "Usuario Actualizada con exito" );
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
					console.log( "error Actualizando usuario" );
					// If user doesnt have a token, create one and signin
					//$scope.loginPOST();
				});
			};
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
