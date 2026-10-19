/**
 * chaptersData.js - Libro Aleja
 * Estructura de capítulos, páginas, animaciones y contenidos para Alejita · 14 de Abril.
 */

const baseUrl = import.meta.env.BASE_URL || './';
export const asset = (path) => `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;

export const bookMetadata = {
  title: "Para Alejita",
  subtitle: "14 de Abril",
  dedication: "Tu felicidad es la mía",
  theme: "medical_friendship",
  songDetails: {
    title: "Melodía para Alejita",
    artist: "Especial Amistad",
    audioSrc: asset("audio/page_flip_soft.m4a")
  }
};

export const chapters = [
  {
    id: "capitulo-1",
    numberRoman: "Capítulo I",
    number: 1,
    title: "14 de Abril · Cumpleaños",
    date: "14 de Abril",
    targetPage: 2,
    description: "Carta de cumpleaños (Espacio reservado para las palabras de este año)",
    isUpcoming: true
  },
  {
    id: "capitulo-2",
    numberRoman: "Capítulo II",
    number: 2,
    title: "Incondicional · Nuestra Amistad",
    date: "Momento Especial",
    targetPage: 4,
    description: "Cartica especial animada: años de apoyo, risas desde el colegio y amor sincero",
    isUpcoming: false
  },
  {
    id: "capitulo-3",
    numberRoman: "Capítulo III",
    number: 3,
    title: "Navidad",
    date: "Diciembre",
    targetPage: 8,
    description: "Capítulo navideño con luces cálidas, abrazos y deseos del corazón",
    isUpcoming: false
  },
  {
    id: "capitulo-4",
    numberRoman: "Capítulo IV",
    number: 4,
    title: "Fin de Año",
    date: "31 de Diciembre",
    targetPage: 10,
    description: "Brindis por nuevos sueños, salud, felicidad y más metas cumplidas",
    isUpcoming: false
  },
  {
    id: "capitulo-5",
    numberRoman: "Capítulo V",
    number: 5,
    title: "Próximamente",
    date: "El futuro",
    targetPage: 12,
    description: "Espacio reservado para más recuerdos y anécdotas inolvidables",
    isUpcoming: true
  }
];

export const bookPages = [
  // -------------------------------------------------------------
  // PÁGINA 1: ÍNDICE DE CAPÍTULOS
  // -------------------------------------------------------------
  {
    pageNumber: 1,
    type: "table_of_contents",
    title: "Índice de Capítulos"
  },

  // -------------------------------------------------------------
  // PÁGINA 2: PORTADILLA CAPÍTULO I (CUMPLEAÑOS - PRÓXIMAMENTE)
  // -------------------------------------------------------------
  {
    pageNumber: 2,
    type: "chapter_header",
    roman: "Capítulo I",
    title: "14 de Abril",
    subtitle: "Carta de Cumpleaños",
    quote: "«Celebrando el día en que el mundo se hizo más bonito con tu llegada.»",
    badge: "Próximamente · Espacio para tu Carta de Cumpleaños"
  },

  // -------------------------------------------------------------
  // PÁGINA 3: ESPACIO RESERVADO CUMPLEAÑOS
  // -------------------------------------------------------------
  {
    pageNumber: 3,
    type: "upcoming_birthday_slot",
    title: "Carta de Cumpleaños · 14 de Abril",
    note: "Este capítulo está reservado para la carta de cumpleaños oficial de este año. En cuanto esté lista, se integrará aquí con su propia animación especial."
  },

  // -------------------------------------------------------------
  // PÁGINA 4: PORTADILLA CAPÍTULO II (NUESTRA AMISTAD)
  // -------------------------------------------------------------
  {
    pageNumber: 4,
    type: "chapter_header",
    roman: "Capítulo II",
    title: "Incondicional",
    subtitle: "Nuestra Amistad",
    quote: "«Llegar a tu vida cambió la mía por completo, llenándola de color y felicidad. Tu felicidad es la mía.»",
    badge: "Cartica Especial · Desde el Colegio para Siempre"
  },

  // -------------------------------------------------------------
  // PÁGINA 5: CARTA RECREADA DESDE CERO (PARTE 1 - ANIMADA)
  // -------------------------------------------------------------
  {
    pageNumber: 5,
    type: "illuminated_letter_aleja",
    part: 1,
    greeting: "¡Hola, Alejita!",
    leadParagraph: "Quería escribirte esta cartica solo para decirte lo importante que eres para mí. A lo largo de todos estos años que llevamos de conocernos, no sabes lo feliz que me has hecho y el apoyo tan enorme que has sido para mí, tanto en los momentos más duros como en los más felices; por eso no podría imaginar mi vida sin ti.",
    paragraphs: [
      "Creo sin dudarlo que lo más valioso que me llevo del colegio fue haberte conocido, porque llegar a tu vida literalmente cambió la mía por completo, llenándola de color y felicidad. Te quiero muchísimo, más de lo que te imaginas, y me ha costado mucho no poder estar físicamente a tu lado cuando más me necesitas, porque tú sabes que yo haría lo que fuera por ti con tal de verte siempre feliz y sonriente. Tu felicidad es la mía."
    ]
  },

  // -------------------------------------------------------------
  // PÁGINA 6: CARTA RECREADA DESDE CERO (PARTE 2 - ANIMADA)
  // -------------------------------------------------------------
  {
    pageNumber: 6,
    type: "illuminated_letter_aleja",
    part: 2,
    paragraphs: [
      "Te admiro demasiado por la mujer increíble que siempre has sido y sigues siendo, por lo mucho que has crecido y avanzado. Me encanta cómo no te rindes ante los problemas: a pesar de las tormentas, tú siempre das lo mejor de ti y haces hasta lo imposible por la gente que quieres. De verdad eres única y me siento muy feliz de hacer parte de tu vida.",
      "Te quiero con todo mi corazón, te mando un súper abrazo y espero que nos podamos ver muy pronto."
    ],
    closingBanner: "CON TODO MI CORAZÓN",
    originalArt: asset("images/carta_alejita.png")
  },

  // -------------------------------------------------------------
  // PÁGINA 7: ILUSTRACIÓN MASTER EN ALTA RESOLUCIÓN
  // -------------------------------------------------------------
  {
    pageNumber: 7,
    type: "master_art_showcase",
    title: "Ilustración Master Original",
    subtitle: "Toca la imagen para explorar los detalles médicos y de cariño en ultra alta definición",
    image: asset("images/carta_alejita.png"),
    caption: "Cartica para Alejita: Vocación de Cuidado, Medicina y Amistad Verdadera"
  },

  // -------------------------------------------------------------
  // PÁGINA 8: PORTADILLA CAPÍTULO III (NAVIDAD)
  // -------------------------------------------------------------
  {
    pageNumber: 8,
    type: "chapter_header",
    roman: "Capítulo III",
    title: "Navidad",
    subtitle: "Calidez, Gratitud y Luces",
    quote: "«En cada lucecita de Navidad brilla el cariño de todos los momentos que hemos compartido.»",
    badge: "Edición Especial Navideña"
  },

  // -------------------------------------------------------------
  // PÁGINA 9: INTERFAZ CAPÍTULO NAVIDAD
  // -------------------------------------------------------------
  {
    pageNumber: 9,
    type: "holiday_chapter",
    holidayType: "christmas",
    title: "Nuestra Navidad en este Libro",
    greeting: "Mi Alejita linda,",
    placeholderText: "Aquí irá tu mensaje especial de Navidad. La interfaz está diseñada con una paleta cálida y festiva: ramitas de pino, acebo medicinal, farolillos encendidos y lazos rojos para arropar tus palabras en estas fechas.",
    bannerText: "Amor, Salud y Paz para Ti"
  },

  // -------------------------------------------------------------
  // PÁGINA 10: PORTADILLA CAPÍTULO IV (FIN DE AÑO)
  // -------------------------------------------------------------
  {
    pageNumber: 10,
    type: "chapter_header",
    roman: "Capítulo IV",
    title: "Fin de Año",
    subtitle: "Doce Uvas y un Millón de Deseos",
    quote: "«Que el nuevo año te traiga toda la alegría, la salud y la serenidad que siempre mereces.»",
    badge: "Bienvenida al Año Nuevo"
  },

  // -------------------------------------------------------------
  // PÁGINA 11: INTERFAZ CAPÍTULO FIN DE AÑO
  // -------------------------------------------------------------
  {
    pageNumber: 11,
    type: "holiday_chapter",
    holidayType: "new_year",
    title: "Un Brindis por Ti y Nuestro Camino",
    greeting: "Por un Año Lleno de Magia,",
    placeholderText: "Aquí irá tu mensaje de despedida y bienvenida de año. La interfaz está ambientada con uvas doradas, estrellas de esperanza y un reloj vintage listo para marcar los nuevos éxitos que vendrán.",
    bannerText: "Salud · Sonrisas · Amistad Eterna"
  },

  // -------------------------------------------------------------
  // PÁGINA 12: CAPÍTULO V (PRÓXIMAMENTE)
  // -------------------------------------------------------------
  {
    pageNumber: 12,
    type: "epilogue_upcoming",
    title: "Capítulo V",
    subtitle: "Nuevos Recuerdos",
    note: "Este tomo seguirá guardando cada abrazo, cada risa y cada nueva historia a lo largo del tiempo."
  }
];
