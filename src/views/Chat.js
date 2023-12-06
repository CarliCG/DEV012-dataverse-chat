export const ChatView = () => {
    const itemChat = document.createElement("section")
    itemChat.innerHTML = `
    
    <div id="personajes">
    <h3>Pelicula</h3>
    </div>

  <div id="chatIn">
    <div id="chatIn-container">
      <div id="messages">
      </div>
        <form id="message-form">
          <input type="text" id="message-input" placeholder="Escribe tu pregunta aqui..."/>
          <button type="submit" class="button-send"><img src="../images/flecha.png" alt="enviar"/></button>
        </form>
    </div>
  </div>
 `
    itemChat.setAttribute("id", "chat");

    return itemChat;

};
