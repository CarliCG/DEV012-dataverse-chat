import { navigateTo } from "../router.js";

export const createBar = (funcionRenderizar) => {
  const htmlTemplate = `
      <div class="contenedor">
        <button data-testid="button-clear" id="button-clear">Limpiar filtro</button>
        <form>
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
          <select name="sort" id="sort-select" data-testid="select-sort">
            <option value="none">Elige una opción</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </form>
        <button data-testid="button-apikey" id="button-apikey">ApiKey</button>
      </div>
      
    `;

  const barra = document.createElement('div');
  barra.classList.add('barra');
  barra.innerHTML = htmlTemplate;

  //Funcion de boton borrar
//Funcion de boton borrar
const button = barra.querySelector("[data-testid='button-clear']");
button.addEventListener("click", function () {
  // Restablecer el valor del select a "Elegir una opción" y "Año de estreno"
  selectType.value = "";
  selectTemporality.value = "";
  selectSort.value = "none";
  funcionRenderizar("", "", "none");
});



  const selectType = barra.querySelector("[data-testid='filter-type']");
  const selectTemporality = barra.querySelector("[data-testid='filter-temporality']");
  const selectSort = barra.querySelector("[data-testid='select-sort']");

  selectType.addEventListener("change", updateFilters);
  selectTemporality.addEventListener("change", updateFilters);
  selectSort.addEventListener("change", updateFilters);

  function updateFilters() {
    funcionRenderizar(selectType.value, selectTemporality.value, selectSort.value);
  }
  //Funcion de boton ApiKey
  const buttonApiKey = barra.querySelector("[data-testid='button-apikey']");
  buttonApiKey.addEventListener("click", function () {
    navigateTo("/apikey");
  });
  return barra;
};