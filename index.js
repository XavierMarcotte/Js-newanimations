// SELECTEURS
// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});


//--------------------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener('mousedown', () =>{
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
}) 
window.addEventListener('mouseup', () =>{
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border ="2 px solid teal"
}) 
questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgb(0,0,0,0.6)";
})
questionContainer.addEventListener('mouseout', () => {
    questionContainer.style.background= "green";
})

response.addEventListener('mouseover' , () => {
    response.style.transform = "rotate(20deg)"
})

//--------------------------------------------------
// KeyPress 
const keypressContainer = document.querySelector('.keypress')
const key = document.getElementById('key')


// on definit une fonction qui va nous jouer un son 
const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3"
    audio.play();
}

// le "e" => c'est un objet générer dans la console => on récupère ce qui nous intéresse. 
// Pour voir à  quoi ressemble ressemble cet objet : Décommenter la ligne "console.log(e)" et regarder dans la console. Dans l'exemple qui suit on va récuper la valuer attribuer à l'élement "key" de l'objet "e".

document.addEventListener('keypress', function(e){
    key.textContent= e.key;
    // console.log(e);
    // console.log(e.key);
    if (e.key === "j") {
        keypressContainer.style.background="pink"
       
    }
    else if (e.key === "h") {
        keypressContainer.style.background="teal"
    }
    else{
        keypressContainer.style.background="red"
    } 
    ring("c"); 
    // ici, peu importe la touche que l'on tape sur noter clavier, un son va etre jouer (le fichier intitulé "c.mp3" en l'occurence)
})

//--------------------------------------------------
// Scroll Events

const nav = document.querySelector('nav');

window.addEventListener('scroll', () =>{
    console.log(window.scrollY);
    // ScrollY = valeur en pixel de la position de scroll sur l'axe des Y => quand on est en haut de la page on est à 0 pixel
    if (window.scrollY > 120) {
        nav.style.top=0
    }
    else {
        nav.style.top = "-50px";
    }
    // Passé 120 pixels, ma nav bar s'affiche car on lui attribut la valeur top=0
})


//--------------------------------------------------
// Form events


const inputName = document.querySelector('input[type="text"]');
// console.log(inputName);
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo ="";
let language ="";

inputName.addEventListener("input", (e)=>{
    // console.log("ceci est un test pour voir ce que j'écris dans le input");
    // console.log(e.target.value);

    pseudo = e.target.value;
    console.log(pseudo);
})

select.addEventListener('input', (e) => {
    // console.log(e.target.value);
    language = e.target.value;
})
form.addEventListener('submit' , (e) => {
    e.preventDefault();

    console.log(cgv.checked);
    // ici on parle de l'id = #cgv ; même pas besoin de le déclarer dans une variable en amont (marche pour les id et les boutons, pas sûr sûr de cette info)
    // Quand on valide le formulaire, la console nous renvoie "true" si le input (pour les cgv) est coché et "false" si il ne l'est pas
    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo} </h3>
        <h4>Langage préféré : ${language}</h4>
        `
        // On ajoute, grâce au innerHtml, des balises 
        // Remplacer "innerHtml" par "textContent" pour voir la différence entre les 2 
    }
    else {
        alert('Veuillez accepter les CVG')
    }
})

//--------------------------------------------------
// Load event

window.addEventListener('load', ()=> {
    console.log("Document chargé");
})

//--------------------------------------------------
// forEach