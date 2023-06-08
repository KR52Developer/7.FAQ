let btn = document.querySelectorAll(".btn");

let upArrow = document.querySelector(".upArrow");
let downArrow = document.querySelector(".downArrow");
console.log(btn);



btn.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
        console.log(e.currentTarget.parentElement.parentElement);
        console.log(e.currentTarget);
        let result = e.currentTarget.parentElement.parentElement;
        console.log(result);
        // let questionParaContainer = document.querySelector(".questionParaContainer");
        result.classList.toggle("showText");
        upArrow.classList.toggle("showupArrow");
        downArrow.classList.toggle("hidedownArrow");
    })
})