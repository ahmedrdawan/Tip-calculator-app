const billInput = document.querySelector(".input-bill");
const custom = document.querySelector("input.custom");
const personInput = document.querySelector(".person");
const btns = document.querySelectorAll(".btns button");
const link = document.querySelector("a");
const amount = document.getElementById("amount");
const total = document.getElementById("total");




personInput.addEventListener("change", () => {
  if (personInput.value === "0") {
    personInput.style.border = "1px solid red";
  }
});

function calculateAmount() {
  if (
    billInput.value !== "" &&
    personInput.value !== "" &&
    custom.value !== ""
  ) {
    let numAmount = ((Number(billInput.value) / Number(personInput.value)) * (parseInt(custom.value) / 100)).toFixed(2);

    amount.textContent = `$${numAmount}`;


    let numTotal = ((Number(billInput.value) / Number(personInput.value)) + Number(numAmount)).toFixed(2);
    total.textContent = `$${numTotal}`;
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((btn) => {
      btn.classList.remove("active")
    })
    e.target.classList.add("active")
    custom.value = e.currentTarget.textContent;
  });
});

link.addEventListener("click", function () {
  calculateAmount();
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      custom.value = e.currentTarget.textContent;
      calculateAmount();
    });
  });
});
