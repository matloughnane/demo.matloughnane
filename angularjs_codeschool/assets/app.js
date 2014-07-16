// GOOD HABIT TO WRAP OUR APP INSIDE A CONTROLLER
(function() {
	// THIS IS THE APP MODULE
	var app = angular.module('store', ['store-products']);

	// OUR APP CONTROLLER
	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: "It's a 10 sided shape thing.",
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars: 5,
					body: "I love this product",
					author: "@matthew",
					createdOn: 1397490980837				
				},
				{
					stars: 1,
					body: "I hate this product",
					author: "@thomas",
					createdOn: 1397490980837					
				}
			]
		},
		{
			name: 'Hexagon',
			price: 2.45,
			description: "It's a hexagon, it has six sides.",
			canPurchase: true,
			soldOut: true,
			reviews: [
				{
					stars: 4,
					body: "I love this product",
					author: "@matthew",
					createdOn: 1397490980837			
				},
				{
					stars: 1,
					body: "I hate this product",
					author: "@thomas",
					createdOn: 1397490980837					
				}
			]
		}
	];

	// app.controller('PanelController', function(){
	// 	 this.tab = 1;
	// 	 this.selectTab = function(setTab) {
	// 	 	this.tab = setTab;
	// 	 };
	// 	 this.isSelected = function(checkTab) {
	// 	 	return this.tab === checkTab;
	// 	 };
	// });

	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

// END OF CONTROLLERS


}) ();


