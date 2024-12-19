const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionE1 = document.getElementById("question");
const formE1 = document.getElementById("form");
const scoreE1 = document.getElementById("score");
const inputE1 = document.getElementById("input");

// Retrieve score from localStorage or initialize to 0
let score = JSON.parse(localStorage.getItem("score")) || 0;

// Display the current score
scoreE1.innerText = `Score: ${score}`;

// Display the current multiplication question
questionE1.innerText = `What is ${num1} multiply by ${num2}?`;

// Calculate the correct answer
const correctAns = num1 * num2;

// Add event listener for form submission
formE1.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    const userAns = +inputE1.value; // Convert input value to a number
    if (userAns === correctAns) {
        score++;
    } else {
        score--;
    }

    updateLocalStorage(); // Update the score in localStorage
    scoreE1.innerText = `Score: ${score}`; // Update score on the page
    inputE1.value = ""; // Clear the input field

    // Generate a new question
    generateNewQuestion();
});

// Update score in localStorage
function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}

// Generate a new multiplication question
function generateNewQuestion() {
    const newNum1 = Math.ceil(Math.random() * 10);
    const newNum2 = Math.ceil(Math.random() * 10);
    questionE1.innerText = `What is ${newNum1} multiply by ${newNum2}?`;
    correctAns = newNum1 * newNum2;
}

// Clear the score in localStorage (for debugging or reset purposes)
// Uncomment the line below to reset the score to 0 on every page load
// localStorage.setItem("score", JSON.stringify(0));
