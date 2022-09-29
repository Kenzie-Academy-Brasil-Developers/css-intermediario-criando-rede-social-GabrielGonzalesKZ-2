function buttonBack() {
    const btnBack = document.querySelector(".button__back");

    btnBack.addEventListener("click", () => {
        window.location.assign("../login/index.html");
    });
}
buttonBack()

function buttonRegister() {
    const btnRegister = document.querySelector(".button__login");

    btnRegister.addEventListener("click", () => {
        window.location.assign("../home/index.html");
    });
}
buttonRegister()

function buttonP() {
    const btnP = document.querySelector(".register");

    btnP.addEventListener("click", () => {
        window.location.assign("../login/index.html");
    });
}
buttonP()

function buttonLoginPage() {
    const btnLoginPage = document.querySelector(".button__register");

    btnLoginPage.addEventListener("click", () => {
        window.location.assign("../login/index.html");
    });
}
buttonLoginPage()

function buttonNavRegister() {
    const btnNavRegister = document.querySelector(".btn__nav__register");

    btnNavRegister.addEventListener("click", () => {
        window.location.assign("./index.html");
    });
}
buttonNavRegister()

function buttonNavLogin() {
    const btnNavLogin = document.querySelector(".button__nav__login");

    btnNavLogin.addEventListener("click", () => {
        window.location.assign("../login/index.html");
    });
}
buttonNavLogin()