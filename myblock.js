(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};

    ext.my_test_block = function(callback) {
    time = Math.random();
        console.log('Waiting for ' + time + ' seconds');
        window.setTimeout(function() {
            callback();
        }, wait*1000);
    };

    var descriptor = {
        blocks: [
            ['w', 'my test block', 'my_test_block'],
            ['r', 'my test1 block', 'my_test1_block'],
            [' ', 'my test2 block', 'my_test2_block'],
            ['R', 'my test3 block', 'my_test3_block'],
            ['h', 'my test4 block', 'my_test4_block'],
            ['b', 'my test5 block', 'my_test5_block'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});
