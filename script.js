$(function () {
	
	var $form = $("#form");
	var $name = $("#name");
	var $email = $("#email");
	var $reserve = $("#reserve");
	var $seats = $(".seat");


	//When a seat button is clicked, the input form slides down into place
	$seats.click(function(){
		$("#form").slideDown("slow");

		$(this).find(":first-child").addClass("selected");	

		deselectSeats();
		$(this).addClass("selected");	

	});

	$seats.hover(function() {
		$(this).css("opacity", 0.5);
	},
	function() {
		$(this).css("opacity", 1);
	});

	//When the reserve button is clicked, this checks the input fields and lets the user know their seat is reserved.
	$reserve.click(function() {
		var valid = checkInput();
		var name = $name.val();
		if(valid) {
			$(".selected").css("background-color","red");
			$(".selected").append( " This seat is reserved for:  ").append(name);
			alert("Seat # has been reserved for you. Enjoy the show!");
		}
	});

	function deselectSeats() {
		$seats.removeClass("selected");
	}

	//this function returns true if both of the input fields have info in them, false if not.
	function checkInput() {
		if(!($name.val().length > 0)) {
			alert("Please enter your name.");
			return false;
		}
		else if(!($email.val().includes("@") && $email.val().includes("."))) {
			alert("Please enter a valid e-mail address in the format \'Name@domain.com\'");
			return false;
		}
		else {
			return true;
		}
	}
});