// JQuery ready function is used here
// to access the DOM
$(document).ready(function(){

  //create object magic8ball
  var magic8Ball = {}

  // make array listOfAnswers
  magic8Ball.listOfAnswers = ["No", "Yes", "Maybe", "More Than Likely", "Possibly", "Probably Not"];
  //hides the #answers div
  $("#answer").hide();

// function to display a different img (8 ball back side)
  var displayOtherSide= function()
    {
      $("#eightball").attr("src","img/magic8ballQuestionback.png");
    };

  //function that displays answer when the button in clicked
  var onClick = function(){
      //hides the #answers div
      $("#answer").hide();  
      // displays 8 ball image
      $("#eightball").attr("src","img/magic8ballQuestion.png");
      //animation effect "shake" is added to the image above 
      $("#eightball").effect("shake");
      
      // setTimeout function used here to display
      // the answer in 500 milliseconds
      setTimeout(function() {
          //first the question is prompted
          var question = prompt("What Is Your Question?")
          //if the user hits cancel or ok without typing anything
          //  the whole program starts up again
          if(!question){
            return false;
          }else{
            // if the user inputs a question
            // the askQuestion method is called from 
            // the magic8Ball object, and we pass
            // the users question
            magic8Ball.askQuestion(question)
          }
        }, 500);
    };

    // askQuestion method
  magic8Ball.askQuestion = function (question)
    {
      // back of magic8ball is displayed
      $("#eightball").attr("src","img/magic8ballQuestionback.png");
      // variable randomNumber created and given all the Math.random() properites given
      randomNumber = Math.random();
      // array that holds the length of the array created above called listOfAnswers
      // the length is then multiplied by using Math.random
      randomNumberArray = randomNumber * this.listOfAnswers.length;
      // the answer gives a big number, so we use the floor() method 
      // to round the number downward to its nearest integer
      randomIndex = Math.floor(randomNumberArray);
      // created another veriable to hold random answers 
      randomAnswers = this.listOfAnswers[randomIndex];
      // the question and anwered is displayed
      $("#answer").text("Question: "+ question + "? "+"Answer: "+ randomAnswers);
      // hides the answer section again
      $("#answer").hide();
      // the answe fadesIn in 3 seconds
      $("#answer").fadeIn(3000);
    };
    // when the question button is clicked, it calls the Onclick function
  $("#questionButton").click(onClick);

});
