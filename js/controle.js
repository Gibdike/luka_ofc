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
    "The English Game Arena (EGA) is an initiative that aims to promote safe spaces for teaching and practicing English with ludic methodologies, having board games as the main instrument of instruction. In this activity, I organize the English club and design original materials. 600+ students worldwide participated.",
    "./img/1.png",
)
BoxAcitivies(
    "AFS Intercultural Programs",
    "Local volunteer & Diversity Committee member",
    "AFS is an international non-profit organization that aims to promote peace through interculturality. I advise and teach Portuguese to exchange students at school. As a member of the National Diversity Committee, I promote inclusive public policies in the organization at a national level. This activity allowed me to create global awareness and understand my surroundings with more tolerance.",
    "./img/2.png",
)
BoxAcitivies(
    "Prep Change",
    "Academic mentor",
    "I individually mentor 3 students at Prep Change, an international education start-up. Besides mentoring the students, I organize virtual events, guiding participants through the application process to academic opportunities abroad. Fun fact: this was my first paid job!",
    "./img/3.png",
    )
BoxAcitivies(
    "Research in Linguistics and Education",
    "Research fellow",
    "Granted 2 one-year research fellowships to develop two projects, both in the fields of linguistics and education. Our main discussions are prompted by the phenomena of foreign language teaching in Brazil and the concept of autobiography by Nietzsche. Quantified databases with 900+ papers and published findings in 6+ conferences worldwide.",
    "./img/4.png",
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
    newh2.classList.add('animation');
}
//Luka aqui o primeiro elemento é o texto e o segundo é oq fica em negrito
//Outra coisa é definir a classe então temos '.mymemories .box' ou '.thedandelion .box'


//my memories
TextoComNegrito(
    'Her big light blue eyes were the most beautiful ones I’ve ever seen. Perhaps that’s the most vivid memory I have of her. When she looked at me, it was as if a fissure in space was opened and a light would shine in my direction—I could feel love through her gaze. Even when she was mad, her eyes would still bring love—the purest form of it. Maybe that was when I learned what love was.',
    "I remember her eyes. ",
    '.mymemories .box'
)
TextoComNegrito(
    'She used to pass her fingers through my nose—cafuné, as she called it. She would gently run her fingers through my nose while looking at me for hours.  I always wanted her to do it until I fell asleep. Cafuné every night.',
    "I remember her touch. ",
    '.mymemories .box'
)
TextoComNegrito(
    'As time passes, my memories of her slightly fade away. As much as I try to remember, I don’t know what her voice sounded like. Was it as sweet as her? Or as firm as her words when she fought against my father? I lost her voice. Part of her identity is now gone as part of that light that would shine on me.',
    "I don’t remember her voice. ",
    '.mymemories .box'
)
TextoComNegrito(
    'I spent that evening at my father’s house—it was his birthday. My first thoughts were about where I would live next. I never wanted to live with my father; my memories of him weren’t the best ones.',
    "I refused to go to my mom’s funeral. ",
    '.mymemories .box'
)
TextoComNegrito(
    'After my mom passed away, I had to move to several distinct places—none of which I fit in. I felt wounded, lost, displaced. I didn’t want to trust in people, nor was I willing to open myself anymore. My wound was sealing off my ability to feel that love that I so longed for.',
    "My woundability. ",
    '.mymemories .box'
)
TextoComNegrito(
    'I kept questioning the purpose of creating temporary bonds. But in each place I moved to, I would slowly be more eager to open up again, to talk. Moving to Cuiabá, my expectations of a midwest deserted city were proven wrong: I found people who carry in their hearts the same warmth of a sunny day.',
    "I found healing in displacement. ",
    '.mymemories .box'
)
TextoComNegrito(
    'It took only fractions of seconds to realize I had something in common with my peers. I felt secure, just like in my mother’s arms.',
    "I remember starting high school. ",
    '.mymemories .box'
)
TextoComNegrito(
    'My new friends embraced me closely, and the warmth of their hearts allowed me to have a glimpse of that light long lost. They took me in with their eyes, translating their willingness to listen to my pain.',
    "I remember the first time I came out publicly. ",
    '.mymemories .box'
)
TextoComNegrito(
    'It was a hot day in Cuiabá, as usual.  I saw people running in my school’s hallways. Glitter on the floor, paper strips on the doors. I set up a speaker, a microphone, and a guitar—everything was tidy and ready. ‘But what if no one shows up?’ I thought. The room was pretty simple, and it made me a bit insecure to open it. Then, I saw people lining up at the door. They were my friends. Their presence lit up the room with their supportiveness.',
    "I remember my friends lining up at the door. ",
    '.mymemories .box'
)
TextoComNegrito(
    'Have I truly overcome my loss? Perhaps I buried it deep enough so I could keep living my life, but I’d rather recognize my friends’ effort in helping me to overcome my grief. Not only could I bond in deep friendships, but I was also confident to be myself—I found that space in which we relate to each other and love remains. ',
    "I sometimes wonder. ",
    '.mymemories .box'
)
TextoComNegrito(
    "I finally realized that it wasn’t the cafuné itself that was special, but my mom’s presence through that warm gaze. If I allow myself to look closely, I can find that same gaze in other people's eyes. Perhaps my mom still lingers within my soul.",
    "My wound is now the place where that light shines through. ",
    '.mymemories .box'
)


//dandelion
TextoComNegrito(
    "I see a vast field of bushes, and the little flowers catch my attention. My eyes dazzled by one: the dandelion. The fact that every week it changes its forms intrigued me, so I started to notice its phases as time passed.",
    "",
    '.thedandelion .box'
)
TextoComNegrito(
    "On its first stage, the dandelion’s bud preserves in it all its potential, maturing to bloom someday. In fact, I can relate to that. I remember being called quiet—sometimes even antisocial—whenever I felt frightened for being different. On times like that, embracing silence seemed logical to stay strong—surrounded by people with whom I didn’t identify myself, speaking my mind was intimidating. But I was maturing, listening, and getting ready for the bloom.",
    "",
    '.thedandelion .box'
)
TextoComNegrito(
    "The precise time arrives, and the flower comes. My right moment came when I started my first club, the English Game Arena. Our meetings were beyond just practicing the language: distinct people could easily get together to play games with their mixed vocabulary. Leading it wasn’t an easy task for a quiet kid, though—I had to learn how to break the silence and start discussions. By fostering supportive conversations, we could make it our home: a safe space where we didn’t have to stay quiet.",
    "",
    '.thedandelion .box'
)
TextoComNegrito(
    "In the next stage of its life, the dandelion’s seeds grow to be blown away. Just like seeds that can bring life to wherever they land, my mission with this initiative is only truly reached when people can promote similar conversations elsewhere, creating their own safe spaces. People come as buds, discover their space in the world with the bloom, and consequently fly away.",
    "",
    '.thedandelion .box'
)
TextoComNegrito(
    "I see myself changing phases as a dandelion—or better, just like the trees going through the four seasons in Vermont. Once my seed lands in Bennington, I’m sure that I will find other people who recognize the beauty of change and thrive.",
    "",
    '.thedandelion .box'
)