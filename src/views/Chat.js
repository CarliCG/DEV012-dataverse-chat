export const ChatView = (name, imageUrl) => {
  const itemChat = document.createElement("section");
  itemChat.classList.add("chat-container");

  itemChat.innerHTML = `
    <div id="personajes">
      <h3>Chatea con ${name}</h3>
      <img src="${imageUrl}" alt="${name}" />
    </div>
     
    <div id="chatIn">
      <div id="chatIn-container">
        <div id="messages"></div>
          <form id="message-form">
            <textarea id="message-text" placeholder="..."></textarea>
          </form>
        <div id="pregunta-div">
          <input type="text" id="pregunta-input" placeholder="Pregunta aquí" />
            <button type="submit" class="button-send">
              <img src="../images/flecha.png" alt="enviar" />
            </button>
        </div>
      </div>
    </div>
  `;
  
  itemChat.setAttribute("id", "chat");

  return itemChat;
};