const container = document.querySelector(".container");
const button = document.querySelector(".container button");
const lovePercentage = document.querySelector(".love-percentage");
const result = document.querySelector(".result");
const inputFields = document.querySelectorAll("input");
const resetButton = document.querySelector(".reset");

const loverFunction = function () {
  const randomNumber = Math.random() * 100;
  return Math.floor(randomNumber) + 1;
};

let loverMatchRate = loverFunction();

button.addEventListener("click", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const secondName = document.getElementById("second-name").value;

  if (firstName === "" || secondName === "") {
    alert("You must enter both names!");
    return;
  }

  console.log(secondName.value);
  result.classList.remove("result-hidden");
  result.textContent = `💖Love Compatibility between ${firstName} and ${secondName} is ${loverMatchRate} %`;

  //   inputFields.forEach((node) => (node.value = ""));
});

resetButton.addEventListener("click", function () {
  result.classList.add("result-hidden");
  inputFields.forEach((node) => (node.value = ""));
});
