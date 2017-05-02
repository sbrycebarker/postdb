angular.module('myApp').service('service', function( $http ) {

  this.postData = function(data) {
    return $http({
      method: 'POST',
      url: '/send',
      data: data
    })
  }

})
