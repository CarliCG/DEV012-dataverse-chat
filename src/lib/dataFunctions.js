// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones. FILTRO ORDENAMIENTO 

export const filterData = (data, filterBy, value) => { //Se declara una función que toma tres parámetros 
  function filtrado(data) { //realizar el filtrado basado en el criterio especificado en el parámetro filterBy y el valor en value.
    if (filterBy === "temporality") {
      if (value === "actual") {
        return data.facts["temporality"] >= 2010 && data.facts["temporality"] <= 2023;
      } else if (value === "anterior") {
        return data.facts["temporality"] < 2010 && data.facts["temporality"] >= 1940;
      } else {
        return data; // Si el valor no es ni "actual" ni "anterior", se devuelve el objeto data sin ningún cambio.
      }
    }
    return data[filterBy] === value || data.facts[filterBy] === value;
    //Devuelve true si al menos una de las condiciones es verdadera. Si ambas condiciones son falsas, devuelve false.
    //===: operador de igualdad estricta, Compara si el valor del lado izquierdo es igual al valor del lado derecho y también compara los tipos de datos.
    // ||: Es el operador lógico OR 
  }
  return data.filter(filtrado);
};//método filter() para crear un nuevo array que contiene solo los elementos de data que cumplen con los criterios definidos por la función filtrado

export const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === "name") {
    const sortedData = [...data]; // Crea una copia del array original
    //perador de propagación (...) para crear una copia superficial del array data
    if (sortOrder === "asc") {
      // Ordena de la A a la Z basándose en el nombre de la película
      return sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      // Ordena de la Z a la A basándose en el nombre de la película
      return sortedData.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sortedData;
  }
  return data;
};

export const budgetStatics = (data) => {
  //Cantidad de películas
  const numMovies = data.length; // total de peliculas
  //Promedio de presupuesto
  const dataBudget = data.map(element => parseInt(element.facts.budget));
  //map() para transformar un array existente llamado data en un nuevo array que contiene los valores numéricos de la propiedad "budget"
  const sumBudget = (dataBudget.reduce((sum, element) => sum + element, 0));
  //La función reduce itera sobre cada elemento en dataBudget, acumulando la suma de los elementos.
  const promBudget = numMovies > 0 ? sumBudget / numMovies : 0;
  const budgetMovies = Math.round(promBudget * 10) / 10;
  //El resultado final es el promedio del presupuesto redondeado al décimo más cercano.
  return { budgetMovies, numMovies };
};