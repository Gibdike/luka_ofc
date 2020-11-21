function BoxAcitivies(titulo, cargo, descricao, caminhoimg) {
    var classeHtml = ".activies ul";
    var position = document.querySelector(classeHtml);
    var newLi = document.createElement('li');
    var newDivText = document.createElement('div');
    newDivText.classList.add('text');
    var newh2 = document.createElement('h2');
    var newh3 = document.createElement('h3');
    var newh4 = document.createElement('h4');
    var newimg = document.createElement('img');
    var a = document.createTextNode(titulo);
    newh2.appendChild(a);
    var a = document.createTextNode(cargo);
    newh3.appendChild(a);
    var a = document.createTextNode(descricao);
    newh4.appendChild(a);
    newimg.setAttribute("src", caminhoimg);
    newDivText.appendChild(newh2);
    newDivText.appendChild(newh3);
    newDivText.appendChild(newh4);
    newLi.appendChild(newimg);
    newLi.appendChild(newDivText);
    position.appendChild(newLi);
    newLi.classList.add('animation');
}
BoxAcitivies(
    "English Game Arena",
    "Co-Founder and Club Leader",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorpereget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra",
    "./img/WhatsApp Image 2020-11-18 at 23.44.35.jpeg",
)
BoxAcitivies(
    "English Game Arena",
    "Co-Founder and Club Leader",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorpereget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra",
    "./img/WhatsApp Image 2020-11-18 at 23.44.35.jpeg",
)
BoxAcitivies(
        "English Game Arena",
        "Co-Founder and Club Leader",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorpereget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra",
        "./img/WhatsApp Image 2020-11-18 at 23.44.35.jpeg",
    )
    //Parte dos paragrafos My mymemories e The dandelion
function TextoComNegrito(textoGrande, textoNegrito, classeHtml) {
    var position = document.querySelector(classeHtml);
    var newh2 = document.createElement('h2');
    var newNegrito = document.createElement('b');
    var a = document.createTextNode(textoNegrito);
    newNegrito.appendChild(a);
    a = document.createTextNode(textoGrande);
    newNegrito.appendChild(a);
    newh2.appendChild(newNegrito);
    newh2.appendChild(a);
    position.appendChild(newh2);
}
//Luka aqui o primeiro elemento é o texto e o segundo é oq fica em negrito
//Outra coisa é definir a classe então temos '.mymemories .box' ou '.thedandelion .box'
TextoComNegrito(
    'aaaaaaaaaaaaaaaaaaaaa Her big light blue eyes were the most beautiful ones I’ve ever seen. Perhaps that’s the most vivid memory I have of her. When she looked at me, it was as if a fissure in space was opened and a light would shine in my direction—Icould feel love through her gaze. Even when she was mad, her eyes would still bring love—the purest form of it. Maybe that was when I learned what love is.',
    "I remember her eyes. ",
    '.mymemories .box'
)
TextoComNegrito(
    'Her big light blue eyes were the most beautiful ones I’ve ever seen. Perhaps that’s the most vivid memory I have of her. When she looked at me, it was as if a fissure in space was opened and a light would shine in my direction—Icould feel love through her gaze. Even when she was mad, her eyes would still bring love—the purest form of it. Maybe that was when I learned what love is.',
    "I remember her eyes. ",
    '.mymemories .box'
)
TextoComNegrito(
    'Her big light blue eyes were the most beautiful ones I’ve ever seen. Perhaps that’s the most vivid memory I have of her. When she looked at me, it was as if a fissure in space was opened and a light would shine in my direction—Icould feel love through her gaze. Even when she was mad, her eyes would still bring love—the purest form of it. Maybe that was when I learned what love is.',
    "I remember her eyes. ",
    '.mymemories .box'
)
TextoComNegrito(
    'Her big light blue eyes were the most beautiful ones I’ve ever seen. Perhaps that’s the most vivid memory I have of her. When she looked at me, it was as if a fissure in space was opened and a light would shine in my direction—Icould feel love through her gaze. Even when she was mad, her eyes would still bring love—the purest form of it. Maybe that was when I learned what love is.',
    "I remember her eyes. ",
    '.mymemories .box'
)
TextoComNegrito(
    'Her big light blue eyes were the most beautiful ones I’ve ever seen. Perhaps that’s the most vivid memory I have of her. When she looked at me, it was as if a fissure in space was opened and a light would shine in my direction—Icould feel love through her gaze. Even when she was mad, her eyes would still bring love—the purest form of it. Maybe that was when I learned what love is.',
    "I remember her eyes. ",
    '.thedandelion .box'
)
TextoComNegrito(
    'Her big light blue eyes were the most beautiful ones I’ve ever seen. Perhaps that’s the most vivid memory I have of her. When she looked at me, it was as if a fissure in space was opened and a light would shine in my direction—Icould feel love through her gaze. Even when she was mad, her eyes would still bring love—the purest form of it. Maybe that was when I learned what love is.',
    "I remember her eyes. ",
    '.thedandelion .box'
)