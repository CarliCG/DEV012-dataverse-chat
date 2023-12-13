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
      `;

      itemContainer.setAttribute("itemscope", "");
      itemContainer.setAttribute("itemtype", "películas");

      list.appendChild(itemList);
      itemList.appendChild(itemContainer);

      // Agregar evento de clic a itemList
      itemList.addEventListener("click", () => {
        navigateTo("/chat", element.name, element.imageUrl);
      });
    });

    return list;
  }
};