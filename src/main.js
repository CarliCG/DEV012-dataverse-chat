import { filterData, sortData, budgetStatics } from './lib/dataFunctions.js';
import { renderItems } from './lib/view.js';
//import { data } from './data/dataset.js';

export const main = () => {
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

const filterState = {
  filterByType: "",
  filterByDate: "",
  sortOrder: "none",
};

const applyFilters = () => {
  const filterByType = filterType.value;
  const filterByDate = filterDate.value;
  const sortOrder = sortName.value;

  let filteredData = [...original];

  if (filterByType) {
    filteredData = filterData(filteredData, "type", filterByType);
  }

  if (filterByDate) {
    filteredData = filterData(filteredData, "temporality", filterByDate);
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
sortName.addEventListener("change", (event) => {
  applyFilters(original, event.target.value);
});

btnClear.addEventListener("click", function () {
  resetFilters();
  filterType.value = "";
  filterDate.value = "";
  sortName.value = "none";
  applyFilters();
});

const resetFilters = () => {
  filterState.filterByType = "";
  filterState.filterByDate = "";
  filterState.sortOrder = "none";
};

}