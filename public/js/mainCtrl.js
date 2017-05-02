angular.module('myApp').controller('mainCtrl', function($scope, service) {

  $scope.postData = function( data ) {
    service.postData( data )
  }
  $scope.getData = function() {
    service.getData().then(function(results){
      $scope.data = results.data
      console.log(results.data)
    })
  }
  $scope.getData()

  $scope.delete = function() {
    service.delete();
  }

})
