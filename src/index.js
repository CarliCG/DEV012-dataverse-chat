import { onURLChange, setRootElement, setRoutes } from './router.js';
import { Chat } from './views/Chat.js';
import { Error } from './views/Error.js';
import { home } from './views/home.js';
import { main } from './main.js'


// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

const routes = {
    "/": home,
    "/error": Error,

}

const viewContainer = document.getElementById("root");
setRoutes(routes); //Toma el obejot se lo lleva al router y lo define
setRootElement(viewContainer);




document.addEventListener('DOMContentLoaded', (event) => { //DOMContentLoaded cuando todo html fue interpretado y ejecutado
    console.log(event.currentTarget.location);
    onURLChange(event.currentTarget.location.pathname)
});

window.onpopstate=onURLChange

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

