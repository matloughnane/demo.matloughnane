app.controller('MainController', ['$scope', function($scope) { 
	$scope.title = 'The is My Title';

	$scope.promo = "This is my promo";

	// $scope.product = {
	// 	name: 'The Book of Trees',
	// 	price: 19,
	// 	pubdate: new Date('2014', '03', '08')
	// }
	$scope.products = [ 
		{ 
		  name: 'The Book of Trees', 
		  price: 19, 
		  pubdate: new Date('2014', '03', '08'), 
		  dislikes: 0, 
		  likes: 0, 
		  cover: 'http://placehold.it/350x150' 
		}, 
		{ 
		  name: 'Program or be Programmed', 
		  price: 8, 
		  pubdate: new Date('2013', '08', '01'), 
		  dislikes: 0, 
		  likes: 0, 
		  cover: 'http://placehold.it/350x150' 
		} , 
		{ 
		  name: 'Program or be Programmed', 
		  price: 8, 
		  pubdate: new Date('2013', '08', '01'), 
		  dislikes: 0, 
		  likes: 0, 
		  cover: 'http://placehold.it/350x150' 
		} , 
		{ 
		  name: 'Program or be Programmed', 
		  price: 8, 
		  pubdate: new Date('2013', '08', '01'), 
		  dislikes: 0, 
		  likes: 0, 
		  cover: 'http://placehold.it/350x150' 
		} 
	]

	$scope.plusOne = function(index) { 
		$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
		$scope.products[index].dislikes += 1; 
	};

}]);