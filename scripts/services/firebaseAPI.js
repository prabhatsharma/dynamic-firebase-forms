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
    
    service.updateForm = function (formName, formTitle, newSchema, newForm) {
        var formNode = forms.child(formName);
        var form = {
            id: formName,
            title: formTitle,
            schema: newSchema,
            form: newForm
        };
        formNode.update(form)
    }
    

    return service;
})