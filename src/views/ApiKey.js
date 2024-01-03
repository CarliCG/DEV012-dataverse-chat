export const Api = () => {
  const itemApi = document.createElement("section");
  itemApi.classList.add("api-container");

  itemApi.innerHTML = `
  <div>
    <h3>Ingresa tu Clave</h3>
    <input id="password-text" placeholder="..."></input>
    <button id="ingresar-button">Ingresar</button>
  </div>
  <div class="img-container">
    <img src="../images/clave.jpeg" alt="claveApi" />
  </div>
`;

  itemApi.setAttribute("id", "api");

  const guardarClave = () => {
    const passwordInput = document.getElementById("password-text");
    const clave = passwordInput.value;

    // Guardar clave en localStorage
    localStorage.setItem("clave", clave);

    //console.log("Clave guardada en localStorage:", localStorage.getItem("clave"));
  };

  const ingresarButton = itemApi.querySelector("#ingresar-button");

  if (ingresarButton) {
    ingresarButton.addEventListener("click", guardarClave);
  }

  return itemApi;
};

