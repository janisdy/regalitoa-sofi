// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos

var lyricsData = [
  { text: "Quiero abrazarte fuerte hasta que nos quedemos dormidos", time: 0 },
  { text: "Incluso en las mañanas que compartimos", time: 5 },
  { text: "Y en los días difíciles", time: 9 },
  { text: "Quiero abrazarte muy fuerte", time: 13 },
  { text: "Quiero abrazarte mientras estamos juntos", time: 18 },
  { text: "Por favor, no te vayas; quédate conmigo para siempre", time: 22 },
  { text: "Quiero hacerte feliz cada día", time: 27 },
  { text: "Volveré a abrazarte fuerte", time: 36 },
  { text: "No me dejes", time: 39 },
  { text: "Me aseguraré de que nunca pierdas esa hermosa sonrisa", time: 41 },
  { text: "Por favor, abrázame a mí también", time: 45 },
  { text: "Quédate conmigo", time: 48 },
  { text: "Haré que cada día sea dulce para ti", time: 50 },
  { text: "Abrázame, dame un abrazo, oh cariño", time: 59 },
  { text: "Por favor, dame un abrazo, oh cariño", time: 67 },
  { text: "Me encanta todo de tu rostro cuando lo veo", time: 76 },
  { text: "Sin darme cuenta, quise abrazarte", time: 80 },
  { text: "Mi mente está completamente llena de ti", time: 85 },
  { text: "Pensando en ti todo el tiempo", time: 89 },
  { text: "Quiero abrazarte fuerte, incluso ahora que estamos juntos", time: 94 },
  { text: "Estaré a tu lado en los momentos difíciles y agotadores", time: 98 },
  { text: "En los días tristes, ven a mí", time: 102 },
  { text: "Apóyate en mí, descansa en mis brazos", time: 105 },
  { text: "Te abrazaré fuerte de nuevo", time: 111 },
  { text: "No me dejes", time: 114 },
  { text: "Me aseguraré de que nunca pierdas esa hermosa sonrisa", time: 117 },
  { text: "Por favor, abrázame a mí también", time: 121 },
  { text: "Quédate conmigo", time: 123 },
  { text: "Haré que cada día sea dulce para ti", time: 126 },
  { text: "Abrázame, dame un abrazo, oh cariño", time: 135 },
  { text: "Por favor, dame un abrazo, oh cariño", time: 144 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);