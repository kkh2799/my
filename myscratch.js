!function(t){t.get_ext_status=function(t){return ScratchExtensions.getStatus(t).status},t.get_ext_status_message=function(t){return ScratchExtensions.getStatus(t).msg},t._shutdown=function(){},t._getStatus=function(){return{status:2,msg:"Ready"}};var s="Extension Status Getter";ScratchExtensions.register(s,{blocks:[["r","status code of extension %s","get_ext_status",s],["r","status message of extension %s","get_ext_status_message",s]],url:"https://github.com/kkh2799/my/wiki/myScratch"},t)}({});