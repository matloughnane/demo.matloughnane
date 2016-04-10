var app = angular.module('notificationApp', ['ui.router']);

app.factory('posts', ['$http', function($http){
	var o = {
		posts: []
	};

	o.getAll = function() {
		return $http.get('/posts').success(function(data){
			angular.copy(data, o.posts);
		});
	};

	o.create = function(post) {
		return $http.post('/posts', post).success(function(data){
			o.posts.push(data);
		});
	};

	return o;
}]);

// app.config(["$locationProvider", function($locationProvider) {
//   $locationProvider.html5Mode(true);
// }]);

app.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider.state('home', {
		url: '/home',
		templateUrl: '/home.html',
		controller: 'MainCtrl',
		resolve: {
			postPromise: ['posts', function(posts){
				return posts.getAll();
			}]
		}
	});
	
	$stateProvider.state('posts', {
		url: '/posts/{id}',
		templateUrl: '/posts.html',
		controller: 'PostsCtrl',
		resolve: {
			post: ['$stateParams', 'posts', function($stateParams, posts) {
				return posts.get($stateParams.id);
			}]
		}
	});

	$urlRouterProvider.otherwise('home');

}]);

app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){

	$scope.posts = posts.posts;

	$scope.addPost = function(){
		if(!$scope.title || $scope.title === '') { return; }

		posts.create({
			title: $scope.title,
			link: $scope.link
		});
		$scope.title = '';
		$scope.link = '';
	}

}]);

