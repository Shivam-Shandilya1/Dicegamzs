var numo = Math.random ();
var numt = numo*6;
var randumnumber = Math.ceil(numt);

var diceone = document.querySelector(".onedice"); 
if(randumnumber === 1)
{
diceone.setAttribute("src","images/dice1.png");
}else if (randumnumber === 2)
{
    diceone.setAttribute("src","images/dice2.png");
} else if (randumnumber === 3)
{
    diceone.setAttribute("src","images/dice3.png");
} else if (randumnumber === 4)
{
    diceone.setAttribute("src","images/dice4.png");
} else if (randumnumber === 5)
{
    diceone.setAttribute("src","images/dice5.png");
}else if (randumnumber === 6)
{
    diceone.setAttribute("src","images/dice6.png")
}
 else
{
    diceone.setAttribute("src","images/dice6.png")
}


var numone = Math.random ();
var numtwo = numone*6;
var randumnum = Math.ceil(numtwo);


var dicetwo = document.querySelector(".playertwodice"); 
if(randumnum === 1)
{
dicetwo.setAttribute("src","images/dice1.png");
}else if (randumnum === 2)
{
    dicetwo.setAttribute("src","images/dice2.png");
} else if (randumnum === 3)
{
    dicetwo.setAttribute("src","images/dice3.png");
} else if (randumnum === 4)
{
    dicetwo.setAttribute("src","images/dice4.png");
} else if (randumnum === 5)
{
    dicetwo.setAttribute("src","images/dice5.png");
}else if (randumnum === 6)
{
    dicetwo.setAttribute("src","images/dice6.png")
}
 else
{
    dicetwo.setAttribute("src","images/dice6.png")
}
var champion = document.querySelector("#heading");
var flaag = document.querySelector("#flag");
if(randumnumber > randumnum)
{
champion.innerHTML="Player 1 Wins";
flaag.setAttribute ("src","https://www.searchpng.com/wp-content/uploads/2019/07/Orange-Flag-PNG-Image-715x715.jpg")
}else if(randumnumber < randumnum)
{
    champion.innerHTML="Player 2 Wins";
    flaag.setAttribute ("src","https://www.searchpng.com/wp-content/uploads/2019/07/Orange-Flag-PNG-Image-715x715.jpg")
  
}else 
{
    champion.innerHTML="Draw";
}