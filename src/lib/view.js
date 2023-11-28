export const renderItems = (data) => {
      const list = document.createElement("ul"); // Crea lista de elementos a partir de Data
      data.forEach(element => { // forEach para iterar sobre cada elemento en el arreglo data.
  
        const itemList = document.createElement("li"); 
        //Para cada elemento en data, crea un elemento <li> llamado itemList que representa un elemento de la lista.
        
        itemList.classList.add("card");
        //Agrega una clase "card" al itemContainer para aplicar estilos adicionales a los elementos de la película.
        itemList.setAttribute("id", element.id);
        //Establece el atributo "id" del elemento de lista según el ID del elemento de datos. 
        
        const itemContainer = document.createElement("dl"); 
        //Crea un elemento de lista de definición (dl) para contener información relacionada con la película.

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
        //<dt> representa una etiqueta de término en HTML. En este contexto, se está creando un término para describir un dato específico.
        //${element.name} para insertar dinámicamente el valor de la propiedad name del objeto element.
        //<dd> representa una etiqueta de descripción en HTML. Se utiliza para proporcionar la descripción o valor asociado al término definido en la etiqueta <dt>.
        //el atributo itemprop para asociar la descripción en <dd> con una propiedad específica en un vocabulario semántico. En este caso, la propiedad es "name".

        //Los datos se toman de las propiedades del objeto element.
        const itemContainerChat = document.createElement("dl");
       
        itemContainerChat.innerHTML = `
        <img src=${element.imageUrl} alt=${element.name} />
        <dt>Has una pregunta a:</dt><dd itemprop="name">${element.name}</dd>
    `
    itemList.setAttribute("itemscope", "");
    itemList.setAttribute("itemtype", "tarjeta-películas");
    itemContainer.setAttribute("itemscope", "");
    itemContainer.setAttribute("itemtype", "película");
    itemContainerChat.setAttribute("itemscope", "");
    itemContainerChat.setAttribute("itemtype", "Chat");

    itemList.appendChild(itemContainer);
    itemList.appendChild(itemContainerChat);
    list.appendChild(itemList);
  });

  return list;
};
  