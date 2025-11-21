const questionsCss = [
    {
        // Question 1
        question : "1. What does CSS stand for?",
        a : "Creative Style Sheets",
        b : "Cascading Style Sheets",
        c : "Computer Style Sheets",
        d : "Colorful Style Sheets",
        correct: "b",
        selected: null
    },
    {
        // Question 2
        question : "2. Which HTML attribute is used to define inline styles?",
        a : "styles",
        b : "class",
        c : "style",
        d : "font",
        correct: "c",
        selected: null
    },
    {
        // Question 3
        question : "3. Where in an HTML document is the correct place to refer to an external style sheet?",
        a : "In the <body> section",
        b : "At the end of the document",
        c : "In the <head> section",
        d : "In the <title> section",
        correct: "c",
        selected: null
    },
    {
        // Question 4
        question : "4. Which CSS property is used to change the background color?",
        a : "color",
        b : "bgcolor",
        c : "background-color",
        d : "background",
        correct: "c",
        selected: null
    },
    {
        // Question 5
        question : "5. Which CSS property is used to change the text color of an element?",
        a : "fgcolor",
        b : "text-color",
        c : "color",
        d : "font-color",
        correct: "c",
        selected: null
    },
    {
        // Question 6
        question : "6. Which CSS property controls the text size?",
        a : "text-style",
        b : "font-size",
        c : "text-size",
        d : "font-style",
        correct: "b",
        selected: null
    },
    {
        // Question 7
        question : "7. How do you select an element with the id 'header'?",
        a : ".header",
        b : "#header",
        c : "*header",
        d : "header",
        correct: "b",
        selected: null
    },
    {
        // Question 8
        question : "8. How do you select elements with the class name 'test'?",
        a : "#test",
        b : "*test",
        c : ".test",
        d : "test",
        correct: "c",
        selected: null
    },
    {
        // Question 9
        question : "9. Which property is used to set the space between the element's content and its border?",
        a : "margin",
        b : "spacing",
        c : "padding",
        d : "border-spacing",
        correct: "c",
        selected: null
    },
    {
        // Question 10
        question : "10. Which property is used to set the space outside the element's border?",
        a : "padding",
        b : "spacing",
        c : "outer-spacing",
        d : "margin",
        correct: "d",
        selected: null
    },
    {
        // Question 11
        question : "11. Which value of the 'position' property is commonly used to fix an element in the viewport?",
        a : "static",
        b : "absolute",
        c : "fixed",
        d : "relative",
        correct: "c",
        selected: null
    },
    {
        // Question 12
        question : "12. How do you display a border like this: top: 1px solid black, bottom: 2px solid black, left: 3px solid black, right: 4px solid black?",
        a : "border: 1px 4px 2px 3px solid black;",
        b : "border-width: 1px 4px 2px 3px;",
        c : "border: 1px 2px 3px 4px solid black;",
        d : "border-color: black solid 1px 2px 3px 4px;",
        correct: "b",
        selected: null
    },
    {
        // Question 13
        question : "13. Which property is used to make text italic?",
        a : "font-style",
        b : "text-style",
        c : "font-weight",
        d : "font-italic",
        correct: "a",
        selected: null
    },
    {
        // Question 14
        question : "14. What is the default value of the 'display' property for a <div> element?",
        a : "inline",
        b : "block",
        c : "inline-block",
        d : "flex",
        correct: "b",
        selected: null
    },
    {
        // Question 15
        question : "15. How do you link an external stylesheet called 'mystyle.css'?",
        a : `<link rel="stylesheet" type="text/css" href="mystyle.css">`,
        b : `<style src="mystyle.css">`,
        c : `<stylesheet>"mystyle.css"</stylesheet>`,
        d : `<link href="mystyle.css">`,
        correct: "a",
        selected: null
    },
    {
        // Question 16
        question : "16. Which property is used to define the order of flex items in a flex container?",
        a : "flex-direction",
        b : "order",
        c : "align-items",
        d : "justify-content",
        correct: "b",
        selected: null
    },
    {
        // Question 17
        question : "17. Which property is used for rounding the corners of elements?",
        a : "border-collapse",
        b : "border-radius",
        c : "border-round",
        d : "corner-radius",
        correct: "b",
        selected: null
    },
    {
        // Question 18
        question : "18. Which unit is relative to the size of the *parent* element's font?",
        a : "px",
        b : "rem",
        c : "em",
        d : "vw",
        correct: "c",
        selected: null
    },
    {
        // Question 19
        question : "19. Which unit is relative to the font-size of the *root* element (<html>)?",
        a : "px",
        b : "em",
        c : "rem",
        d : "%",
        correct: "c",
        selected: null
    },
    {
        // Question 20
        question : "20. The CSS rule 'p:hover { background-color: yellow; }' is an example of what?",
        a : "A Class Selector",
        b : "An ID Selector",
        c : "A Pseudo-class",
        d : "A Universal Selector",
        correct: "c",
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
    let q = questionsCss[start];
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
    let qObj = questionsCss[start];
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
    if(start > questionsCss.length - 1){
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
    finalScore.textContent = `${totalScore} / ${questionsCss.length}`;
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
    questionsCss.forEach(q => q.selected = null);
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
