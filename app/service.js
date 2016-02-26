(function(){
	angular
	.module('app')
	.service('StateService', [
		'$http',
		'$q',
		function($http, $q){

			this.getStatesData = function(){
				console.log('service getCountryData');
				var deferred = $q.defer();	
				$http.get('/resources/states.json').then(
					function success(response, status, headers, config){
						return deferred.resolve(response.data);
					},
					function error(error, status, headers, config){
						return deferred.reject(status);
					}	
				);
				return deferred.promise;
			}
		}])
})();