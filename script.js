// JavaScript Document
window.onload = function(){
	showContent("home");

	addHandlers();
}

function addHandlers(){
	$("#linkHome").click(function(){showContent("home");});
	$("#linkAbout").click(function(){showContent("about");});
	$("#linkPhoto").click(function(){showContent("photo");});
	$("#linkDigital").click(function(){showContent("digital");});
	$("#linkBlog").click(function(){showContent("blog");});
}

function showContent(section){
	$(".contentDiv").not('#' + section + 'Div').hide();
	$('#'+ section + 'Div').show();
	console.log(section);
}