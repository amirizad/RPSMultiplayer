var config = {
  apiKey: "AIzaSyDU7Cddk_suODSN77BSaFAj5uSF7WDZc_A",
  authDomain: "multirps-9190a.firebaseapp.com",
  databaseURL: "https://multirps-9190a.firebaseio.com",
  projectId: "multirps-9190a",
  storageBucket: "multirps-9190a.appspot.com",
  messagingSenderId: "771308533274"
};
firebase.initializeApp(config);
var database = firebase.database();

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function(snap) {
  if (snap.val()) {
    var con = connectionsRef.push(true);
    con.onDisconnect().remove();
  }
});

connectionsRef.on("value", function(snap) {
  $("#game-players").text(snap.numChildren());
});

var pName = "";
var playerNo = 0;

database.ref('/rpsdata').on('value',function(snapshot){


});





$('#start').click(function(event){
  event.preventDefault();
  var inputName = $('#player-name').val();
  if( inputName.length > 0 ){
  	pName = inputName;
  	setPlayer(playerNo);
  }
})







// on unload message: player disconnected
// chat: 

// players:
// 	player: 1 or 2
// 	name
// 	wins
// 	losses
// 	choice

// turn:1 or 2

function winner(p1, p2){
	var mix = p1 + p2;
	if(p1 === p2){
		return "tie";
	} else if( mix === "rs" || mix === "pr" || mix === "sp" ){
		return "p1";
	}else{
		return "p2";
	}
}

function setPlayer(playerNo){
	$('#namelbl').text('Hi ' + pName + '! You are Player ' + playerNo);
}
// 
// $('#turnlbl').text('Waiting for ' + playerName + ' to choose.');
// $('#turnlbl').text('It\'s Your Turn!');
