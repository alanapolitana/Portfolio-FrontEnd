document.addEventListener('DOMContentLoaded', function () {
  // Tu código JavaScript para cargar eventos y habilidades aquí

// Array de objetos para representar las habilidades
const skillsData = [
  {
    name: 'HTML',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    percent: '70%'
  },
  {
    name: 'CSS',
    image: 'https://img.icons8.com/color/452/css3.png',
    percent: '70%'
  },
  {
    name: 'Bootstrap',
    image: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-social-logo.png',
    percent: '70%'
  },
  {
    name: 'JavaScript',
    image: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
    percent: '70%'
  },
  {
    name: 'GitHub',
    image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    percent: '70%'
  },
  {
    name: 'Git',
    image: './assets/git.jpg',
    percent: '70%'
  },
  {
    name: 'Angular',
    image: './assets/angular.png',
    percent: '60%'
  },
  {
    name: 'Vue.js',
    image: 'assets/vue.png',
    percent: '60%'
  },
  {
    name: 'Figma',
    image: 'assets/figma.png',
    percent: '40%'
  },
  {
    name: 'Materialize',
    image: './assets/materialize.jpg',
    percent: '50%'
  },
  {
    name: 'Java',
    image: './assets/java.jpg',
    percent: '70%'
  },
  {
    name: 'Python',
    image: './assets/python.jpg',
    percent: '70%'
  },
  {
    name: 'MySQL',
    image: './assets/mysql.jpg',
    percent: '70%'
  },
  {
    name: 'PostgreSQL',
    image: './assets/postgres.jpg',
    percent: '50%'
  },
  {
    name: 'Postman',
    image: './assets/postman.jpg',
    percent: '50%'
  }
];      // Recorre el array de habilidades y genera el HTML dinámicamente
const skillsContainer = document.querySelector('.skills-container');
const skillsCarousel = document.querySelector('.skills-carousel');


for (const skill of skillsData) {
  // Calcula la longitud total de la circunferencia
  const circumference = Math.PI * 2 * 40; // 40 es el radio del círculo

  // Calcula la longitud del trazo en función del porcentaje
  const dashArray = (parseFloat(skill.percent) / 100) * circumference;

  // Establece el color del trazo en base al porcentaje
  const strokeColor = parseFloat(skill.percent) >= 70 ? '#4CAF50' : '#FFC107'; // Verde oscuro y Amarillo oscuro

  const htmlSkill = `
    <div class="iconohtml">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="#000000" /> <!-- Cambiado a negro -->
        <image href="${skill.image}" x="20" y="20" width="60" height="60" />
        <path fill="none" stroke-linecap="round" stroke-width="5" stroke="${strokeColor}" stroke-dasharray="${dashArray},${circumference}" d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80" />
        <text x="40" y="17" text-anchor="middle" dy="7" font-size="22" font-weight="bold" fill="${strokeColor}">${skill.percent}</text> <!-- Ajustado tamaño, peso y color -->
      </svg>
    </div>`;

  skillsContainer.innerHTML += htmlSkill;
}
 // Clona solo la cantidad necesaria de elementos para crear un bucle
 const originalContent = skillsContainer.innerHTML;
 const numClones = Math.ceil(skillsCarousel.offsetWidth / skillsContainer.offsetWidth);
 for (let i = 0; i < numClones; i++) {
   skillsContainer.innerHTML += originalContent;
 }

 // Configura el tamaño del contenedor del carrusel
 skillsCarousel.style.width = `${(skillsData.length + numClones) * 200}px`;

 // Función para animar el carrusel usando requestAnimationFrame
 function animateCarousel() {
   const scrollAmount = 5; // Puedes ajustar la velocidad de desplazamiento
   skillsCarousel.scrollLeft += scrollAmount;

   // Reinicia al inicio cuando llega al final del contenido clonado
   if (skillsCarousel.scrollLeft >= skillsContainer.offsetWidth) {
     skillsCarousel.scrollLeft -= skillsContainer.offsetWidth;
   }

   // Continúa la animación
   requestAnimationFrame(animateCarousel);
 }

 // Inicia la animación del carrusel
 animateCarousel();
});