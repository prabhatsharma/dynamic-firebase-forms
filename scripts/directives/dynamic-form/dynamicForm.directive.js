'use strict'

angular.module("app").directive("dynamicForm", function() {
    return {
        restrict : "E",
        templateUrl : "scripts/directives/dynamic-form/dynamic-form.html",
        controller : "dynamicController"
    }
})