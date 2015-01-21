(function(window, document) {
    "use strict";

    (angular.module('ng.mask', [ 'ng' ])).run([ function() {

	var setFormat = function(context) {
	    var obj = (context.target != undefined) ? context.target : context;
	    obj.value = obj.value.replace(/[^0-9-]/g, '');
	    var mask = obj.dataset.ngMask;
	    var i = obj[((obj.tagName == "INPUT") ? "value" : "innerHTML")].length;
	    var saida = mask.substring(1, 0);
	    var texto = mask.substring(i)
	    if (texto.substring(0, 1) != saida) {
		obj[((obj.tagName == "INPUT") ? "value" : "innerHTML")] += texto.substring(0, 1);
	    }
	    
	    obj[((obj.tagName == "INPUT") ? "value" : "innerHTML")] = obj[((obj.tagName == "INPUT") ? "value" : "innerHTML")].substring(0, mask.length);
	};

	var loadReload = function() {
	    [].map.call(document.querySelectorAll('[data-ng-mask]'), function(obj) {
		obj.removeEventListener(obj.dataset.on, setFormat);
		obj.addEventListener(obj.dataset.on, setFormat);
	    });
	    setTimeout(loadReload, 1500);
	};
	loadReload();

    } ]);

})(window, document);
