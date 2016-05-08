'use strict'

app.service('firebaseAPI', function() {
    var service = {};
    
    service.baseUrl = 'https://schemaform.firebaseio.com/';
    
    var forms = new Firebase(service.baseUrl + "/forms")
    
    service.createForm = function(formName, formTitle) {
        formNode = forms.child(formName);
        var form = {
            id: formName,
            title : formTitle
        };
        
        formNode.set(form)
    }
    
    return service;
})