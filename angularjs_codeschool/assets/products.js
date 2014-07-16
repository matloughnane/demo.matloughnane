
(function(){
	var app = angular.module('store-products', []);

// START OF DIRECTIVES

	app.directive('productDescription', function(){
		return {
			restrict: 'E',
			templateUrl: 'assets/product-description.html'
		};
	});

	// DIRECTIVES WITH CONTROLLERS

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'assets/product-panels.html',
			controller:function() {
				 this.tab = 1;
				 this.selectTab = function(setTab) {
				 	this.tab = setTab;
				 };
				 this.isSelected = function(checkTab) {
				 	return this.tab === checkTab;
				 };
			},
			controllerAs: 'panel',
		};
	});


})();