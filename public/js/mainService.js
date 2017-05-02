angular.module('myApp').service('service', function( $http ) {

  this.postData = function(data) {
    return $http({
      method: 'POST',
      url: '/send',
      data: data
    })
  }
  this.getData = function(data) {
    return $http({
      method: 'GET',
      url: '/getData',
    })
  }
  this.delete = function(id) {
    return $http ({
      method: 'GET',
      url: '/delete/' + id
    })
  }

})
