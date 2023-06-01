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
function display_about(){
	document.documentElement.scrollTop=263;
}
function display_skills(){
	document.documentElement.scrollTop=600;
}
function display_Experience(){
	document.documentElement.scrollTop=1100;
}
function display_Education(){
	document.documentElement.scrollTop=1600;
}
function display_Portfolio(){
	document.documentElement.scrollTop=2100;
}
function display_contact(){
	document.documentElement.scrollTop=3100;
}
/*----------------------------------------------------------------*/
function funclick(){
	document.querySelector("ul").classList.toggle("show_menu");
}