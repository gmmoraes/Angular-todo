(function() {

    'use strict';

    angular.module("app", [])
    	.factory("addTodo", [function () {
        return {
          setTest: function(test) {
            alert("a");
          }
        };
      }]);
    })();

/**
    angular.module('app')
           .controller('MainController', ["$scope", function($scope){
             //$scope.dateInfo = document.getElementById("formly_1_input_due_date_1").innerHTML;
             //$scope.todoInfo = document.getElementById("formly_1_input_todo_add_0").innerHTML;
             $scope.todoList = [];

             $scope.addTodo = function() {
               //todoList.push(date: $scope.dateInfo, name:$scope.todoInfo);
               alert("a");
             };
           }]);
         })();


/**

<table>
 <thead>
  <tr>
     <th>Date</th>
     <th>Todo</th>
  </tr>
 </thead>
 <tbody>
   <tr ng-repeat="todos in todoList">
      <td>{{todo.date}}</td>
      <td>{{todo.name}}</td>
   </tr>
  </tbody>
 </table>

 **/
