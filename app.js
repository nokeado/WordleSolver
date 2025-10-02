// Datos de la aplicación
const DEFAULT_DICCIONARIO = [
    "OREAS", "IDEAN", "ACERO", "SALEN", "SECAR", "NACER", "LASER", "RENAL",
    "CANES", "CASES", "CALOR", "CESAR", "CENAR", "CELAR", "CELAS", "CENAS",
    "NADEN", "LISTO", "ADOSE", "CINTO", "TRINE", "RATIO", "PARTE", "SUELO",
    "ABETO", "ACTOR", "AGUAS", "AGUDO", "ALADO", "ALBAS", "ALTAR", "ANTON",
    "ATIZO", "AVALA", "AVION", "BACHE", "BABAS", "BACAS", "BAJES", "BALAS",
    "BEBES", "BELEN", "BERTO", "BICHO", "BIZCO", "BUENO", "BUENA", "BUSCA",
    "CABRA", "CAFES", "CAJAS", "CALAR", "CALAS", "CALCA", "CALCO", "CALLA",
    "CALMA", "CAMBA", "CAMPO", "CANAS", "CANTO", "CAPTO", "CARAS", "CARGA",
    "CARGO", "CARLO", "CARRO", "CASAS", "CATAR", "CAIDA", "CEJAS", "CELIA",
    "CEPAS", "CERCA", "CERCO", "CERDO", "CERDA", "CHILE", "CHINA", "CIEGO",
    "CIEGA", "CINCO", "CINES", "CISNE", "CITAS", "CLARA", "CLARO", "CLAVE",
    "CLAVO", "COLAS", "COLON", "CORAL", "CORAS", "COREA", "CORRO", "COSAS",
    "COSTO", "COSTE", "CRUDO", "CURDO", "CURDA", "CURAR", "CELTA", "COGER",
    "COMBO", "CORSE", "CREMA", "CUIDA", "CULOS", "CURAL", "DADOS", "DAMAS",
    "DANZA", "DATOS", "DAVID", "DECIR", "DEMAS", "DENSE", "DESDE", "DIANA",
    "DIEGO", "DIETA", "DINAR", "DOLOR", "DONAR", "DONDE", "DOSIS", "DRAMA",
    "DUCHA", "DULCE", "DUNAS", "ELENA", "ELLAS", "ELLOS", "ENERO", "EPOCA",
    "ERIZO", "ERROR", "EUROS", "FATAL", "FAUNA", "FECHA", "FELIZ", "FERIA",
    "FIBRA", "FINCA", "FINAL", "FISICA", "FLACO", "FLACA", "FORMA", "GALLO",
    "GANAS", "GATOS", "GENTE", "GLOBO", "GRASA", "GRUPO", "GUAPO", "GUAPA",
    "HABLO", "HACIA", "HAITI", "HASTA", "HECHO", "HIELO", "HILOS", "HOJAS",
    "HORAS", "HOTEL", "HUEVO", "HUMOR", "IDEAL", "IDEAS", "IGUAL", "INDIA",
    "ISLAS", "JABON", "JAPON", "JARDIN", "JESUS", "JOVEN", "JUEGO", "JULIO",
    "JUNIO", "JUNTO", "LARGO", "LARGA", "LECHE", "LETRA", "LIBRA", "LIBRE",
    "LIBRO", "LINEA", "LISTA", "LLAMA", "LLEVA", "LUGAR", "LUCHA", "LUCAS",
    "MADRE", "MARIA", "MARIO", "MARZO", "MAYOR", "MEDIO", "MEJOR", "MENOR",
    "MENOS", "METRO", "MIEDO", "MILES", "MINAS", "MODO", "MONTE", "MORAL",
    "MOSCA", "MUNDO", "MUSEO", "MUSICA", "NADIE", "NEGRO", "NEGRA", "NIVEL",
    "NOCHE", "NORTE", "NUEVA", "NUEVO", "NUNCA", "OBRAS", "ORDEN", "OTRAS",
    "OTROS", "PADRE", "PAGAR", "PAGES", "PANES", "PAPEL", "PARIS", "PARED",
    "PASES", "PASTA", "PATIO", "PEACE", "PEDRO", "PENAS", "PERRO", "PERRA",
    "PIANO", "PICAR", "PICOS", "PIDEN", "PIDOS", "PINTA", "PIZZA", "PLANO",
    "PLATA", "PLAZA", "PLENA", "PLENO", "POBRE", "POCAS", "POCOS", "PODER",
    "POLLO", "PONER", "PRAGA", "PRESA", "PRIMO", "PRIMA", "PULPO", "PUNTO",
    "QUEDA", "QUEDO", "QUIEN", "QUISO", "RADIO", "RAZON", "REINO", "RESTO",
    "RIFLE", "RITMO", "ROCAS", "ROMAN", "RONDA", "RUBIO", "RUBIA", "RUSSO",
    "RUSIA", "SABES", "SABOR", "SANTO", "SANTA", "SECAS", "SECOS", "SEMAS",
    "SENOS", "SIETE", "SIGLO", "SILLA", "SOBRE", "SOFIA", "SOPAS", "SUAVE",
    "SUCIO", "SUCIA", "SUPER", "TABLA", "TALES", "TANTO", "TANTA", "TARDE",
    "TAREA", "TEMAS", "TENOR", "TERRA", "TEXTO", "TIAGO", "TIGER", "TIPOS",
    "TIRAS", "TOKYO", "TOMAR", "TONES", "TORRE", "TOTAL", "TRACK", "TRIGO",
    "TUMOR", "UNCLE", "UNION", "USAGE", "USUAL", "VALLE", "VALOR", "VAMOS",
    "VARGA", "VARIOS", "VECES", "VERDE", "VIAJE", "VIENA", "VIENE", "VISTA",
    "VIUDA", "VIUDO", "VOCES", "VUELO", "WAFER", "WEBER", "YACER", "YERNO",
    "ZANJA", "ZORRO", "ZORRA"
];
const DICCIONARIO_DEFAULT_FILENAME = "words.txt"; // Cambia aquí el archivo real que uses

// Estado del juego
let gameState = {
currentRow: 0,
currentCol: 0,
grid: Array(6)
    .fill()
    .map(() => Array(5).fill("")),
colors: Array(6)
    .fill()
    .map(() => Array(5).fill("gris")),
diccionario: [...DEFAULT_DICCIONARIO],
remainingWords: [...DEFAULT_DICCIONARIO],
attempts: [],
isColorControlsVisible: false,
palabraActual: "",
};
let diccionarioPersonalizadoCargado = false;

// Elementos del DOM
const elements = {
gridContainer: document.querySelector(".grid-container"),
colorControls: document.getElementById("colorControls"),
confirmRowBtn: document.getElementById("confirmRowBtn"),
remainingWordsList: document.getElementById("remainingWordsList"),
remainingCounter: document.getElementById("remainingCounter"),
remainingCount: document.getElementById("remainingCount"),
suggestionsList: document.getElementById("suggestionsList"),
attemptCount: document.getElementById("attemptCount"),
remainingPercent: document.getElementById("remainingPercent"),
resetBtn: document.getElementById("resetBtn"),
fileInput: document.getElementById("fileInput"),
debugLog: document.getElementById("debugLog"),
clearLogBtn: document.getElementById("clearLogBtn"),
algorithmSteps: document.getElementById("algorithmSteps"),
initialWordCount: document.getElementById("initialWordCount"),
};

// Funciones de logging
function log(message, type = "info") {
const timestamp = new Date().toLocaleTimeString();
const entry = document.createElement("p");
entry.className = `debug-entry ${type}`;
entry.innerHTML = `[${timestamp}] ${message}`;

elements.debugLog.appendChild(entry);
elements.debugLog.scrollTop = elements.debugLog.scrollHeight;
}

function clearLog() {
elements.debugLog.innerHTML = '<p class="debug-entry info">Log limpiado</p>';
}

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", function () {
const afterDictionaryReady = (loadedMsg, type = "info") => {
    initializeGrid();
    setupEventListeners();
    updateRemainingWords();
    updateSuggestions();
    updateStats();
    elements.initialWordCount.textContent = gameState.diccionario.length;
    log(loadedMsg, type);
    log(
    `Aplicación iniciada - Diccionario cargado con ${gameState.diccionario.length} palabras`,
    "info"
    );
};

if (!diccionarioPersonalizadoCargado) {
    cargarDiccionarioPorDefecto()
    .then((text) => {
        processDictionaryText(text);
        afterDictionaryReady(
        `Diccionario predeterminado ${DICCIONARIO_DEFAULT_FILENAME} cargado.`
        );
    })
    .catch(() => {
        processDictionaryText(DEFAULT_DICCIONARIO.join("\n"));
        afterDictionaryReady(
        `No se pudo cargar ${DICCIONARIO_DEFAULT_FILENAME}, usando diccionario interno.`,
        "warning"
        );
    });
} else {
    afterDictionaryReady(
    "Diccionario personalizado cargado previamente.",
    "info"
    );
}
});

function cargarDiccionarioPorDefecto() {
return fetch(DICCIONARIO_DEFAULT_FILENAME).then((response) => {
    if (!response.ok)
    throw new Error(`No se encontró ${DICCIONARIO_DEFAULT_FILENAME}`);
    return response.text();
});
}

function processDictionaryText(text) {
const words = text
    .split(/\r?\n/)
    .map((w) => w.trim().toUpperCase())
    .filter((w) => w.length === 5);
gameState.diccionario = words;
gameState.remainingWords = [...words];

// Actualiza contador u otros elementos UI si tienes
elements.initialWordCount.textContent = words.length;
}

function initializeGrid() {
elements.gridContainer.innerHTML = "";

// Crear 30 casillas (6 filas × 5 columnas)
for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 5; col++) {
    const cell = document.createElement("div");
    cell.className = "grid-cell";
    cell.dataset.row = row;
    cell.dataset.col = col;
    cell.tabIndex = 0;
    elements.gridContainer.appendChild(cell);
    }
}
}

function setupEventListeners() {
// Interceptar todas las teclas en el documento
document.addEventListener("keydown", function (e) {
    if (gameState.isColorControlsVisible) {
    return; // No interceptar cuando están visibles los controles de color
    }

    const key = e.key;

    // Solo procesar letras, backspace y enter
    if (/^[a-zA-Z]$/.test(key)) {
    e.preventDefault();
    e.stopPropagation();
    inputLetter(key.toUpperCase());
    } else if (key === "Backspace") {
    e.preventDefault();
    e.stopPropagation();
    deleteLetter();
    } else if (key === "Enter") {
    e.preventDefault();
    e.stopPropagation();
    if (isRowComplete(gameState.currentRow)) {
        showColorControls();
    }
    }
});

// Click en casillas para posicionar cursor
elements.gridContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("grid-cell")) {
    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);

    if (row === gameState.currentRow && !gameState.isColorControlsVisible) {
        gameState.currentCol = col;
        updateGridDisplay();
    }
    }
});

// Event listeners para botones de color con NUEVA FUNCIONALIDAD
elements.colorControls.addEventListener("click", function (e) {
    if (e.target.classList.contains("color-btn")) {
    manejarClickColor(e.target);
    }
});

// Event listener para confirmar fila
elements.confirmRowBtn.addEventListener("click", confirmCurrentRow);

// Event listener para reset
elements.resetBtn.addEventListener("click", resetGame);

// Event listener para carga de archivo - CORREGIDO
if (elements.fileInput) {
    elements.fileInput.addEventListener("change", handleFileUpload);
    elements.fileInput.addEventListener("click", function (e) {
    // Asegurar que el click funcione correctamente
    e.stopPropagation();
    });
    log("Event listener de archivo configurado correctamente", "info");
} else {
    log("Error: No se encontró el elemento fileInput", "error");
}

// Event listener para limpiar log
elements.clearLogBtn.addEventListener("click", clearLog);

// Event listeners para sugerencias
elements.suggestionsList.addEventListener("click", handleSuggestionClick);
elements.remainingWordsList.addEventListener("click", handleWordClick);
}

// NUEVA FUNCIONALIDAD: Manejar click en botones de color con feedback visual
function manejarClickColor(button) {
const letterGroup = button.closest(".letter-color-group");
const position = Array.from(letterGroup.parentElement.children).indexOf(
    letterGroup
);
const color = button.dataset.color;

// Desmarcar otros botones del mismo grupo (MANTENER)
const grupo = button.parentNode;
grupo.querySelectorAll(".color-btn").forEach((btn) => {
    btn.classList.remove("selected");
});
button.classList.add("selected");

// NUEVA FUNCIONALIDAD: Aplicar color visual inmediatamente a la letra
const letterDisplay = letterGroup.querySelector(".letter-display");
letterDisplay.classList.remove("verde", "amarillo", "gris");
letterDisplay.classList.add(color);

// Actualizar estado del juego
gameState.colors[gameState.currentRow][position] = color;

log(
    `Letra ${gameState.palabraActual[position]} marcada como ${color}`,
    "info"
);
}

function handleFileUpload(event) {
const file = event.target.files[0];

diccionarioPersonalizadoCargado = true;

if (!file) {
    log("No se seleccionó ningún archivo", "warning");
    return;
}

log(`Procesando archivo: ${file.name}`, "info");

if (file.type !== "text/plain" && !file.name.toLowerCase().endsWith(".txt")) {
    log("Error: Solo se permiten archivos .txt", "error");
    event.target.value = ""; // Limpiar input
    return;
}

const reader = new FileReader();
reader.onload = function (e) {
    try {
    const content = e.target.result;
    const words = content
        .split(/\r?\n/)
        .map((word) => word.trim().toUpperCase())
        .filter((word) => word.length === 5 && /^[A-ZÁÉÍÓÚÑÜ]+$/.test(word));

    if (words.length === 0) {
        log("Error: No se encontraron palabras válidas de 5 letras", "error");
        event.target.value = "";
        return;
    }

    // Actualizar diccionario
    gameState.diccionario = [...words];
    gameState.remainingWords = [...words];

    log(
        `✅ Diccionario personalizado cargado: ${words.length} palabras`,
        "success"
    );
    elements.initialWordCount.textContent = words.length;

    // Actualizar UI
    updateRemainingWords();
    updateSuggestions();
    updateStats();
    } catch (error) {
    log(`Error al procesar archivo: ${error.message}`, "error");
    event.target.value = "";
    }
};

reader.onerror = function () {
    log("Error al leer el archivo", "error");
    event.target.value = "";
};

reader.readAsText(file);
}

function inputLetter(letter) {
if (gameState.currentRow >= 6 || gameState.isColorControlsVisible) {
    return;
}

const row = gameState.currentRow;
const col = gameState.currentCol;

if (col < 5) {
    // Establecer la letra en el grid
    gameState.grid[row][col] = letter;

    // Avanzar cursor solo si no estamos en la última posición
    if (col < 4) {
    gameState.currentCol = col + 1;
    }

    updateGridDisplay();

    // Si la fila está completa, mostrar controles después de un breve delay
    if (isRowComplete(row)) {
    setTimeout(() => {
        showColorControls();
    }, 150);
    }
}
}

function deleteLetter() {
if (gameState.currentRow >= 6 || gameState.isColorControlsVisible) {
    return;
}

const row = gameState.currentRow;
let col = gameState.currentCol;

// Si la celda actual está vacía y no estamos al principio, ir hacia atrás
if (gameState.grid[row][col] === "" && col > 0) {
    col = col - 1;
    gameState.currentCol = col;
}

// Borrar la letra de la celda actual
gameState.grid[row][col] = "";

updateGridDisplay();
}

function updateGridDisplay() {
const cells = elements.gridContainer.querySelectorAll(".grid-cell");

cells.forEach((cell, index) => {
    const row = Math.floor(index / 5);
    const col = index % 5;
    const letter = gameState.grid[row][col];
    const color = gameState.colors[row][col];

    // Establecer contenido de texto directamente
    cell.innerHTML = "";
    cell.appendChild(document.createTextNode(letter));

    // Reset classes
    cell.className = "grid-cell";

    // Aplicar clases según estado
    if (letter) {
    cell.classList.add("filled");
    }

    if (row < gameState.currentRow) {
    cell.classList.add("confirmed", color);
    } else if (row === gameState.currentRow && col === gameState.currentCol) {
    cell.classList.add("active");
    }
});
}

function isRowComplete(row) {
return gameState.grid[row].every((cell) => cell !== "");
}

function showColorControls() {
if (
    !isRowComplete(gameState.currentRow) ||
    gameState.isColorControlsVisible
) {
    return;
}

const word = gameState.grid[gameState.currentRow].join("");
gameState.palabraActual = word;
const letterDisplays =
    elements.colorControls.querySelectorAll(".letter-display");

log(`Palabra completa ingresada: ${word}`, "info");

// Mostrar las letras en los controles y resetear colores visuales
letterDisplays.forEach((display, index) => {
    if (index < word.length) {
    display.textContent = word[index];
    // Resetear a gris por defecto
    display.classList.remove("verde", "amarillo", "gris");
    display.classList.add("gris");
    }
});

// Resetear selecciones de color (gris por defecto)
gameState.colors[gameState.currentRow] = [
    "gris",
    "gris",
    "gris",
    "gris",
    "gris",
];

const colorButtons = elements.colorControls.querySelectorAll(".color-btn");
colorButtons.forEach((btn) => {
    btn.classList.remove("selected");
    if (btn.dataset.color === "gris") {
    btn.classList.add("selected");
    }
});

elements.colorControls.classList.remove("hidden");
gameState.isColorControlsVisible = true;
}

function confirmCurrentRow() {
const row = gameState.currentRow;
const word = gameState.grid[row].join("");
const colors = [...gameState.colors[row]];

// Agregar intento
gameState.attempts.push({ word, colors });

log(
    `Confirmando fila ${row + 1}: ${word} con colores [${colors.join(", ")}]`,
    "info"
);

// Filtrar palabras restantes con debug paso a paso
filterRemainingWordsWithDebug(word, colors);

// Animar las casillas
animateRowFlip(row);

// Avanzar a la siguiente fila
gameState.currentRow++;
gameState.currentCol = 0;

// Ocultar controles de color
elements.colorControls.classList.add("hidden");
gameState.isColorControlsVisible = false;

// Actualizar UI después de la animación
setTimeout(() => {
    updateGridDisplay();
    updateRemainingWords();
    updateSuggestions();
    updateStats();
}, 100);
}

function animateRowFlip(row) {
const startIndex = row * 5;
const cells = Array.from(elements.gridContainer.children).slice(
    startIndex,
    startIndex + 5
);

cells.forEach((cell, index) => {
    setTimeout(() => {
    cell.classList.add("flipping");
    setTimeout(() => {
        cell.classList.remove("flipping");
        cell.classList.add("confirmed", gameState.colors[row][index]);
    }, 300);
    }, index * 100);
});
}

function filterRemainingWordsWithDebug(guessWord, colors) {
const initialCount = gameState.remainingWords.length;
log(`Iniciando filtrado - Palabras antes: ${initialCount}`, "info");

// Limpiar pasos del algoritmo visual
elements.algorithmSteps.innerHTML = "";

// Aplicar filtrado paso a paso
applyGrayFilters(guessWord, colors);
applyYellowFilters(guessWord, colors);
applyGreenFilters(guessWord, colors);

const finalCount = gameState.remainingWords.length;
const filtered = initialCount - finalCount;

log(
    `Filtrado completado - Eliminadas: ${filtered}, Restantes: ${finalCount}`,
    "success"
);
}

function applyGrayFilters(guessWord, colors) {
const beforeCount = gameState.remainingWords.length;
const grayConstraints = [];

// Crear un mapa de letras y sus estados en todas las posiciones
const letterStates = {};

for (let i = 0; i < 5; i++) {
    const letter = guessWord[i];
    if (!letterStates[letter]) {
    letterStates[letter] = [];
    }
    letterStates[letter].push({
    position: i,
    color: colors[i],
    });
}

// Identificar letras que SOLO aparecen como grises (sin amarillos ni verdes)
for (const [letter, states] of Object.entries(letterStates)) {
    const hasNonGray = states.some((state) => state.color !== "gris");
    if (!hasNonGray) {
    // Esta letra SOLO aparece como gris, por lo tanto no debe existir en la palabra objetivo
    grayConstraints.push(letter);
    }
}

if (grayConstraints.length > 0) {
    // Filtrar palabras que NO contengan letras que SOLO aparecen como grises
    gameState.remainingWords = gameState.remainingWords.filter((candidate) => {
    return !grayConstraints.some((letter) => candidate.includes(letter));
    });

    const afterCount = gameState.remainingWords.length;
    const eliminated = beforeCount - afterCount;

    addAlgorithmStep(
    "Paso 1: Filtrar letras grises",
    `Eliminadas ${eliminated} palabras que contienen letras que SOLO aparecen como grises: ${grayConstraints.join(
        ", "
    )}`,
    grayConstraints,
    "gris"
    );

    log(
    `Paso 1 - Letras completamente grises [${grayConstraints.join(
        ", "
    )}]: eliminadas ${eliminated} palabras`,
    "info"
    );
} else {
    log("Paso 1 - No hay letras completamente grises para filtrar", "info");
}
}

function applyYellowFilters(guessWord, colors) {
const beforeCount = gameState.remainingWords.length;
const yellowConstraints = [];

// Identificar restricciones amarillas
for (let i = 0; i < 5; i++) {
    if (colors[i] === "amarillo") {
    yellowConstraints.push({
        letter: guessWord[i],
        position: i,
    });
    }
}

if (yellowConstraints.length > 0) {
    // Filtrar palabras según restricciones amarillas
    gameState.remainingWords = gameState.remainingWords.filter((candidate) => {
    return yellowConstraints.every((constraint) => {
        // La letra debe estar en el candidato
        if (!candidate.includes(constraint.letter)) {
        return false;
        }
        // Pero NO en esta posición específica
        if (candidate[constraint.position] === constraint.letter) {
        return false;
        }
        return true;
    });
    });

    const afterCount = gameState.remainingWords.length;
    const eliminated = beforeCount - afterCount;

    addAlgorithmStep(
    "Paso 2: Filtrar letras amarillas",
    `Eliminadas ${eliminated} palabras. Letras que están en la palabra pero NO en las posiciones marcadas.`,
    yellowConstraints.map((c) => c.letter),
    "amarillo"
    );

    log(
    `Paso 2 - Letras amarillas [${yellowConstraints
        .map((c) => c.letter)
        .join(", ")}]: eliminadas ${eliminated} palabras`,
    "info"
    );
} else {
    log("Paso 2 - No hay letras amarillas para filtrar", "info");
}
}

function applyGreenFilters(guessWord, colors) {
const beforeCount = gameState.remainingWords.length;
const greenConstraints = [];

// Identificar restricciones verdes
for (let i = 0; i < 5; i++) {
    if (colors[i] === "verde") {
    greenConstraints.push({ letter: guessWord[i], position: i });
    }
}

if (greenConstraints.length > 0) {
    // Filtrar palabras según restricciones verdes
    gameState.remainingWords = gameState.remainingWords.filter((candidate) => {
    return greenConstraints.every((constraint) => {
        return candidate[constraint.position] === constraint.letter;
    });
    });

    const afterCount = gameState.remainingWords.length;
    const eliminated = beforeCount - afterCount;

    addAlgorithmStep(
    "Paso 3: Filtrar letras verdes",
    `Eliminadas ${eliminated} palabras que no tienen las letras correctas en posición fija.`,
    greenConstraints.map((c) => c.letter),
    "verde"
    );

    log(
    `Paso 3 - Letras verdes [${greenConstraints
        .map((c) => c.letter)
        .join(", ")}]: eliminadas ${eliminated} palabras`,
    "info"
    );
}
}

function addAlgorithmStep(title, description, letters, color) {
const step = document.createElement("div");
step.className = "algorithm-step fade-in";

const stepTitle = document.createElement("div");
stepTitle.className = "step-title";
stepTitle.textContent = title;

const stepContent = document.createElement("div");
stepContent.className = "step-content";
stepContent.textContent = description;

if (letters && letters.length > 0) {
    const lettersContainer = document.createElement("div");
    lettersContainer.className = "filtered-letters";

    letters.forEach((letter) => {
    const letterSpan = document.createElement("span");
    letterSpan.className = `filtered-letter ${color}`;
    letterSpan.textContent = letter;
    lettersContainer.appendChild(letterSpan);
    });

    stepContent.appendChild(lettersContainer);
}

step.appendChild(stepTitle);
step.appendChild(stepContent);
elements.algorithmSteps.appendChild(step);
}

function updateRemainingWords() {
const count = gameState.remainingWords.length;
elements.remainingCount.textContent = count;

// Actualizar clase del contador
elements.remainingCounter.className = "status";
if (count === 0) {
    elements.remainingCounter.classList.add("status--error");
} else if (count <= 5) {
    elements.remainingCounter.classList.add("status--success");
} else if (count <= 20) {
    elements.remainingCounter.classList.add("status--remaining-few");
} else {
    elements.remainingCounter.classList.add("status--remaining-many");
}

// Mostrar palabras
elements.remainingWordsList.innerHTML = "";
if (count === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "empty-message";
    emptyMsg.textContent = "¡No quedan palabras posibles! Revisa los colores.";
    elements.remainingWordsList.appendChild(emptyMsg);
} else {
    const wordsToShow = gameState.remainingWords.slice(0, 100);

    wordsToShow.forEach((word) => {
    const wordElement = document.createElement("div");
    wordElement.className = "remaining-word";
    wordElement.textContent = word;
    elements.remainingWordsList.appendChild(wordElement);
    });

    if (count > 100) {
    const moreElement = document.createElement("div");
    moreElement.className = "remaining-word";
    moreElement.textContent = `+${count - 100}`;
    moreElement.style.opacity = "0.7";
    elements.remainingWordsList.appendChild(moreElement);
    }
}
}

function updateSuggestions() {
elements.suggestionsList.innerHTML = "";

if (gameState.attempts.length === 0) {
    // Mostrar mejores palabras iniciales
    const bestStarters = ["OREAS", "SALEN", "ACERO", "LASER", "PARTE"];

    bestStarters.forEach((word) => {
    const suggestionElement = document.createElement("div");
    suggestionElement.className = "suggestion-item";

    const wordSpan = document.createElement("span");
    wordSpan.className = "suggestion-word";
    wordSpan.textContent = word;

    const scoreSpan = document.createElement("span");
    scoreSpan.className = "suggestion-score";
    scoreSpan.textContent = "Inicial";

    suggestionElement.appendChild(wordSpan);
    suggestionElement.appendChild(scoreSpan);
    elements.suggestionsList.appendChild(suggestionElement);
    });
    return;
}

if (gameState.remainingWords.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "empty-message";
    emptyMsg.textContent = "¡No hay más palabras posibles!";
    elements.suggestionsList.appendChild(emptyMsg);
    return;
}

const suggestions = getBestSuggestions();

suggestions.slice(0, 5).forEach((suggestion) => {
    const suggestionElement = document.createElement("div");
    suggestionElement.className = "suggestion-item";

    const wordSpan = document.createElement("span");
    wordSpan.className = "suggestion-word";
    wordSpan.textContent = suggestion.word;

    const scoreSpan = document.createElement("span");
    scoreSpan.className = "suggestion-score";
    scoreSpan.textContent = Math.round(suggestion.score * 100) / 100;

    suggestionElement.appendChild(wordSpan);
    suggestionElement.appendChild(scoreSpan);
    elements.suggestionsList.appendChild(suggestionElement);
});
}

function getBestSuggestions() {
if (gameState.remainingWords.length <= 2) {
    return gameState.remainingWords.map((word) => ({ word, score: 1.0 }));
}

// Calcular frecuencia de letras
const letterFreq = {};
gameState.remainingWords.forEach((word) => {
    const uniqueLetters = new Set(word);
    uniqueLetters.forEach((letter) => {
    letterFreq[letter] = (letterFreq[letter] || 0) + 1;
    });
});

// Calcular puntuación para cada palabra
const suggestions = gameState.remainingWords.map((word) => {
    const uniqueLetters = new Set(word);
    const score =
    Array.from(uniqueLetters).reduce((sum, letter) => {
        return sum + (letterFreq[letter] || 0);
    }, 0) / uniqueLetters.size;

    return { word, score };
});

return suggestions.sort((a, b) => b.score - a.score);
}

function updateStats() {
elements.attemptCount.textContent = gameState.attempts.length;

const totalWords = gameState.diccionario.length;
const remaining = gameState.remainingWords.length;
const percentage = Math.round((remaining / totalWords) * 100);
elements.remainingPercent.textContent = `${percentage}%`;
}

function handleSuggestionClick(e) {
const suggestionItem = e.target.closest(".suggestion-item");
if (suggestionItem) {
    const wordSpan = suggestionItem.querySelector(".suggestion-word");
    if (wordSpan) {
    const word = wordSpan.textContent;
    inputWordToGrid(word);
    }
}
}

function handleWordClick(e) {
if (e.target.classList.contains("remaining-word")) {
    const word = e.target.textContent;
    if (word.length === 5 && !word.startsWith("+")) {
    inputWordToGrid(word);
    }
}
}

function inputWordToGrid(word) {
if (gameState.currentRow >= 6 || gameState.isColorControlsVisible) {
    return;
}

// Limpiar la fila actual
for (let i = 0; i < 5; i++) {
    gameState.grid[gameState.currentRow][i] = "";
}

// Insertar la palabra
for (let i = 0; i < word.length && i < 5; i++) {
    gameState.grid[gameState.currentRow][i] = word[i];
}

gameState.currentCol = 4; // Posicionar cursor al final
updateGridDisplay();

log(`Palabra "${word}" seleccionada automáticamente`, "info");

// Mostrar controles de color
setTimeout(() => {
    showColorControls();
}, 200);
}

function resetGame() {
if (gameState.attempts.length > 0) {
    if (!confirm("¿Estás seguro de que quieres reiniciar el juego?")) {
    return;
    }
}

log("🔄 Juego reiniciado completamente", "info");

// Reiniciar estado completo manteniendo diccionario personalizado
const currentDict = [...gameState.diccionario];
gameState = {
    currentRow: 0,
    currentCol: 0,
    grid: Array(6)
    .fill()
    .map(() => Array(5).fill("")),
    colors: Array(6)
    .fill()
    .map(() => Array(5).fill("gris")),
    diccionario: currentDict,
    remainingWords: [...currentDict],
    attempts: [],
    isColorControlsVisible: false,
    palabraActual: "",
};

// Ocultar controles de color
elements.colorControls.classList.add("hidden");

// Limpiar pasos del algoritmo
elements.algorithmSteps.innerHTML =
    '<p class="empty-message">Los pasos del algoritmo aparecerán aquí cuando apliques filtros</p>';

// Actualizar toda la UI
updateGridDisplay();
updateRemainingWords();
updateSuggestions();
updateStats();
}
