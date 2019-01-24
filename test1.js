(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
   
	
   ext.days = function(base){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();
    var day = yy+"년"+mm+"월"+(dd-base)+"일";
    return day;
   };
	
   ext.today = function(){
    var today = new Date();
	   return today;};
	
   ext.wait_time = function(base, callback){
   window.setTimeout(function(){
	   callback();};, base*1000);
   };
        

    var descriptor = {
        blocks: [
	    ['r', '%d days ago', 'days', 0],
	    ['r', 'Today', 'today'],
	    ['w', '%d 초 기다리기' , 'wait_time', 1],
	    ],};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
