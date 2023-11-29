export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites GENERACION DINAMICA
  if (Array.isArray(data)) { // asegurarse de que data es un arreglo antes de continuar.
    const list = document.createElement("ul"); // Crea lista de elementos a partir de DAta
    data.forEach(element => { // forEach para iterar sobre cada elemento en el arreglo data.

      const itemList = document.createElement("li"); 
      //Para cada elemento en data, crea un elemento <li> llamado itemList que representa un elemento de la lista.
      const itemContainer = document.createElement("dl");
      //Dentro de cada <li>, crea un elemento <dl> llamado itemContainer. El elemento <dl> se utiliza para definir una lista de términos y sus descripciones en HTML.
      itemContainer.classList.add("card");
      //Agrega una clase "card" al itemContainer para aplicar estilos adicionales a los elementos de la película.

      //Dentro del itemContainer, utiliza el atributo innerHTML para definir el contenido HTML de cada elemento. 
      itemContainer.innerHTML = ` 
        <img src=${element.imageUrl} alt=${element.name} />
        <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
        <dt>Categoría:</dt><dd itemprop="type">${element.type}</dd>
        <dt>Descripción:</dt><dd itemprop="description">${element.shortDescription}</dd>
        <dt>Fecha de Estreno:</dt><dd itemprop="releaseDate">${element.facts.releaseDate}</dd>
        <dt>Actores Principales:</dt><dd itemprop="mainActors">${element.facts.mainActors.join(", ")}</dd>
        <dt>Premios:</dt><dd itemprop="awards">${element.facts.awards.join(", ")}</dd>
        <dt>Presupuesto:</dt><dd itemprop="budget">${element.facts.budget}</dd>
        <dt>Calificación de la Crítica:</dt><dd itemprop="criticRating">${element.facts.criticRating}</dd>
        <dt>Calificación de la Audiencia:</dt><dd itemprop="audienceRating">${element.facts.audienceRating}</dd>
      `
      //Los datos se toman de las propiedades del objeto element.

      itemContainer.setAttribute("itemscope", "");
      itemContainer.setAttribute("itemtype", "películas");
      //"itemContainer" se utiliza para almacenar una referencia a este elemento y manipularlo posteriormente en el código
      itemList.appendChild(itemContainer);
      list.appendChild(itemList)
    });

    return list;

  }
};