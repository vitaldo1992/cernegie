app.directive("markAll", function($timeout){
	return {
		// replace: true,
		scope: {
			tasks: "="
		},
		restrict: "AE",
		template: `<img src="app/images/check-all.png">`,
		link: function(scope,element,attrs) {
			element[0].children[0].style.opacity = 0;

			element[0].addEventListener("click", function(){

				$timeout(function(){
					if (element[0].children[0].style.opacity==0) {
						if (scope.tasks.length!=0) {
							element[0].children[0].style.opacity = 1;
							if (element.parent().parent()[0].className == "headSet itemHeaders" || element.parent().parent()[0].className == "headProcess itemHeaders" || element.parent().parent()[0].className == "headPostponed itemHeaders" || 
								element.parent().parent()[0].className == "headDone itemHeaders") {
								for (var i=0; i<scope.tasks.length; i++) {
									scope.tasks[i].checked = true;
								}
							}
						}

					} else {
						element[0].children[0].style.opacity = 0;
						if (element.parent().parent()[0].className == "headSet itemHeaders" || element.parent().parent()[0].className == "headProcess itemHeaders" || element.parent().parent()[0].className == "headPostponed itemHeaders" || element.parent().parent()[0].className 
							== "headDone itemHeaders") {
							for (var i=0; i<scope.tasks.length; i++) {
								scope.tasks[i].checked = false;
							}
						}
					}
				},0)
			})
		}
	}
})