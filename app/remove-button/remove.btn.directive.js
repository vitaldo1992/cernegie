app.directive("removeButton", function($timeout) {
    return {
        replace: true,
        template: `<img ng-click="deleteItem()" src="app/images/trash.png" alt="trash" style="float: left; width: 14px; height: 14px; border-radius: 3px;cursor: pointer;">`,
        link: function(scope, element, attrs) {

            scope.deleteItem = function() {

                $timeout(function(){

                    scope.randomNumber = element.parent().parent().parent()[0].randomNumber
                    if (element.parent().parent().parent().parent()[0].id == "ordered") {

                        for (var i = 0; i < scope.listController.tasks.length; i++) {
                            if (scope.randomNumber == scope.listController.tasks[i].randomNumber) {
                                scope.listController.tasks.splice(i, 1);
                            }
                        }
                    } else if (element.parent().parent().parent().parent()[0].id == "inProcess") {
                        for (var i = 0; i < scope.listController.progress.length; i++) {
                            if (scope.randomNumber == scope.listController.progress[i].randomNumber) {
                                scope.listController.progress.splice(i, 1);
                            }
                        }
                    }
                    else if (element.parent().parent().parent().parent()[0].id == "postponed") {
                        for (var i = 0; i < scope.listController.later.length; i++) {
                            if (scope.randomNumber == scope.listController.later[i].randomNumber) {
                                scope.listController.later.splice(i, 1);
                            }
                        }
                    }
                    else if (element.parent().parent().parent().parent()[0].id == "done") {
                        for (var i = 0; i < scope.listController.done.length; i++) {
                            if (scope.randomNumber == scope.listController.done[i].randomNumber) {
                                scope.listController.done.splice(i, 1);
                            }
                        }
                    }
                },0)


            }
        }
    }
});