let input1 = document.getElementById("mirror");
let articleE1 = document.getElementById("article-mirror");
let articleE2 = document.getElementById("article-mirror2")

input1.addEventListener("keyup", function (event) {
    articleE1.innerHTML = event.target.value
})

input1.addEventListener("keyup", function (event) {
    articleE2.innerHTML = event.target.value
})