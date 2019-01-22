(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
    ext.wait_random = function(callback){
        time = Math.random() * 10;
        console.log('Wating for %d seconds', time);
        window.setTimeout(function(){
            console.log('Time');}, time*1000);};
        

    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };
    
    ext.wait_time = function(base, callback){
        window.setTimeout(function(){
           console.log('in');}, base*1000);};
        

    var descriptor = {
        blocks: [
            ['r', '%n 의 %n 제곱', 'power', 3, 3],
            ['w', 'wait for random time', 'wait_random'],
            ['w', 'wait for %n seconds', 'wait_time', 1],
        ],};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
