(function() {

    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

        MainController.$inject = ["$scope"];


    function MainController($scope) {
      $scope.todoList = [];

      $scope.subTodo = function() {
        $scope.todoInfo = document.getElementById("formly_1_input_todo_add_0").value;
        $scope.dateInfo = document.getElementById("dateField").value;
        var showTable = document.getElementById("table");
        $scope.ids = "a" + String(Math.random());
        $scope.tdIds = "b" + String(Math.random());
        $scope.dateId = "c" + String(Math.random());
        $scope.datepickerEdit = "d" + String(Math.random());
        $scope.inputDataEdit = "e" + String(Math.random());

        $scope.todoList.push({
          name:   $scope.todoInfo,
          date: $scope.dateInfo,
          id: $scope.ids,
          tdId: $scope.tdIds,
          dateId: $scope.dateId,
          datepickerEdit: $scope.datepickerEdit,
          inputDataEdit: $scope.inputDataEdit
        });

        $scope.todoInfo = document.getElementById("formly_1_input_todo_add_0").value = '';
        $scope.dateInfo = document.getElementById("dateField").value = '';
      };

      $scope.editItem = function (item) {
          var tdId = this.id;
          document.getElementById(item).contentEditable = true;
      };

      $scope.delete = function(event){

        var parentId = document.getElementById(event);
        while (parentId.firstChild) {
            parentId.removeChild(parentId.firstChild);
        }
      };
      $scope.editData = function (item,$index) {
        var dateId = document.getElementById(item);
        var datepickerEdit = document.getElementById(dateId.children[0].id);
        var editInput = document.getElementById(datepickerEdit.children[0].id);
        editInput.type = "text";
        editInput.focus();
        editInput.type = "hidden";
        $(datepickerEdit.children[1]).focusout(function(){
          $scope.todoList[$index].date = editInput.value;
          $scope.$apply();
        });

      };


        var vm = this;
        vm.todo = {};
        vm.todoFields = [
            {
                key: 'todo_add',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    placeholder: 'Add todo',
                    required: true,
                    onClick: function() {
                      var showDate = document.getElementById("formly_1_input_due_date_1");
                      showDate.style.display = 'inline';
                    }
                }
            },
            {
                key: 'due_date',
                template: '<datepicker id="formly_1_input_due_date_1" date-format="dd/MM/yyyy"><input ng-model="date" class="form-control" placeholder="day/month/year" type="text" id="dateField"/></datepicker>'

            },
        ];

    }
})();
