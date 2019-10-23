    function $(id){
      return document.getElementById(id);
    }
var max = 20;//total number of questions
    var box = $('box');
    var answerBox = $('answerBox');
    var answerText = $('answerText');
    var submitButton = $('submitButton');
    var startScreen = '<h2>AS Greek Vocab Tester</h2><button onclick="startTest(\'G\')">Greek to English</button>';
    ////////////////
    //the following section is ~an initialisation
    //NB the variable words is from the other script file!
    if(!words){
      console.log('ERROR: word list empty');
    }
    fillBox(startScreen);
    var i = 0;
    var score = 0;
    var randI=0;//index of word being tested
    ///////////////
    function fillBox(text){
      box.innerHTML = text;
    }
    function startTest(dir){
	i=0;
	score = 0;
	fillBox('Number of questions: <input id="max" type=number step="1" min="1" max="1000" value="20"><br><button onclick="max = $(\'max\').value; contTest(\'G\');">Go</button> <button onclick="fillBox(startScreen)">Back</button>');
      //contTest(dir);
    }

function contTest(dir='G'){
    box.style.backgroundColor = 'white';
    answerText.value = null;
    if(i>= max){
	fillBox(score+' out of '+max+' correct.<br><button onclick="fillBox(startScreen);">Back</button>');
	return;
    }
    randI = Math.floor(Math.random()*(words.length));
      
      if(dir=='G'){
        var greek = words[randI][0].join(', ');
        fillBox('Translate into English:<br><strong>'+greek+'</strong>');
        answerText.focus();
        window.addEventListener('keypress',checkSubmit);
	submitButton.addEventListener('click',submitAnswer);
      }
    }

function checkSubmit(e){
    if(e.key == 'Enter'){
        submitAnswer();
    }
}
    var answer;
    function submitAnswer(){
      answer = answerText.value.toLowerCase();
      var correct = false;
      for(var soln of words[randI][1]){
          if(answer == soln.toLowerCase()){
          correct = true;
        }
      }
	if(!correct){
	    //alert('incorrect');
	    box.style.backgroundColor = 'red';
	    fillBox('<strong>'+words[randI][0].join(', ') +'</strong><br>'+words[randI][1].join(', '));
	} else {
	    //alert('correct');
	    box.style.backgroundColor = 'lightgreen';
	    fillBox('<strong>'+words[randI][0].join(', ') +'</strong><br>'+words[randI][1].join(', '));
	    score++;
	}

	window.removeEventListener('keypress',checkSubmit);
	submitButton.removeEventListener('click',submitAnswer);
	i++;
	setTimeout(contTest, 1750);
    }
