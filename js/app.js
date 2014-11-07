(function(){
var app = angular.module('store',[]);

app.controller('StoreController', function(){
	this.products = gems;
});


app.controller('PanelController', function(){
	this.tab = 1;

	this.selectTab = function(setTab){
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
});


app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
});

app.directive('productTitle', function(){
	return {
		restrict: 'E',
		templateUrl: 'product-title.html'
	};
});




// app.directive('ProductPanels', function(){

// 	return {
// 		restrict:'E',
// 		templateUrl:'product-panels.html'
// 		controller:function(){
// 			this.tab = 1;

// 			this.selectTab = function(setTab){
// 				this.tab = setTab;
// 			};
// 			this.isSelected = function(checkTab){
// 				return this.tab === checkTab;
// 			};
// 		}
// 		controllerAs: 'panels'
// 	};

// });



var gems =[{
	name: 'Dodecahedron',
	price: 2.95,
	description: 'Bonita piedra bro, trust me...',
	canPurchase: true,
	soldOut:true,
	images: [
		{
			full: 'img/do-01-full.jpg'
		}

	],
	reviews:[
		{
		stars: 5,
		body: "i love this product!",
		author: "joe@gmail.com"
		},
		{
		stars: 4,
		body: "Apesta!",
		author: "nulo2@gmail.com"
		}
		]
},
{
	name: 'Pentagonal Gem',
	price: 5.95,
	description: 'Un pentagono!, whoah! mind blow',
	canPurchase: false,
	soldOut:true,
	images: [
		{
			full: 'img/ph-01-full.jpeg'
		}

	],
	reviews:[
		{
		stars: 5,
		body: "i love this productoso!",
		author: "joe@gmail.com"
		},
		{
		stars: 1,
		body: "meh",
		author: "nulo2@gmail.com"
		}
		]
},{
	name: 'Rubiridiom Gem',
	price: 9.44,
	description: 'Adventure time!',
	canPurchase: true,
	soldOut:false,
	images: [
		{
			full: 'img/ru-01-full.jpeg'
		}

	],
	reviews:[
		{
		stars: 5,
		body: "i love this product!",
		author: "joe@gmail.com"
		}
		]
}
]

})();



