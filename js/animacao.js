function CriandoBar(nome, classe) {
    var position = document.querySelector('#bar ul');
    var newLi = document.createElement('li');
    var newA = document.createElement('a');
    var link = "#" + classe;
    var a = document.createTextNode(nome);
    newA.appendChild(a);
    newA.setAttribute("href", link);
    newLi.appendChild(newA);
    position.appendChild(newLi);
}
CriandoBar("1", "mymemorie")
CriandoBar("2", "parte2")
CriandoBar("3", "parte2")
CriandoBar("4", "parte2")



function barHover() {
    const listt = document.querySelectorAll("#bar ul");
    const menu = document.querySelectorAll(".bar_mark");
    console.log(listt);
    for (let index = 0; index < listt.length; index++) {
        listt[index].addEventListener("mouseover", mouseOver);
        listt[index].addEventListener("mouseout", mouseOut);
        const text = menu[index].getAttribute('sub');
        const newText = document.createTextNode(' -' + ' ' + text);


        function mouseOver() {
            listt[index].classList.add("extend");
            listt[index].querySelector("a").appendChild(newText);

        }

        function mouseOut() {
            listt[index].classList.remove("extend");
            listt[index].querySelector("a").removeChild(newText);
        }
    }

}

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.animation');
    const menu = document.querySelectorAll('.s');
    var position = document.querySelector('#menu-numeros');
    var bar = document.querySelectorAll('.barra');
    const cont = menu.length;

    for (var i = 0; i < cont; i++) {
        insereLi(i, position);
    }

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.5;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo');

                } else {
                    section.classList.remove('ativo');

                }
            })
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();