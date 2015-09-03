num = prompt ("Please pick a number, either 1, 2 or 3");
while (num != '1' && num != '2' && num != '3')
num = prompt ("To continue please enter a number, either 1, 2 or 3");

if (num ==1)
document.write ('<img src ="QueenOfHearts.jpg" alt = "Queen of Hearts" width = "250" height = "350">');

	else if (num ==2)
	document.write ('<img src ="AceOfSpades.jpg" alt = "Ace Of Spades" width = "250" height = "400">');
	
		else
		document.write ('<img src ="TheJoker.jpg" alt = "The Joker" width = "250" height = "400">');
		
		if (num ==1)
document.write ('<div id="card1">');

	else if (num ==2)
	document.write ('<div id="card2">');
	
		else
		document.write ('<div id="card3">');