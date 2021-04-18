const container = document.querySelector(".container");
const button = document.querySelector(".container button");
const lovePercentage = document.querySelector(".love-percentage");
const result = document.querySelector(".result");
const inputFields = document.querySelectorAll("input");
const resetButton = document.querySelector(".reset");
const form = document.querySelector(".submit-form");

document.getElementById("first-name").focus();

const greatMatch = "This is love!! 😍";
const goodMatch = "You are compatible, let's celebrate 🥂🎊";
const averageMatch = "Your match is okay, but it could be definitely better ";
const badMatch =
  "There's plenty of fishes in the water.<br> Why not looking somewhere else instead?";

const loverFunction = function () {
  const randomNumber = Math.random() * 100;
  return Math.floor(randomNumber) + 1;
};

// let loverMatchRate = loverFunction();

const loveScore = loverFunction();
const getMatchScore = function () {
  if (loveScore > 90) {
    return loveScore, greatMatch;
  }
  if (loveScore > 70 && loveScore < 90) {
    return loveScore, goodMatch;
  }
  if (loveScore > 50 && loveScore < 70) {
    return loveScore, averageMatch;
  }
  if (loveScore < 50) {
    return loveScore, badMatch;
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const secondName = document.getElementById("second-name").value;

  result.classList.remove("result-hidden");
  result.innerHTML = `💖Love Compatibility between ${firstName} and ${secondName} is ${loveScore} % <br>  ${getMatchScore()}`;
});

resetButton.addEventListener("click", function (e) {
  result.classList.add("result-hidden");
  inputFields.forEach((input) => (input.value = ""));
});
