var app = angular.module("taskProgressApp", ['dndLists']); 

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
});

app.controller("taskCtrl", function($scope) {
    $scope.cardList = [{'name': 'To Do', 'items': [], 'newItem': ""},
                      {'name': 'In Progress', 'items': [], 'newItem': ""},
                      {'name': 'Done', 'items': [], 'newItem': ""}]

    $scope.addCard = function(listToAdd, item, index) {
        /*
        name: addCard
        description: The function takes the list into which
        the new item has to be inserted, the new item and the
        index of the list. It inserts the new item into the list
        and resets the input field
        */
        if(!item) {
            return;
        }
        var id = new Date().getUTCMilliseconds();
        listToAdd.push({'id': id, 'msg': item});
        $scope.cardList[index].newItem = "";
    };

    $scope.deleteTask = function(event, delList) {
        /*
        name: deleteTask
        description: Takes the list from which the element has to
        be removed and the event which was triggered as paramaters.
        It removes the element from the list.
        */
        var id = event.target.id; 
        for (var i = delList.length - 1; i > -1; i--) {
            if (delList[i]['id'] == id) {
                delList.splice(i, 1);
            }
        }
    };

});