(function(){
	angular
	.module('app')
	.controller('MainCtrl', [
		'$scope',
		'StateService',
		function($scope, StateService){
			
			$scope.data = {
				states: {},
			};

			$scope.init = function(){
				var c = this;
				StateService.getStatesData().then(
					function success(data){
						$scope.data.states = data.stateList;
						console.log($scope.data.states);
					},
					function error(error){
						console.log(error);
						return new Error(error);
					}
				);
			}//init

			$scope.init();
		}])
})();