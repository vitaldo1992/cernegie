app.directive("status", function($timeout) {
    return {

        restrict: "AEC",
        templateUrl: `app/status/status.html`,
        link: function(scope, element, attr) {

            scope.checkParent = function() {
                return element.parent().parent().parent().parent()[0].id;
            }

            scope.changeParent = function() {

                if (scope.checkParent()=="ordered") {
                    chengeArray(scope.listController.tasks)
                } else if (scope.checkParent()=="postponed") {
                    chengeArray(scope.listController.later)
                } else if (scope.checkParent()=="inProcess") {
                    chengeArray(scope.listController.progress)
                } else if (scope.checkParent()=="done") {
                    chengeArray(scope.listController.done)
                }

                function chengeArray(elemParent) {

                    if (scope.pointController.status == "in process") {
                        for (var i=0; i<elemParent.length; i++) {
                            if (elemParent[i].randomNumber == element.parent().parent().parent()[0].randomNumber) {
                                scope.listController.progress.push(elemParent[i]);
                                elemParent.splice(i, 1);

                            }
                        }

                    } else if (scope.pointController.status == "ordered") {

                      for (var i=0; i<elemParent.length; i++) {
                        if (elemParent[i].randomNumber == element.parent().parent().parent()[0].randomNumber) {
                            scope.listController.tasks.push(elemParent[i]);
                            elemParent.splice(i, 1);

                        }
                    }
                } else if (scope.pointController.status == "later") {

                 for (var i=0; i<elemParent.length; i++) {
                    if (elemParent[i].randomNumber == element.parent().parent().parent()[0].randomNumber) {
                        scope.listController.later.push(elemParent[i]);
                        elemParent.splice(i, 1);

                    }
                }
            } else if (scope.pointController.status == "done") {

                for (var i=0; i<elemParent.length; i++) {
                    if (elemParent[i].randomNumber == element.parent().parent().parent()[0].randomNumber) {
                        scope.listController.done.push(elemParent[i]);
                        elemParent.splice(i, 1);

                    }
                }
            }
        }

    }
}
}
});