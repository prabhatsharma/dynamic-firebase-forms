'use strict';

app.controller('adminFormController', function($scope, $stateParams) {
    console.log("Admin Form ", $stateParams)
    $scope.formName = $stateParams.formName
    
    $scope.updateForm = function(formName, newSchema, newForm) {
        console.log(formName + ", " + formTitle)
    }
})