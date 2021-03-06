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

  this.deleteText = function(id) {
    return $http ({
      method: 'DELETE',
      url: '/delete/' + id
    })
  }

  this.changeData = function(item) {
    console.log(item)
    return $http ({
      method: 'PUT',
      url: '/change/' + item.id,
      data: item
    })
  }

})
