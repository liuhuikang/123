//创建异步对象
function createXhr(){
	var xhr=null;
	if(window.XMLHttpRequest){
		 xhr=new XMLHttpRequest();
	}else{
		 xhr=new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}
function $(id){
	return document.getElementById(id);
}