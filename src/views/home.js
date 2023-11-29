import { createFooter } from "../components/footer.js";
//import { renderItems } from "../lib/view.js";

export const home = () => {
  const template = `
    <div>
      <header>
        <h1>PelisInfo</h1>
      </header>
      <div class="contenedor">
        <button data-testid="button-clear" id="button-clear">Limpiar filtro</button>

        <label for="type-select">Categorías:</label>
        <select name="type" id="type-select" data-testid="filter-type">
          <option value="">Elegir una opción</option>
          <option value="Terror">Terror</option>
          <option value="Comedia Romántica">Comedia Romántica</option>
          <option value="Infantil">Infantil</option>
          <option value="Kdrama">Kdrama</option>
        </select>

        <label for="temporality-select">Filtrar por:</label>
        <select name="temporality" id="temporality-select" data-testid="filter-temporality">
          <option value="">Año de estreno</option>
          <option value="actual">2010-actualidad</option>
          <option value="anterior">1980-2010</option>
        </select>

        <label for="sort-select">Ordenar por:</label>
        <select name="name" id="sort-select" data-testid="select-sort">
          <option value="none">Elige una opción</option>
          <option value="asc"> A - Z</option>
          <option value="desc"> Z - A</option>
        </select>
      </div>

      <div id="estadisticas" class="statistics-container">
        <p></p>
      </div>
    </div>
  `;

  const homeView = document.createElement('section');
  homeView.innerHTML = template;
  homeView.appendChild(createFooter());
  //homeView.appendChild(renderItems());
  return homeView;
};