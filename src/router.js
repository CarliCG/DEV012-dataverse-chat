let ROUTES = {}; // Guarda/mapea las rutas del sitio
let rootElement = ""; // Referencia del objeto HTML donde se pintará el contenido que se esté generando

export const setRootElement = (newRootElementValue) => {
    // validar si newRootElementValue es un objeto html
    rootElement = newRootElementValue;

}

export const setRoutes = (newRoutesvalue) => {
    if (typeof newRoutesvalue === 'object') {
        if (newRoutesvalue['/error']) {
            ROUTES = newRoutesvalue;
        }
    }
}

export const renderView = (pathname = {}) => {
    // clear the root element
    const root = rootElement;
    root.innerHTML = '';
    // find the correct view in ROUTES for the pathname
    if (ROUTES[pathname]) {
        const template = ROUTES[pathname]();
        root.appendChild(template);
    } else {
        root.appendChild(ROUTES['/error']());
        // in case not found render the error view
        // render the correct view passing the value of props
        // add the view element to the DOM root element
    }
}

export const navigateTo = (pathname = {}) => {
    // update window history with pushState
    const URLvisited = window.location.hostname + pathname
    history.pushState({}, '', URLvisited);
    // render the view with the pathname and props
    renderView(pathname);
}

export const onURLChange = (location) => {
    renderView(location);
}