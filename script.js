const container = document.querySelector(".container");
const button = document.querySelector(".container button");
const lovePercentage = document.querySelector(".love-percentage");
const result = document.querySelector(".result");
const inputFields = document.querySelectorAll("input");
const resetButton = document.querySelector(".reset");

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

let loverMatchRate = loverFunction();

const getMatchScore = function (loveScore) {
  if (loveScore > 90) {
    return greatMatch;
  }
  if (loveScore > 70 && loveScore < 90) {
    return goodMatch;
  }
  if (loveScore > 50 && loveScore < 70) {
    return averageMatch;
  }
  if (loveScore < 50) {
    return badMatch;
  }
};

button.addEventListener("click", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const secondName = document.getElementById("second-name").value;

  if (firstName === "" || secondName === "") {
    alert("You must enter both names!");
    return;
  }

  result.classList.remove("result-hidden");
  result.innerHTML = `💖Love Compatibility between ${firstName} and ${secondName} is ${loverMatchRate} % <br>  ${getMatchScore(
    loverMatchRate
  )}`;
});

resetButton.addEventListener("click", function () {
  result.classList.add("result-hidden");
  inputFields.forEach((input) => (input.value = ""));
});
