app.directive('insertReserve', function($timeout) {
	return {
		restrict: "AEC",
		templateUrl: `app/add-reserve/reserve.html`,
		transclude: true,
		replace: true,
		link: function(scope, element, attr) {


			scope.insert_reserve = function() {
				// console.log(element.parent().parent().parent().parent()[0])
				if (element.parent().parent().parent().parent()[0].id=='ordered') {
					console.log("hello")
					scope.listController.tasks.insert(scope.item.index, {
						name: 'Резерв',
						time: '00.00',
						time_end: '00.00',
						index: scope.item.index+1,
						randomNumber: scope.listController.randomNumber(10000000,99999999),
						backGround: '#CCFFC1'
					});
				}

			}

			element[0].addEventListener('click', function(){
				$timeout(scope.insert_reserve,0)
			});




		}
	}
})
