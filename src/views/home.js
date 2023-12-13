import { createHeader } from "../components/header.js";
import { createBar } from "../components/bar.js";
import { renderItems } from "../lib/view.js";
import { filterData, sortData } from "../lib/dataFunctions.js";
import dataset from "../data/dataset.js";

export const home = () => {
  // Crear el contenedor principal
  const homeView = document.createElement("section");

  const resultadosWrapper = document.createElement("div");

  const updateResults = (tipo, filtroTemporality, sortOrder) => {
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

  const header = createHeader(updateResults);

  homeView.appendChild(header);
  homeView.appendChild(createBar(updateResults));
  homeView.appendChild(resultadosWrapper);

  updateResults("", "", "none"); // Renderizar todos los items al cargar la página

  return homeView;
};