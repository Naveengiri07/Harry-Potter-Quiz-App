let startButton = document.getElementById('start-btn');
let container = document.getElementById('container');
let nextButton = document.getElementById('nextButton');
const questionList = [
    {
       question:"Who was Harry's godfather?",
       answers:[
           {option:'James Potter'},
           {option:'Hagrid'},
           {option:'Dumbledore'},
           {option:'Sirius Black'}
       ],
       correctAnswer:'Sirius Black'
       
    },

    {
       question:"What is the name of Lucius Malfoys's son?",
       answers:[
           {option:'Severus'},
           {option:'Draco'},
           {option:'Goyle'},
           {option:'Harry'}
       ],
       correctAnswer:'Draco'
    },

    {
       question:"What creature does Dumbledore has a pet?",
       answers:[
           {option:'Phoenix'},
           {option:'Hippogriph'},
           {option:'Troll'},
           {option:'Basilisk'}
       ],
       correctAnswer:'Phoenix'
    },

    {
       question:"How many horcruxs did Voldemort had made?",
       answers:[
           {option:'6'},
           {option:'2'},
           {option:'7'},
           {option:'9'}
       ],
       correctAnswer:'7'
    },

    {
       question:"What was the name of the Weasley's house?",
       answers:[
           {option:'Burrow'},
           {option:'Shrieking Shacks'},
           {option:'Hogwarts'},
           {option:'Leaky Cauldron'}
       ],
       correctAnswer:'Burrow'
    },

    {
       question:"What was the real name of Lord Voldemort?",
       answers:[
           {option:'Harry Potter'},
           {option:'Dumbledore'},
           {option:'Sirius Black'},
           {option:'Tom Riddle'}
       ],
       correctAnswer:'Tom Riddle'
    },
    
    {
       question:"What was the name of Hermoine's cat?",
       answers:[
           {option:'Hedwig'},
           {option:'Crookshanks'},
           {option:'Fluffy'},
           {option:'Trevor'}
       ],
       correctAnswer:'Crookshanks'
    }
]    

let questionIndex = 0;

function start(){
    document.getElementById('start-btn').remove();
    nextButton.style.opacity = '100%';
    nextButton.style.cursor = 'pointer';

    var problem = document.createElement('p');
    problem.setAttribute('id','problem');
    problem.innerText = questionList[questionIndex].question;

    container.appendChild(problem);

    var optionContainer = document.createElement('div');
    optionContainer.setAttribute('id','option-container');
    optionContainer.classList.add('optionContainer');
    container.appendChild(optionContainer);
    
    let answerIndex = 0;
    for(count=0; count<4; count++){
    let optionButton = document.createElement('button');
    optionButton.classList.add('optionButton');
    optionButton.setAttribute('id',`option${count}`);
    optionButton.innerText = questionList[questionIndex].answers[answerIndex].option;
    optionContainer.appendChild(optionButton);
    optionButton.addEventListener('click',function(event){
        let selectedOption = event.target.innerText;
        let correctOption = questionList[questionIndex-1].correctAnswer;
        let result = correctOption.localeCompare(selectedOption);
        if(result==0){
            optionButton.style.backgroundImage="linear-gradient(135deg, #59AC06, #8DEC3B)";
            document.getElementById('body').style.backgroundColor = "#59AC06";
        }
        else{
            optionButton.style.backgroundImage="linear-gradient(135deg, #E9240D, #E4AA22)";
            document.getElementById('body').style.backgroundColor = "#E75214";
        }  
    })
    answerIndex++
    }
    questionIndex++
}

function next(){
  if(questionIndex<7){
   document.getElementById('problem').remove();
   document.getElementById('option-container').remove();
   document.getElementById('body').style.backgroundColor = "#ffffff";

    var problem = document.createElement('p');
    problem.setAttribute('id','problem');
    problem.innerText = questionList[questionIndex].question;

    container.appendChild(problem);

    var optionContainer = document.createElement('div');
    optionContainer.setAttribute('id','option-container');
    optionContainer.classList.add('optionContainer');
    container.appendChild(optionContainer);
    
    let answerIndex = 0;
    for(count=0; count<4; count++){
    let optionButton = document.createElement('button');
    optionButton.classList.add('optionButton');
    optionButton.setAttribute('id',`option${count}`);
    optionButton.innerText = questionList[questionIndex].answers[answerIndex].option;
    optionContainer.appendChild(optionButton);
    optionButton.addEventListener('click',function(event){
        let selectedOption = event.target.innerText;
        let correctOption = questionList[questionIndex-1].correctAnswer;
        let result = correctOption.localeCompare(selectedOption);
        if(result==0){
            optionButton.style.backgroundImage="linear-gradient(135deg, #59AC06, #8DEC3B)";
            document.getElementById('body').style.backgroundColor = "#59AC06";
        }
        else{
            optionButton.style.backgroundImage="linear-gradient(135deg, #E9240D, #E4AA22)";
            document.getElementById('body').style.backgroundColor = "#E75214";
        }  
    })
    answerIndex++
    }
    questionIndex++
  }  
  else{
      document.getElementById('problem').remove();
      document.getElementById('option-container').remove();
      document.getElementById('nextButton').remove();
      document.getElementById('body').style.backgroundColor = "#ffffff";
      var thanks = document.createElement('p');
      thanks.classList.add('thankYou');
      thanks.innerText = 'THANK YOU';
      container.appendChild(thanks);
  }
}



