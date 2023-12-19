export const ChatView = (name, imageUrl) => {
  const itemChat = document.createElement("section");
  itemChat.classList.add("chat-container");

  itemChat.innerHTML = `
    <div id="personajes">
      <h3>Chatea con ${name}</h3>
      <img id="personaje-image" src="${imageUrl}" alt="${name}" />
    </div>

    <div id="chatIn">
      <div id="chatIn-container">
        <div id="messages"></div>
        <form id="message-form">
          <textarea id="message-text" placeholder="..."></textarea>
        </form>
        <div id="pregunta-div">
          <input type="text" id="pregunta-input" placeholder="Pregunta aquí" />
          <button type="submit" class="button-send" id="send-button">
            <img src="../images/flecha.png" alt="enviar" />
          </button>
        </div>
      </div>
    </div>
  `;

  itemChat.setAttribute("id", "chat");

  const sendButton = itemChat.querySelector("#send-button");
  const preguntaInput = itemChat.querySelector("#pregunta-input");
  const messageText = itemChat.querySelector("#message-text");

  // Agregar evento de submit al formulario
  const messageForm = itemChat.querySelector("#message-form");
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar recarga de página

    const inputValue = preguntaInput.value;
    if (inputValue.trim() !== "") { // Verificar que el contenido no sea vacío
      messageText.value += inputValue + '\n'; // Agregar el nuevo mensaje al text area
      preguntaInput.value = ""; // Limpiar input
    }
  });

  // Enviar la pregunta de input al text area al presionar la tecla enter
  preguntaInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const inputValue = preguntaInput.value;
      if (inputValue.trim() !== "") { // Verificar que el contenido no sea vacío
        messageText.value += inputValue + '\n'; // Agregar el nuevo mensaje al text area
        preguntaInput.value = ""; // Limpiar input
      }
    }
  });

  return itemChat;
};