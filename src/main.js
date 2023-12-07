import { filterData, sortData, budgetStatics } from './lib/dataFunctions.js';
import { renderItems } from './lib/view.js';

export const main = () => {
  const data = []; // Agrega aquí tu arreglo de datos

  const dataList = document.querySelector("#root");
  dataList.appendChild(renderItems(data));

  const dataNum = document.querySelector("p");

  const budgetAverage = (data) => {
    dataNum.innerHTML = "Promedio de presupuesto: " + budgetStatics(data).budgetMovies + "$";
  };

  budgetAverage(data);

  const original = [...data]; //se utiliza para crear una copia superficial del array data

  const filterType = document.querySelector("#type-select");
  const filterDate = document.querySelector("#temporality-select");
  const sortName = document.querySelector("#sort-select");
  const btnClear = document.querySelector("[data-testid='button-clear']");

  const applyFilters = () => {
    const tipo = filterType.value;
    const filtroTemporality = filterDate.value;
    const sortOrder = sortName.value;

    let filteredData = [...original];

    if (tipo) {
      filteredData = filterData(filteredData, "type", tipo);
    }

    if (filtroTemporality) {
      filteredData = filterData(filteredData, "temporality", filtroTemporality);
    }

    if (sortOrder !== "none") {
      filteredData = sortData(filteredData, "name", sortOrder);
    }

    dataList.innerHTML = "";
    dataList.appendChild(renderItems(filteredData));
    budgetAverage(filteredData);
  };

  filterType.addEventListener("change", applyFilters);
  filterDate.addEventListener("change", applyFilters);
  sortName.addEventListener("change", applyFilters);

  btnClear.addEventListener("click", function () {
    resetFilters();
    filterType.value = "";
    filterDate.value = "";
    sortName.value = "none";
    applyFilters();
  });

  const resetFilters = () => {
    filterType.value = "";
    filterDate.value = "";
    sortName.value = "none";
    applyFilters();
  };
};