// Define your questions and other variables here
const quizData = {
  books: [
    {
      question: "Who wrote the book New Dimensions of India’s Foreign Policy?",
      options: [
        "Atal Bihari Vajpayee",
        "Abdul Kalam Azad",
        "Amit Chaudhuri",
        "Raghuram Rajan",
      ],
      correctAnswer: "Atal Bihari Vajpayee",
    },
    {
      question: "Who wrote the book India Wins Freedom?",
      options: [
        "Akhilsh Tilotia",
        "Amitav Ghosh",
        "Abdul Kalam Azad",
        "A. B. Vajpayee",
      ],
      correctAnswer: "Abdul Kalam Azad",
    },
    {
      question: "Which of the following books have been written by Abul Fazal?",
      options: ["Ain-i-Akbari", "Akbar-Nama", "Both of them", "None of them"],
      correctAnswer: "Both of them",
    },
    {
      question: "Who wrote the book Wealth of Nations?",
      options: [
        "Raghuram Rajan",
        "John Maynard Keynes",
        "Adam Smith",
        "None of the above",
      ],
      correctAnswer: "Adam Smith",
    },
    {
      question: "Who wrote the book The Making of India?",
      options: [
        "Akhilsh Tilotia",
        "Amartya Sen",
        "Amit Chaudhuri",
        "Amitav Ghosh",
      ],
      correctAnswer: "Akhilesh Tilotia",
    },
    {
      question: "Who wrote the book A Suitable Boy?",
      options: [
        "Salman Rushdie",
        "Arundhati Roy",
        "Amitav Ghosh",
        "Vikram Seth",
      ],
      correctAnswer: "Vikram Seth",
    },
    {
      question: "Who wrote the book An Autobiography?",
      options: [
        "Sardar Patel",
        "Jawaharlal Nehru",
        "Atal Bihari Vajpayee",
        "S. Radhakrishnan",
      ],
      correctAnswer: "Jawaharlal Nehru",
    },
    {
      question: "Who wrote the book Arthashastra?",
      options: ["Kautilya", "Abul Fazal", "Tulsiram", "None of the above"],
      correctAnswer: "Kautilya",
    },
    {
      question: "Who wrote the book Ashtadhyayi?",
      options: ["Tukaram", "Panini", "Kautilya", "None of the above"],
      correctAnswer: "Panini",
    },
    {
      question: "Who wrote the book Anandmath?",
      options: [
        "Rabindranath Tagore",
        "Mahatma Gandhi",
        "Bankim Chandra Chatterjee",
        "B. R. Ambedkar",
      ],
      correctAnswer: "Bankim Chandra Chatterjee",
    },
  ],
  films: [
    {
      question:
        "Who directed the Indian film 'Lagaan: Once Upon a Time in India'?",
      options: [
        "Sanjay Leela Bhansali",
        "Amitabh Bachchan",
        "Ashutosh Gowariker",
        "Karan Johar",
      ],
      correctAnswer: "Ashutosh Gowariker",
    },
    {
      question:
        "Which Bollywood actor played the lead role in the film 'Dil Chahta Hai'?",
      options: [
        "Aamir Khan",
        "Saif Ali Khan",
        "Shah Rukh Khan",
        "Hrithik Roshan",
      ],
      correctAnswer: "Aamir Khan",
    },
    {
      question:
        "Which Indian film was India's official entry for the 2009 Academy Awards (Oscars)?",
      options: ["Rang De Basanti", "3 Idiots", "Lagaan", "Taare Zameen Par"],
      correctAnswer: "Taare Zameen Par",
    },
    {
      question:
        "In the film 'Sholay,' who played the role of Gabbar Singh, the iconic villain?",
      options: [
        "Amjad Khan",
        "Dharmendra",
        "Sanjeev Kumar",
        "Amitabh Bachchan",
      ],
      correctAnswer: "Amjad Khan",
    },
    {
      question:
        "Which Indian film features the song 'Mera Joota Hai Japani' and starred Raj Kapoor?",
      options: ["Shree 420", "Mera Naam Joker", "Awaara", "Barsaat"],
      correctAnswer: "Shree 420",
    },
    {
      question:
        "Who directed the Indian film 'PK,' which starred Aamir Khan and Anushka Sharma?",
      options: [
        "Karan Johar",
        "Rajkumar Hirani",
        "Farhan Akhtar",
        "Aditya Chopra",
      ],
      correctAnswer: "Rajkumar Hirani",
    },
    {
      question:
        "In the movie 'Kabhi Khushi Kabhie Gham,' what is the nickname given to Rahul by his family?",
      options: ["Raj", "Rohit", "Rahul", "Rancho"],
      correctAnswer: "Rahul",
    },
    {
      question:
        "Who played the role of 'Mogambo' in the Bollywood film 'Mr. India'?",
      options: ["Pran", "Kulbhushan Kharbanda", "Amrish Puri", "Anupam Kher"],
      correctAnswer: "Amrish Puri",
    },
    {
      question:
        "In the film 'Dilwale Dulhania Le Jayenge,' where do Raj and Simran meet for the first time?",
      options: ["London", "Switzerland", "Amritsar", "Mumbai"],
      correctAnswer: "Switzerland",
    },
    {
      question:
        "Which Bollywood actress is often referred to as the 'Queen of Bollywood'?",
      options: ["Kajol", "Aishwarya Rai", "Kareena Kapoor", "Kangana Ranaut"],
      correctAnswer: "Kangana Ranaut",
    },
  ],
  history: [
    {
      question: "Who was the first Prime Minister of India?",
      options: [
        "Jawaharlal Nehru",
        "Sardar Patel",
        "Mahatma Gandhi",
        "Subhas Chandra Bose",
      ],
      correctAnswer: "Jawaharlal Nehru",
    },
    {
      question: "In which year did India gain independence from British rule?",
      options: ["1942", "1947", "1950", "1945"],
      correctAnswer: "1947",
    },
    {
      question: "Who is known as the 'Father of the Indian Constitution'?",
      options: [
        "B.R. Ambedkar",
        "Jawaharlal Nehru",
        "Sardar Patel",
        "Mahatma Gandhi",
      ],
      correctAnswer: "B.R. Ambedkar",
    },
    {
      question:
        "What is the name of the ancient Indian text on statecraft and military strategy?",
      options: ["Arthashastra", "Ramayana", "Mahabharata", "Upanishads"],
      correctAnswer: "Arthashastra",
    },
    {
      question:
        "Who was the Emperor of the Maurya Dynasty and a patron of Buddhism?",
      options: ["Ashoka", "Chandragupta Maurya", "Harsha", "Akbar"],
      correctAnswer: "Ashoka",
    },
    {
      question:
        "The Indus Valley Civilization is also known by what other name?",
      options: [
        "Vedic Civilization",
        "Harappan Civilization",
        "Mohenjo-Daro Civilization",
        "Gupta Civilization",
      ],
      correctAnswer: "Harappan Civilization",
    },
    {
      question: "Which Mughal emperor built the Taj Mahal in Agra?",
      options: ["Akbar", "Aurangzeb", "Shah Jahan", "Babur"],
      correctAnswer: "Shah Jahan",
    },
    {
      question:
        "Who led the non-violent civil disobedience movement for India's independence?",
      options: [
        "Jawaharlal Nehru",
        "Sardar Patel",
        "Mahatma Gandhi",
        "Subhas Chandra Bose",
      ],
      correctAnswer: "Mahatma Gandhi",
    },
    {
      question:
        "In which year did the Indian National Congress adopt the resolution for 'Purna Swaraj' (complete independence)?",
      options: ["1925", "1947", "1930", "1942"],
      correctAnswer: "1930",
    },
    {
      question: "Who was the first woman Prime Minister of India?",
      options: [
        "Sarojini Naidu",
        "Indira Gandhi",
        "Rajkumari Amrit Kaur",
        "Vijaya Lakshmi Pandit",
      ],
      correctAnswer: "Indira Gandhi",
    },
  ],
  currentAffairs: [
    {
      question: "Who is the current Prime Minister of India as of 2023?",
      options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Manmohan Singh"],
      correctAnswer: "Narendra Modi",
    },
    {
      question:
        "Which Indian state was the first to achieve 100% vaccination against COVID-19?",
      options: ["Kerala", "Goa", "Tamil Nadu", "Himachal Pradesh"],
      correctAnswer: "Goa",
    },
    {
      question:
        "What is the name of the new education policy launched in India in 2020?",
      options: [
        "National Education Policy 2020",
        "Bharatiya Shiksha Abhiyan",
        "Sarva Shiksha Abhiyan",
        "Education for All",
      ],
      correctAnswer: "National Education Policy 2020",
    },
    {
      question:
        "Which Indian state recently declared the 'Irrawaddy Dolphin' as its state aquatic animal?",
      options: ["West Bengal", "Odisha", "Assam", "Kerala"],
      correctAnswer: "Odisha",
    },
    {
      question:
        "What is the name of the COVID-19 vaccination campaign launched in India in 2021?",
      options: [
        "Operation Immunize",
        "Vaccination For All",
        "Swasth Bharat Yojana",
        "Tika Utsav",
      ],
      correctAnswer: "Tika Utsav",
    },
    {
      question:
        "Which Indian city was declared a UNESCO World Heritage Site in 2021 for its historic urban and architectural ensemble?",
      options: ["Mumbai", "Jaipur", "Ahmedabad", "Hyderabad"],
      correctAnswer: "Jaipur",
    },
    {
      question:
        "Who won the Nobel Peace Prize in 2014 for her struggle for the right of all children to education?",
      options: [
        "Malala Yousafzai",
        "Greta Thunberg",
        "Kailash Satyarthi",
        "Aung San Suu Kyi",
      ],
      correctAnswer: "Malala Yousafzai",
    },
    {
      question:
        "Which Indian state announced the implementation of the 'Right to Public Services Act' in 2021?",
      options: ["Gujarat", "Madhya Pradesh", "Karnataka", "Bihar"],
      correctAnswer: "Bihar",
    },
    {
      question:
        "What is the name of the mission launched by India to study the Sun?",
      options: ["Mangalyaan", "Aditya-L1", "Chandrayaan-2", "Gaganyaan"],
      correctAnswer: "Aditya-L1",
    },
    {
      question:
        "Which Indian cricketer became the fastest to score 10,000 runs in One Day Internationals (ODIs)?",
      options: [
        "Sachin Tendulkar",
        "Virat Kohli",
        "Rohit Sharma",
        "Virender Sehwag",
      ],
      correctAnswer: "Virat Kohli",
    },
  ],
};
// quiz.js

document.addEventListener("DOMContentLoaded", function () {
  const categorySpan = document.getElementById("category");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.querySelector(".options");
  const nextButton = document.getElementById("next-button");

  const userName = localStorage.getItem("userName");
  const selectedCategory = localStorage.getItem("selectedCategory");

  categorySpan.innerText = selectedCategory;

  let currentQuestionIndex = 0;
  let currentQuestion;
  let correctAnswersCount = 0;
  let wrongAnswersCount = 0;
  let startTime;

  console.log("LocalStorage - UserName:", localStorage.getItem("userName"));
  console.log(
    "LocalStorage - SelectedCategory:",
    localStorage.getItem("selectedCategory")
  );

  function loadQuestion() {
    console.log("Selected Category:", selectedCategory);
    console.log("Quiz Data:", quizData);
    console.log("Quiz Data for Selected Category:", quizData[selectedCategory]);
    if (!selectedCategory || !quizData[selectedCategory]) {
      console.error("Invalid category:", selectedCategory);
      return;
    }

    console.log("Current Question Index:", currentQuestionIndex);
    console.log("Quiz Data:", quizData);
    currentQuestion = quizData[selectedCategory][currentQuestionIndex];

    // Display question text
    questionText.innerText = currentQuestion.question;

    // Display options
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.classList.add("option");
      button.innerText = option;
      button.addEventListener("click", () => selectOption(index));
      optionsContainer.appendChild(button);
    });

    // Update question count
    document.getElementById("question-count").innerText = `Question ${
      currentQuestionIndex + 1
    } of 10`;

    // Enable/disable next button
    nextButton.disabled = true;
    // Start the timer for each question
    startTimer();
    // Record the start time for each question
    startTime = new Date().getTime();
  }

  function resetTimer() {
    clearInterval(timer);
    timerElement.innerText = "Time: 10s";
  }

  function selectOption(selectedIndex) {
    const selectedOption = currentQuestion.options[selectedIndex];

    // Check if the selected option is correct
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    // Update correct and wrong answers count
    if (isCorrect) {
      correctAnswersCount++;
    } else {
      wrongAnswersCount++;
    }
    // Apply styling based on correctness
    optionsContainer.childNodes.forEach((button, index) => {
      if (index === selectedIndex) {
        button.classList.add(isCorrect ? "correct-answer" : "wrong-answer");
      } else {
        button.disabled = true;
      }
    });

    // Enable the next button
    nextButton.disabled = false;

    // Stop the timer when an option is selected
    resetTimer();
  }

  function nextQuestion() {
    // Reset styling and enable all options for the next question
    optionsContainer.childNodes.forEach((button) => {
      button.classList.remove("correct-answer", "wrong-answer");
      button.disabled = false;
    });

    // Stop the timer when an option is selected
    resetTimer();
    // Calculate elapsed time for the current question
    const endTime = new Date().getTime();
    const elapsedTime = (endTime - startTime) / 1000; // Convert milliseconds to seconds
    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < quizData[selectedCategory].length) {
      loadQuestion();
    } else {
      // End of quiz, set result data and navigate to the result page
      const resultData = {
        userName: userName,
        category: selectedCategory,
        correctAnswers: correctAnswersCount,
        wrongAnswers: wrongAnswersCount,
        totalElapsedTime: calculateTotalElapsedTime(),
      };

      // Set result data in localStorage
      localStorage.setItem("resultUserName", resultData.userName);
      localStorage.setItem("resultCategory", resultData.category);
      localStorage.setItem("resultCorrectAnswers", resultData.correctAnswers);
      localStorage.setItem("resultWrongAnswers", resultData.wrongAnswers);
      localStorage.setItem("resultTotalTime", resultData.totalElapsedTime);

      // End of quiz, navigate to the result page
      window.location.href = "result.html";
    }
  }

  // Calculate total elapsed time for the entire quiz
  function calculateTotalElapsedTime() {
    const endTime = new Date().getTime();
    const totalElapsedTime = (endTime - quizStartTime) / 1000; // Convert milliseconds to seconds
    return totalElapsedTime;
  }

  const timerElement = document.getElementById("timer");
  let timer;
  //Timer functionality.
  function startTimer() {
    let timeRemaining = 10;

    timer = setInterval(function () {
      timerElement.innerText = `Time: ${timeRemaining}s`;

      if (timeRemaining <= 0) {
        // Move to the next question when time is up
        nextQuestion();
      }

      timeRemaining--;
    }, 1000);
  }

  // Event listeners
  nextButton.addEventListener("click", nextQuestion);

  // Initial load
  loadQuestion();
  quizStartTime = new Date().getTime(); // Record the start time of the quiz
});
