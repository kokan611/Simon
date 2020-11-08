var colors=["red","blue","yellow","green"];
var level=0;
var alt=0;
var randomComputerGen=[];
var randomUserGen=[];

 function playSound(name)
 {
   var audio = new Audio("sounds/"+name+".mp3");
   audio.play();
 }
function nextSequence()
{level++;
  randomUserGen=[];
  $("h1").text("Level  "+level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomColor = colors[randomNumber];
  playSound(randomColor);
  randomComputerGen.push(randomColor);
  $('#'+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  alt=1;


}


function reload()
 {
   randomUserGen=[];
  randomComputerGen=[];
  alt=0;
  level=0;
 }


function comparison(currentLevel)
{if(randomComputerGen[currentLevel]===randomUserGen[currentLevel])
    {   if(randomComputerGen.length==randomUserGen.length)

    {  $("h1").text("Good");
    nextSequence();}
    }
    else
    {  $("h1").text("Game Over! Try AGain");
    playSound("wrong");
    $("body").addClass("pressed").delay(1000).queue(function(next){
$(this).removeClass("pressed");
next();
});
      reload();}


}


$(".btn").click(function()
  {      if(alt==1)
      { var userClicked = $(this).attr("id");
     randomUserGen.push(userClicked);
      comparison((randomUserGen.length)-1);  }
      else {
        $("h1").text("Do not click, Press any key instead").delay(1000).queue(function(next){
    $(this).text("Press A key to start");;
    next();
});   playSound("wrong");
        $("body").addClass("pressed").delay(1000).queue(function(next){
    $(this).removeClass("pressed");
    next();
});
      }

});




$(document).keypress(function(){
  if(level===0)
   {
     nextSequence();
   }
});
