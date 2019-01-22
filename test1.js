(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
    ext.wait_random = function(callback){
        time = Math.random() * 10;
        console.log('Wating for %d seconds', time);
        window.setTimeout(function(){
            callback();}, time*1000);};

    ext.power = function(base, exponent) {+
        return Math.pow(base, exponent);
    };
    
    ext.wait_time = function(base, callback){
        window.setTimeout(function(){
           callback();}, base*1000);};
	
   ext.days = function(base){
	   today = new Date();
	   return today.getDate() - base;};
        

    var descriptor = {
        blocks: [
            ['r', '%n 의 %n 제곱', 'power', 3, 3],
            ['w', 'wait for random time', 'wait_random'],
            ['w', 'wait for %d seconds', 'wait_time', 1],
	    ["r", "%d days ago", "days", 0],
        ],};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
