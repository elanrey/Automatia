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
        this.messages = [
            {
                id: 'initial',
                type: 'bot',
                content: '¡Hola! Soy el asistente de AutomatIA. ¿En qué puedo ayudarte hoy?',
                timestamp: new Date()
            }
        ];
        this.isTyping = false;

        // Crear elementos del chat
        this.createChatElement();

        // Configurar event listeners
        this.setupEventListeners();
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
                    <img src="img/logo.png" alt="AutomatIA Logo" class="chat-avatar">
                    <div>
                        <div class="chat-title">Automat<span class="text-primary font-orbitron">IA</span></div>
                        <div class="chat-subtitle">Soporte en línea</div>
                    </div>
                </div>
                <button class="chat-close-btn" aria-label="Cerrar chat">
                    <i class="fas fa-times"></i>
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
                        maxlength="500"
                        autocomplete="off"
                    >
                    <button id="chat-send-btn" class="chat-send-btn" disabled>
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
                <div class="chat-input-footer">
                    <span class="chat-char-count">0/500</span>
                </div>
            </div>
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

    sendMessage() {
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

        // Responder automáticamente después de un delay
        setTimeout(() => {
            this.hideTypingIndicator();
            this.generateBotResponse(message);
        }, 1500 + Math.random() * 2000); // Delay variable
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

        // Agregar sonido sutil (opcional)
        // this.playMessageSound();
    }

    generateBotResponse(userMessage) {
        const responses = {
            // Respuestas específicas
            'hola': '¡Hola! 👋 ¿Cómo puedo ayudarte con automatización e IA?',
            'precio': 'Ofrecemos precios flexibles según el tamaño de tu empresa. ¿Me puedes contar más sobre tu negocio?',
            'contacto': 'Puedes contactarnos a través del formulario en la página principal o por email. ¿Qué tipo de proyecto tienes en mente?',
            'demo': '¡Claro! Te puedo mostrar algunas funcionalidades básicas. ¿Qué área de tu negocio te gustaría automatizar?'
        };

        // Detectar keywords en el mensaje del usuario
        const lowerMessage = userMessage.toLowerCase();
        let response = null;

        for (const [keyword, reply] of Object.entries(responses)) {
            if (lowerMessage.includes(keyword)) {
                response = reply;
                break;
            }
        }

        // Respuesta por defecto si no hay match
        if (!response) {
            const defaultResponses = [
                'Entiendo. ¿Me puedes dar más detalles sobre tu proyecto?',
                '¡Interesante! Cuéntame más sobre cómo podemos ayudar a tu empresa.',
                'Gracias por tu mensaje. ¿En qué sector trabajas?',
                'Perfecto. ¿Qué procesos en tu empresa crees que se pueden automatizar?',
                '¡Excelente! ¿Has considerado antes implementar soluciones de IA?'
            ];
            response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        }

        this.addMessage({
            type: 'bot',
            content: response,
            timestamp: new Date()
        });

        // Mostrar nueva notificación si el chat está cerrado
        if (!this.isOpen) {
            this.showNotificationBadge();
        }
    }

    handleInput(e) {
        const value = e.target.value;
        this.updateCharCount();

        // Habilitar/deshabilitar botón de enviar
        this.sendButton.disabled = value.trim().length === 0;

        // Auto-resize del input (opcional)
        this.autoResizeInput();
    }

    updateCharCount() {
        const count = this.input.value.length;
        this.charCount.textContent = `${count}/500`;

        if (count > 450) {
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

    autoResizeInput() {
        // Implementar si se necesita
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
    background: white;
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

.chat-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: white;
    padding: 2px;
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
    border: none;
    color: white;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.chat-close-btn:hover {
    background: rgba(255, 255, 255, 0.1);
}

/* Mensajes */
.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px 20px;
    background: #f8fafc;
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
    background: var(--tw-primary);
    color: white;
    padding: 8px 12px;
    border-radius: 16px 16px 4px 16px;
    font-size: 0.875rem;
    line-height: 1.4;
    word-wrap: break-word;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.chat-message-user .chat-message-content {
    background: var(--tw-primary);
    border-radius: 16px 16px 16px 4px;
}

.chat-message-time {
    font-size: 0.625rem;
    color: #64748b;
    margin-top: 2px;
    padding: 0 4px;
}

/* Indicador de escritura */
.chat-typing-indicator {
    display: none;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    background: #f8fafc;
    font-size: 0.75rem;
    color: #64748b;
}

.typing-dots {
    display: flex;
    gap: 2px;
}

.typing-dots span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #64748b;
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
    background: white;
    padding: 16px 20px;
    border-top: 1px solid #e5e7eb;
    border-radius: 0 0 16px 16px;
}

.chat-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
}

#chat-input {
    flex: 1;
    border: 2px solid #e5e7eb;
    border-radius: 24px;
    padding: 8px 12px;
    font-size: 0.875rem;
    outline: none;
    background: transparent;
    max-height: 80px;
    resize: none;
    line-height: 1.4;
}

#chat-input:focus {
    border-color: var(--tw-primary);
}

.chat-send-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--tw-primary);
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
}

.chat-send-btn:hover:not(:disabled) {
    background: var(--tw-secondary);
}

.chat-send-btn:disabled {
    background: #9ca3af;
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
    color: #6b7280;
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
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        border-radius: 0;
    }

    .chat-header {
        border-radius: 0;
    }

    .chat-input-container {
        border-radius: 0;
    }

    .chat-floating-btn {
        bottom: 20px;
        right: 20px;
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
