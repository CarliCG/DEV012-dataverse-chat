# 💫 Dataverse - Chat:

DataVerse - Chat<br><br>Es una Single Page Application (SPA), permite explorar un conjunto de datos relacionados con películas de distintos géneros, generado mediante la técnica de prompting con ChatGPT. Ofrece opciones para filtrar por categoría y año de estreno, así como ordenar las películas de forma ascendente o descendente según su nombre. Además, presenta una estadística sobre el promedio de el presupuesto de las películas que se rendericen. Incluye una interfaz para acceder a una ventana la cual permite interactuar mediante un sistema de chat alimentado por la API de OpenAI.
# Planificación
Se utilizó la herramienta Trello para la planificación del proyecto por sprint, con la inteción de cumplir pequeñas metas a lo largo del proyecto, el cual se cumplió al terminar en el 5to sprint.

[<img src="https://i.postimg.cc/YqczmSYk/Captura-de-pantalla-trello.png" width="900">](https://postimg.cc/CdNq3Sc6)


# Historias de Usuaria
Se creo 4 tipos de historias de usuario de acuerdo a cada vista previamente establecida, las cuales se muestran a continuación.

[<img src="https://i.postimg.cc/xCrRQT06/Captura-de-pantalla-historias.png" width="700">](https://postimg.cc/VSRMBw0t)

[<img src="https://i.postimg.cc/DwM6CPRk/Captura-de-pantalla-historias-1.png" width="700">](https://postimg.cc/k2WWGKnf)


De acuerdo a las historias de usuario, se implementaron los prototipos de baja y alta fidelidad.

# Prototipo de baja y alta fidelidad 

## Baja Fidelidad

Se implementan bocetos simples a mano para dar forma al proyecto

[<img src="https://i.postimg.cc/HLScmTbf/Home-View.jpg" width="400">](https://postimg.cc/QBTxkG4b)


[<img src="https://i.postimg.cc/wBxyn1RX/2-View.jpg" width="400">](https://postimg.cc/YvVCWq30)

## Alta Fidelidad

Utilizando la herrameinta figma se realiza un borrador de como se plantea la página en general

[<img src="https://i.postimg.cc/pLT0q2Yp/Figma-mobile.png" width="200">](https://postimg.cc/rKBCp2Hk)


[<img src="https://i.postimg.cc/rFqZRGDG/Captura-de-pantalla-2024-01-09-001241.png" width="600">](https://postimg.cc/0rH0Lwdr)


# Funcionalidades
Es una aplicación SPA responsive, que implementa un sistema de enrutamiento, el cual permite la navegación dentro de la aplicación
Mantiene las funcionalidades de Dataverse que son:

- `filterData`: Permite filtrar los datos presentados de acuerdo a categoría y fecha de estreno de la pelicula
- `sortData(data, sortBy, sortOrder)`: Permite ordenar en orden ascedente (a - z) o descendente (z - a) la data de acuerdo al nombre de la pelicula.
- `budgetStatics`: Permite calcular el promedio del presupuesto de las peliculas que se esten renderizando en pantalla.
- `filterData`
Se desarrollo la configuración de la API Key para interactuar con la API de Open AI. Al hacer clic en la tarjeta de la pelicula, la aplicación se dirige a una vista con su propia URL, la cual muestra el view Chat, para interactuar con la IA.

# 💻 Tech Stack:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
CSS, HTML, OpenAI, Jest

## Autora

| [<img src="https://i.postimg.cc/yYbmZTZt/Imagen-de-Whats-App-2024-01-07-a-las-20-45-32-e7fc5f2b.jpg" width="100">](https://postimg.cc/yk03qcny) |
| --- |
| [Carla Campaña](https://github.com/CarliCG) <br> <sub>[LinkedIn](www.linkedin.com/in/carla-campaña-815802160)</sub> |


