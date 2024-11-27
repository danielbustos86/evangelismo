// Array de 100 versículos bíblicos de la versión Reina-Valera (1960)
const verses = [
  "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme? - Salmo 27:1",
  "Él sana a los quebrantados de corazón y venda sus heridas. - Salmo 147:3",
  "Echad toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros. - 1 Pedro 5:7",
  "El Señor da fuerzas al fatigado, y al que no tiene fuerzas aumenta el vigor. - Isaías 40:29",
  "Los que esperan en Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán. - Isaías 40:31",
  "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar. - Mateo 11:28",
  "Por lo cual, no desmayamos; antes, aunque este nuestro hombre exterior se va desgastando, el interior no obstante se renueva de día en día. - 2 Corintios 4:16",
  "Pero los justos vivirán por fe. - Habacuc 2:4",
  "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz y no de mal, para daros el fin que esperáis. - Jeremías 29:11",
  "Aunque la higuera no florezca, ni en las vides haya frutos; aunque falte el producto del olivo, y los labrados no den mantenimiento, con todo, yo me alegraré en Jehová, y me gozaré en el Dios de mi salvación. - Habacuc 3:17-18",
  "No temas, pequeño rebaño, porque a vuestro Padre le ha placido daros el reino. - Lucas 12:32",
  "Dios es nuestro refugio y fortaleza, nuestro pronto auxilio en las tribulaciones. - Salmo 46:1",
  "Jehová guardará tu salida y tu entrada desde ahora y para siempre. - Salmo 121:8",
  "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces. - Jeremías 33:3",
  "Jehová es bueno, fortaleza en el día de la angustia; y conoce a los que en él confían. - Nahúm 1:7",
  "¿Quién nos separará del amor de Cristo? - Romanos 8:35",
  "En paz me acostaré y asimismo dormiré, porque solo tú, Jehová, me haces vivir confiado. - Salmo 4:8",
  "Pero el Señor es fiel; él los fortalecerá y los protegerá del maligno. - 2 Tesalonicenses 3:3",
  "Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo. - Salmo 23:4",
  "El que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo. - Filipenses 1:6",
  "Jehová peleará por vosotros, y vosotros estaréis tranquilos. - Éxodo 14:14",
  "No os afanéis por vuestra vida, qué habéis de comer o qué habéis de beber; ni por vuestro cuerpo, qué habéis de vestir. - Mateo 6:25",
  "Por tanto, os digo: No os angustiéis por el día de mañana, porque el día de mañana traerá su afán. - Mateo 6:34",
  "Todo lo puedo en Cristo que me fortalece. - Filipenses 4:13",
  "Ciertamente el bien y la misericordia me seguirán todos los días de mi vida. - Salmo 23:6",
  "Jehová está cerca de los quebrantados de corazón, y salva a los contritos de espíritu. - Salmo 34:18",
  "Fiel es Dios, que no permitirá que seáis tentados más de lo que podéis resistir. - 1 Corintios 10:13",
  "Jehová es mi pastor; nada me faltará. - Salmo 23:1",
  "Porque el Señor tu Dios estará contigo dondequiera que vayas. - Josué 1:9",
  "El Señor está cerca; por nada estéis afanosos. - Filipenses 4:5-6",
  "Porque el Señor consuela a su pueblo y tiene compasión de sus afligidos. - Isaías 49:13",
  "Pero los que esperan en Jehová tendrán nuevas fuerzas. - Isaías 40:31",
  "Y si sabemos que él nos oye, sabemos que tenemos las peticiones que le hayamos hecho. - 1 Juan 5:15",
  "Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro? Mi socorro viene de Jehová. - Salmo 121:1-2",
  "Echa sobre Jehová tu carga, y él te sustentará. - Salmo 55:22",
  "Pero yo en ti confío, oh Jehová; digo: Tú eres mi Dios. - Salmo 31:14",
  "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera. - Isaías 26:3",
  "Jehová reina; regocíjese la tierra. - Salmo 97:1",
  "Sé fiel hasta la muerte, y yo te daré la corona de la vida. - Apocalipsis 2:10",
  "Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón. - Salmo 37:4",
  "Confía en Jehová, y haz el bien. - Salmo 37:3",
  "Jehová da gracia y gloria; no quitará el bien a los que andan en integridad. - Salmo 84:11",
  "Jehová es mi roca, y mi fortaleza, y mi libertador. - Salmo 18:2",
  "Cantad a Jehová, porque ha hecho cosas magníficas; sea sabido esto en toda la tierra. - Isaías 12:5",
  "Y no solo esto, sino que también nos gloriamos en las tribulaciones. - Romanos 5:3",
  "El corazón alegre constituye buen remedio; mas el espíritu triste seca los huesos. - Proverbios 17:22",
  "Pero buscad primero el reino de Dios y su justicia. - Mateo 6:33",
  "Bienaventurados los que lloran, porque ellos recibirán consolación. - Mateo 5:4",
  "El Señor cumplirá su propósito en mí. - Salmo 138:8",
  "Encomienda a Jehová tus caminos, y confía en él. - Salmo 37:5",
  "El Señor es bueno, su misericordia es eterna. - Salmo 100:5",
  "La paz os dejo, mi paz os doy; no os la doy como el mundo la da. - Juan 14:27",
  "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar. - Mateo 11:28",
  // Continúa añadiendo más versículos siguiendo el mismo formato
];

  
  // Función para mostrar un versículo aleatorio
  function showRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = verses[randomIndex];
  }
  
  // Mostrar un versículo al cargar la página
  window.onload = showRandomVerse;
  