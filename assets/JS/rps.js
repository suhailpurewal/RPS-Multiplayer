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
var chatStore = database.ref("chat1");
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
var selectedOne = false;
var selectedTwo = false;
var chat1 = "";
var chat2 = "";

 	database.ref().set({
    oneWin: oneWin,
    oneLoss: oneLoss,
    twoWin: twoWin,
    twoLoss: twoLoss,
    draw: draw,
    name1: name1,
    name2: name2,
    chat1: chat1,
    chat2: chat2,

    });





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
	database.ref().set({
        name1: name1
      });
	console.log(name);
	// $(".nameRow").addClass("hidden");
		$("#start-game").removeClass("hidden");
		$(".nameRow").slideUp();

});
}
// function nametwo() {
// $("#submit-name").on("click", function() {
// 	name = $("#player-name").val().trim()
      // database.ref().set({
        // name2: name2
      // });
// 	console.log(name);
// 	$(".nameRow").addClass("hidden");
// 	$(".nameRow").slideUp();

// });
// }

function leftChoice() {
$(".p1").on("click", function(){
	placeholder1 = this.id;
	console.log(placeholder1);
	selectedOne = true;
	database.ref().set({
        placeholder1: placeholder1,
        selectedOne: selectedOne,
      });
	console.log("clicking button");
	winCheck();
	});
}
function righttChoice() {
$(".p2").on("click", function(){
	placeholder2 = this.id;
	console.log(placeholder2);
	selectedTwo = true;
		database.ref().set({
        placeholder2: placeholder2,
        selectedTwo: selectedTwo,
      });
	console.log("clicking button");
	winCheck();
	});
}
function endRound() {
	placeholder2 = "";
	placeholder1 = "";
	selectedOne = false;
	selectedTwo = false;
	database.ref().set({
        placeholder1: placeholder1,
        placeholder2: placeholder2,
        selectedOne: selectedOne,
        selectedTwo: selectedTwo,
      });
}

function leftChat() {
$("#send-button").on("click", function(){
	chat1 = $("#chat").val().trim()
		chatStore.push({
        chat1: chat1,
        time: firebase.database.ServerValue.TIMESTAMP,
        
      });
	chatStore.orderByChild("time").on("child_added", function(snapshot) {
		snapshot.val()
		console.log(snapshot.val())
		// append with snapshot.val.chat1
	});

		// $("#chat").val("");
		// $("#chatbox").append(name1 + ": " + chat1);
		// $("#chatbox").append("<br>");
});
}
// do the same for right chat
	
function winCheck() {
	/// tie scenario
	if(placeholder1 === placeholder2){
		alert("it's a tie!")
		draw++;
		$("#p1stats").html(name1 + " <br> Wins: " + oneWin + " Losses: " + oneLoss + " Draws: " + draw);
		$("#p2stats").html(name2 + " <br> Wins: " + twoWin + " Losses: " + twoLoss + " Draws: " + draw);
	database.ref().set({
    placeholder1: placeholder1,
    placeholder2: placeholder2,
    oneWin: oneWin,
    oneLoss: oneLoss,
    twoWin: twoWin,
    twoLoss: twoLoss,
    draw: draw,
    name1: name1,
    name2: name2,
    selectedOne: selectedOne,
    selectedTwo: selectedTwo,

    });
		endRound();
		//update middle box to shgow tie
		//update score
	}
	//winning scenarios
	else if((placeholder1 === "rock" && placeholder2 === "scissors") || (placeholder1 === "scissors" && placeholder2 === "paper") || (placeholder1 === "paper" && placeholder2 === "rock")) {
		alert(name1 + " wins!")
		oneWin++;
		twoLoss++;
		endRound();
		$("#p1stats").html(name1 + " <br> Wins: " + oneWin + " Losses: " + oneLoss + " Draws: " + draw);
		$("#p2stats").html(name2 + " <br> Wins: " + twoWin + " Losses: " + twoLoss + " Draws: " + draw);
	database.ref().set({
    placeholder1: placeholder1,
    placeholder2: placeholder2,
    oneWin: oneWin,
    oneLoss: oneLoss,
    twoWin: twoWin,
    twoLoss: twoLoss,
    draw: draw,
    name1: name1,
    name2: name2,
    selectedOne: selectedOne,
    selectedTwo: selectedTwo,


    });
		console.log("------p1 has won " + oneWin + " times");
		console.log("------p1 has lost " + oneLoss + " times");
		console.log("------p2 has won " + twoWin + " times");
		console.log("------p2 has lost " + twoLoss + " times");
		//update middle box to show player 1 wins
		//update score
	}
	//losing scenarios	
	else if((placeholder2 === "rock" && placeholder1 === "scissors") || (placeholder2 === "scissors" && placeholder1 === "paper") || (placeholder2 === "paper" && placeholder1 === "rock")) {
		alert(name2 + " wins!");
		twoWin++;
		oneLoss++;
		endRound();
		$("#p1stats").html(name1 + " <br> Wins: " + oneWin + " Losses: " + oneLoss + " Draws: " + draw);
		$("#p2stats").html(name2 + " <br> Wins: " + twoWin + " Losses: " + twoLoss + " Draws: " + draw);
	database.ref().set({
    placeholder1: placeholder1,
    placeholder2: placeholder2,
    oneWin: oneWin,
    oneLoss: oneLoss,
    twoWin: twoWin,
    twoLoss: twoLoss,
    draw: draw,
    name1: name1,
    name2: name2,
    selectedOne: selectedOne,
    selectedTwo: selectedTwo,


    });
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
leftChat();










});

// use .push on second instances of db stuff
//snapshot and child - lets you view last stored doc
// two parts - oen for game and one for chat
// store game obj in seperate from root obj
// CRUD - create read update delete