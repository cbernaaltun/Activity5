var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};

function addScore()
{
	var name = $("name").value;
	var score = $("score").value;
	if(name === '') {
		alert("Please write a name!");
		return;
	}
	if(score === '' || score <= 0) {
		alert("Please write a valid score!");
		return;
	}

	names.push(name);
	scores.push(parseFloat(score));

	$("name").value = "";
	$("score").value = "";

	$("name").focus();
	alert("Added successfully!")
}

function displayResults()
{
	document.getElementById("results").innerHTML = "";
	var total = 0;
	var biggest = 0;
	var biggestIndex = 0;
	for(var i=0;i<scores.length;i++)
	{
		if(scores[i] > biggest) {
			biggestIndex = i;
			biggest = scores[i];
		}
		total += scores[i];
	}

	var average = total / scores.length; 
	
	document.getElementById("results").innerHTML+="<p> Average score = "+ average + "</p> "
	document.getElementById("results").innerHTML+="<p> High score = "+ names[biggestIndex] + " with a score of " + biggest + "</p> "
}

function displayScores()
{
	document.getElementById("scores_table").innerHTML = "<tr><td><b>Name</b></td><td><b>Score</b></td></tr>";
	for(var i=0;i<scores.length;i++)
	{
		document.getElementById("scores_table").innerHTML += "<tr> <td>" + names[i] + "</td> <td> " + scores[i] + " </td> </tr>"
	}
}


