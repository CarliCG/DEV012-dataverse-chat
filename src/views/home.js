import { createHeader } from "../components/header.js"
import { renderItems } from "../lib/view.js"
import { createFooter } from "../components/footer.js";
import dataset from "../data/dataset.js";
import { main } from "../main.js";

export const home = () => {
  // Crear el contenedor principal
  const homeView = document.createElement('section');

  const renderizar= () => {
    console.log(dataset)
    }

  // Agregar el encabezado
  const header = createHeader(renderizar);
  const button = header.querySelector("[data-testid='button-clear']");
  console.log (button)

  homeView.appendChild(header);
  // Agregar la barra superior
  
  
  // Establecer el contenido HTML después de agregar el encabezado
    
  homeView.appendChild(renderItems(dataset));
  
  // Agregar el pie de página al contenedor
  homeView.appendChild(createFooter());
  

  return homeView;
};