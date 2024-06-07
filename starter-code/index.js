const hamburgerButton = document.querySelector(".mobile-tab");
const navBar = document.querySelector(".navigation-primary");

hamburgerButton.addEventListener("click", function () {
    console.log("u clicked");
    let data = navBar.getAttribute("data-visible");
    if (data === "false") {
        navBar.setAttribute("data-visible", true);
        hamburgerButton.style.backgroundImage = "url('./assets/shared/icon-close.svg')";
        console.log(data);
    }
    else {
        navBar.setAttribute("data-visible", false);
        hamburgerButton.style.backgroundImage = "url('./assets/shared/icon-hamburger.svg')";
    }


});