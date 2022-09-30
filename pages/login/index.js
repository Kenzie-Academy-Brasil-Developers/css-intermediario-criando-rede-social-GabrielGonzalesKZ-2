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

function buttonNavRegister() {
    const btnNavRegister = document.querySelector(".button__nav__register");

    btnNavRegister.addEventListener("click", () => {
        window.location.assign("./pages/resgister/index.html");
    });
}
buttonNavRegister()

function modal1(){
    const classMain = document.querySelector('.main')
    const section = document.createElement('section')
    const divNewPosterModal = document.createElement("div")
    const userPoster = document.createElement('div')
    const newPosterImg = document.createElement('div')
    const imgUser = document.createElement('img')
    const newPosterDescription = document.createElement('div')
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    const buttonClose = document.createElement('div')
    const btnClose = document.createElement('button')
    const posterDescription = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')

    section.classList.add('.poster__modal')
    divNewPosterModal.classList.add('.new__poster__modal')
    userPoster.classList.add('.user__poster')
    newPosterImg.classList.add('.new__poster__img')
    imgUser.classList.add('.img__user')
    newPosterDescription.classList.add('.new_poster__description')
    h3.classList.add('.font-title-2')
    h4.classList.add('.font-text-2')
    buttonClose.classList.add('.button__close')
    btnClose.classList.add('.btn__magic')
    posterDescription.classList.add('.poster__description')
    h2.classList.add('.font-title-1')
    p.classList.add('.font-text-1')
    p.classList.add('.poster__text__modal')

    imgUser.src = './assets/img/user1.srg'
    h3.innerText = 'Samuel Leão'
    h4.innerText = 'Front end Engineer'
    btnClose.innerText = 'X'
    h2.innerText = 'Como melhorar sua lógica de programação? Desenvolvemos 5 passos para te ajudar'
    p.innerText = 'Provavelmente, você já ouviu falar do Next.js, considerado o framework mais popular do mercado. Com a expansão do mercado de tecnologia e sua influência em serviços de diversos segmentos Para tornar o carregamento de páginas mais rápido, o Next.js quebra o código automaticamente e é assim que assegura uma capacidade de carregamento de página mais rápida, já que os sites são criados para suportar um grande volume de acessos.'

    classMain.appendChild(section)
    section.append(divNewPosterModal, posterDescription)
    divNewPosterModal.append(userPoster, buttonClose)
    userPoster.append(newPosterImg, newPosterDescription)
    newPosterImg.appendChild(imgUser)
    newPosterDescription.append(h3, h4)
    buttonClose.appendChild(btnClose)
    posterDescription.append(h2, p)

}

console.log(modal1())