import { createHeader } from "../components/header.js";
import { renderItems } from "../lib/view.js";
import { createFooter } from "../components/footer.js";
import dataset from "../data/dataset.js";

export const home = () => {
  // Crear el contenedor principal
  const homeView = document.createElement("section");

  
  const resultadosWrapper = document.createElement("div");

  const renderizar = (tipo) => {
    const filteredData = dataset.filter(
      (item) => tipo === "" || item.type === tipo
    );
    resultadosWrapper.innerHTML = ""; // Limpiar los resultados anteriores
    resultadosWrapper.appendChild(renderItems(filteredData)); // Mostrar los resultados filtrados
  };

  const header = createHeader(renderizar);

  homeView.appendChild(header);
  homeView.appendChild(resultadosWrapper);

  // Agregar el pie de página al contenedor
  homeView.appendChild(createFooter());

  renderizar(""); // Renderizar todos los items al cargar la página

  return homeView;
};