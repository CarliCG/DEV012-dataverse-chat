export const renderItems = (data) => {
  
  if (Array.isArray(data)) { 
    // asegurarse de que data es un arreglo antes de continuar.
    const list = document.createElement("ul"); 
    // Crea lista desordenada
    
    data.forEach(element => { 
      // forEach para iterar sobre cada elemento en el arreglo data.

      const itemList = document.createElement("li");
      //Para cada elemento en data, crea un elemento <li> llamado itemList que representa un elemento de la lista.
      itemList.classList.add("card");
      //Agrega una clase "card" al itemContainer para aplicar estilos adicionales a los elementos de la película.
      itemList.setAttribute("id", element.id)
      //element.id: Es el valor que se asigna al atributo "id". Se obtiene del objeto element
      const itemContainer = document.createElement("dl");
      //Dentro de cada <li>, crea un elemento <dl> llamado itemContainer. El elemento <dl> se utiliza para definir una lista de términos y sus descripciones en HTML.
      
      itemContainer.innerHTML = `
        <img src=${element.imageUrl} alt=${element.name} />
        <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
        <dt>Categoría:</dt><dd itemprop="type">${element.type}</dd>
        <dt>Descripción:</dt><dd itemprop="description">${element.shortDescription}</dd>
        <dt>Fecha de Estreno:</dt><dd itemprop="releaseDate">${element.facts.releaseDate}</dd>
        <button onclick="iniciarChat()">Chatea Ahora</button>
`;
      
      itemContainer.setAttribute("itemscope", ""); 
      //definir un nuevo conjunto de datos estructurados utilizando el atributo "itemscope" en HTML
      itemContainer.setAttribute("itemtype", "películas");
      //atributo "itemtype" se usa para especificar el tipo de datos del contenido estructurado dentro del elemento
      
      list.appendChild(itemList) // Agrega "itemList" al nodo "list"
      
      itemList.setAttribute("itemscope", "");
      itemList.setAttribute("itemtype", "tarjeta-películas");
      
      itemList.appendChild(itemContainer);
      
    });

    return list;

  }
};