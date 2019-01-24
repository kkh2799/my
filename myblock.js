(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
    ext.wait_random = function(callback){
        time = Math.random();
        console.log('Wating for %d seconds', time);
        return time;
        window.setTimeout(function(){
            console.log('Time');}, time*1000);};
        

    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };
    
   ext.wait_time = function(base, callback){
   	window.setTimeout(function(){
	   return base;
	    callback();
	}, base*1000);
   };
	
  ext.wait_time2 = function(base, callback){
   	window.setTimeout(function(){
	   callback();
	}, base*1000);
   };
	
  ext.test_boolean = function(){};
        
  ext.test_hot = function(){};

    var descriptor = {
        blocks: [
            ['r', '%n 의 %n 제곱', 'power', 3, 3],
            ['w', 'wait for random time', 'wait_random'],
            ['w', 'wait for %n seconds', 'wait_time', 1],
	    ['w', '%m.seconds 초 기다리기', 'wait_time2', 1],
	    ['b', 'test boolean block', 'test_boolean'],
	    ['h', 'test hot block', 'test_hot'],
        ],
        menus: {
            seconds: ['1','2','3','4','5','6','7','8','9','10'],
        },
        url: 'http://info.scratch.mit.edu/WeDo',
        displayName: 'LEGO WeDo 1.0'
};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
