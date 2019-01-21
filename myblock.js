(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
    ext.wait random = function(callback){
        time = Math.random();
        console.log('Wating for ' + time + ' seconds');
        window.setTimeout(function(){
            callback();}, time*1000);};
        

    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };

    var descriptor = {
        blocks: [
            ['r', '%n 의 %n 제곱', 'power', 2, 3],
            ['w', 'wait for random time', 'wait_random'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
