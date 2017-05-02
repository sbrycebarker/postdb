angular.module('myApp').controller('mainCtrl', function($scope, service) {

  $scope.postData = function( data ) {
    service.postData( data )
    console.log(data)
  }

})
