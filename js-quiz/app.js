const questionsJavaScript = [
    {
        // Question 1
        question : "1. What is the correct way to include an external JavaScript file called 'script.js'?",
        a : `<script href="script.js">`,
        b : `<script name="script.js">`,
        c : `<script src="script.js">`,
        d : `<script link="script.js">`,
        correct: "c",
        selected: null
    },
    {
        // Question 2
        question : "2. Which keyword is used to declare a variable in JavaScript (before ES6)?",
        a : "let",
        b : "const",
        c : "var",
        d : "string",
        correct: "c",
        selected: null
    },
    {
        // Question 3
        question : "3. Which keyword is used to declare a block-scoped variable in modern JavaScript (ES6+)?",
        a : "var",
        b : "let",
        c : "global",
        d : "scoped",
        correct: "b",
        selected: null
    },
    {
        // Question 4
        question : "4. How do you write an IF statement in JavaScript?",
        a : "if i = 5 then",
        b : "if (i == 5)",
        c : "if i == 5",
        d : "if (i = 5)",
        correct: "b",
        selected: null
    },
    {
        // Question 5
        question : "5. What is the correct JavaScript syntax for checking if two values are equal in both value and type?",
        a : "x = y",
        b : "x == y",
        c : "x === y",
        d : "x != y",
        correct: "c",
        selected: null
    },
    {
        // Question 6
        question : "6. How does a WHILE loop start?",
        a : "while (i <= 10; i++)",
        b : "while i = 1 to 10",
        c : "while (i <= 10)",
        d : "loop i while (i <= 10)",
        correct: "c",
        selected: null
    },
    {
        // Question 7
        question : "7. How does a FOR loop start?",
        a : "for (i = 0; i <= 5)",
        b : "for (i <= 5; i++)",
        c : "for (i = 0; i <= 5; i++)",
        d : "for i = 1 to 5",
        correct: "c",
        selected: null
    },
    {
        // Question 8
        question : "8. How do you create a function in JavaScript?",
        a : "function myFunction()",
        b : "function:myFunction()",
        c : "function = myFunction()",
        d : "def myFunction()",
        correct: "a",
        selected: null
    },
    {
        // Question 9
        question : "9. How do you call a function named 'myFunction'?",
        a : "call myFunction()",
        b : "myFunction()",
        c : "Call function myFunction",
        d : "exec myFunction()",
        correct: "b",
        selected: null
    },
    {
        // Question 10
        question : "10. How do you round the number 7.25, to the nearest integer?",
        a : "Math.rnd(7.25)",
        b : "Math.round(7.25)",
        c : "round(7.25)",
        d : "Math.floor(7.25)",
        correct: "b",
        selected: null
    },
    {
        // Question 11
        question : "11. Which method is used to remove the last element from an array?",
        a : "shift()",
        b : "pop()",
        c : "removeLast()",
        d : "splice()",
        correct: "b",
        selected: null
    },
    {
        // Question 12
        question : "12. What is the JavaScript object that represents the browser window?",
        a : "Document",
        b : "Window",
        c : "Screen",
        d : "Browser",
        correct: "b",
        selected: null
    },
    {
        // Question 13
        question : "13. Which operator is used to check the data type of a variable?",
        a : "typeof",
        b : "typecheck",
        c : "isType",
        d : "dataType",
        correct: "a",
        selected: null
    },
    {
        // Question 14
        question : "14. Which method is used to add an element to the *end* of an array?",
        a : "unshift()",
        b : "push()",
        c : "pop()",
        d : "add()",
        correct: "b",
        selected: null
    },
    {
        // Question 15
        question : "15. What is the result of '10' + 5 in JavaScript?",
        a : "15",
        b : "105",
        c : "Error",
        d : "510",
        correct: "b",
        selected: null
    },
    {
        // Question 16
        question : "16. Which method is used to join elements of an array into a string?",
        a : "split()",
        b : "connect()",
        c : "join()",
        d : "toString()",
        correct: "c",
        selected: null
    },
    {
        // Question 17
        question : "17. Which object allows you to work with dates and times?",
        a : "Time",
        b : "Date",
        c : "Calendar",
        d : "TimeDate",
        correct: "b",
        selected: null
    },
    {
        // Question 18
        question : "18. What is 'DOM' an acronym for?",
        a : "Data Object Model",
        b : "Document Order Management",
        c : "Dynamic Output Method",
        d : "Document Object Model",
        correct: "d",
        selected: null
    },
    {
        // Question 19
        question : "19. Which function is used to print content to the web console?",
        a : "console.write()",
        b : "print()",
        c : "console.log()",
        d : "writeLog()",
        correct: "c",
        selected: null
    },
    {
        // Question 20
        question : "20. Which operator is used for exponentiation (raising to a power) in ES7?",
        a : "^",
        b : "**",
        c : "pow()",
        d : "//",
        correct: "b",
        selected: null
    }
]

let user = localStorage.getItem("userName")
let start = 0;
let score = 0;
let question = document.getElementsByClassName("question");
let optionA = document.getElementById("optionA")
let optionB = document.getElementById("optionB")
let optionC = document.getElementById("optionC")
let optionD = document.getElementById("optionD")
const options = { a: optionA, b: optionB, c: optionC, d: optionD };
let resultBox = document.querySelector(".result-container");
let finalScore = document.querySelector(".final-score");
let scoreLine = document.getElementsByClassName("score-line")
const winSound = new Audio('/sound/win.wav');


function updateQuestion(){
    let q = questionsJavaScript[start];
    question[0].textContent = q.question
    optionA.textContent = q.a
    optionB.textContent = q.b
    optionC.textContent = q.c
    optionD.textContent = q.d
    clearClasses();  
    enableOptions();
    if(q.selected){ 
        restoreSelection(q.selected, q.correct);
        disableOptions();
    }
}
updateQuestion()

function userAnswer(selectedKey){
    let qObj = questionsJavaScript[start];
    if(qObj.selected !== null) return;

    qObj.selected = selectedKey; 
    let correctKey = qObj.correct;

    if(selectedKey === correctKey){
        options[correctKey].classList.add("correct");
        score++;
    } else {
        options[selectedKey].classList.add("notcorrect");
        options[correctKey].classList.add("correct");
    }
    disableOptions();
}

console.log(score)

function nextBtn(){
    start++
    if(start > questionsJavaScript.length - 1){
        showFinalResult();
    } 
    updateQuestion();
    return
}

function preBtn(){
    start--
    if(start < 0){
        start = 0;
    }
    updateQuestion()
    return
}

function showFinalResult(){
    let totalScore = score
    document.querySelector(".container1").style.display = "none";
    resultBox.style.display = "flex";
    finalScore.textContent = `${totalScore} / ${questionsJavaScript.length}`;
    if(totalScore == 0){
        scoreLine[0].textContent = `${user} 😅 Bhai sirf dekhne aya tha!`;
    }else if(totalScore <= 5){
        scoreLine[0].textContent = `${user} 😞 Bohat kam score hai! Practice zaroori hai.`;
    }else if(totalScore <= 10){
        scoreLine[0].textContent = `${user} 🙂 Theek hai, lekin aur improve ho sakta hai!`;
    }else if(totalScore <= 15){
        scoreLine[0].textContent = `${user} 😄 Good! Bas thori aur practice karo.`;
    }else if(totalScore <= 20){
        confetti({
        particleCount: 250,
        spread: 90,
        origin: { y: 0.6 }
        });
        scoreLine[0].textContent = `${user} 🏆 Excellent! Kamal ka score!`;
        winSound.play()
        winSound.currentTime = 0;
    }
}

function restartQuiz(){
    score = 0;
    start = 0;
    questionsJavaScript.forEach(q => q.selected = null);
    document.querySelector(".container1").style.display = "block";
    resultBox.style.display = "none";
    updateQuestion();
}

function disableOptions(){
    optionA.style.pointerEvents = "none";
    optionB.style.pointerEvents = "none";
    optionC.style.pointerEvents = "none";
    optionD.style.pointerEvents = "none";
}

function enableOptions(){
    optionA.style.pointerEvents = "auto";
    optionB.style.pointerEvents = "auto";
    optionC.style.pointerEvents = "auto";
    optionD.style.pointerEvents = "auto";
}

function clearClasses(){
    optionA.classList.remove("correct", "notcorrect");
    optionB.classList.remove("correct", "notcorrect");
    optionC.classList.remove("correct", "notcorrect");
    optionD.classList.remove("correct", "notcorrect");
}

function restoreSelection(selected, correct){
    if(selected === correct){
        options[correct].classList.add("correct");
    } else {
        options[selected].classList.add("notcorrect");
        options[correct].classList.add("correct");
    }
}