(function(){

	var app = angular.module('courier-sessions',[])

	app.controller("sessionController",['$scope','$http','$location','localStorageService', function($scope,$http,$location,localStorageService){

		var BASE_URL = "http://torreta-163528.sae1.nitrousbox.com";
		
		// User auth. Get token, username, role and redirect to /packages
		$scope.login = function(){
			console.log( "intento logear al sujeto" );
			console.log($scope.user.email+":"+$scope.user.password );

			$http({
				method: 'POST',
				url: BASE_URL + "/api_key",
				headers:{
					'email': $scope.user.email,
					'password': $scope.user.password
				}
			})
			.success(function(data,status,headers,config){
				console.log( data );

				if(localStorageService.isSupported){

					localStorage.setItem("is_loged",true);
					localStorage.setItem("user_id",data.user_id);
					localStorage.setItem("access_token",data.access_token);
					localStorage.setItem("role",data.role);
					localStorage.setItem("token_id",data.id);

					console.log( "tengo en datastorage user_id "+ localStorage.getItem("user_id"));
					console.log( "tengo en datastorage access_token "+ localStorage.getItem("access_token"));
					console.log( "tengo en datastorage role "+ localStorage.getItem("role"));
					console.log( "tengo en datastorage token_id "+ localStorage.getItem("token_id"));

					$location.path('/');
				}else{
					alert("Your browser does not support localStorage");
				}
			})
			.error(function(data,status,headers,config){
				console.log( "logeo fallido" );// If user doesnt have a token, create one and signin
				$location.path('/login');
				$scope.user={};			
				//mensajes de error, plz....		
			});
		};

		// Create token for user and sigin
		$scope.logout = function(){
			console.log( "intento sacar al sujeto" );
			console.log(localStorage.getItem("user_id") + ", de rol: "+ localStorage.getItem("role") );

		if (localStorage.getItem("is_loged") == undefined){
			console.log( "intente sacar a un pana nisiquiera logueado" );
			//localStorage.removeItem("id");
		}else{ 
			$http({
				method: 'DELETE',
				url: BASE_URL + "/api_key/"+localStorage.getItem("token_id"),

			})
			.success(function(data,status,headers,config){
				console.log( "destruido el token con exito" );
				console.log( data );

				if(localStorageService.isSupported){
					localStorage.removeItem("is_loged");
					localStorage.removeItem("user_id");
					localStorage.removeItem("access_token");
					localStorage.removeItem("role");
					localStorage.removeItem("token_id");

					$location.path('/');
				}else{
					alert("Your browser does not support localStorage");
				}
			})
			.error(function(data,status,headers,config){
				console.log( "destruccion de token fallido" );// If user doesnt have a token, create one and signin
				$location.path('/');
		
				//mensajes de error, plz....		
			});
		};

		};


		//implementada a medias
		// User creation (sera?)
		$scope.signup = function(){
			if($scope.user.password_confirmation == $scope.user.password){
				$http({
					method: 'POST',
					url: BASE_URL+'/api/v1/users',
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



	}]);








})();


