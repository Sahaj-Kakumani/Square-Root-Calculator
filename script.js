document.getElementById("submit").onclick = function () {
  let number = document.getElementById("input").value; // Getting the input
  let answer = Math.sqrt(number); //Calculating the Square Root
  document.getElementById("answer").innerText = "(" + answer + ")²"; //Displaying the answer
};
