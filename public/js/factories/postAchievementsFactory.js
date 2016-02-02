netstix.factory('PostAchievements', ['$http', function($http) {
  return {
    getData: function(title, criteria) {
      var deferred = $q.defer();
      $http.post('/achievements/', {title: title, criteria: criteria})
        .success(function (data, status) {
          if(status === 200 && data.status){
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
        .error(function (data) {
          deferred.reject();
        });
      return deferred.promise;
    }
  };
}]);
