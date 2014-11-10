(function(){

	var app = angular.module('courier-calculadora',[])

	app.controller("calculatorController",['$scope','$http','$location','localStorageService', function($scope,$http,$location,localStorageService){

		var BASE_URL = "http://torreta-163528.sae1.nitrousbox.com";



		$scope.getprice = function(){
			
				$http({
					method: 'GET',
					url: BASE_URL+'/price',
					params:{
						'lenght': $scope.pack.lenght,
						'width': $scope.pack.width,						
						'height': $scope.pack.height,
						'weight': $scope.pack.weight,
						'value': $scope.pack.value,
					}
				})
				.success(function(data,status,headers,config){
					console.log(data);
					//hay que poner aunquesea un mensaje XD
					 $scope.pack.total = data;
				})
				.error(function(data,status,headers,config){
					// Error handling
					console.log('it doesnt calculator');
				});

		};


















	}]);








})();

