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
	   callback();
	}, base*1000);
   };
        

    var descriptor = {
        blocks: [
            ['r', '%n 의 %n 제곱', 'power', 3, 3],
            ['w', 'wait for random time', 'wait_random'],
            ['w', 'wait for %n seconds', 'wait_time', 1],
        ],
        menus: {
            motorDirection: ['this way', 'that way', 'reverse'],
            lessMore: ['<', '>'],
            eNe: ['=','not =']
        },
        url: 'http://info.scratch.mit.edu/WeDo',
        displayName: 'LEGO WeDo 1.0'
};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
