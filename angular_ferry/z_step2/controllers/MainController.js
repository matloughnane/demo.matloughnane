app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'https://codecademy1860366-8000.terminal.com/img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'https://codecademy1860366-8000.terminal.com/img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'https://codecademy1860366-8000.terminal.com/img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };

  $scope.forecast = {
    icon: 'https://codecademy1860366-8000.terminal.com/img/forecast.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  };

  $scope.apps = [
    { 
      icon: 'https://codecademy1860366-8000.terminal.com/img/move.jpg', 
      title: 'MOVE', 
      developer: 'MOVE, Inc.', 
      price: 0.99 
    }, 
    { 
      icon: 'https://codecademy1860366-8000.terminal.com/img/shutterbugg.jpg', 
      title: 'Shutterbugg', 
      developer: 'Chico Dusty', 
      price: 2.99 
    },
    {
      icon: 'https://codecademy1860366-8000.terminal.com/img/gameboard.jpg',
      title: 'Gameboard',
      developer: 'Armando P.',
      price: 1.99
    },
    {    
      icon: 'https://codecademy1860366-8000.terminal.com/img/forecast.jpg',
      title: 'Forecast',
      developer: 'Forecast',
      price: 1.99
    }
  ]

}]);