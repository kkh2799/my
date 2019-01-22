(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
	
   ext.days = function(base){
	   today = new Date();
	   return {today.getDate() - base};};
        

    var descriptor = {
        blocks: [
	    ['r', '%d days ago', 'days', 0],
        ],};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
