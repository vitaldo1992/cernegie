app.directive("clock", function($interval){
	return {
		replace: true,
		template: `<span><div id="time">{{time | date:'HH:mm:ss' }}</div>
		<div id="date">{{time | date:'dd:MM:yyyy' }}</div></span>`,
		link: function(scope, element, attrs) {
			scope.time = new Date();
			$interval(function() {
				scope.time = new Date();
			}, 1000);
		}
	}
})