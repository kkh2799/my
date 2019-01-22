(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
   
	
   ext.days = function(base){
    var today = new Date();
    var dd = today.getDate();
    return dd-base;
   };
	
   ext.today = function(){
    var today = new Date();
	   return today;};
        

    var descriptor = {
        blocks: [
	    [' ', '%d days ago', 'days', 0],
	    ['r', 'Today', 'today'],
	    ],};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
