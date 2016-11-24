app.directive("editItem", function($timeout) {
    return {
        restrict: "C",
        templateUrl: `app/edit-button/edit.html`,
        link: function(scope, element, attr) {
            element[0].addEventListener("click", changeImage)
             function changeImage() {
                // console.log(element.children()[0].src);
                if (element.children()[0].src === "app/images/edit.png" || element.children()[0].src === "http://localhost:8000/app/images/edit.png") {

                    element.children()[0].src = "app/images/save-icon.png"
                } else {
                    element.children()[0].src = "app/images/edit.png"
                }
            }
        }
    }
});