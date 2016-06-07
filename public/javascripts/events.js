//изменение бекграунда при ховере на span как часть слогана
$(document).ready(function(){
	$("#backStage").hover(function(){
	$(".theaterStage").css({'background': 'url(../images/theaterBackstage.jpg) center 0', 'background-size': 'cover'}),
	$(".mainPart").css({'visibility': 'hidden'}),
	$(".mainPart").text("Hello world!");
	}, function(){
	$(".theaterStage").css({'background': 'url(../images/Romanian_Opera_House_Timisoara_cut_2.jpg) center 0', 'background-size': 'cover'}),
	$(".replacedPart").css({"display": "none"}),
	$(".mainPart").text("Front-end is when you look at things this way!"),
	$(".mainPart").css({'visibility': 'visible'});
	});
	//- $("#backStage").hover(function(){
	//- $(".slogan").fadeOut();
	//- }, function(){
	//- $(".slogan").fadeIn();
	//- });
	});


//набор приветствия при загрузке странички
var text = "Welcome to my place!\nGlad to see you here!";
i = 0;
function type(){
	i++;
	if( i <= text.length )
		document.querySelector(".typeText").innerHTML = text.substring(0, i);
		setTimeout(type, 150);
}

type();



//отправка сообщения из обратной формы на почтовый ящик
$(function(){
	// var visitorName = $("#visitorName").val();
	// visitorEmail = $("#visitorEmail").val();
	// visitorMessage = $("#visitorMessage").val();
	// if(visitorName != "" || visitorEmail != "" || visitorMessage !="") {
		sendMail();
		respondOnSubmit();
});

function sendMail () {
	var visitorName, visitorEmail, visitorMessage;
			$("#sendButton").click(function() {
				console.log('start function')
				visitorName = $("#visitorName").val();
				visitorEmail = $("#visitorEmail").val();
				visitorMessage = $("#visitorMessage").val();
				console.log('get data');
				if(visitorName != "" && visitorEmail != "" && visitorMessage !="") {
					$.post("/", {
						visitorName: visitorName,
						visitorEmail: visitorEmail,
						visitorMessage: visitorMessage
					})
					console.log('post done')
					$("textarea").val('');
					return false; //чтобы не перезагружалась страничка, в качестве альтернативы preventDefault
				}
		});
}


function respondOnSubmit () {
		$("#sendButton").click(function() {
			 if ($("#visitorName").val() != '' && $("#visitorEmail").val() != '') {
	    			//открыть модальное окно с id="afterSend"
		   		 	$("#afterSend").modal('hide');
		   		}
		   	else {
		   			$("#afterSend").modal('show');
		   	}	
	  	});
}





				//- var text = "Welcome to my place!\nGlad to see you here!";
				//- i = 0;
				//- function type(){
				//- 	i++;
				//- 	if( i <= text.length )
				//- 		document.querySelector(".typeText").innerHTML = text.substring(0, i);

				//- 	setTimeout(type, 150);
				//- }

				//- //- function disappear(){
				//- //- 	document.querySelector(".typeText").style.visibility="hidden";
				//- //- 	setTimeout(disappear, 12000);
				//- //- }

				
				//- type();
				//- disappear();

				//- var text = "Dear guest, welcome to my site!";
				//- i = 0;

				//- function type(someString){
				//- 	var someString = this;
				//- 	i++;
				//- 	if( i <= this.length )
				//- 		document.querySelector(".typeText").innerHTML = this.substring(0, i);

				//- 	setTimeout(type, 50);
				//- }

				//- type(text);
				

				//- $(function(){
				//- 	sendMail();
				//- });

				//- function sendMail () {
				//- 	var visitorName, visitorEmail, visitorMessage;
				//- 	$("#sendButton").click(function() {
				//- 		console.log('start function')
				//- 		visitorName = $("#visitorName").val();
				//- 		visitorEmail = $("#visitorEmail").val();
				//- 		visitorMessage = $("#visitorMessage").val();
				//- 		console.log('get data');
				//- 		$.post("/", {
				//- 			visitorName: visitorName,
				//- 			visitorEmail: visitorEmail,
				//- 			visitorMessage: visitorMessage
				//- 		})
				//- 		console.log('post done');
				//- 		return false;
				//- 	}) //чтобы не перезагружалась страничка, в качестве альтернативы preventDefault
				//- }
