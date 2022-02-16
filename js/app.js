let loanForm = document.getElementById("loan-form");
let container = document.querySelector(".container")
let amount = document.getElementById("amount");
let interest = document.getElementById("interest");
let years = document.getElementById("years");
let btn = document.querySelector(".btn");
let amountTotal = document.getElementById("amount-total");
let total = document.getElementById("total-result");
let totalInterest = document.getElementById("total-inter");
let loader = document.getElementById("loader");
let output = document.getElementById("output");
let heading = document.querySelector(".heading");

let div = document.createElement("p");
div.textContent = "Plaese check your numbers";
div.style.width = "600px";
div.style.height = "50px";
div.style.fontSize = "24px";
div.style.background = "#EA9380";
div.style.paddingTop = "10px";
div.style.borderRadius = "4px";
div.style.display = "none";
heading.prepend(div);

loanForm.addEventListener("submit", (e) => {
    e.preventDefault();
})

btn.addEventListener("click", function () {
    if (amount.value.length > 0 && interest.value.length > 0 && years.value.length > 0) {
        btn.addEventListener("click", function () {
            loader.style.display = "block";
            setTimeout(function () {
                document.getElementById('loader').style.display = 'none';
            }, 1000);

            output.style.display = "block";
            const a = amount.value;
            const b = interest.value;
            const c = years.value;

            let percentYear = a;
            let totalAmount = b / 100 / 12;
            let monthPercent = c * 12;

            let x = Math.pow(1 + totalAmount, monthPercent);
            let mothly = (percentYear * x * totalAmount) / (x - 1);

            amountTotal.value = mothly.toFixed(2);
            total.value = (mothly * monthPercent).toFixed(2);
            totalInterest.value = (mothly * monthPercent - percentYear).toFixed(2);
        })
    } else {
        loader.style.display = "block";

        setTimeout(function () {
            loader.style.display = 'none';
            div.style.display = "block";
        }, 1000);

        setTimeout(function () {
            div.style.display = "none";
        }, 3000);
    }
});