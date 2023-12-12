export const Api = () => {
    const itemApi = document.createElement("section");
    itemApi.classList.add("api-container");
  
    itemApi.innerHTML = `
      <div id="Container-Password">
        <h3 id="password">Ingreso de Contraseña</h3>
        <input id="password-text" placeholder="..."></input>
        <button id="ingresar">Ingresar</button>
      </div>
    `;
  
    itemApi.setAttribute("id", "api");
  
    return itemApi;
  };