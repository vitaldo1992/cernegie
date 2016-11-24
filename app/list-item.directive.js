app.directive("listOf", function($rootScope, $timeout) {
    return {
        restrict: "AEC",
        templateUrl: `app/item.html`,
        transclude: true,
        replace: true,
        link: function(scope, element, attr) {

            watchElementsOrderChange()

            function watchElementsOrderChange () {
                for (var i=0; i<scope.listController.tasks.length; i++) {
                    for (var j=0; j<($(elementCollection).length); j++) {
                        if ($(elementCollection)[j].children[0]) {
                           if($(elementCollection)[j].randomNumber == scope.listController.tasks[i].randomNumber) {
                            scope.listController.tasks[i].index = $(elementCollection).index($(elementCollection)[j]);
                        }
                    }
                }
            }
        }

        element[0].randomNumber=scope.item.randomNumber;
        element[0].style.backgroundColor = scope.item.backGround;

        var elementCollection;

        if (element.parent()[0].id == "ordered") {
            elementCollection = '.ordered-items'
        } else if (element.parent()[0].id == "inProcess") {
            elementCollection = '.inProcess-items'
        } else if (element.parent()[0].id == "postponed") {
            elementCollection = '.postponed-items'
        } else if (element.parent()[0].id == 'done') {
            elementCollection = '.done-items'
        }
    }
}
});
