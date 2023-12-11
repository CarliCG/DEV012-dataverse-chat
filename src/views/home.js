import { createHeader } from "../components/header.js";
import { renderItems } from "../lib/view.js";
import { createFooter } from "../components/footer.js";
import { filterData, sortData, budgetStatics } from "../lib/dataFunctions.js";
import dataset from "../data/dataset.js";

export const home = () => {
  // Crear el contenedor principal
  const homeView = document.createElement("section");

  const resultadosWrapper = document.createElement("div");

  const renderizar = (tipo, filtroTemporality, sortOrder) => {
    let filtradoData = dataset;

    if (tipo !== "") {
      filtradoData = filterData(filtradoData, "type", tipo);
    }

    if (filtroTemporality !== "") {
      filtradoData = filterData(filtradoData, "temporality", filtroTemporality);
    }

    if (sortOrder !== "none") {
      filtradoData = sortData(filtradoData, "name", sortOrder);
    }

    resultadosWrapper.innerHTML = ""; // Limpiar los resultados anteriores
    resultadosWrapper.appendChild(renderItems(filtradoData)); // Mostrar los resultados filtrados
  };

  const header = createHeader(renderizar);

  homeView.appendChild(header);
  homeView.appendChild(resultadosWrapper);
  homeView.appendChild(createFooter());

  renderizar("", "", "none"); // Renderizar todos los items al cargar la página

  return homeView;
};