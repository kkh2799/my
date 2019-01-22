(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
	
   ext.days = function(){
   today = new Date();
	   return today.getDate() - base;
   };
        

    var descriptor = {
        blocks: [
	    [' ', '%d days ago', 'days', 0],
        ],};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
