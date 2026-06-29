//=====================================
// REFERENCIAS DEL HTML
//=====================================

// Pantallas

const pantallaInicio =
document.getElementById("pantallaInicio");

const pantallaModo =
document.getElementById("pantallaModo");

const pantallaJugadores =
document.getElementById("pantallaJugadores");

const pantallaIntro =
document.getElementById("pantallaIntro");

const pantallaLaboratorio =
document.getElementById("pantallaLaboratorio");

const pantallaSala =
document.getElementById("pantallaSala");

const pantallaFinal =
document.getElementById("pantallaFinal");

const pantallaGameOver =
document.getElementById("pantallaGameOver");



// Inicio

const btnComenzar =
document.getElementById("btnComenzar");

const btnModo =
document.getElementById("btnModo");



// Configuración

const cantidadJugadores =
document.getElementById("cantidadJugadores");

const listaJugadores =
document.getElementById("listaJugadores");

const btnCrearPartida =
document.getElementById("btnCrearPartida");



// Introducción

const textoIntro =
document.getElementById("textoIntro");

const btnEntrarLaboratorio =
document.getElementById("btnEntrarLaboratorio");



// Laboratorio

const nombreJugadorActual =
document.getElementById("nombreJugadorActual");

const vidasJugador =
document.getElementById("vidasJugador");

const puntajeJugador =
document.getElementById("puntajeJugador");

const barraEstabilidad =
document.getElementById("barraEstabilidad");

const porcentajeEstabilidad =
document.getElementById("porcentajeEstabilidad");

const codigoVisual =
document.getElementById("codigoVisual");

const iconoSalaActual =
document.getElementById("iconoSalaActual");

const nombreSalaActual =
document.getElementById("nombreSalaActual");

const objetivoSala =
document.getElementById("objetivoSala");

const btnEntrarSala =
document.getElementById("btnEntrarSala");

const registroEventos =
document.getElementById("registroEventos");


const introduccionSala =
document.getElementById("introduccionSala");

const contenidoDesafio =
document.getElementById("contenidoDesafio");

const tituloLaboratorio =
document.getElementById("tituloLaboratorio");

const textoObjetoMaterial =
document.getElementById("textoObjetoMaterial");

const textoObjetoFormal =
document.getElementById("textoObjetoFormal");

const btnComenzarDesafio =
document.getElementById("btnComenzarDesafio");


// Sala

const iconoSalaGrande =
document.getElementById("iconoSalaGrande");

const tituloSala =
document.getElementById("tituloSala");

const objetivoActual =
document.getElementById("objetivoActual");

const contadorPregunta =
document.getElementById("contadorPregunta");

const preguntaActual =
document.getElementById("preguntaActual");

const opcionesRespuesta =
document.getElementById("opcionesRespuesta");

const btnResponder =
document.getElementById("btnResponder");

const mensajeRespuesta =
document.getElementById("mensajeRespuesta");

const turnoActual =
document.getElementById("turnoActual");

const vidasActuales =
document.getElementById("vidasActuales");



// Final

const inputCodigo =
document.getElementById("inputCodigo");

const btnAbrirPuerta =
document.getElementById("btnAbrirPuerta");

const mensajeFinal =
document.getElementById("mensajeFinal");

const rankingJugadores =
document.getElementById("rankingJugadores");

const btnReiniciar =
document.getElementById("btnReiniciar");


//animacion 2

const pantallaCodigo =
document.getElementById("pantallaCodigo");

const textoDescifrado =
document.getElementById("textoDescifrado");

const barraDescifrado =
document.getElementById("barraDescifrado");

const codigoEncontrado =
document.getElementById("codigoEncontrado");



// Game Over

const btnIntentarOtraVez =
document.getElementById("btnIntentarOtraVez");

//=====================================
// INTRODUCCIÓN
//=====================================

function iniciarIntroduccion() {

    const texto = `

Bienvenidos, investigadores.

El laboratorio ha sufrido una falla crítica.

Las once salas científicas han quedado bloqueadas.

Cada sala contiene una parte del código de seguridad.

Solo respondiendo correctamente podrán recuperar los once dígitos.

Pero cuidado...

Cada error reducirá las vidas del jugador y la estabilidad del laboratorio.

Cuando todo esté listo...

Entren al laboratorio.

`;

    textoIntro.innerHTML = "";

    btnEntrarLaboratorio.classList.add("oculto");

    let indice = 0;

    const velocidad = 25;

    const escribir = setInterval(() => {

        if (indice < texto.length) {

            textoIntro.innerHTML += texto.charAt(indice);

            indice++;

        } else {

            clearInterval(escribir);

            btnEntrarLaboratorio.classList.remove("oculto");

        }

    }, velocidad);

}


function mostrarIntroduccionSala() {

    const sala = salaActual();

    tituloLaboratorio.textContent =
    sala.nombreSala;

    textoObjetoMaterial.textContent =
    sala.objetoMaterial;

    textoObjetoFormal.textContent =
    sala.objetoFormal;

    introduccionSala.style.display = "block";

    contenidoDesafio.style.display = "none";

}


//=====================================
// ESTADO DEL JUEGO
//=====================================

const juego = {

    // Configuración

    modo: "individual",

    iniciado: false,

    terminado: false,



    // Jugadores

    jugadores: [],

    turnoActual: 0,

    vidasIniciales: 3,



    // Laboratorio

    estabilidad: 100,



    // Progreso

    salaActual: 0,

    desafio: {

    tipo: "",

    preguntas: [],

    indice: 0,

    completado: false

},



    // Código obtenido

    codigo: [],



    // Estadísticas

    salasCompletadas: 0,

    respuestasCorrectas: 0,

    respuestasIncorrectas: 0

};

//=====================================
// FUNCIONES AUXILIARES
//=====================================

// Devuelve el jugador cuyo turno está activo.

function jugadorActual(){

    return juego.jugadores[juego.turnoActual];

}



// Devuelve la sala actual.

function salaActual(){

    return SALAS[juego.salaActual];

}



// Devuelve la pregunta actual.




async function mostrarDescifrado(numero){

    mostrarPantalla("codigo");

    textoDescifrado.textContent = "Conectando con el servidor...";
    barraDescifrado.value = 0;

    // Luego irá avanzando automáticamente

}

// Mezcla un arreglo aleatoriamente (Fisher-Yates)

function mezclarArray(array) {

    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];

    }

    return copia;

}

// Prepara el desafío de la sala actual

function prepararDesafio() {

    const sala = salaActual();

    juego.desafio.tipo = sala.tipo;

    juego.desafio.preguntas =
        mezclarArray(sala.bancoPreguntas).slice(0, 5);

    juego.desafio.indice = 0;

    juego.desafio.completado = false;

}

//=====================================
// BASE DE DATOS DEL JUEGO
//=====================================

const SALAS = [

    
    {
    nombre: "Biología",

    nombreSala: "Laboratorio de los Seres Vivos",

    icono: "🧬",


    objetivo:
    "Reconstruye la información perdida del Laboratorio de Biología.",

    tipo: "reconstruccion",

    bancoPreguntas: [{
    id:1,

    tipo:"multiple",

    enunciado:"¿Cuál es el objeto material de la Biología?",

    opciones:[
        "La sociedad",
        "Los seres vivos",
        "La materia",
        "El conocimiento"
    ],

    correcta:1,

    explicacion:
    "El objeto material de la Biología son los seres vivos."
},

{
    id:2,

    tipo:"multiple",

    enunciado:"¿Cuál es el objeto formal de la Biología?",

    opciones:[
        "La composición química",
        "La estructura, funcionamiento, origen y evolución de los seres vivos",
        "La energía",
        "La sociedad"
    ],

    correcta:1,

    explicacion:
    "El objeto formal indica el aspecto bajo el cual la Biología estudia a los seres vivos."
},

{
    id:3,

    tipo:"multiple",

    enunciado:"¿Qué estudia la Biología?",

    opciones:[
        "Los seres vivos y sus procesos vitales",
        "Los planetas",
        "Los números",
        "Las guerras"
    ],

    correcta:0,

    explicacion:
    "La Biología estudia la vida y los procesos que la caracterizan."
},

{
    id:4,

    tipo:"multiple",

    enunciado:"¿Cuál de estas investigaciones corresponde a un biólogo?",

    opciones:[
        "Analizar la fotosíntesis de una planta",
        "Resolver una ecuación",
        "Estudiar la inflación",
        "Diseñar un puente"
    ],

    correcta:0,

    explicacion:
    "La fotosíntesis es un proceso biológico."
},

{
    id:5,

    tipo:"multiple",

    enunciado:"Completa la definición: La Biología es la ciencia que estudia...",

    opciones:[
        "La sociedad",
        "Los seres vivos",
        "La energía",
        "La economía"
    ],

    correcta:1,

    explicacion:
    "La Biología estudia los seres vivos."
}]

    },



    {
    nombre: "Epistemología",

    nombreSala: "Archivo del Conocimiento",

    icono: "📚",

    objetivo: "Recupera la información sobre el conocimiento científico para restaurar la base de datos.",

    tipo: "multiple",

bancoPreguntas: [

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto material de la Epistemología?",

        opciones: [
            "La naturaleza",
            "El conocimiento",
            "La sociedad",
            "Los seres vivos"
        ],

        correcta: 1,

        explicacion:
        "La Epistemología tiene como objeto material el conocimiento."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto formal de la Epistemología?",

        opciones: [
            "El estudio del conocimiento científico, su origen, validez y métodos.",
            "El estudio de los seres vivos.",
            "El estudio de la materia.",
            "El estudio de la conducta humana."
        ],

        correcta: 0,

        explicacion:
        "El objeto formal de la Epistemología es analizar el conocimiento científico y cómo se obtiene y justifica."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Qué estudia la Epistemología?",

        opciones: [
            "Las leyes de la naturaleza.",
            "La composición de la materia.",
            "El conocimiento científico y su validez.",
            "La evolución de las especies."
        ],

        correcta: 2,

        explicacion:
        "La Epistemología estudia el conocimiento científico, sus fundamentos y criterios de validez."
    },

    {
        tipo: "multiple",

        enunciado:
        "Un investigador analiza si un experimento fue realizado correctamente y si sus conclusiones son confiables. ¿Qué ciencia está utilizando principalmente?",

        opciones: [
            "Historia",
            "Epistemología",
            "Geografía",
            "Antropología"
        ],

        correcta: 1,

        explicacion:
        "La Epistemología analiza cómo se obtiene y valida el conocimiento científico."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál de las siguientes afirmaciones describe mejor a la Epistemología?",

        opciones: [
            "Estudia únicamente los descubrimientos científicos.",
            "Analiza el conocimiento científico, su origen, métodos y validez.",
            "Estudia exclusivamente la filosofía antigua.",
            "Investiga únicamente los avances tecnológicos."
        ],

        correcta: 1,

        explicacion:
        "La Epistemología estudia cómo se construye, justifica y valida el conocimiento científico."
    }

]

},



    {
    nombre: "Psicología",

    nombreSala: "Centro de la Conducta",

    icono: "🧠",

    objetivo: "Reconstruye la información relacionada con la conducta humana.",

    tipo: "multiple",

    bancoPreguntas: [

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto material de la Psicología?",

        opciones: [
            "La sociedad",
            "La conducta y los procesos mentales",
            "Los seres vivos",
            "La materia"
        ],

        correcta: 1,

        explicacion:
        "El objeto material de la Psicología es la conducta y los procesos mentales."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto formal de la Psicología?",

        opciones: [
            "El estudio de la composición de la materia.",
            "El estudio y explicación de la conducta y los procesos mentales.",
            "El estudio de los acontecimientos históricos.",
            "El estudio del espacio geográfico."
        ],

        correcta: 1,

        explicacion:
        "El objeto formal de la Psicología consiste en estudiar y explicar la conducta y los procesos mentales."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Qué estudia la Psicología?",

        opciones: [
            "La organización de la sociedad.",
            "La conducta humana y los procesos mentales.",
            "Las leyes físicas.",
            "La composición química de la materia."
        ],

        correcta: 1,

        explicacion:
        "La Psicología estudia la conducta humana y los procesos mentales."
    },

    {
        tipo: "multiple",

        enunciado:
        "Una profesional investiga cómo influye el estrés en el rendimiento escolar de los estudiantes. ¿Qué ciencia está aplicando?",

        opciones: [
            "Psicología",
            "Historia",
            "Geografía",
            "Química"
        ],

        correcta: 0,

        explicacion:
        "La Psicología analiza cómo los procesos mentales y las emociones influyen en la conducta."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál de las siguientes situaciones corresponde al campo de estudio de la Psicología?",

        opciones: [
            "Analizar cómo aprenden las personas y cómo influye la memoria.",
            "Estudiar la formación de las montañas.",
            "Investigar la composición del agua.",
            "Reconstruir hechos históricos."
        ],

        correcta: 0,

        explicacion:
        "La Psicología estudia procesos como el aprendizaje, la memoria, las emociones y la conducta."
    }

]

},



{
    nombre: "Sociología",

    nombreSala: "Sala de la Sociedad",

    icono: "👥",

    objetivo: "Recupera los registros sobre la organización y funcionamiento de la sociedad.",

    tipo: "multiple",

    bancoPreguntas: [

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto material de la Sociología?",

        opciones: [
            "La sociedad",
            "Los seres vivos",
            "La materia",
            "La conducta individual"
        ],

        correcta: 0,

        explicacion:
        "El objeto material de la Sociología es la sociedad."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto formal de la Sociología?",

        opciones: [
            "El estudio de la composición de la materia.",
            "El estudio de las relaciones sociales, las instituciones y el funcionamiento de la sociedad.",
            "El estudio de los procesos mentales.",
            "El estudio de los acontecimientos históricos."
        ],

        correcta: 1,

        explicacion:
        "El objeto formal de la Sociología consiste en estudiar cómo se organizan e interactúan las personas dentro de la sociedad."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Qué estudia la Sociología?",

        opciones: [
            "Los fenómenos naturales.",
            "Las relaciones sociales y la organización de la sociedad.",
            "La evolución de los seres vivos.",
            "La composición de las sustancias."
        ],

        correcta: 1,

        explicacion:
        "La Sociología estudia la sociedad, sus grupos, instituciones y relaciones sociales."
    },

    {
        tipo: "multiple",

        enunciado:
        "Un investigador analiza cómo afectan las redes sociales a la comunicación entre los adolescentes. ¿Qué ciencia está aplicando?",

        opciones: [
            "Geografía",
            "Sociología",
            "Química",
            "Física"
        ],

        correcta: 1,

        explicacion:
        "La Sociología estudia las relaciones sociales y los cambios que se producen dentro de la sociedad."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál de las siguientes situaciones corresponde al campo de estudio de la Sociología?",

        opciones: [
            "Analizar cómo se organizan los habitantes de una ciudad para resolver problemas comunes.",
            "Investigar la composición del ADN.",
            "Calcular la velocidad de un automóvil.",
            "Estudiar la estructura de un átomo."
        ],

        correcta: 0,

        explicacion:
        "La Sociología investiga la organización de la sociedad, las instituciones y las relaciones entre las personas."
    }

]

},



{
    nombre: "Antropología",

    nombreSala: "Archivo de la Humanidad",

    icono: "🏺",

    objetivo: "Reconstruye el conocimiento sobre el ser humano y su evolución.",

    tipo: "multiple",

    bancoPreguntas: [

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto material de la Antropología?",

        opciones: [
            "La sociedad",
            "El ser humano",
            "Los animales",
            "La naturaleza"
        ],

        correcta: 1,

        explicacion:
        "El objeto material de la Antropología es el ser humano."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto formal de la Antropología?",

        opciones: [
            "El estudio de la composición química del cuerpo.",
            "El estudio del ser humano desde sus aspectos biológicos, sociales y culturales.",
            "El estudio de los fenómenos físicos.",
            "El estudio de la organización política."
        ],

        correcta: 1,

        explicacion:
        "La Antropología estudia al ser humano considerando su evolución biológica, social y cultural."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Qué estudia la Antropología?",

        opciones: [
            "La evolución y diversidad del ser humano.",
            "Los movimientos de los planetas.",
            "Las reacciones químicas.",
            "Las leyes matemáticas."
        ],

        correcta: 0,

        explicacion:
        "La Antropología estudia al ser humano, su evolución y las distintas culturas."
    },

    {
        tipo: "multiple",

        enunciado:
        "Un investigador convive durante varios meses con una comunidad indígena para conocer sus costumbres y forma de vida. ¿Qué ciencia está aplicando?",

        opciones: [
            "Historia",
            "Antropología",
            "Psicología",
            "Física"
        ],

        correcta: 1,

        explicacion:
        "La Antropología analiza las características biológicas y culturales de los grupos humanos."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál de las siguientes investigaciones corresponde a un antropólogo?",

        opciones: [
            "Estudiar cómo vivían las primeras comunidades humanas y cómo evolucionaron sus costumbres.",
            "Calcular la velocidad de un objeto.",
            "Analizar la composición del agua.",
            "Resolver una ecuación algebraica."
        ],

        correcta: 0,

        explicacion:
        "Los antropólogos investigan la evolución del ser humano y las características de las diferentes culturas."
    }

]

},



{
    nombre: "Historia",

    nombreSala: "Cámara del Tiempo",

    icono: "🏛",

    objetivo: "...",

    tipo: "Recupera los acontecimientos históricos almacenados en el laboratorio.",

    bancoPreguntas: [

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto material de la Historia?",

        opciones: [
            "Los hechos del pasado",
            "La sociedad actual",
            "Los seres vivos",
            "La materia"
        ],

        correcta: 0,

        explicacion:
        "El objeto material de la Historia son los hechos y acontecimientos del pasado."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto formal de la Historia?",

        opciones: [
            "El estudio de la composición de la materia.",
            "El estudio e interpretación de los procesos históricos y su influencia en la humanidad.",
            "El estudio de los procesos mentales.",
            "El estudio de las relaciones sociales actuales."
        ],

        correcta: 1,

        explicacion:
        "El objeto formal de la Historia consiste en analizar e interpretar los procesos históricos."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Qué estudia la Historia?",

        opciones: [
            "Los acontecimientos y procesos del pasado.",
            "La estructura de los seres vivos.",
            "Las leyes del movimiento.",
            "Las reacciones químicas."
        ],

        correcta: 0,

        explicacion:
        "La Historia estudia los hechos del pasado para comprender la evolución de las sociedades."
    },

    {
        tipo: "multiple",

        enunciado:
        "Una investigadora analiza documentos y testimonios para reconstruir cómo vivía una civilización antigua. ¿Qué ciencia está aplicando?",

        opciones: [
            "Historia",
            "Psicología",
            "Química",
            "Geografía"
        ],

        correcta: 0,

        explicacion:
        "La Historia utiliza fuentes históricas para reconstruir e interpretar acontecimientos del pasado."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál de las siguientes investigaciones corresponde a un historiador?",

        opciones: [
            "Reconstruir las causas y consecuencias de la Revolución de Mayo.",
            "Analizar el comportamiento de un grupo de estudiantes.",
            "Estudiar la composición del aire.",
            "Calcular la velocidad de un proyectil."
        ],

        correcta: 0,

        explicacion:
        "Los historiadores investigan acontecimientos del pasado, sus causas y sus consecuencias."
    }

]

},



{
    nombre: "Geografía",

    nombreSala: "Observatorio del Espacio Geográfico",

    icono: "🌎",

    objetivo: "Reconstruye la información del espacio geográfico para desbloquear el siguiente laboratorio.",

    tipo: "multiple",

    bancoPreguntas: [

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto material de la Geografía?",

        opciones: [
            "La superficie terrestre",
            "Los seres vivos",
            "Los hechos históricos",
            "La materia"
        ],

        correcta: 0,

        explicacion:
        "El objeto material de la Geografía es la superficie terrestre."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto formal de la Geografía?",

        opciones: [
            "El estudio de las reacciones químicas.",
            "El estudio de la organización del espacio geográfico y la relación entre la sociedad y la naturaleza.",
            "El estudio del comportamiento humano.",
            "El estudio de los acontecimientos históricos."
        ],

        correcta: 1,

        explicacion:
        "La Geografía estudia cómo se organiza el espacio geográfico y cómo interactúan la sociedad y el medio natural."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Qué estudia la Geografía?",

        opciones: [
            "La organización del espacio geográfico y los fenómenos que ocurren en él.",
            "La evolución de las especies.",
            "Las leyes del movimiento.",
            "La composición de las sustancias."
        ],

        correcta: 0,

        explicacion:
        "La Geografía estudia el espacio geográfico y la relación entre los elementos naturales y las actividades humanas."
    },

    {
        tipo: "multiple",

        enunciado:
        "Un investigador analiza cómo el crecimiento de una ciudad modifica el paisaje y el ambiente. ¿Qué ciencia está aplicando?",

        opciones: [
            "Historia",
            "Geografía",
            "Psicología",
            "Filosofía"
        ],

        correcta: 1,

        explicacion:
        "La Geografía estudia cómo las actividades humanas transforman el espacio geográfico."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál de las siguientes investigaciones corresponde a un geógrafo?",

        opciones: [
            "Estudiar la distribución de la población y los recursos naturales en una región.",
            "Analizar la composición del ADN.",
            "Resolver una ecuación matemática.",
            "Investigar las causas de una revolución histórica."
        ],

        correcta: 0,

        explicacion:
        "Los geógrafos analizan la distribución de los fenómenos naturales y humanos sobre la superficie terrestre."
    }

]

},



{
    nombre: "Física",

    nombreSala: "Laboratorio de las Leyes Naturales",

    icono: "⚛",

    objetivo: "Recupera las leyes fundamentales que gobiernan la naturaleza.",

    tipo: "multiple",

    bancoPreguntas: [

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto material de la Física?",

        opciones: [
            "La materia y la energía",
            "Los seres vivos",
            "La sociedad",
            "Los hechos históricos"
        ],

        correcta: 0,

        explicacion:
        "El objeto material de la Física es la materia y la energía."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto formal de la Física?",

        opciones: [
            "El estudio de las leyes que gobiernan el movimiento, la energía y las interacciones de la materia.",
            "El estudio de la composición química de las sustancias.",
            "El estudio del comportamiento humano.",
            "El estudio del conocimiento científico."
        ],

        correcta: 0,

        explicacion:
        "El objeto formal de la Física consiste en estudiar las leyes que explican el comportamiento de la materia y la energía."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Qué estudia la Física?",

        opciones: [
            "Las leyes que rigen la materia, la energía y sus interacciones.",
            "La evolución de las especies.",
            "Las culturas humanas.",
            "La organización de la sociedad."
        ],

        correcta: 0,

        explicacion:
        "La Física estudia los fenómenos naturales relacionados con la materia, la energía y sus interacciones."
    },

    {
        tipo: "multiple",

        enunciado:
        "Un científico calcula la velocidad y la aceleración de un automóvil durante una prueba. ¿Qué ciencia está aplicando?",

        opciones: [
            "Química",
            "Física",
            "Historia",
            "Psicología"
        ],

        correcta: 1,

        explicacion:
        "La Física estudia el movimiento de los cuerpos y las fuerzas que actúan sobre ellos."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál de las siguientes investigaciones corresponde al campo de la Física?",

        opciones: [
            "Analizar cómo actúa la gravedad sobre los cuerpos.",
            "Estudiar la composición del ADN.",
            "Investigar las costumbres de una comunidad.",
            "Reconstruir un hecho histórico."
        ],

        correcta: 0,

        explicacion:
        "La gravedad es uno de los fenómenos fundamentales estudiados por la Física."
    }

]

},



{
    nombre: "Química",

    nombreSala: "Centro de Transformación de la Materia",

    icono: "⚗",

    objetivo: "Restaura la información sobre la composición y transformación de la materia.",

    tipo: "multiple",

    bancoPreguntas: [

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto material de la Química?",

        opciones: [
            "La materia",
            "La energía",
            "Los seres vivos",
            "La sociedad"
        ],

        correcta: 0,

        explicacion:
        "El objeto material de la Química es la materia."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto formal de la Química?",

        opciones: [
            "El estudio de la composición, propiedades y transformaciones de la materia.",
            "El estudio del movimiento de los cuerpos.",
            "El estudio del comportamiento humano.",
            "El estudio de los hechos históricos."
        ],

        correcta: 0,

        explicacion:
        "La Química estudia cómo está formada la materia, cuáles son sus propiedades y cómo se transforma."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Qué estudia la Química?",

        opciones: [
            "La composición, estructura, propiedades y transformaciones de la materia.",
            "La evolución de las especies.",
            "La organización de la sociedad.",
            "Los procesos mentales."
        ],

        correcta: 0,

        explicacion:
        "La Química estudia la materia y los cambios que experimenta."
    },

    {
        tipo: "multiple",

        enunciado:
        "Una científica investiga qué ocurre cuando el hierro se oxida al estar expuesto al aire y la humedad. ¿Qué ciencia está aplicando?",

        opciones: [
            "Física",
            "Historia",
            "Química",
            "Geografía"
        ],

        correcta: 2,

        explicacion:
        "La oxidación es una transformación química de la materia, por lo que corresponde al estudio de la Química."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál de las siguientes investigaciones corresponde al campo de la Química?",

        opciones: [
            "Analizar la reacción entre un ácido y una base para formar nuevas sustancias.",
            "Calcular la velocidad de un automóvil.",
            "Estudiar las costumbres de una comunidad.",
            "Investigar las causas de una guerra."
        ],

        correcta: 0,

        explicacion:
        "Las reacciones químicas y la formación de nuevas sustancias son objeto de estudio de la Química."
    }

]

},



{
    nombre: "Matemática",

    nombreSala: "Núcleo del Pensamiento Lógico",

    icono: "➗",

    objetivo: "Reconstruye el conocimiento matemático para obtener un nuevo fragmento del código.",

    tipo: "multiple",

   bancoPreguntas: [

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto material de la Matemática?",

        opciones: [
            "Los objetos abstractos, como números, figuras y relaciones.",
            "La materia y la energía.",
            "Los seres vivos.",
            "La sociedad."
        ],

        correcta: 0,

        explicacion:
        "El objeto material de la Matemática está formado por objetos abstractos como los números, las figuras y las relaciones."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto formal de la Matemática?",

        opciones: [
            "El estudio de las propiedades, estructuras y relaciones lógicas de los objetos abstractos.",
            "El estudio de las reacciones químicas.",
            "El estudio de la conducta humana.",
            "El estudio de los hechos históricos."
        ],

        correcta: 0,

        explicacion:
        "La Matemática estudia las propiedades y relaciones lógicas de los objetos abstractos."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Qué estudia la Matemática?",

        opciones: [
            "Los números, las figuras, los patrones y las relaciones lógicas.",
            "La evolución de las especies.",
            "Las relaciones sociales.",
            "La composición de la materia."
        ],

        correcta: 0,

        explicacion:
        "La Matemática estudia estructuras abstractas, patrones, cantidades y relaciones."
    },

    {
        tipo: "multiple",

        enunciado:
        "Un profesional desarrolla un modelo para calcular la trayectoria más eficiente de un satélite. ¿Qué ciencia está aplicando principalmente?",

        opciones: [
            "Historia",
            "Matemática",
            "Antropología",
            "Psicología"
        ],

        correcta: 1,

        explicacion:
        "La Matemática permite construir modelos y resolver problemas mediante el razonamiento lógico."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál de las siguientes investigaciones corresponde al campo de la Matemática?",

        opciones: [
            "Demostrar un teorema utilizando razonamiento lógico.",
            "Analizar la composición del agua.",
            "Investigar las costumbres de una comunidad.",
            "Estudiar la conducta de una persona."
        ],

        correcta: 0,

        explicacion:
        "Demostrar teoremas y establecer relaciones lógicas es una tarea propia de la Matemática."
    }

]

},



{
    nombre: "Filosofía",

    nombreSala: "Sala de la Reflexión",

    icono: "🧩",

    objetivo: "Recupera los principios filosóficos que completan la base de datos del laboratorio.",

    tipo: "multiple",

    bancoPreguntas: [

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto material de la Filosofía?",

        opciones: [
            "La realidad, el conocimiento y la existencia.",
            "Los seres vivos.",
            "La materia.",
            "La sociedad."
        ],

        correcta: 0,

        explicacion:
        "El objeto material de la Filosofía comprende la realidad, el conocimiento y la existencia."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál es el objeto formal de la Filosofía?",

        opciones: [
            "El estudio de las reacciones químicas.",
            "La reflexión crítica y racional sobre los problemas fundamentales del ser humano.",
            "El estudio de la conducta humana.",
            "El estudio de los acontecimientos históricos."
        ],

        correcta: 1,

        explicacion:
        "La Filosofía busca comprender la realidad mediante la reflexión crítica y racional."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Qué estudia la Filosofía?",

        opciones: [
            "La realidad, el conocimiento, la existencia y los grandes problemas del ser humano.",
            "La composición de la materia.",
            "Las leyes del movimiento.",
            "Los seres vivos."
        ],

        correcta: 0,

        explicacion:
        "La Filosofía reflexiona sobre cuestiones fundamentales relacionadas con la realidad, el conocimiento y la existencia."
    },

    {
        tipo: "multiple",

        enunciado:
        "Una persona intenta responder racionalmente a la pregunta: '¿Qué es la verdad y cómo podemos conocerla?'. ¿Qué ciencia está aplicando?",

        opciones: [
            "Filosofía",
            "Geografía",
            "Biología",
            "Química"
        ],

        correcta: 0,

        explicacion:
        "Preguntas sobre la verdad, el conocimiento y la existencia pertenecen al campo de la Filosofía."
    },

    {
        tipo: "multiple",

        enunciado:
        "¿Cuál de las siguientes investigaciones corresponde al campo de la Filosofía?",

        opciones: [
            "Analizar qué significa actuar de manera ética y cuál es el sentido de la justicia.",
            "Estudiar la estructura de una célula.",
            "Investigar una reacción química.",
            "Calcular la velocidad de un cuerpo."
        ],

        correcta: 0,

        explicacion:
        "La Filosofía estudia problemas fundamentales como la ética, la justicia, el conocimiento y la existencia."
    }

]

}

];

//=====================================
// GENERACIÓN DEL CÓDIGO
//=====================================

function generarCodigo() {

    juego.codigo = [];

    SALAS.forEach(sala => {

        sala.codigo = Math.floor(Math.random() * 10);

    });

}
generarCodigo();

function mostrarAnimacionCodigo(numero){

    console.log("Código obtenido:", numero);

}

//=====================================
// PANTALLAS
//=====================================

function ocultarPantallas() {

    pantallaInicio.classList.add("oculto");
    pantallaModo.classList.add("oculto");
    pantallaJugadores.classList.add("oculto");
    pantallaIntro.classList.add("oculto");
    pantallaLaboratorio.classList.add("oculto");
    pantallaSala.classList.add("oculto");
    pantallaCodigo.classList.add("oculto");
    pantallaFinal.classList.add("oculto");
    pantallaGameOver.classList.add("oculto");

}


function mostrarPantalla(nombrePantalla) {

    ocultarPantallas();

    switch (nombrePantalla) {

        case "inicio":
            pantallaInicio.classList.remove("oculto");
            break;

        case "modo":
            pantallaModo.classList.remove("oculto");
            break;

        case "jugadores":
            pantallaJugadores.classList.remove("oculto");
            break;

        case "intro":
            pantallaIntro.classList.remove("oculto");
            break;

        case "laboratorio":
            pantallaLaboratorio.classList.remove("oculto");
            break;

        case "sala":
            pantallaSala.classList.remove("oculto");
            break;

        case "codigo":
            pantallaCodigo.classList.remove("oculto");
            break;

        case "final":
            pantallaFinal.classList.remove("oculto");
            break;

        case "gameover":
            pantallaGameOver.classList.remove("oculto");
            break;

    }

}

function agregarEvento(texto) {

    const evento = document.createElement("p");

    evento.textContent = texto;

    registroEventos.prepend(evento);

    while (registroEventos.children.length > 8) {

        registroEventos.removeChild(
            registroEventos.lastElementChild
        );

    }

}

//=====================================
// CONFIGURACIÓN DE JUGADORES
//=====================================

// Genera los campos para escribir los nombres

function generarCamposJugadores() {

    listaJugadores.innerHTML = "";

    const cantidad = Number(cantidadJugadores.value);

    for (let i = 1; i <= cantidad; i++) {

        const input = document.createElement("input");

        input.type = "text";

        input.placeholder = `Nombre del jugador ${i}`;

        input.classList.add("inputJugador");

        input.maxLength = 20;

        listaJugadores.appendChild(input);

    }

}



// Crea los jugadores del juego

function crearJugadores() {

    juego.jugadores = [];

    const inputs = listaJugadores.querySelectorAll("input");

    inputs.forEach((input, indice) => {

        let nombre = input.value.trim();

        if (nombre === "") {

            nombre = `Jugador ${indice + 1}`;

        }

        juego.jugadores.push({

            nombre: nombre,

            vidas: 3,

            puntaje: 0,

            eliminado: false

        });

    });

}



// Reinicia las variables del juego

function iniciarPartida() {

    juego.turnoActual = 0;

    juego.salaActual = 0;

    juego.desafio.tipo = "";

    juego.desafio.preguntas = [];

    juego.desafio.indice = 0;

    juego.desafio.completado = false;

    juego.estabilidad = 100;

    juego.salasCompletadas = 0;

    juego.respuestasCorrectas = 0;

    juego.respuestasIncorrectas = 0;

    juego.codigo = [];

    juego.iniciado = true;

    juego.terminado = false;



    //=====================================
    // DIFICULTAD SEGÚN CANTIDAD DE JUGADORES
    //=====================================

    let vidasIniciales;

    switch (juego.jugadores.length) {

        case 1:
            vidasIniciales = 5;
            break;

        case 2:
            vidasIniciales = 4;
            break;

        case 3:
            vidasIniciales = 3;
            break;

        case 4:
            vidasIniciales = 3;
            break;

        case 5:
            vidasIniciales = 2;
            break;

        default:
            vidasIniciales = 3;

    }

    juego.jugadores.forEach(jugador => {

        jugador.vidas = vidasIniciales;

        jugador.puntaje = 0;

        jugador.eliminado = false;

    });

    generarCodigo();

}

//=====================================
// LABORATORIO
//=====================================

// Actualiza toda la información del laboratorio

function actualizarLaboratorio() {

    actualizarJugador();
    

    actualizarEstabilidad();

    actualizarCodigo();

    actualizarSala();

    mostrarVidas();

}


//-------------------------------------
// Vidas
//-------------------------------------

function mostrarVidas(vidas) {

    let texto = "";

    for (let i = 0; i < juego.vidasIniciales; i++) {

        if (i < vidas) {

            texto += "❤️ ";

        } else {

            texto += "🖤 ";

        }

    }

    return texto;

}

//-------------------------------------
// Jugador
//-------------------------------------

function actualizarJugador() {

    const jugador = jugadorActual();

    if (!jugador) return;

    nombreJugadorActual.textContent = jugador.nombre;
    vidasJugador.textContent = mostrarVidas(jugador.vidas);
    puntajeJugador.textContent = jugador.puntaje;

}



//-------------------------------------
// Estabilidad
//-------------------------------------

function actualizarEstabilidad() {

    barraEstabilidad.value = juego.estabilidad;

    porcentajeEstabilidad.textContent =
        juego.estabilidad + "%";

}



//-------------------------------------
// Código
//-------------------------------------

function actualizarCodigo() {

    let texto = "";

    for (let i = 0; i < SALAS.length; i++) {

        if (juego.codigo[i] !== undefined) {

            texto += juego.codigo[i] + " ";

        }

        else {

            texto += "_ ";

        }

    }

    codigoVisual.textContent = texto;

}



//-------------------------------------
// Sala actual
//-------------------------------------

function actualizarSala() {

    const sala = salaActual();

    if (!sala) return;

    iconoSalaActual.textContent = sala.icono;
    nombreSalaActual.textContent = sala.nombreSala;
    objetivoSala.textContent = sala.objetivo;

}

//=====================================
// SALAS
//=====================================

// Entra a la sala actual

function entrarSala() {

    prepararDesafio();

    mostrarPantalla("sala");

    mostrarIntroduccionSala();

}



//-------------------------------------
// Completa la sala actual
//-------------------------------------




function obtenerPreguntaActual() {

    return juego.desafio.preguntas[
        juego.desafio.indice
    ];

}



async function completarSala() {

    juego.salasCompletadas++;

    const sala = salaActual();

    agregarEvento(
        `✅ ${sala.nombreSala} completada.`
    );

    // Guarda el número del código
    juego.codigo.push(sala.codigo);

    // Muestra la animación y espera a que termine
    await mostrarAnimacionCodigo(sala.codigo);

    // ¿Era la última sala?
    if (juego.salaActual >= SALAS.length - 1) {

        mostrarPantalla("final");

        return;

    }

    // Avanza a la siguiente sala
    juego.salaActual++;

    actualizarLaboratorio();

    mostrarPantalla("laboratorio");

}



//-------------------------------------
// Pasa a la siguiente sala
//-------------------------------------

function siguienteSala() {

    juego.salaActual++;

    if (juego.salaActual >= SALAS.length) {

        mostrarPantalla("final");

        return;

    }

    actualizarLaboratorio();

    mostrarPantalla("laboratorio");

}

//=====================================
// PREGUNTAS
//=====================================

let respuestaSeleccionada = null;



//-------------------------------------
// Muestra la pregunta actual
//-------------------------------------

function mostrarDesafio() {

    const desafio = obtenerPreguntaActual();

    if (!desafio) {

        completarSala();

        return;

    }

    respuestaSeleccionada = null;

    mensajeRespuesta.textContent = "";

    contadorPregunta.textContent =
        `Desafío ${juego.desafio.indice + 1} de ${juego.desafio.preguntas.length}`;

    iconoSalaGrande.textContent = salaActual().icono;

    tituloSala.textContent = salaActual().nombreSala;

    objetivoActual.textContent = salaActual().objetivo;

    preguntaActual.textContent = desafio.enunciado;

    opcionesRespuesta.innerHTML = "";

    desafio.opciones.forEach((opcion, indice) => {

        const boton = document.createElement("button");

        boton.textContent = opcion;

        boton.classList.add("opcion");

        boton.addEventListener("click", () => {

            document.querySelectorAll(".opcion")
                .forEach(b => b.classList.remove("seleccionada"));

            boton.classList.add("seleccionada");

            respuestaSeleccionada = indice;

        });

        opcionesRespuesta.appendChild(boton);

    });

    turnoActual.textContent = jugadorActual().nombre;

    vidasActuales.textContent =
        mostrarVidas(jugadorActual().vidas);

}

function mostrarPreguntaMultiple(desafio) {

    preguntaActual.textContent = desafio.enunciado;

    opcionesRespuesta.innerHTML = "";

    desafio.opciones.forEach((opcion, indice) => {

        const boton = document.createElement("button");

        boton.textContent = opcion;

        boton.classList.add("opcion");

        boton.onclick = () => {

            document
                .querySelectorAll(".opcion")
                .forEach(b => b.classList.remove("seleccionada"));

            boton.classList.add("seleccionada");

            respuestaSeleccionada = indice;

        };

        opcionesRespuesta.appendChild(boton);

    });

}


function mostrarPreguntaVF(pregunta) {

    opcionesRespuesta.innerHTML = "<h3>Próximamente...</h3>";

}


function mostrarPreguntaRelacionar(pregunta) {

    opcionesRespuesta.innerHTML = "<h3>Próximamente...</h3>";

}

//-------------------------------------
// Verifica la respuesta
//-------------------------------------

function verificarRespuesta() {

    const desafio = obtenerPreguntaActual();

    if (!desafio) return;

    if (respuestaSeleccionada === null) {

        mensajeRespuesta.textContent =
            "Selecciona una respuesta.";

        return;

    }

    if (respuestaSeleccionada === desafio.correcta) {

        responderCorrectamente();

    } else {

        responderIncorrectamente();

    }

}

function responderCorrectamente() {

    juego.respuestasCorrectas++;

    jugadorActual().puntaje += 100;

    agregarEvento(
        `✅ ${jugadorActual().nombre} respondió correctamente.`
    );

    juego.desafio.indice++;

    actualizarLaboratorio();

    if (juego.desafio.indice >= juego.desafio.preguntas.length) {

        completarSala();

        return;

    }

    cambiarTurno();

    mostrarDesafio();

}

function responderIncorrectamente() {

    juego.respuestasIncorrectas++;

    agregarEvento(
        `❌ ${jugadorActual().nombre} respondió incorrectamente.`
    );

    perderVida();

    reducirEstabilidad(5);

    if (todosEliminados()) {

        mostrarPantalla("gameover");

        return;

    }

    cambiarTurno();

    actualizarLaboratorio();

    mostrarDesafio();

}


//=====================================
// TURNOS
//=====================================

// Cambia el turno al siguiente jugador vivo

function cambiarTurno() {

    // Si todos fueron eliminados, termina la partida

    if (todosEliminados()) {

        mostrarPantalla("gameover");

        return;

    }

    do {

        juego.turnoActual++;

        if (juego.turnoActual >= juego.jugadores.length) {

            juego.turnoActual = 0;

        }

    }

    while (jugadorActual().eliminado);

}



//-------------------------------------
// Comprueba si todos fueron eliminados
//-------------------------------------

function todosEliminados() {

    return juego.jugadores.every(jugador => jugador.eliminado);

}

//=====================================
// VIDAS Y ESTABILIDAD
//=====================================

// Hace perder una vida al jugador actual

function perderVida() {

    const jugador = jugadorActual();

    jugador.vidas--;

    agregarEvento(
        `❤️ ${jugador.nombre} perdió una vida.`
    );

    if (jugador.vidas <= 0) {

        jugador.vidas = 0;

        jugador.eliminado = true;

        agregarEvento(
            `💀 ${jugador.nombre} ha sido eliminado.`
        );

    }

    actualizarLaboratorio();

}



//-------------------------------------
// Reduce la estabilidad del laboratorio
//-------------------------------------

function reducirEstabilidad(cantidad) {

    juego.estabilidad -= cantidad;

    if (juego.estabilidad < 0) {

        juego.estabilidad = 0;

    }

    agregarEvento(
        `⚠ La estabilidad bajó a ${juego.estabilidad}%.`
    );

    actualizarLaboratorio();

    if (juego.estabilidad <= 0) {

        agregarEvento(
            "☢ El laboratorio colapsó."
        );

        mostrarPantalla("gameover");

    }

}

//=====================================
// CÓDIGO FINAL
//=====================================

// Muestra la animación al conseguir un código

async function mostrarAnimacionCodigo(numero) {

    mostrarPantalla("codigo");

    barraDescifrado.value = 0;

    codigoEncontrado.textContent = "";

    textoDescifrado.textContent = "Conectando con el servidor...";

    for (let i = 0; i <= 100; i += 10) {

        barraDescifrado.value = i;

        await esperar(150);

    }

    textoDescifrado.textContent = "Descifrando código...";



    // Efecto hacker

    const caracteres =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#@$%&";

    for (let i = 0; i < 15; i++) {

        codigoEncontrado.textContent =

            caracteres[Math.floor(Math.random() * caracteres.length)];

        await esperar(70);

    }

    codigoEncontrado.textContent = numero;

    await esperar(1200);

}

function esperar(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}

function verificarCodigoFinal() {

    const codigoJugador = inputCodigo.value.trim();

    const codigoCorrecto = juego.codigo.join("");



    if (codigoJugador === codigoCorrecto) {

        mensajeFinal.textContent =
            "🎉 ¡Han escapado del laboratorio!";

    }

    else {

        mensajeFinal.textContent =
            "❌ Código incorrecto.";

    }

}

function mostrarRanking() {

    rankingJugadores.innerHTML = "";



    const ranking = [...juego.jugadores]

        .sort((a, b) => b.puntaje - a.puntaje);



    ranking.forEach((jugador, posicion) => {

        const p = document.createElement("p");



        p.textContent =

            `${posicion + 1}. ${jugador.nombre} - ${jugador.puntaje} pts`;



        rankingJugadores.appendChild(p);

    });

}



//=====================================
// REGISTRO DE EVENTOS
//=====================================

//=====================================
// REINICIAR PARTIDA
//=====================================

function reiniciarPartida() {

    // Estado del juego

    juego.iniciado = false;

    juego.terminado = false;

    juego.turnoActual = 0;

    juego.salaActual = 0;

    juego.estabilidad = 100;

    juego.codigo = [];

    juego.salasCompletadas = 0;

    juego.respuestasCorrectas = 0;

    juego.respuestasIncorrectas = 0;

    juego.desafio.tipo = "";

    juego.desafio.preguntas = [];

    juego.desafio.indice = 0;

    juego.desafio.completado = false;



    // Limpia el registro

    registroEventos.innerHTML = "";



    // Limpia la pantalla final

    inputCodigo.value = "";

    mensajeFinal.textContent = "";



    // Limpia el ranking

    rankingJugadores.innerHTML = "";



    // Limpia la visualización del código

    codigoVisual.textContent = "_ ".repeat(SALAS.length);



    // Regresa al inicio

    mostrarPantalla("inicio");

}

function prepararPartida() {

    generarCodigo();

    actualizarLaboratorio();

    agregarEvento("🧪 El laboratorio ha sido activado.");

    mostrarPantalla("laboratorio");

}



//=====================================
// EVENTOS
//=====================================

//-------------------------------------
// Pantalla de inicio
//-------------------------------------

btnComenzar.addEventListener("click", () => {

    mostrarPantalla("modo");

});



//-------------------------------------
// Configuración de jugadores
//-------------------------------------

cantidadJugadores.addEventListener("change", () => {

    generarCamposJugadores();

});



btnCrearPartida.addEventListener("click", () => {

    crearJugadores();

    iniciarPartida();

    mostrarPantalla("intro");

    iniciarIntroduccion();

});



//-------------------------------------
// Introducción
//-------------------------------------

btnEntrarLaboratorio.addEventListener("click", () => {

    prepararPartida();

});



//-------------------------------------
// Laboratorio
//-------------------------------------

btnEntrarSala.addEventListener("click", () => {

    entrarSala();

});



//-------------------------------------
// Sala
//-------------------------------------

btnResponder.addEventListener("click", () => {

    verificarRespuesta();

});



//-------------------------------------
// Pantalla Final
//-------------------------------------

btnAbrirPuerta.addEventListener("click", () => {

    verificarCodigoFinal();

    mostrarRanking();

});



btnReiniciar.addEventListener("click", () => {

    reiniciarPartida();

});



//-------------------------------------
// Game Over
//-------------------------------------

btnIntentarOtraVez.addEventListener("click", () => {

    reiniciarPartida();

});


btnModo.addEventListener("click", () => {

    const modoSeleccionado = document.querySelector(
        'input[name="modoJuego"]:checked'
    );

    juego.modo = modoSeleccionado.value;

    mostrarPantalla("jugadores");

});


//-------------------------------------
// Inicialización
//-------------------------------------

window.addEventListener("load", () => {

    generarCamposJugadores();

    mostrarPantalla("inicio");

});



btnComenzarDesafio.addEventListener("click", () => {

    introduccionSala.style.display = "none";

    contenidoDesafio.style.display = "block";

    mostrarDesafio();

});