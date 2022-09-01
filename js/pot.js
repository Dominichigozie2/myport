let bar = document.querySelector("#bars");
let side = document.querySelector("header");

bar.onclick = () => {
    bar.classList.toggle("fa-times");
    side.classList.toggle("active");
}


//fo the social media
let but = document.querySelector("#adds");
let btn = document.querySelector(".buttons");

but.onclick = () => {
    but.classList.toggle("fa-times");
    btn.classList.toggle("show")
}


/**
 * for the testmonial side
 */

let userTexts = document.getElementsByClassName("user-test");
let userPics = document.getElementsByClassName("user-pic");

function showReview() {
    for (userPic of userPics) {
        userPic.classList.remove("active-pic");
    }
    for (userText of userTexts) {
        userText.classList.remove("active-text")
    }
    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add("active-pic")
    userTexts[i].classList.add("active-text")
}