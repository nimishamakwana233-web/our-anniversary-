// Fade animation when opening Page 2

const button = document.querySelector(".btn");

button.addEventListener("click", function (e) {

    e.preventDefault();

    document.body.style.opacity = "0";

    document.body.style.transition = "0.8s";

    setTimeout(() => {

        window.location.href = "page2.html";

    }, 800);

});
