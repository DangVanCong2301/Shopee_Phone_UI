let index = 0;
const sliderNumber = document.querySelectorAll(".phone-banner__item");
const balls = document.querySelector(".phone-banner__bottom-pagination");

for (let i = 0; i < sliderNumber.length; i++) {
    const div = document.createElement("div");
    div.id = i;
    balls.appendChild(div);
}
document.getElementById("0").classList.add("banner-circle-fill");

var pos = document.querySelectorAll(".phone-banner__bottom-pagination div")

for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => {
        index = pos[i].id;
        document.querySelector(".phone-banner__list").style.right = index * 100 + "%";
        document.querySelector(".banner-circle-fill").classList.remove("banner-circle-fill");
        document.getElementById(index).classList.add("banner-circle-fill");
    });
}

function sliderAuto() {
    index = index + 1;
    if (index > sliderNumber.length - 1) {
        index = 0;
    }
    document.querySelector(".phone-banner__list").style.right = index * 100 + "%";
    document.querySelector(".banner-circle-fill").classList.remove("banner-circle-fill");
    document.getElementById(index).classList.add("banner-circle-fill");
}

setInterval(sliderAuto, 3000)

// Next/Prev Banner
const btnNextBanner = document.querySelector(".phone-banner__arrow-icon-next");
const btnPrevBanner = document.querySelector(".phone-banner__arrow-icon-prev");

btnNextBanner.addEventListener('click', () => {
    index = index + 1;
    if (index > sliderNumber.length - 1) {
        index = 0;
    }
    document.querySelector(".phone-banner__list").style.right = index * 100 + "%";
    document.querySelector(".banner-circle-fill").classList.remove("banner-circle-fill");
    document.getElementById(index).classList.add("banner-circle-fill");
});

btnPrevBanner.addEventListener('click', () => {
    index = index - 1;
    if (index <= 0) {
        index = sliderNumber.length - 1;
    }
    document.querySelector(".phone-banner__list").style.right = index * 100 + "%";
    document.querySelector(".banner-circle-fill").classList.remove("banner-circle-fill");
    document.getElementById(index).classList.add("banner-circle-fill");
});