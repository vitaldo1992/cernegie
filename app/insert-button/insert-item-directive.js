app.directive('insertItem', function($timeout) {
	return {
		restrict: "AEC",
		templateUrl: `app/insert-button/insert-item.html`,
		transclude: true,
		replace: true,
		link: function(scope, element, attr) {

			element[0].addEventListener('click', function(){
				$timeout(scope.insert,0)
			});


			scope.insert = function() {
				if (element.parent().parent().parent()[0].id=='ordered') {
					scope.listController.tasks.insert(scope.item.index, {
						name: 'New Task',
						time: '00.00',
						time_end: '00.00',
						index: scope.item.index+1,
						randomNumber: scope.listController.randomNumber(10000000,99999999)
					});
				}
			}


		}
	}
})