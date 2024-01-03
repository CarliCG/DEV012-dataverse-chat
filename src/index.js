import { onURLChange, setRootElement, setRoutes } from './router.js';
import { ChatView } from './views/Chat.js';
import { Error } from './views/Error.js';
import { home } from './views/home.js';
import { Api } from './views/ApiKey.js';

// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

const routes = {
  "/": home,
  "/error": Error,
  "/chat": ChatView,
  "/apikey": Api,
};

const viewContainer = document.getElementById("root");
setRoutes(routes); // Toma el objeto se lo lleva al router y lo define
setRootElement(viewContainer);

document.addEventListener('DOMContentLoaded', (event) => {
  // DOMContentLoaded cuando todo el HTML fue interpretado y ejecutado
  onURLChange(event.currentTarget.location.pathname);
});

window.onpopstate = (event) => {
  onURLChange(event.currentTarget.location.pathname, event);
};
