'use strict';

app.controller('createFormController', function($scope, firebaseAPI, $firebaseObject) {
    console.log("createFormController")
    
    var forms = new Firebase(firebaseAPI.baseUrl);
    
    $scope.forms = $firebaseObject(forms);
    
    $scope.createForm = function(formName, formTitle, newSchema, newForm) {
        console.log(formName + ", " + formTitle)
        //newSchema = newSchema.replace(/(?:\r\n|\r|\n)/g, '')
        //newForm = newForm.replace(/(?:\r\n|\r|\n)/g, '')
        firebaseAPI.createForm(formName, formTitle, newSchema, newForm)
    }
})