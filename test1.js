(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
	
   ext.days = function(base){};
        

    var descriptor = {
        blocks: [
	    [' ', 'days ago', 'days'],
        ],};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
