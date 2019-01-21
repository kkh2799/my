var projectID=location.pathname.slice('/projects/'.length,location.pathname.length-1);
var x = "N/A";
var scratch = {
love: function(project) {$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/lovers/"+project+"/add/",data: {usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username}})},
fave: function(project) {$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/favoriters/"+project+"/add/",data: {usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username}})},
followUser: function(user) {$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/followers/"+user+"/add/",data: {usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username}})},

};

var a = 0;
var apianswer = "";
var variable;
var aaa = "";
var chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","1","2","3","4","5","6","7","8","9","0","!","@","#","%","^","&","(",")"];
var charstwo = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","+","1","2","3","4","5","6","7","8","9","0","!","@","#","%","^","&","(",")"];
var codeanswer = "";
var a;
var array = [];
var xml;
(function(ext) {
    // When Scratch closes, do this
    ext._shutdown = function() {
        // Nothing here at the moment...
    };
 
    // Tell Scratch if the extension is ready to do stuff
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'}; // Status 1 = Red, Error // Status 1 = Yellow, Not Ready // Status 2 = Green, Ready
    };
 
    // Blocks to add to Scratch
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'Redirect to %s', 'link', 'https://scratch.mit.edu/'],
[' ', 'Pop-up %s', 'pop', 'hi'],
[' ', 'ask %s as prompt', 'prompt', 'How are you?'],
['r', 'prompt answer', 'answerprompt'],
[' ', 'set answer %s', 'set', 'N/A'],
['r', 'pi', 'pi'],
['r','Math %m.superMath of %n %n', 'supermath', 'radian sine', 9, 2],
[' ','discuss', 'discuss'],
['r','WebURL','url'],
['h','Always Do','hat1'],
['b','caseEqual %s %s','equal','',''],
[' ','Google %s','google','google'],
['r','code encode %s','code','hi'],
['r','text %s to google code','googlecode','do a barrel roll'],
['r','js reporter %s','returnjs','return hi;'],
['b','js boolean %s','returnjstwo','return true;'],
[' ','js run %s','jscode','alert("hi");'],
['r','if %b then %s else %s', 'ifreport',false,'hi','bye'],
['r','tab name','tab'],
[' ','api type: %s , Data %s , URL: %s','apiblock','get','','scratch.mit.edu'],
['r','api data','apireport'],
[' ','love','lv'],
[' ','fave','fv'],
[' ','follow %s','flw','AmazinigMech2418'],
            [' ','html %s','htmlll','lol'],
            ['b','true','lll'],
            [' ','download %s to file %s','downloadBlck','hi','hi.txt']
        ],
menus: {
txt: ['hi','bye','how are you?'],
superMath: ['radian sine', 'radian cosine', 'radian tangent', 'asin', 'atan', 'acos', 'power'],
geo: ['latitude','longitude']
}
    };
 
    // What blocks do go here
    ext.link = function(param1) {
window.location.assign(param1);
}
 ext.pop = function(param1) {
alert(param1);
}
ext.prompt = function(param1) {
x = prompt(param1);
}
ext.answerprompt = function() {
return x;
}
ext.set = function(a) {
x = a;
}
ext.pi = function() {
return Math.PI;
}
ext.supermath = function(type,number,num2) {
switch (type) {
case 'radian sine':
return Math.sin(number);
break;
case 'radian cosine':
return Math.cos(number);
break;
case 'radian tangent':
return Math.tan(number);
break;
case 'asin':
return Math.asin(number);
break;
case 'acos':
return Math.acos(number);
break;
case 'atan':
return Math.atan(number);
break;
case 'power':
return Math.pow(number,num2);
}
}
ext.discuss = function() {
aaa = document.getElementsByTagName("a")[3];
aaa.href = "/discuss";
aaa.innerHTML = "Discuss";
}
ext.url = function() {
return window.location.href;
}
ext.hat1 = function() {
return true;
}
ext.equal = function(n1,n2) {
return n1 === n2;
}
ext.google = function(param) {
window.location.assign("https://www.google.com/search?safe=strict&q="+param+"&gs_l=psy-ab.3..0i67k1l2j0j0i131k1.19673.23433.0.23816.21.20.1.0.0.0.152.1420.18j2.20.0....0...1.1.64.psy-ab..0.21.1419.l-5OKtPByZk");
}
ext.code = function(codeparam) {
array = [];
for(i=0;i<codeparam.length+0;i++){
array.push(chars[chars.indexOf(codeparam.charAt(i))+(10-i)]);
}
return array.join("");
}

ext.googlecode = function(param) {
array = [];
for(i=0;i<param.length+0;i++){
array.push(charstwo[chars.indexOf(param.charAt(i))]);
}
return array.join("");
}
ext.returnjs = function(type) {
return eval(type);

}
ext.returnjstwo = function(type) {
return eval(type);

}
ext.jscode = function(code) {
eval(code);
}
ext.ifreport = function(bool, inputone, inputtwo) {
if(bool) {
return inputone;
} else {
return inputtwo;
}
}
ext.tab = function(){
return document.getElementsByTagName("title")[0].innerHTML;
}
ext.apiblock = function(type,dataparam,urlparam){

jQuery.get(urlparam,function(data,status){apianswer = data;});


}
ext.apireport = function() {
return apianswer;
}
ext.lv = function() {
scratch.love(projectID);
}
ext.fv = function() {
scratch.fave(projectID);
}
ext.flw = function(user) {
scratch.followUser(user);
}
ext.htmlll = function(htmllll) {
document.getElementsByTagName("html")[0].innerHTML=htmllll;
}
ext.lll = function() {
return true;
}
ext.downloadBlk = function(p1,p2) {
var el = document.createElement("A");
    el.setAttribute("href","data:application,"+p1);
    el.setAttribute("download",p2);    
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        el.dispatchEvent(event);
    }
    else {
        el.click();
    }
}
    // Name of Scratch Extension goes here
    ScratchExtensions.register('Super', descriptor, ext); 
     // The name is 'Hello, World!''
})({});
