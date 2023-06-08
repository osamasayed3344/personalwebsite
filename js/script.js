window.onscroll=function(){myfunction()}

function myfunction(){
	if(document.documentElement.scrollTop > 100){
		document.querySelector("header").className="test";
	}
	else{
		document.querySelector("header").className="";
	}
}
function display_logo(){
	document.documentElement.scrollTop=0;
}
/*----------------------------------------------------------------*/
function funclick(){
	document.querySelector("ul").classList.toggle("show_menu");
}