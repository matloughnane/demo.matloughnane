var app = angular.module('notificationApp', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
	  $scope.test = 'Hello world!';
}]);