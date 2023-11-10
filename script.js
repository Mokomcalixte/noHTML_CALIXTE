const navLinks = ['Accueil', 'Page 1', 'Page 2', 'Page 3']; //je declare constante navLinks, qui est une liste/tableau contenant Accueil, Page 1, Page 2 et Page 3
var logo = document.createElement('img'); //Création de l'élément img et la stocker dans la variable logo
var navbar = document.createElement('nav'); // Création de l'élément nav et la stocker dans la variable navbar
const spacing = '12px'; //declaration d'une constante spacing qui vaut "12px"

navbar.style.height= '70px'; //J'applique du style à navbar une hauteur (height) à 70px
navbar.style.padding= '0 2em';//une marge interieure (padding) à 0 2em
navbar.style.backgroundColor='black'; //appliquer un fond noir a navbar
navbar.style.display = 'flex'; //j'applique un display flex
navbar.style.gap = spacing; //j'applique un gap qui vaut la variable spacing


logo.src="random_logo.png"; //j'attribu comme source : randomlogo.png a la variable logo
logo.style.filter = "invert(100%)"; //j'applique un filtre CSS, qui lui inversera ses couleurs
logo.style.marginRight="18px"; //j'applique a la variable logo margin à droite = 18px
logo.style.padding = spacing; //j'applique un padding qui vaut spacing
navbar.appendChild(logo); // Injection du logo dans navbar


// Boutons pour chaque élément de navLinks
navLinks.forEach(navText => { //Cette fonction prend l'élément actuel de la liste et le stocke dans la variable navText, 
                             //que vous pouvez utiliser à l'intérieur de la fonction pour effectuer des opérations spécifiques pour chaque élément de la liste.
  const btn = document.createElement('button'); //A chaque élément du tableau, on crée un bouton et le stock dans la variable btn
  btn.innerHTML = navText; 
  btn.style.background = 'transparent';
  btn.style.border = 'none';
  btn.style.color = 'white';
  btn.style.cursor = 'pointer';

  // Événement au survol (hover), Cette ligne de code ajoute un écouteur d'événements à l'élément bouton (btn).
  // L'événement spécifié est "mouseover", qui se déclenche lorsque la souris survole l'élément.
  btn.addEventListener('mouseover', () => {
    btn.style.background = 'hotpink'; 
  });

  // Événement lorsque la souris quitte le bouton
  btn.addEventListener('mouseout', () => {
    btn.style.background = 'transparent';
  });

  // Injection du bouton dans la navbar
  navbar.appendChild(btn);
});

// Sélection du body et application d'un margin à 0
const body = document.body;
body.style.margin = '0';

// Injection de la navbar dans le body
body.appendChild(navbar);
