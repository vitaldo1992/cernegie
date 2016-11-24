app.directive("saveAll", function($localStorage){
	return {
		replace: true,
		template: `<img src="app/images/save-icon.png">`,
		link: function(scope, element, attrs) {
			element.css({
				"margin-right": "5px",
				"height": "20px",
				"background": "#5487D3",
				"border-radius": "3px"
			});

			element[0].addEventListener("click", function(){
				$localStorage.tasks=scope.listController.tasks;
				$localStorage.progress=scope.listController.progress;
				$localStorage.later=scope.listController.later;
				$localStorage.done=scope.listController.done;
				// $localStorage.$reset();
			})

		}
	}
})