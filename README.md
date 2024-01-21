# TimedQuiz

Description

This readme outlines the relevant detials and usage of this repository in regards to a timedquiz. The quiz tests users knowledge of code reelated synax and terminolgies used. Wrong answers will be oenalised. There are three folders css, js and sfx folder, also there are two htmls "highscores" and "Index".  


Features
Logic:
The logic javascript file contains the main logic for the quiz including the handling of the questions, scoring and timer and also user interactions.

Variables:
- currentQuestion: index for storing questions
- timeleft: Time limieter for quiz
- score: score counter
- timeinterval: Time interval for quiz timer


DOM Elements:
- startscreen: starts the screen
- questionsDiv: Container for questions
- endScreen: End screeeen element
- timeSpan: Display time remaining
- choiceDiv: Contains users choices 
- feedbackDiv: feedback for user
= finalscorespan: Displays the final score
- initialinput: Fiel for field user initials
- submitbutton: Submit button for user
- startbutton: Start button for quiz

The above is a few feautures used.


Structure
- assets/css/styles.css: contains the styling for the quiz
- assets/js/questions.js: contains the questions for the quiz 
- assets/js/logic.js: the main logic with functions for handling quiz
- highscores.html: keeps highscores


MIT License

Copyright (c) 2024 Quarshie30

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Acknowledgments
- https://www.w3schools.com/js/
- https://www.codecademy.com/learn/introduction-to-javascript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://developer.mozilla.org/en-US/