app.controller("listController", function($scope, listService, $rootScope, $timeout, $localStorage) {
    $scope.listController = this;
    // console.log($localStorage)
    $scope.showInput = true;
    $scope.showInputTime = true;
    if ($localStorage.tasks==undefined) {
        this.tasks = listService.tasks;
        this.progress = listService.progress;
        this.later = listService.later;
        this.done = listService.done;
    } else {
        this.tasks = $localStorage.tasks;
        this.progress = $localStorage.progress;
        this.later = $localStorage.later;
        this.done = $localStorage.done;
    }

    Array.prototype.insert = function (index, item) {
      this.splice(index, 0, item);
  };

  $('#ordered')[0].addEventListener("DOMSubtreeModified", watchElementsOrderChange);

  function watchElementsOrderChange () {
    $timeout(function(){
        for (var i=0; i<$scope.listController.tasks.length; i++) {
            for (var j=0; j<($(".ordered-items").length); j++) {
                if ($(".ordered-items")[j].children[0]) {
                 if($(".ordered-items")[j].randomNumber == $scope.listController.tasks[i].randomNumber) {

                    $scope.listController.tasks[i].index = $(".ordered-items").index($(".ordered-items")[j])
                }
            }
        }
    }
},0)

}

});

app.service("listService", function() {
    this.tasks = [
    { name: `Зарядка - 15 мин.`, time_end: `00.00`, time: `7.00`, index: 0, checked: false, randomNumber: 8904544 , column: `tasks`, backGround: '#C7D5FF'},
    { name: `Завтрак - 10 мин.`, time_end: `00.00`, time: `7.30`, index: 1, checked: false, randomNumber: 3723055, column:  `tasks` , backGround: '#C7D5FF'},
    { name: `Работа:\nа) выучить React\nб) выучить Angular2.0`, time_end: `00.00`, time: `13.00`, index: 2, checked: false, randomNumber: 1399747, column:  `tasks` , backGround: '#C7D5FF'},
    { name: `Поехать в центр гулять`, time_end: `00.00`, time: `20.00`, index: 3, checked: false, randomNumber: 55683134, column:  `tasks` , backGround: '#C7D5FF'},
    { name: `Дорога домой:\nчитаю в транспорте Айвенго`, time_end: `00.00`, time: `21.00`, index: 4, checked: false, randomNumber: 6545313, column:  `tasks` , backGround: '#C7D5FF'},
    { name: `Ужин`, time_end: `00.00`, time: `22.00`, index: 5, checked: false, randomNumber: 5503134, column:  `tasks` , backGround: '#C7D5FF'}
    ];
    this.progress = [
    { name: `Резерв - 30 мин.`, time_end: `00.00`, time: `11.00`, index: 6, checked: false, randomNumber: 5212025, column: `progress`, backGround: '#CCFFC1'},
    { name: `Отдых`, time_end: `00.00`, time: `10.00`, index: 7, checked: false, randomNumber: 3559450, column:  `progress`, backGround: '#CCFFC1'}
    ];
    this.later = [
    { name: `Позвонить Родителями:\n(разговор по тел. < 5 мин.)`, time_end: `00.00`, time: `7.00`, index: 8, checked: false, randomNumber: 6280573, column: `later`, backGround: '#C7D5FF'}
    ];
    this.done = [
    { name: `Сходить в магазин`, time_end: `00.00`, time: `11.30`, index: 9, checked: false, randomNumber: 4071012, column: `done` , backGround: '#C7D5FF'},
    { name: `Убираю постель`, time_end: `00.00`, time: `7.15`, index: 10, checked: false, randomNumber: 3194888, column: `done`, backGround: '#C7D5FF'}
    ]
})