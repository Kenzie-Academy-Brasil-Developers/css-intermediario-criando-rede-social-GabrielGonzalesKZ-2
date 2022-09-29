function buttonLogin() {
    const btnLogin = document.querySelector(".button__login");

    btnLogin.addEventListener("click", () => {
        window.location.assign("./pages/home/index.html");
    });
}
buttonLogin()

function buttonRegister() {
    const btnRegister = document.querySelector(".button__register");

    btnRegister.addEventListener("click", () => {
        window.location.assign("./pages/resgister/index.html");
    });
}
buttonRegister()

function buttonP() {
    const btnP = document.querySelector(".register");

    btnP.addEventListener("click", () => {
        window.location.assign("./pages/resgister/index.html");
    });
}
buttonP()

function buttonNavLogin() {
    const btnNavLogin = document.querySelector(".button__nav__login");

    btnNavLogin.addEventListener("click", () => {
        window.location.assign("../../index.html");
    });
}
buttonNavLogin()

function buttonNavRegister() {
    const btnNavRegister = document.querySelector(".button__nav__register");

    btnNavRegister.addEventListener("click", () => {
        window.location.assign("./pages/resgister/index.html");
    });
}
buttonNavRegister()