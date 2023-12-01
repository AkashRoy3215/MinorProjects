document.addEventListener("DOMContentLoaded", () => {
  // Get result data from localStorage
  const userName = localStorage.getItem("userName");
  const category = localStorage.getItem("resultCategory");
  const correctAnswers = localStorage.getItem("resultCorrectAnswers");
  const wrongAnswers = localStorage.getItem("resultWrongAnswers");
  const totalElapsedTime = localStorage.getItem("resultTotalTime");

  // Update the result data in the HTML
  const resultUserName = document.getElementById("resultUserName");
  const resultCategory = document.getElementById("resultCategory");
  const resultCorrectAnswers = document.getElementById("resultCorrectAnswers");
  const resultWrongAnswers = document.getElementById("resultWrongAnswers");
  const resultTotalTime = document.getElementById("resultTotalTime");

  resultUserName.textContent = userName;
  resultCategory.textContent = category;
  resultCorrectAnswers.textContent = correctAnswers;
  resultWrongAnswers.textContent = wrongAnswers;
  resultTotalTime.textContent = totalElapsedTime + " seconds";

  // Add event listener to the "Restart" button
  const restartButton = document.getElementById("restartButton");
  restartButton.addEventListener("click", () => {
    // Clear the result data from localStorage
    localStorage.removeItem("resultUserName");
    localStorage.removeItem("resultCategory");
    localStorage.removeItem("resultCorrectAnswers");
    localStorage.removeItem("resultWrongAnswers");
    localStorage.removeItem("resultTotalTime");

    // Redirect to the home page
    window.location.href = "index.html";
  });
});
