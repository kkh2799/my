(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
   
	
   ext.days = function(base){
    var today = new Date();
    var dd = today.getDate();
    return dd-base;
   };
        

    var descriptor = {
        blocks: [
	    ['r', '%d days ago', 'days', 0],
        ],};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
