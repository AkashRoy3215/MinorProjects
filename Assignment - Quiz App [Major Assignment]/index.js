const nameInput = document.getElementById("nameInput");
const categoryButtons = document.querySelectorAll(".category-button");
const enterButton = document.querySelector(".enter-button");

let selectedCategory = localStorage.getItem("selectedCategory");
console.log("Selected Category:", selectedCategory); // Log the selected category

function resetCategoryButtons() {
  categoryButtons.forEach((btn) => {
    btn.style.backgroundColor = "aliceblue";
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.textContent; // Assign the category to selectedCategory
    const userName = nameInput.value;
    // console.log(selectedCategory);
    // console.log(userName);

    if (userName && selectedCategory) {
      nameInput.disabled = true;
      categoryButtons.forEach((btn) => (btn.disabled = true));

      const resetButton = document.createElement("button");
      resetButton.innerText = "Reset";
      resetButton.classList.add("enter-button");
      resetButton.addEventListener("click", () => {
        nameInput.value = "";
        nameInput.disabled = false;
        categoryButtons.forEach((btn) => (btn.disabled = false));
        resetCategoryButtons();
        resetButton.style.display = "none";
      });
      enterButton.parentNode.insertBefore(resetButton, enterButton);

      button.style.backgroundColor = "rgb(208, 232, 252)";
    }
  });
});

enterButton.addEventListener("click", () => {
  if (selectedCategory) {
    const userName = nameInput.value;
    localStorage.setItem("userName", userName);
    localStorage.setItem("selectedCategory", selectedCategory.trim()); // Trim the category string
    console.log(selectedCategory.trim()); // Log the trimmed selected category
    console.log(userName); // Log the username
    window.location.href = "quiz.html";
  }
});
