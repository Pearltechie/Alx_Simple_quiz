// Function to check the user's answer
function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Step 3: Get the feedback element
    const feedback = document.getElementById("feedback");

    // Step 4: Compare the user's answer to the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green"; // Feedback in green for correct answers
    } else if (userAnswer) {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red"; // Feedback in red for incorrect answers
    } else {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange"; // Feedback in orange for no selection
    }
}

// Step 5: Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
