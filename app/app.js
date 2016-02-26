(function(){
	angular
		.module('app', [])
		.config(
			function() {
				console.log('configuring app...');
			}
		).run(
			function() {
				console.log('app runing...');
			}
		)
})();	