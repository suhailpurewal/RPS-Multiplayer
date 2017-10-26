$(document).ready(function(){
console.log("JS is working");
 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZWThOfHKt22Eh4pSGpWlv1Ck4cxzrBis",
    authDomain: "rps-multiplayer-52c4f.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-52c4f.firebaseio.com",
    projectId: "rps-multiplayer-52c4f",
    storageBucket: "",
    messagingSenderId: "326256983785"
  };
  firebase.initializeApp(config);

var database = firebase.database();
// var oneName;
// var twoName;
// var oneChoice;
// var twoChoice;
// var choices = ["Rock", "Paper", "Scissors"];
var placeholder1;
var placeholder2;
var oneWin = 0;
var oneLoss = 0;
var twoWin = 0;
var twoLoss = 0;
var draw = 0;
var name1 = "";
var name2 = "Fred";

function startGame(){
	$("#start-game").on("click", function() {
		$(".jumbotron").slideUp();
		$(".gamerow").removeClass("hidden");
		$(".chatRow").removeClass("hidden");
	})
}

function nameOne() {
$("#submit-name").on("click", function() {
	name1 = $("#player-name").val().trim()
	console.log(name);
	// $(".nameRow").addClass("hidden");
		$("#start-game").removeClass("hidden");
		$(".nameRow").slideUp();

});
}
// function nametwo() {
// $("#submit-name").on("click", function() {
// 	name = $("#player-name").val().trim()
// 	console.log(name);
// 	$(".nameRow").addClass("hidden");

// });
// }

function leftChoice() {
$(".p1").on("click", function(){
	placeholder1 = this.id;
	console.log(placeholder1);
	console.log("clicking button");
	winCheck();
	});
}
function righttChoice() {
$(".p2").on("click", function(){
	placeholder2 = this.id;
	console.log(placeholder2);
	console.log("clicking button");
	winCheck();
	});
}
function endRound() {
	placeholder2 = undefined;
	placeholder1 = undefined;
}
	
function winCheck() {
	/// tie scenario
	if(placeholder1 === placeholder2){
		alert("it's a tie!")
		draw++;
		$("#p1stats").html(name1 + " <br> Wins: " + oneWin + " Losses: " + oneLoss + " Draws: " + draw);
		$("#p2stats").html(name2 + " <br> Wins: " + twoWin + " Losses: " + twoLoss + " Draws: " + draw);
		endRound();
		//update middle box to shgow tie
		//update score
	}
	//winning scenarios
	else if((placeholder1 === "rock" && placeholder2 === "scissors") || (placeholder1 === "scissors" && placeholder2 === "paper") || (placeholder1 === "paper" && placeholder2 === "rock")) {
		alert("player one wins!")
		oneWin++;
		twoLoss++;
		endRound();
		$("#p1stats").html(name1 + " <br> Wins: " + oneWin + " Losses: " + oneLoss + " Draws: " + draw);
		$("#p2stats").html(name2 + " <br> Wins: " + twoWin + " Losses: " + twoLoss + " Draws: " + draw);
		console.log("------p1 win " + oneWin);
		console.log("------p1 loss " + oneLoss);
		console.log("------p2 win " + twoWin);
		console.log("------p2 loss " + twoLoss);
		//update middle box to show player 1 wins
		//update score
	}
	//losing scenarios	
	else if((placeholder2 === "rock" && placeholder1 === "scissors") || (placeholder2 === "scissors" && placeholder1 === "paper") || (placeholder2 === "paper" && placeholder1 === "rock")) {
		alert("player two wins!")
		twoWin++;
		oneLoss++;
		endRound();
		$("#p1stats").html(name1 + " <br> Wins: " + oneWin + " Losses: " + oneLoss + " Draws: " + draw);
		$("#p2stats").html(name2 + " <br> Wins: " + twoWin + " Losses: " + twoLoss + " Draws: " + draw);
		console.log("------p1 win " + oneWin);
		console.log("------p1 loss " + oneLoss);
		console.log("------p2 win " + twoWin);
		console.log("------p2 loss " + twoLoss);
		//update middle box to show player 2 wins
		// update score
	}
};

















// calling functions
leftChoice();
righttChoice();
nameOne();
startGame();










});