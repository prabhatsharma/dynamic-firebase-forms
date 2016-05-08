'use strict';

app.controller('createFormController', function($scope) {
    console.log("createFormController")
    
    $scope.createForm = function(formName, formTitle) {
        console.log(formName + ", " + formTitle)
    }
})