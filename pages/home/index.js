function buttonLogout() {
    const btnLogout = document.querySelector(".button__nav__logout");

    btnLogout.addEventListener("click", () => {
        window.location.assign("../../index.html");
    });
}
buttonLogout()

function modal1(){
    const classMain = document.querySelector('body')
    const section = document.createElement('section')
    const section1 = document.createElement('section')
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

    section1.classList.add('modal')
    section.classList.add('poster__modal')
    divNewPosterModal.classList.add('new__poster__modal')
    userPoster.classList.add('user__poster')
    newPosterImg.classList.add('new__poster__img')
    imgUser.classList.add('img__user')
    newPosterDescription.classList.add('new_poster__description')
    h3.classList.add('font-title-2')
    h4.classList.add('font-text-2')
    buttonClose.classList.add('button__close')
    btnClose.classList.add('btn__close')
    posterDescription.classList.add('poster__description')
    h2.classList.add('font-title-1')
    p.classList.add('font-text-1')
    p.classList.add('poster__text__modal')

    imgUser.src = '../../assets/img/user2.svg'
    h3.innerText = 'Samuel Persuhn'
    h4.innerText = 'Front end Engineer'
    btnClose.innerText = 'X'
    h2.innerText = 'Empresa de Tecnologia da Informação abre vagas para programa de estágio'
    p.innerText = 'A Generic Digital, empresa natalence especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 10 e 28 de agosto. O programa é conhecido como Generic Wars, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força. A empresa explica que este princípio também é aplicado na empresa, em que a ideia é desenvolver talentos na área de tecnologia que vão aprender, desde cedo, a colocar a mão na massa, atuando diretamente com clientes nacionais e internacionais.'


    classMain.appendChild(section1)
    section1.appendChild(section)
    section.append(divNewPosterModal, posterDescription)
    divNewPosterModal.append(userPoster, buttonClose)
    userPoster.append(newPosterImg, newPosterDescription)
    newPosterImg.appendChild(imgUser)
    newPosterDescription.append(h3, h4)
    buttonClose.appendChild(btnClose)
    posterDescription.append(h2, p)
}

function buttonModal1() {
    const btnModal = document.querySelector(".btn__open__post__1");

    btnModal.addEventListener("click", () => {
        const button1 = modal1();
        closeModal1()
    });
}
buttonModal1()

function closeModal1(){
    const closeButton = document.querySelector('.btn__close')
    const modalContainer = document.querySelector('.modal')
    
    closeButton.addEventListener('click', () => {
        modalContainer.remove()
    })
}

function modal2(){
    const classMain = document.querySelector('body')
    const section = document.createElement('section')
    const section1 = document.createElement('section')
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

    section1.classList.add('modal')
    section.classList.add('poster__modal')
    divNewPosterModal.classList.add('new__poster__modal')
    userPoster.classList.add('user__poster')
    newPosterImg.classList.add('new__poster__img')
    imgUser.classList.add('img__user')
    newPosterDescription.classList.add('new_poster__description')
    h3.classList.add('font-title-2')
    h4.classList.add('font-text-2')
    buttonClose.classList.add('button__close')
    btnClose.classList.add('btn__close')
    posterDescription.classList.add('poster__description')
    h2.classList.add('font-title-1')
    p.classList.add('font-text-1')
    p.classList.add('poster__text__modal')

    imgUser.src = '../../assets/img/user4.svg'
    h3.innerText = 'Carla Maria'
    h4.innerText = 'Back end Engineer'
    btnClose.innerText = 'X'
    h2.innerText = 'Como melhorar sua lógica de programação? Desenvolvemos 5 passos para te ajudar'
    p.innerText = 'Para quem está começando na área de T.I, em pleno século 21 este conceito pode parecer um grande desafio, pois requer muitas habilidades em diversas áreas de estudo, principalmente lógica. Como já informado, algoritmos são um conjunto de passos definidos para gerar um resultado. Aprender o conceito de instruções simples é a primeira etapa para compreender lógica de programação. No seu dia a dia você já aplicou um algoritmo e não percebeu. Como exemplo temos a instrução “escovar os dentes”'


    classMain.appendChild(section1)
    section1.appendChild(section)
    section.append(divNewPosterModal, posterDescription)
    divNewPosterModal.append(userPoster, buttonClose)
    userPoster.append(newPosterImg, newPosterDescription)
    newPosterImg.appendChild(imgUser)
    newPosterDescription.append(h3, h4)
    buttonClose.appendChild(btnClose)
    posterDescription.append(h2, p)
}

function buttonModal2() {
    const btnModal = document.querySelector(".btn__open__post__2");

    btnModal.addEventListener("click", () => {
        const button2 = modal2();
        closeModal2()
    });
}
buttonModal2()

function closeModal2(){
    const closeButton = document.querySelector('.btn__close')
    const modalContainer = document.querySelector('.modal')
    
    closeButton.addEventListener('click', () => {
        modalContainer.remove()
    })
}

function modal3(){
    const classMain = document.querySelector('body')
    const section = document.createElement('section')
    const section1 = document.createElement('section')
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

    section1.classList.add('modal')
    section.classList.add('poster__modal')
    divNewPosterModal.classList.add('new__poster__modal')
    userPoster.classList.add('user__poster')
    newPosterImg.classList.add('new__poster__img')
    imgUser.classList.add('img__user')
    newPosterDescription.classList.add('new_poster__description')
    h3.classList.add('font-title-2')
    h4.classList.add('font-text-2')
    buttonClose.classList.add('button__close')
    btnClose.classList.add('btn__close')
    posterDescription.classList.add('poster__description')
    h2.classList.add('font-title-1')
    p.classList.add('font-text-1')
    p.classList.add('poster__text__modal')

    imgUser.src = '../../assets/img/user5.svg'
    h3.innerText = 'Júlia Martins'
    h4.innerText = "Devop's"
    btnClose.innerText = 'X'
    h2.innerText = 'Como melhorar sua lógica de programação? Desenvolvemos 5 passos para te ajudar'
    p.innerText = 'Provavelmente, você já ouviu falar do Next.js, considerado o framework mais popular do mercado. Com a expansão do mercado de tecnologia e sua influência em serviços de diversos segmentos. Para tornar o carregamento de páginas mais rápido, o Next.js quebra o código automaticamente e é assim que assegura uma capacidade de carregamento de página mais rápida, já que os sites são criados para suportar um grande volume de acessos.'


    classMain.appendChild(section1)
    section1.appendChild(section)
    section.append(divNewPosterModal, posterDescription)
    divNewPosterModal.append(userPoster, buttonClose)
    userPoster.append(newPosterImg, newPosterDescription)
    newPosterImg.appendChild(imgUser)
    newPosterDescription.append(h3, h4)
    buttonClose.appendChild(btnClose)
    posterDescription.append(h2, p)
}

function buttonModal3() {
    const btnModal = document.querySelector(".btn__open__post__3");

    btnModal.addEventListener("click", () => {
        const button2 = modal3();
        closeModal3()
    });
}
buttonModal3()

function closeModal3(){
    const closeButton = document.querySelector('.btn__close')
    const modalContainer = document.querySelector('.modal')
    
    closeButton.addEventListener('click', () => {
        modalContainer.remove()
    })
}

function modal4(){
    const classMain = document.querySelector('body')
    const section = document.createElement('section')
    const section1 = document.createElement('section')
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

    section1.classList.add('modal')
    section.classList.add('poster__modal')
    divNewPosterModal.classList.add('new__poster__modal')
    userPoster.classList.add('user__poster')
    newPosterImg.classList.add('new__poster__img')
    imgUser.classList.add('img__user')
    newPosterDescription.classList.add('new_poster__description')
    h3.classList.add('font-title-2')
    h4.classList.add('font-text-2')
    buttonClose.classList.add('button__close')
    btnClose.classList.add('btn__close')
    posterDescription.classList.add('poster__description')
    h2.classList.add('font-title-1')
    p.classList.add('font-text-1')
    p.classList.add('poster__text__modal')

    imgUser.src = '../../assets/img/user1.svg'
    h3.innerText = 'Samuel Leão'
    h4.innerText = "Front end Engineer"
    btnClose.innerText = 'X'
    h2.innerText = 'Como criar um interface simples e agradável utilizando boas práticas de design'
    p.innerText = 'Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design. Antes de iniciar a criação de qualquer projeto, busque referências de aplicações que tenham a ver com o nicho que você está desenvolvendo. Por exemplo, quando quero criar um e-commerce de roupas, vou reservar um momento para buscar por aplicações do gênero, tanto acessando ou baixando apps e vendo o que se repete de informações em cada um dos aplicativos e sites referentes a compra de roupas, e também, observar cores que normalmente você enxerga em cada um dos apps.'


    classMain.appendChild(section1)
    section1.appendChild(section)
    section.append(divNewPosterModal, posterDescription)
    divNewPosterModal.append(userPoster, buttonClose)
    userPoster.append(newPosterImg, newPosterDescription)
    newPosterImg.appendChild(imgUser)
    newPosterDescription.append(h3, h4)
    buttonClose.appendChild(btnClose)
    posterDescription.append(h2, p)
}

function buttonModal4() {
    const btnModal = document.querySelector(".btn__open__post__4");

    btnModal.addEventListener("click", () => {
        const button2 = modal4();
        closeModal4()
    });
}
buttonModal4()

function closeModal4(){
    const closeButton = document.querySelector('.btn__close')
    const modalContainer = document.querySelector('.modal')
    
    closeButton.addEventListener('click', () => {
        modalContainer.remove()
    })
}
