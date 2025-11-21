const questionsMixed = [
    {
        // Question 1 (HTML)
        question : "1. Which HTML5 element is used to specify a self-contained content that is independent of the rest of the content (like a blog post)?",
        a : "<footer>",
        b : "<section>",
        c : "<article>",
        d : "<main>",
        correct: "c",
        selected: null
    },
    {
        // Question 2 (CSS)
        question : "2. In CSS, what does the 'box-sizing: border-box;' declaration do?",
        a : "It includes padding and margin in the element's total width and height.",
        b : "It excludes padding and margin from the element's total width and height.",
        c : "It includes only padding in the element's total width and height.",
        d : "It only affects the border style, not the size calculation.",
        correct: "c",
        selected: null
    },
    {
        // Question 3 (JavaScript)
        question : "3. What is the output of 'console.log(typeof NaN);' in JavaScript?",
        a : "number",
        b : "string",
        c : "NaN",
        d : "undefined",
        correct: "a",
        selected: null
    },
    {
        // Question 4 (HTML)
        question : "4. Which attribute of an <input> element is used to provide a hint to the user about what kind of information is expected?",
        a : "value",
        b : "name",
        c : "placeholder",
        d : "hint",
        correct: "c",
        selected: null
    },
    {
        // Question 5 (CSS)
        question : "5. What is the selector 'div > p' used for in CSS?",
        a : "Selects all <p> elements inside a <div>.",
        b : "Selects only <p> elements that are direct children of a <div>.",
        c : "Selects the <p> element immediately following a <div>.",
        d : "Selects only the first <p> element inside a <div>.",
        correct: "b",
        selected: null
    },
    {
        // Question 6 (JavaScript)
        question : "6. In JavaScript, which array method creates a *new* array with all elements that pass the test implemented by the provided function?",
        a : "map()",
        b : "reduce()",
        c : "filter()",
        d : "forEach()",
        correct: "c",
        selected: null
    },
    {
        // Question 7 (HTML)
        question : "7. Which tag is used to embed a separate audio file into an HTML document?",
        a : "<sound>",
        b : "<src>",
        c : "<media>",
        d : "<audio>",
        correct: "d",
        selected: null
    },
    {
        // Question 8 (CSS)
        question : "8. What is the CSS property used to specify the stack order of an element (which element should be placed in front of or behind others)?",
        a : "layer",
        b : "order",
        c : "z-index",
        d : "depth",
        correct: "c",
        selected: null
    },
    {
        // Question 9 (JavaScript)
        question : "9. Which JavaScript function is used to execute a function only once after a specified delay?",
        a : "setInterval()",
        b : "setTimeout()",
        c : "delay()",
        d : "setDelay()",
        correct: "b",
        selected: null
    },
    {
        // Question 10 (HTML)
        question : "10. Which section of the HTML document is visible to the user?",
        a : "<head>",
        b : "<title>",
        c : "<meta>",
        d : "<body>",
        correct: "d",
        selected: null
    },
    {
        // Question 11 (CSS)
        question : "11. What is the correct way to target all <a> elements that are being hovered over?",
        a : "a.hover",
        b : "a:mouseover",
        c : "a:hover",
        d : "a.mouseover",
        correct: "c",
        selected: null
    },
    {
        // Question 12 (JavaScript)
        question : "12. In JavaScript, what is hoisting?",
        a : "A method to lift elements using CSS.",
        b : "The process where variable and function declarations are moved to the top of their scope during compilation.",
        c : "A type of asynchronous operation.",
        d : "An error handling mechanism.",
        correct: "b",
        selected: null
    },
    {
        // Question 13 (HTML)
        question : "13. What is the purpose of the 'alt' attribute in the <img> tag?",
        a : "To specify the alignment of the image.",
        b : "To define the image's source file.",
        c : "To provide alternative text for search engines and screen readers if the image cannot be displayed.",
        d : "To set the image's height and width.",
        correct: "c",
        selected: null
    },
    {
        // Question 14 (CSS)
        question : "14. Which property is used in CSS Flexbox to align flex items along the main axis of the container?",
        a : "align-items",
        b : "flex-direction",
        c : "justify-content",
        d : "align-content",
        correct: "c",
        selected: null
    },
    {
        // Question 15 (JavaScript)
        question : "15. Which of the following is an example of a JavaScript asynchronous operation?",
        a : "console.log()",
        b : "Looping through an array",
        c : "Fetching data using the 'fetch()' API",
        d : "Math.random()",
        correct: "c",
        selected: null
    },
    {
        // Question 16 (HTML)
        question : "16. Which tag pair is used to create a definition list in HTML?",
        a : "<list> and </list>",
        b : "<ul> and </ul>",
        c : "<dl> and </dl>",
        d : "<ol> and </ol>",
        correct: "c",
        selected: null
    },
    {
        // Question 17 (CSS)
        question : "17. What does the acronym 'RGBA' stand for in CSS color values?",
        a : "Red, Green, Blue, Alpha",
        b : "Relative, Grayscale, Brightness, Alpha",
        c : "Range, Gamma, Black, Alpha",
        d : "Red, Gold, Brown, Alignment",
        correct: "a",
        selected: null
    },
    {
        // Question 18 (JavaScript)
        question : "18. What will be the value of 'result' in JavaScript: `let result = 10 + '5';`?",
        a : "15",
        b : "105",
        c : "10 5",
        d : "Error",
        correct: "b",
        selected: null
    },
    {
        // Question 19 (CSS)
        question : "19. Which CSS rule is used to define responsive design breakpoints?",
        a : "@style",
        b : "@responsive",
        c : "@media",
        d : "@breakpoint",
        correct: "c",
        selected: null
    },
    {
        // Question 20 (JavaScript/DOM)
        question : "20. Which DOM method is used to retrieve the first element in the document that matches a specified CSS selector?",
        a : "getElementById()",
        b : "querySelectorAll()",
        c : "querySelector()",
        d : "getElementsByClassName()",
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
    let q = questionsMixed[start];
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
    let qObj = questionsMixed[start];
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
    if(start > questionsMixed.length - 1){
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
    finalScore.textContent = `${totalScore} / ${questionsMixed.length}`;
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
    questionsMixed.forEach(q => q.selected = null);
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



