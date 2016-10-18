var app = angular.module('app',[]);

app.controller('elementsCTRL', function($scope){
$scope.row1 = [
  {
    aNum:1,
    name: 'Hydrogen',
    symbol:'H',
    aMass: 1.008
  },

  {
    aNum:2,
    name: 'Helium',
    symbol:'He',
    aMass: 4.0026,
  },

  {
    aNum:3,
    name: 'Lithium',
    symbol:'Li',
    aMass: 6.94
  }


  
  ]

});