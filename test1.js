(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};};
    
    ext.wait_random = function(callback){
        time = Math.random() * 10;
        console.log('Wating for %d seconds', time);
        window.setTimeout(function(){
            callback();}, time*1000);};
    
    ext.getPirmotion = function(port,callback){
		if(typeof port=="string"){
			port = ports[port];
		}
		var deviceId = 6;
		var extId = genNextID(port,0);
		var data = [extId, 0x01, deviceId, port];
		data = [data.length+3, 0xff, 0x55, data.length].concat(data);
		_selectors["callback_"+extId] = callback;
 		addPackage(arrayBufferFromArray(data), _selectors["callback_"+extId]);
	}
        

    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };
    
    ext.wait_time = function(base, callback){
        window.setTimeout(function(){
           callback();}, base*1000);};
        

    var descriptor = {
        blocks: [
            ['r', '%n 의 %n 제곱', 'power', 3, 3],
            ['w', 'wait for random time', 'wait_random'],
            ['w', 'wait for %n seconds', 'wait_time', 1],
            ["R", "pir motion sensor %d.port","getPirmotion","Port2"],
        ],};

    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
