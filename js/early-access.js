$(document).ready(function(){
	var earlyAccessView = $("#early-access-view");
	var textField = $("#email");
	var alertMessage = $("#early-access-success-view");

	$("#submitEarlyAccess").click(function(){
		var email = textField.val();
		console.log(email);
		$.post("https://nexme.us/api/early-access", {"email": email}, function(data) {
			earlyAccessView.hide();
			alertMessage.fadeIn("slow");
		})
	})
})
