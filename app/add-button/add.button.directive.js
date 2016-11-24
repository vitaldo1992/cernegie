app.directive('addButton', function($timeout) {
    return {
        templateUrl: `app/add-button/add.button.html`,
        replace: true,
        link: function(scope, element, attrs) {


            scope.listController.randomNumber = function (m,n) {
              m = parseInt(m);
              n = parseInt(n);
              return Math.floor( Math.random() * (n - m + 1) ) + m;
          }

          scope.addElement = function() {

            scope.listController.tasks.push(
            {
                name: 'New Task',
                time: '00.00',
                time_end: '00.00',
                index: scope.listController.tasks.length,
                randomNumber: scope.listController.randomNumber(10000000,99999999)
            })


        }

        element[0].onmouseover = function() {
            element[0].src = "app/images/add-button-hover.png";
        }
        element[0].onmouseout = function() {
            element[0].src = "app/images/add-button.png";
        }
        element[0].onmousedown = function() {
            element[0].src = "app/images/add-button-clicked.png";
        }
        element[0].onmouseup = function() {
            element[0].src = "app/images/add-button-hover.png";
        }
    }
}
})