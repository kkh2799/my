(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
   var today = new Date();
   var dd = today.getDate();
   var mm = today.ddetMonth()+1;
   var yy = today.getFullYear();
	
   ext.days = function(){
    return yy+'/'+mm+'/'+dd-base;
   };
        

    var descriptor = {
        blocks: [
	    ['r', '%d days ago', 'days', 0],
        ],};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
