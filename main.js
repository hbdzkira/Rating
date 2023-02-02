let numbers = document.querySelectorAll(".rating-numbers button");
let submit = document.querySelector(".submit-btn");
let main = document.getElementById("main");
let secondary = document.getElementById("secondary");
let result = document.querySelector(".result");
let starNum = 0;
//console.log(parseInt(numbers[0].textContent));
numbers.forEach(function (btn) {
  btn.onclick = function () {
    numbers.forEach((ele) => {
      ele.classList.remove("active");
    });
    btn.classList.add("active");
    starNum = parseInt(btn.textContent);
  };
});
submit.onclick = function () {
  if (starNum !== 0) {
    showThnkU();
  }
};
function showThnkU() {
  main.style.display = "none";
  secondary.style.display = "flex";
  result.innerHTML = `You selected ${starNum} out of 5`;
}
