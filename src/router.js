let ROUTES = {}; // Guarda/mapea las rutas del sitio
let rootElement = ""; // Referencia del objeto HTML donde se pintará el contenido que se esté generando

// Asignar un objeto HTML a la variable rootElement.
export const setRootElement = (newRootElementValue) => {
  rootElement = newRootElementValue; // validar si newRootElementValue es un objeto html
};

// Configurar las rutas de la aplicación.
export const setRoutes = (newRoutesvalue) => {
  if (typeof newRoutesvalue === 'object') {
    // Verifica si el tipo de newRoutesvalue es un objeto, se espera que las rutas sean proporcionadas en forma de un objeto.
    if (newRoutesvalue['/error']) {
      ROUTES = newRoutesvalue;
    }
  }
};

// Se encarga de renderizar vistas en una aplicación web según la ruta proporcionada.
export const renderView = (pathname, props) => {
  const root = rootElement; // servirá como el contenedor principal para las vistas.
  root.innerHTML = ''; // clear the root element.
  if (ROUTES[pathname]) {
    // Verifica si existe una ruta correspondiente en el objeto ROUTES para la ruta proporcionada (pathname).
    const template = ROUTES[pathname](props);
    // Si la ruta existe en ROUTES, se llama a la función asociada con esa ruta, pasando las propiedades props. El resultado se almacena en una variable llamada template.
    root.appendChild(template); // Agrega el elemento resultante (template) al elemento root, efectivamente renderizando la vista.
  } else {
    // Si la ruta no se encuentra en ROUTES, se ejecuta este bloque.
    root.appendChild(ROUTES['/error']()); // Renderiza la vista de error obtenida desde ROUTES['/error']() y la agrega al elemento root.
  }
};

// Cambiar la ruta en la barra de direcciones del navegador, actualizar el historial de navegación y renderizar una vista asociada a la nueva ruta.
export const navigateTo = (pathname, props) => {
  // Update window history with pushState.
  const URLvisited = window.location.origin + pathname; // Utilizar window.location.origin en lugar de window.location.hostname.
  history.pushState({}, '', URLvisited);
  // Renderiza pathname and props.
  renderView(pathname, props);
};

export const onURLChange = (location, props) => {
  renderView(location, props);
};
