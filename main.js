let lis = document.querySelectorAll("li");
let submit = document.getElementById("submit");
let ratingBox = document.querySelector(".rating");
let thanksBox = document.querySelector(".thanks");
let num = document.getElementById("num")
let rate ;
lis.forEach((li) => {
    li.addEventListener("click",function (e) {
        lis.forEach((x) => {
            x.classList.remove("active")
        })
        e.target.classList.add("active")
        rate = e.target.innerHTML ;
        console.log(rate)
    })
});

submit.onclick = function () {
    if(rate >= 1) {
        ratingBox.style.display = "none";
        thanksBox.style.display = "block"
        num.innerHTML = rate
    }
}