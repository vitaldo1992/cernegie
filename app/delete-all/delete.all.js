app.directive("deleteAll", function(){
	return {
		replace: true,
		template: `<img ng-click="removeAll()" style="margin: 0 5px 0" src="app/images/delete-all.png">`,
		link: function(scope,element,attrs) {
			scope.removeAll = function(){
				for (let z=0; z<4; z++) {
					if ($("mark-all")[z].children[0].style.opacity == 1) {
						$("mark-all")[z].click();
					}
				}

				for (i in scope.listController) {
					if (typeof scope.listController[i].__proto__ === "object") {

						let arrayLength = scope.listController[i].length;

						for (let j=0; j<arrayLength; j++) {

							if (scope.listController[i][j] && scope.listController[i][j].checked == true) {
								scope.listController[i].splice(j,1);
								j--
							}
						}
					}
				}
			}
		}
	}
})