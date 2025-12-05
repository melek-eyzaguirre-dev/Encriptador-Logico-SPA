// Encriptador de Texto - Lógica de la aplicación
// Reglas de encriptación:
// e -> enter
// i -> imes
// a -> ai
// o -> ober
// u -> ufat

// Elementos del DOM
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const emptyState = document.getElementById('emptyState');
const resultState = document.getElementById('resultState');
const copyMessage = document.getElementById('copyMessage');

// Reglas de encriptación
const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Reglas de desencriptación (invertidas)
const decryptionRules = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

/**
 * Valida que el texto solo contenga letras minúsculas y espacios
 * @param {string} text - Texto a validar
 * @returns {boolean} - True si es válido, false en caso contrario
 */
function validateText(text) {
    // Expresión regular: solo letras minúsculas, espacios y sin acentos
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

/**
 * Encripta el texto usando las reglas definidas
 * @param {string} text - Texto a encriptar
 * @returns {string} - Texto encriptado
 */
function encryptText(text) {
    let encrypted = text;
    
    // Reemplaza cada vocal por su equivalente encriptado
    for (const [key, value] of Object.entries(encryptionRules)) {
        encrypted = encrypted.replaceAll(key, value);
    }
    
    return encrypted;
}

/**
 * Desencripta el texto usando las reglas inversas
 * @param {string} text - Texto a desencriptar
 * @returns {string} - Texto desencriptado
 */
function decryptText(text) {
    let decrypted = text;
    
    // Reemplaza cada secuencia encriptada por su vocal original
    // Es importante hacerlo en orden de mayor a menor longitud para evitar conflictos
    for (const [key, value] of Object.entries(decryptionRules)) {
        decrypted = decrypted.replaceAll(key, value);
    }
    
    return decrypted;
}

/**
 * Muestra el resultado en la interfaz
 * @param {string} text - Texto a mostrar
 */
function showResult(text) {
    outputText.value = text;
    emptyState.classList.add('hidden');
    resultState.classList.remove('hidden');
}

/**
 * Muestra el estado vacío en la interfaz
 */
function showEmptyState() {
    emptyState.classList.remove('hidden');
    resultState.classList.add('hidden');
}

/**
 * Muestra un mensaje de alerta
 * @param {string} message - Mensaje a mostrar
 */
function showAlert(message) {
    alert(message);
}

/**
 * Maneja el evento de encriptación
 */
function handleEncrypt() {
    const text = inputText.value.trim();
    
    // Validar que hay texto
    if (!text) {
        showAlert('⚠️ Por favor, ingresa un texto para encriptar.');
        return;
    }
    
    // Validar formato del texto
    if (!validateText(text)) {
        showAlert('⚠️ El texto debe contener solo letras minúsculas y sin acentos.');
        return;
    }
    
    // Encriptar y mostrar resultado
    const encrypted = encryptText(text);
    showResult(encrypted);
}

/**
 * Maneja el evento de desencriptación
 */
function handleDecrypt() {
    const text = inputText.value.trim();
    
    // Validar que hay texto
    if (!text) {
        showAlert('⚠️ Por favor, ingresa un texto para desencriptar.');
        return;
    }
    
    // Validar formato del texto
    if (!validateText(text)) {
        showAlert('⚠️ El texto debe contener solo letras minúsculas y sin acentos.');
        return;
    }
    
    // Desencriptar y mostrar resultado
    const decrypted = decryptText(text);
    showResult(decrypted);
}

/**
 * Maneja el evento de copiar al portapapeles
 */
async function handleCopy() {
    const text = outputText.value;
    
    try {
        // Intentar usar la API moderna del portapapeles
        await navigator.clipboard.writeText(text);
        showCopyMessage();
    } catch (err) {
        // Fallback para navegadores que no soportan la API moderna
        outputText.select();
        document.execCommand('copy');
        showCopyMessage();
    }
}

/**
 * Muestra el mensaje de copiado exitoso
 */
function showCopyMessage() {
    copyMessage.classList.remove('hidden');
    
    // Ocultar el mensaje después de 2 segundos
    setTimeout(() => {
        copyMessage.classList.add('hidden');
    }, 2000);
}

/**
 * Limpia el texto de entrada cuando se borra el contenido
 */
function handleInputChange() {
    const text = inputText.value.trim();
    
    if (!text) {
        showEmptyState();
    }
}

// Event Listeners
encryptBtn.addEventListener('click', handleEncrypt);
decryptBtn.addEventListener('click', handleDecrypt);
copyBtn.addEventListener('click', handleCopy);
inputText.addEventListener('input', handleInputChange);

// Permitir encriptar con Enter (Ctrl+Enter para nueva línea)
inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault();
        handleEncrypt();
    }
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Establecer estado inicial
    showEmptyState();
    inputText.focus();
});
