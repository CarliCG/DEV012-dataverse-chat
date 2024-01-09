import { chatCompletions } from "../lib/API.js";

export const ChatView = ({ name, imageUrl }) => {
  const itemChat = document.createElement("section");
  itemChat.classList.add("chat-container");

  itemChat.innerHTML = `
    <div id="personajes">
      <h3>Chatea con </h3>
      <h3>${name}</h3>
      <img id="personaje-image" src="${imageUrl}" alt="${name}" />
    </div>

    <div id="chatIn">
      <div id="chatIn-container">
        <div id="messages"></div>
        <form id="message-form">
          <div class="textarea-container">
            <textarea id="message-text" placeholder="..."></textarea>
          </div>
          <div class="input-container">
            <input type="text" id="pregunta-input" placeholder="Pregunta aquí" />
            <button type="submit" class="button-send" id="send-button">
              <img src="../images/flecha.png" alt="enviar" />
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  itemChat.setAttribute("id", "chat");

  const sendButton = itemChat.querySelector("#send-button");
  const preguntaInput = itemChat.querySelector("#pregunta-input");
  const messageText = itemChat.querySelector("#message-text");

  const messageForm = itemChat.querySelector("#message-form");
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = preguntaInput.value;
    if (inputValue.trim() !== "") {
      messageText.value += inputValue + "\n";
      preguntaInput.value = "";
      chatCompletions(localStorage.getItem("clave"), inputValue, name)
        .then((response) => {
          if (!response.choices) {
            alert("error");
            return;
          }
          const respuesta = response.choices[0].message.content;
          messageText.value += respuesta + "\n";
        })
        .catch(() => {
          alert("Error Parseo ");
        });
    }
  });

  return itemChat;
};