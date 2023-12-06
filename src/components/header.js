export const createHeader = (funcionrenderizar) => {
  console.log(funcionrenderizar)
  const htmlTemplate = `
      
  <header class="header-container">
          
    <div class="contenedor">
      <div>
        <h1>PelisInfo</h1>
      </div>
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
                <select name="name" id="sort-select" data-testid="select-sort">
                    <option value="none">Elige una opción</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
            </form>
        </div>
        <div id="stats-container" class="statistics-container">
            <p></p>
        </div>
</header>

    `;

  // Crea un elemento div para el encabezado
  const header = document.createElement('header');
  header.classList.add('encabezado');
  header.innerHTML = htmlTemplate;
  const button = header.querySelector("[data-testid='button-clear']");
  button.addEventListener("click", function (){
    console.log ("header");
    funcionrenderizar();
  }
  )

  return header;
};