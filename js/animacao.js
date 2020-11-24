const listt = document.querySelectorAll("#bar li");

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
CriandoBar("1", "home")
CriandoBar("2", "parte1")
CriandoBar("3", "mymemorie")
CriandoBar("4", "parte2")
CriandoBar("5", "parte3")
CriandoBar("6", "thedandelion")

function barHover() {
    const listt = document.querySelectorAll("#bar li");
    var newText = null;
    console.log(listt);
    for (let index = 0; index < listt.length; index++) {
        listt[index].addEventListener("mouseover", mouseOver);
        listt[index].addEventListener("mouseout", mouseOut);
        //const text = menu[index].getAttribute('sub');
        function mouseOver() {
            switch (index) {
                case 0:
                    newText = document.createTextNode(' - Inicio');
                    break;
                case 1:
                    newText = document.createTextNode(' - Parte 1');
                    break;
                case 2:
                    newText = document.createTextNode(' - My memories');
                    break;
                case 3:
                    newText = document.createTextNode(' - Parte 2');
                    break;
                case 4:
                    newText = document.createTextNode(' - Activies');
                    break;
                case 5:
                    newText = document.createTextNode(' - The Dandelion');
                    break;
            };
            console.log(index);
            listt[index].classList.add("extend");
            listt[index].querySelector("a").appendChild(newText);

        }

        function mouseOut() {
            listt[index].classList.remove("extend");
            listt[index].querySelector("a").removeChild(newText);
        }
    }
}
barHover();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.animation');
    const mark = document.querySelectorAll(".bar_mark");

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

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