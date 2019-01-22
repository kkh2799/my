(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
   
	
   ext.days = function(base){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();
    var day = yy+'year'+mm+'month'+dd-base;
    return day;
   };
	
   ext.today = function(){
    var today = new Date();
	   return today;};
        

    var descriptor = {
        blocks: [
	    ['r', '%d days ago', 'days', 0],
	    ['r', 'Today', 'today'],
	    ],};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
