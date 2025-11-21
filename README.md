# 🧠 Interactive Quiz Application (JavaScript Day 8)
**Live Demo:** [Quiz App]( https://quiz-app-by-kabeer-hussain.vercel.app/
)

A fully dynamic and responsive **Quiz Application** built using **HTML, CSS & JavaScript**.  
Includes four quiz categories: HTML, CSS, JavaScript, and Mixed. Each category has its own questions and JS logic, while all pages share a single **style.css** and **main.js** for common functions. Personalized username display, smooth UI, and real-time scoring make this project interactive and professional.

---

## 🚀 Features

### 🎯 Four Quiz Categories
- **HTML Quiz**
- **CSS Quiz**
- **JavaScript Quiz**
- **Mixed Quiz (HTML + CSS + JS)**

Each page uses:
- Individual `app.js` file  
- Shared `style.css`  
- Shared `main.js` (username + common functions)  

### 🧩 Smart Question System
Each MCQ object:
```js
{ question: "...", a: "...", b: "...", c: "...", d: "...", correct: "b", selected: null }

```

### 🧩 Quiz Features

- Saves selected option  
- Highlights correct/incorrect  
- Keeps selection on Previous/Next navigation  
- Options disable after answering  

### 🎨 Single Shared CSS

- One global `style.css` keeps UI consistent  
- Clean, modern, and easy to maintain  

### 🖱️ Complete Navigation

- **Next** → moves forward  
- **Previous** → moves backward  
- **Restart Quiz** → resets all answers  
- Options highlight automatically after selection  

### 🏆 Result Page

- Displays score out of 20  
- Personalized message with username (from `localStorage`)  
- Confetti animation on high score  
- Restart button  

### 🔊 Sound Effects

- Win / high score: `win.wav`  
- Wrong actions: different sound for premium feel  

### 📁 Folder Structure

```css
project/
│── index.html
│── style.css
│── main.js
│
├── html-quiz/
│   ├── html-quiz.html
│   └── app.js
├── css-quiz/
│   ├── css-quiz.html
│   └── app.js
├── js-quiz/
│   ├── js-quiz.html
│   └── app.js
└── mixed-quiz/
    ├── mixed-quiz.html
    └── app.js
```
---

### 💡 How It Works

1. User enters name → saved using `localStorage.setItem("userName", name)`  
2. User selects quiz category → page loads `main.js`, category `app.js`, and shared `style.css`  
3. Quiz starts → questions loaded via `updateQuestion()`  
4. Option clicks → handled by `userAnswer()`, disables selected option, saves choice  
5. Final result → score calculated, message displayed, confetti triggers, restart button resets  

---

### 🎉 Why This Project Is Special

- Clean folder structure  
- No bugs in navigation  
- Perfect “selected answer save” system  
- Premium UI + option animations  
- Username-based personalization  
- Confetti + sound → professional feel  
- Easily extendable for new quizzes  

---

### 💡 Learning Goals

- DOM Manipulation  
- Multi-file JS projects  
- Local Storage handling  
- Event Handling  
- Dynamic UI rendering  
- Component-based quiz logic  
- Clean reusable CSS patterns  

---

### 📸 Preview

*(Add screenshots or GIFs for each quiz category)*

---

### 🛠️ Developer Info

👨‍💻 **Developer:** Kabeer Hussain  
📘 **Series:** JavaScript — 30 Days, 30 Projects  
📆 **Day:** 7 — Interactive Quiz App  
📧 **Email:** codealpha0786@gmail.com  
🔗 **GitHub:** [ITechKabeer](https://github.com/ITechKabeer)

Made with ❤️ by Kabeer Hussain




