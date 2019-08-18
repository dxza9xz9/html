$('.Login-com').hide();
$(document).ready(function() {
	$('#Singin-header').click(function(event) {
		$("#Singin-header").removeClass("ling-h2");
    	$("#Login-header").addClass("ling-h2");
    	$(".Singin-com").fadeIn(1200);
    	$(".Login-com").fadeOut(500);	
	});
	$('#Login-header').click(function(event) {
		$("#Login-header").removeClass("ling-h2");
    	$("#Singin-header").addClass("ling-h2");
    	$(".Login-com").fadeIn(1200);
    	$(".Singin-com").fadeOut(500);
    });
});
//JS註冊部分
var send =document.querySelector('#Singin-send');
var log =document.querySelector('#Login-send');
send.addEventListener("click",singup,false);
log.addEventListener("click",login,false);
var Name =document.querySelector(".Name");
var Password=document.querySelector('.Password');
var Logname =document.querySelector('#Login-email');
var Logpassword=document.querySelector('#Login-password');

function singup(){
	var emailStr = document.querySelector('.Name').value;
	var passwordStr = document.querySelector('.Password').value;
	var account = {};
	account.email = emailStr;
	account.password = passwordStr;
	var xhr = new  XMLHttpRequest();
	xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
	xhr.setRequestHeader('Content-type','application/json');
	var data = JSON.stringify(account);
	xhr.send(data);
	xhr.onload = function(){
		var callbackData = JSON.parse(xhr.responseText);
		console.log(callbackData);
		var verStr = callbackData.message;
		console.log(xhr);
		Name.value ='';
		Password.value='';
		if(verStr =='帳號註冊成功'){
			alert("帳號註冊成功");
			console.log(account)
		}else{
			alert(verStr);
		}
	}
}
function login(){
	var emailStr = document.querySelector('#Login-email').value;
	var passwordStr = document.querySelector('#Login-password').value;
	var account = {};
	account.email = emailStr;
	account.password = passwordStr;
	var xhr = new  XMLHttpRequest();
	xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
	xhr.setRequestHeader('Content-type','application/json');
	var data = JSON.stringify(account);
	console.log(data);
	xhr.send(data);
	xhr.onload = function(){
		var callbackData = JSON.parse(xhr.responseText);
		console.log(callbackData);
		var verStr = callbackData.message;
		console.log(xhr);
		Logname.value='';
		Logpassword.value='';
		if(verStr =='登入成功'){
			alert("登入成功");
		}else{
			alert(verStr);
		}
	}

}  	