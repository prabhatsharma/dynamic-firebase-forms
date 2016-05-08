'use strict'

app.service('firebaseAPI', function ($firebaseObject, $rootScope) {
    var service = {};

    service.baseUrl = 'https://schemaform.firebaseio.com/';
    var forms = new Firebase(service.baseUrl + "/forms")
    service.createForm = function (formName, formTitle, newSchema, newForm) {
        var formNode = forms.child(formName);
        var form = {
            id: formName,
            title: formTitle,
            schema: newSchema,
            form: newForm
        };
        formNode.set(form)
    }
    
    service.refresh = function (scope) {
        forms.on('child_added', function getFirebaseData(data) {
            scope.forms = data.val();
            scope.$apply();    //This is pain javascript callback and outside angular scope. so run manual
            console.log('Form list is : ', $scope.forms);
        })
    }
    return service;
})