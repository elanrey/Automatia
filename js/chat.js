/**
 * Chat Flotante - Componente reutilizable
 * Gestiona un chat flotante con funcionalidad completa
 *
 * Uso básico:
 * import { initializeChat } from './js/chat.js';
 * initializeChat();
 */

class ChatWidget {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.isTyping = false;
        this.sessionId = this.generateSessionId();
        this.apiUrl = 'https://www.automatia.cc/api/v1/chat';

        // Crear elementos del chat
        this.createChatElement();

        // Configurar event listeners
        this.setupEventListeners();

        // Mostrar mensaje de bienvenida después de inicializar
        this.showWelcomeMessage();
    }

    createChatElement() {
        // Botón flotante principal
        this.floatingButton = document.createElement('button');
        this.floatingButton.id = 'chat-floating-btn';
        this.floatingButton.className = 'chat-floating-btn';
        this.floatingButton.innerHTML = `
            <i class="fas fa-comment-dots"></i>
            <span class="chat-badge">1</span>
        `;
        this.floatingButton.setAttribute('aria-label', 'Abrir chat de soporte');

        // Panel del chat
        this.chatPanel = document.createElement('div');
        this.chatPanel.id = 'chat-panel';
        this.chatPanel.className = 'chat-panel';
        this.chatPanel.innerHTML = `
            <div class="chat-header">
                <div class="chat-header-info">
                    <div class="chat-avatar-container">
                        <img src="img/logo-small.png" alt="AutomatIA Logo" class="chat-avatar">
                    </div>
                    <div>
                        <a href="index.html" class="text-lg font-bold text-white no-underline group"><span class="font-orbitron">Automat</span><em class="font-orbitron not-italic text-primary ml-0.5 group-hover:text-secondary transition-colors duration-1500" style="text-shadow: -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #fff;">IA</em></a>
                    </div>
                </div>
                <button class="chat-close-btn" aria-label="Cerrar chat">
                </button>
            </div>

            <div class="chat-messages">
                <div id="chat-messages-container"></div>
            </div>

            <div class="chat-typing-indicator">
                <div class="typing-dots">
                    <span></span><span></span><span></span>
                </div>
                <span>AutomatIA está escribiendo...</span>
            </div>

            <div class="chat-input-container">
                <div class="chat-input-wrapper">
                                            <input
                                                type="text"
                                                id="chat-input"
                                                placeholder="Escribe tu mensaje..."
                                                maxlength="200"
                                                autocomplete="off"
                                            >
                                            <button id="chat-send-btn" class="chat-send-btn" disabled>
                                                <i class="fas fa-paper-plane"></i>
                                            </button>
                                        </div>
                                        <div class="chat-input-footer">
                                            <span class="chat-char-count">0/200</span>
                                        </div>            </div>
        `;

        // Agregar elementos al DOM
        document.body.appendChild(this.floatingButton);
        document.body.appendChild(this.chatPanel);

        // Referencias a elementos
        this.messagesContainer = this.chatPanel.querySelector('#chat-messages-container');
        this.input = this.chatPanel.querySelector('#chat-input');
        this.sendButton = this.chatPanel.querySelector('#chat-send-btn');
        this.closeButton = this.chatPanel.querySelector('.chat-close-btn');
        this.charCount = this.chatPanel.querySelector('.chat-char-count');
        this.typingIndicator = this.chatPanel.querySelector('.chat-typing-indicator');
    }

    setupEventListeners() {
        // Event listeners para el botón flotante
        this.floatingButton.addEventListener('click', () => this.toggleChat());

        // Event listeners para el panel del chat
        this.closeButton.addEventListener('click', () => this.closeChat());
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('input', (e) => this.handleInput(e));
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Cerrar chat al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!this.chatPanel.contains(e.target) && !this.floatingButton.contains(e.target) && this.isOpen) {
                this.closeChat();
            }
        });

        // Escuchar resize para responsive
        window.addEventListener('resize', () => this.handleResize());
    }

    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.isOpen = true;
        this.chatPanel.classList.add('open');
        this.floatingButton.classList.add('active');
        this.input.focus();

        // Marcar mensajes como leídos (ocultar badge)
        this.clearNotificationBadge();

        // Scroll automático al final
        setTimeout(() => this.scrollToBottom(), 100);
    }

    closeChat() {
        this.isOpen = false;
        this.chatPanel.classList.remove('open');
        this.floatingButton.classList.remove('active');
        this.input.blur();
    }

    async sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;

        // Agregar mensaje del usuario
        this.addMessage({
            type: 'user',
            content: message,
            timestamp: new Date()
        });

        // Limpiar input
        this.input.value = '';
        this.updateCharCount();
        this.sendButton.disabled = true;

        // Mostrar indicador de escritura
        this.showTypingIndicator();

        try {
            // Hacer petición a la API
            const response = await this.sendApiMessage(message);

            // Ocultar indicador de escritura
            this.hideTypingIndicator();

            // Agregar respuesta del bot
            this.addMessage({
                type: 'bot',
                content: response.output,
                timestamp: new Date()
            });

        } catch (error) {
            this.hideTypingIndicator();

            // Mensaje de error si falla la API
            this.addMessage({
                type: 'bot',
                content: 'Lo siento, tuve un problema al procesar tu mensaje. Por favor intenta de nuevo.',
                timestamp: new Date()
            });
        }
    }

    addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message chat-message-${message.type}`;
        messageElement.innerHTML = `
            <div class="chat-message-content">
                ${this.escapeHtml(message.content)}
            </div>
            <div class="chat-message-time">
                ${this.formatTime(message.timestamp)}
            </div>
        `;

        this.messagesContainer.appendChild(messageElement);
        this.scrollToBottom();
    }

    handleInput(e) {
        const value = e.target.value;
        this.updateCharCount();

        // Habilitar/deshabilitar botón de enviar
        this.sendButton.disabled = value.trim().length === 0;
    }

    updateCharCount() {
        const count = this.input.value.length;
        this.charCount.textContent = `${count}/200`;

        if (count > 180) { // 90% of 200
            this.charCount.classList.add('warning');
        } else {
            this.charCount.classList.remove('warning');
        }
    }

    showTypingIndicator() {
        this.isTyping = true;
        this.typingIndicator.style.display = 'flex';
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.isTyping = false;
        this.typingIndicator.style.display = 'none';
    }

    showNotificationBadge() {
        const badge = this.floatingButton.querySelector('.chat-badge');
        badge.style.display = 'block';
        badge.textContent = '1';
    }

    clearNotificationBadge() {
        const badge = this.floatingButton.querySelector('.chat-badge');
        badge.style.display = 'none';
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    handleResize() {
        // Ajustar posición en móviles
        if (window.innerWidth < 768) {
            this.chatPanel.style.maxHeight = `${window.innerHeight * 0.8}px`;
        } else {
            this.chatPanel.style.maxHeight = '600px';
        }
    }

    // Generar un ID único para la sesión usando crypto si está disponible
    generateSessionId() {
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
            return crypto.randomUUID();
        } else {
            // Fallback para navegadores sin crypto.randomUUID
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0;
                const v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }

    // Enviar mensaje a la API
    async sendApiMessage(message) {
        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                session_id: this.sessionId,
                message: message
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    // Mostrar mensaje de bienvenida inicial
    async showWelcomeMessage() {    
        this.addMessage({
            type: 'bot',
            content: '¡Hola! Soy el asistente de AutomatIA. ¿En qué puedo ayudarte hoy?',
            timestamp: new Date()
        });
    }

    escapeHtml(text) {
        const map = {
            '&': '&',
            '<': '<',
            '>': '>',
            '"': '"',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    formatTime(timestamp) {
        return timestamp.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// Estilos del chat (se agregarán al CSS principal)
const chatStyles = `
/* Botón flotante del chat */
.chat-floating-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1d45fa, #dc41f1);
    border: none;
    color: white;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(29, 69, 250, 0.3);
    z-index: 9999;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
}

.chat-floating-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(29, 69, 250, 0.4);
}

.chat-floating-btn.active {
    background: linear-gradient(135deg, #0f1729, #1d45fa);
}

.chat-floating-btn i {
    font-size: 1.5rem;
}

.chat-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #dc2626;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 0.75rem;
    font-weight: bold;
    display: none;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
}

/* Panel del chat */
.chat-panel {
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 350px;
    height: 500px;
    max-height: 70vh;
    background: #0f1729; /* bg-dark */
    border-radius: 16px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    z-index: 9998;
    display: none;
    flex-direction: column;
    overflow: hidden;
    transform: translateY(20px) scale(0.95);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.chat-panel.open {
    display: flex;
    transform: translateY(0) scale(1);
    opacity: 1;
}

/* Header del chat */
.chat-header {
    background: linear-gradient(135deg, #0f1729, #1d45fa);
    color: white;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px 16px 0 0;
}

.chat-header-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.chat-avatar-container {
    display: flex;
    height: 2.5rem;
    width: 2.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    background: #1d45fa;
    border: 1px solid white;
}

.chat-avatar {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
}

.chat-title {
    font-weight: bold;
    font-size: 0.9rem;
    line-height: 1.2;
    font-family: var(--font-orbitron, 'Orbitron', sans-serif);
}

.chat-subtitle {
    font-size: 0.75rem;
    opacity: 0.8;
}

.chat-close-btn {
    background: none;
    background-image: url('../img/close.png');
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 50%;
    transition: background-color 0.2s;
}

 chat-close-btn:hover {
    /* No hover effect */
}

/* Mensajes */
.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px 20px;
    background: #1e293b; /* slate-800 */
    display: flex;
    flex-direction: column;
    gap: 12px;
}

#chat-messages-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 100%;
}

.chat-message {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    animation: slideIn 0.3s ease-out;
}

.chat-message-user {
    align-self: flex-end;
    align-items: flex-end;
}

.chat-message-bot {
    align-self: flex-start;
    align-items: flex-start;
}

.chat-message-content {
    background: linear-gradient(135deg, #1d45fa, #dc41f1);
    color: white;
    padding: 8px 12px;
    border-radius: 16px 16px 4px 16px;
    font-size: 0.875rem;
    line-height: 1.4;
    word-wrap: break-word;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.chat-message-user .chat-message-content {
    background: linear-gradient(135deg, #2d3a4b, #3a475a); /* Un gris más oscuro para el usuario */
    color: white;
    border-radius: 16px 16px 16px 4px;
}

.chat-message-time {
    font-size: 0.625rem;
    color: #94a3b8; /* slate-400 */
    margin-top: 2px;
    padding: 0 4px;
}

/* Indicador de escritura */
.chat-typing-indicator {
    display: none;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    background: #0f1729; /* bg-dark */
    font-size: 0.75rem;
    color: #94a3b8; /* slate-400 */
}

.typing-dots span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #94a3b8; /* slate-400 */
    animation: typing 1.4s infinite;
}

.typing-dots span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-dots span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typing {
    0%, 60%, 100% {
        transform: translateY(0);
        opacity: 1;
    }
    30% {
        transform: translateY(-4px);
        opacity: 0.5;
    }
}

/* Input del chat */
.chat-input-container {
    background: #0f1729; /* bg-dark */
    padding: 10px 10px;
    border-top: 1px solid #475569; /* slate-700 */
    border-radius: 0 0 16px 16px;
}

.chat-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px; /* Aumentar el espacio */
}

#chat-input {
    flex: 1;
    border: 2px solid transparent;
    border-radius: 8px; /* rounded-lg */
    padding: 12px; /* p-3 */
    font-size: 0.875rem;
    outline: none;
    background: rgba(255, 255, 255, 0.9); /* bg-white/90 */
    max-height: 80px;
    resize: none;
    line-height: 1.4;
    color: #0f1729; /* text-dark */
    /* Placeholder color */
    &::placeholder {
        color: #64748b; /* placeholder-slate-500 */
    }
}

#chat-input:focus {
    border-color: #dc41f1; /* focus:border-secondary */
}

.chat-send-btn {
    width: 32px; /* Más pequeño */
    height: 32px; /* Más pequeño */
    border-radius: 50%;
    background: #1d45fa;
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
}

.chat-send-btn:hover:not(:disabled) {
    background: #dc41f1;
}

.chat-send-btn:disabled {
    background: #64748b; /* slate-500 */
    cursor: not-allowed;
}

.chat-input-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
}

.chat-char-count {
    font-size: 0.625rem;
    color: #94a3b8; /* slate-400 */
    transition: color 0.2s;
}

.chat-char-count.warning {
    color: #dc2626;
}

/* Animaciones */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .chat-panel {
        position: fixed;
        top: 10%;
        left: 5%;
        right: 5%;
        bottom: 10%;
        width: 90%;
        height: 80%;
        max-height: 80vh;
        border-radius: 16px;
    }

    .chat-header {
        border-radius: 16px 16px 0 0;
    }

    .chat-input-container {
        border-radius: 0 0 16px 16px;
    }

    .chat-floating-btn {
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
    }

    .chat-floating-btn i {
        font-size: 1.25rem;
    }

    .chat-messages {
        padding: 12px 16px;
    }

    #chat-input {
        padding: 10px 12px;
        font-size: 0.875rem;
    }

    .chat-send-btn {
        width: 30px;
        height: 30px;
    }

    .chat-send-btn i {
        font-size: 0.875rem;
    }

    .chat-char-count {
        font-size: 0.75rem;
    }
}

@media (max-width: 480px) {
    .chat-messages {
        padding: 12px 16px;
    }

    .chat-input-container {
        padding: 12px 16px;
    }
}
`;

// Función principal de inicialización
function initializeChat() {
    // Agregar estilos al documento
    const style = document.createElement('style');
    style.textContent = chatStyles;
    document.head.appendChild(style);

    // Crear instancia del chat
    const chat = new ChatWidget();

    // Retornar instancia para uso externo (opcional)
    return chat;
}

// Exportar para uso modular
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeChat };
} else {
    window.initializeChat = initializeChat;
}
