// Array de 100 versículos bíblicos de la versión Reina-Valera (1960)
const verses = [
    "Todo lo puedo en Cristo que me fortalece. - Filipenses 4:13",
    "El Señor es mi pastor; nada me faltará. - Salmo 23:1",
    "Esfuérzate y sé valiente; no temas ni desmayes. - Josué 1:9",
    "Clama a mí, y yo te responderé. - Jeremías 33:3",
    "Confía en el Señor con todo tu corazón. - Proverbios 3:5",
    "No temas, porque yo estoy contigo. - Isaías 41:10",
    "Dios es nuestro amparo y fortaleza. - Salmo 46:1",
    "El amor es paciente, es bondadoso. - 1 Corintios 13:4",
    "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente. - Salmo 91:1",
    "No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios. - Filipenses 4:6",
    // Añade más versículos según sea necesario
  ];
  
  // Función para mostrar un versículo aleatorio
  function showRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = verses[randomIndex];
  }
  
  // Mostrar un versículo al cargar la página
  window.onload = showRandomVerse;
  