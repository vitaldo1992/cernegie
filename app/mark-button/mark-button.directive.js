app.directive("markButton", function(){
	return {
		scope: {
			item: "="
		},
		replace: true,
		restrict: "AE",
		templateUrl: 'app/mark-button/mark-button.html',
		link: function(scope,element,attrs) {
			element[0].children[0].id="mark"+scope.item.randomNumber;
			element[0].children[1].htmlFor="mark"+scope.item.randomNumber;
		}
	}
})