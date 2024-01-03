import { navigateTo } from "../router.js";

export const renderItems = (data) => {
  if (Array.isArray(data)) {
    const list = document.createElement("ul");

    data.forEach(element => {
      const itemList = document.createElement("li");
      itemList.classList.add("card");
      itemList.setAttribute("id", element.id);

      const itemContainer = document.createElement("dl");

      itemContainer.innerHTML = `
        <img src="${element.imageUrl}" alt="${element.name}" />
        <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
        <dt>Categoría:</dt><dd itemprop="type">${element.type}</dd>
        <dt>Descripción:</dt><dd itemprop="description">${element.shortDescription}</dd>
        <dt>Fecha de Estreno:</dt><dd itemprop="releaseDate">${element.facts.releaseDate}</dd>
        <dt>Presupuesto:</dt><dd itemprop="budget">${element.facts.budget}</dd>
        `;

      itemContainer.setAttribute("itemscope", "");
      itemContainer.setAttribute("itemtype", "películas");

      itemList.appendChild(itemContainer);

      // Agregar evento de clic a itemList
      itemList.addEventListener("click", () => {
        navigateTo("/chat", element);
      });

      list.appendChild(itemList);
    });

    return list;
  }
};

export const calculateAverageBudget = (data) => {
  if (Array.isArray(data) && data.length > 0) {
    const totalBudget = data.reduce((sum, movie) => {
      const budget = parseFloat(movie.facts.budget.replace(/[^0-9.-]+/g,"")); // Convertir la cadena a número
      return sum + budget;
    }, 0);
    const averageBudget = totalBudget / data.length;
    return averageBudget.toFixed(2);
  }
  return 0;
};