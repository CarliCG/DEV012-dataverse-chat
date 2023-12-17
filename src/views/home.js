import { createHeader } from "../components/header.js";
import { createBar } from "../components/bar.js";
import { createFooter } from "../components/footer.js";
import { renderItems, calculateAverageBudget } from "../lib/view.js";
import { filterData, sortData } from "../lib/dataFunctions.js";
import dataset from "../data/dataset.js";

export const home = () => {
  const homeView = document.createElement("section");
  const resultadosWrapper = document.createElement("div");
  const dataNum = document.createElement("p");
  dataNum.classList.add("average-budget"); 

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

    resultadosWrapper.innerHTML = "";
    resultadosWrapper.appendChild(renderItems(filtradoData));

    const averageBudget = calculateAverageBudget(filtradoData);
    dataNum.innerHTML = "Promedio de presupuesto: " + averageBudget.toLocaleString() + "$";
  };

  const header = createHeader(updateResults);

  homeView.appendChild(header);
  homeView.appendChild(createBar(updateResults));
  homeView.appendChild(dataNum);
  homeView.appendChild(resultadosWrapper);
  homeView.appendChild(createFooter());
  updateResults("", "", "none");

  document.body.appendChild(homeView);

  return homeView;
};