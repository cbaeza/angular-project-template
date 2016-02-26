(function(){
	angular
	.module('app')
	.filter('StateFilter', function() {
		return function(personCount) {
			console.log("filter")
			return {};
		};
	});
})();