const questionsHtml = [
    {
        // Question 1
        question : "1. What does HTML stand for?",
        a : "Hyperlinks and Text Markup Language",
        b : "Home Tool Markup Language",
        c : "Hyper Text Markup Language",
        d : "Hyper Tool Multi Language",
        correct: "c",
        selected: null
    },
    {
        // Question 2
        question : "2. Which tag is used to create a hyperlink in HTML?",
        a : "<link>",
        b : "<href>",
        c : "<a>",
        d : "<p>",
        correct: "c",
        selected: null
    },
    {
        // Question 3
        question : "3. Which HTML tag is used to display an image?",
        a : "<div>",
        b : "<img>",
        c : "<image>",
        d : "<pic>",
        correct: "b",
        selected: null
    },
    {
        // Question 4
        question : "4. Which attribute is required in the <img> tag?",
        a : "link",
        b : "href",
        c : "src",
        d : "type",
        correct: "c",
        selected: null
    },
    {
        // Question 5
        question : "5. Which tag is used to create an ordered list?",
        a : "<ul>",
        b : "<ol>",
        c : "<li>",
        d : "<order>",
        correct: "b",
        selected: null
    },
    {
        // Question 6
        question : "6. Which HTML element is used for the largest heading?",
        a : "<h3>",
        b : "<h6>",
        c : "<h1>",
        d : "<head>",
        correct: "c",
        selected: null
    },
    {
        // Question 7
        question : "7. Which tag is used to insert a line break?",
        a : "<break>",
        b : "<lb>",
        c : "<br>",
        d : "<line>",
        correct: "c",
        selected: null
    },
    {
        // Question 8
        question : "8. Which HTML tag is used to define a table row?",
        a : "<td>",
        b : "<tr>",
        c : "<th>",
        d : "<row>",
        correct: "b",
        selected: null
    },
    {
        // Question 9
        question : "9. Which attribute is used to open a link in a new tab?",
        a : "new= 'true'",
        b : "open= '_new'",
        c : "target= '_blank'",
        d : "blank= 'open'",
        correct: "c",
        selected: null
    },
    {
        // Question 10
        question : "10. Which tag is used to create a checkbox?",
        a : `<check>`,
        b : `<input type="checkbox">`,
        c : `<box>`,
        d : `<input type="check">`,
        correct: "b",
        selected: null
    },
    {
        // Question 11
        question : "11. Which HTML tag is used to define an input field?",
        a : "<textfield>",
        b : "<input>",
        c : "<field>",
        d : "<enter>",
        correct: "b",
        selected: null
    },
    {
        // Question 12
        question : "12. Which tag is used for bold text?",
        a : "<strong>",
        b : "<b>",
        c : "<bold>",
        d : "<sb>",
        correct: "b",
        selected: null
    },
    {
        // Question 13
        question : "13. What is the correct HTML element for inserting a video?",
        a : "<media>",
        b : "<movie>",
        c : "<video>",
        d : "<vid>",
        correct: "c",
        selected: null
    },
    {
        // Question 14
        question : "14. Which HTML tag is used to define metadata?",
        a : "<data>",
        b : "<meta>",
        c : "<script>",
        d : "<info>",
        correct: "b",
        selected: null
    },
    {
        // Question 15
        question : "15. Which element is used to define the title of a webpage?",
        a : "<heading>",
        b : "<meta>",
        c : "<title>",
        d : "<head>",
        correct: "c",
        selected: null
    },
    {
        // Question 16
        question : "16. Which tag is used to display a horizontal line?",
        a : "<line>",
        b : "<hr>",
        c : "<hl>",
        d : "<border>",
        correct: "b",
        selected: null
    },
    {
        // Question 17
        question : "17. Which HTML tag is used to define emphasized text?",
        a : "<b>",
        b : "<emp>",
        c : "<em>",
        d : "<italic>",
        correct: "c",
        selected: null
    },
    {
        // Question 18
        question : "18. What is the correct HTML tag for creating a dropdown list?",
        a : "<dropdown>",
        b : "<select>",
        c : "<choice>",
        d : "<optionbox>",
        correct: "b",
        selected: null
    },
    {
        // Question 19
        question : "19. Which tag is used to define a list item?",
        a : "<item>",
        b : "<li>",
        c : "<list>",
        d : "<ul>",
        correct: "b",
        selected: null
    },
    {
        // Question 20
        question : "20. Which HTML element is used to add JavaScript?",
        a : "<style>",
        b : "<js>",
        c : "<script>",
        d : "<javascript>",
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
    let q = questionsHtml[start];
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
    let qObj = questionsHtml[start];
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
    if(start > questionsHtml.length - 1){
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
    finalScore.textContent = `${totalScore} / ${questionsHtml.length}`;
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
    questionsHtml.forEach(q => q.selected = null);
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



