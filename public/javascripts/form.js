//отправка сообщения из обратной формы на почтовый ящик
$(function(){
	var visitorName, visitorEmail, visitorMessage; 
	sendMail();
	respondOnSubmit();
});


function sendMail () {
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
		return false; //чтобы не перезагружалась страничка, в качестве альтернативы preventDefault
		}
		respondOnSubmit();	
	});
}

// функция для модального окна с ответом на сабмит
function respondOnSubmit () {
	$("#sendButton").click(function() {
		if (visitorName !="" && visitorEmail !="" && visitorMessage !="") {
    			//открыть модальное окно с id="afterSend"
	   		 	$("#afterSend").modal('show');
	   		 	setTimeout(function() {
	   		 		$("#visitorMessage").val("");
	   		 	}, 1000);
	   	}
  	});
}