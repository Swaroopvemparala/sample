({
	displayResult : function(component, event, helper) {
        var res= event.getParam('sub');
        component.set('v.result', res);
		
	}
})