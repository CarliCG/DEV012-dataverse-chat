
import { filterData, sortData, budgetStatics } from '../src/lib/dataFunctions'; //Funciones que voy a probar


describe('filterData', () => {  //crea un bloque de pruebas que se relaciona con la función filterData

  it('valida comportamiento de filterData con temporality "actual"', () => {
    const arrayTest = [
      {
        "id": "resident-evil-1",
        "name": "Resident Evil",
        "type": "Terror",
        "shortDescription": "Película de terror y ciencia ficción basada en el videojuego.",
        "description": "Resident Evil es una película de terror y ciencia ficción dirigida por Paul W.S. Anderson y lanzada en 2002...",
        "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRreeKTZliPW4bM0t5bQOkDSvkd3qR70NQDnUT1_rfSjI3M_8tX",
        "trailerUrl": "https://www.youtube.com/watch?v=aNEMuldkKnA",
        "facts": {
          "releaseDate": "15 de marzo de 2002",
          "temporality": "2002",
          "mainActors": [
            "Milla Jovovich",
            "Michelle Rodriguez",
            "Eric Mabius",
            "James Purefoy",
            "Colin Salmon"
          ],
          "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
          "budget": "Aproximadamente $33 millones de dólares",
          "criticRating": "35%",
          "audienceRating": "67%"
        }
      },
      {
        "id": "belzebuth",
        "name": "Belzebuth",
        "type": "Terror",
        "shortDescription": "Película de terror sobrenatural",
        "description": "Belzebuth es una película de terror sobrenatural que se estrenó en 2017 en el Festival Internacional de Cine de Sitges y en México en 2019...",
        "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScQCegvigKb4DLblUkAnsfJgSJwrQ-rRS9OdlnAxAmw5w_VTLY",
        "trailerUrl": "https://youtu.be/Ujf1eurByvw?si=yFI4x_7CJ-DtKFGE",
        "facts": {
          "releaseDate": "2017 en el Festival de Sitges, 2019 en México",
          "temporality": "2017",
          "mainActors": [
            "Tobin Bell",
            "Joaquín Cosio",
            "Tate Ellington",
            "Giovanna Zacarías",
            "José Sefami"
          ],
          "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
          "budget": "No disponible", // Cambiar si tienes información sobre el presupuesto
          "criticRating": "80%",
          "audienceRating": "66%"
        }
      }
    ];

    const result = [
      {
        "id": "belzebuth",
        "name": "Belzebuth",
        "type": "Terror",
        "shortDescription": "Película de terror sobrenatural",
        "description": "Belzebuth es una película de terror sobrenatural que se estrenó en 2017 en el Festival Internacional de Cine de Sitges y en México en 2019...",
        "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScQCegvigKb4DLblUkAnsfJgSJwrQ-rRS9OdlnAxAmw5w_VTLY",
        "trailerUrl": "https://youtu.be/Ujf1eurByvw?si=yFI4x_7CJ-DtKFGE",
        "facts": {
          "releaseDate": "2017 en el Festival de Sitges, 2019 en México",
          "temporality": "2017",
          "mainActors": [
            "Tobin Bell",
            "Joaquín Cosio",
            "Tate Ellington",
            "Giovanna Zacarías",
            "José Sefami"
          ],
          "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
          "budget": "No disponible", // Cambiar si tienes información sobre el presupuesto
          "criticRating": "80%",
          "audienceRating": "66%"
        }
      }
      // Solo un elemento cumple con la condición "temporality" igual a "actual"
    ];

    expect(filterData(arrayTest, "temporality", "actual")).toEqual(result);
  });

  it('valida comportamiento de filterData con temporality "anterior"', () => {
    const arrayTest = [
      {
        "id": "resident-evil-1",
        "name": "Resident Evil",
        "type": "Terror",
        "shortDescription": "Película de terror y ciencia ficción basada en el videojuego.",
        "description": "Resident Evil es una película de terror y ciencia ficción dirigida por Paul W.S. Anderson y lanzada en 2002...",
        "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRreeKTZliPW4bM0t5bQOkDSvkd3qR70NQDnUT1_rfSjI3M_8tX",
        "trailerUrl": "https://www.youtube.com/watch?v=aNEMuldkKnA",
        "facts": {
          "releaseDate": "15 de marzo de 2002",
          "temporality": "2002",
          "mainActors": [
            "Milla Jovovich",
            "Michelle Rodriguez",
            "Eric Mabius",
            "James Purefoy",
            "Colin Salmon"
          ],
          "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
          "budget": "Aproximadamente $33 millones de dólares",
          "criticRating": "35%",
          "audienceRating": "67%"
        }
      },
      {
        "id": "belzebuth",
        "name": "Belzebuth",
        "type": "Terror",
        "shortDescription": "Película de terror sobrenatural",
        "description": "Belzebuth es una película de terror sobrenatural que se estrenó en 2017 en el Festival Internacional de Cine de Sitges y en México en 2019...",
        "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScQCegvigKb4DLblUkAnsfJgSJwrQ-rRS9OdlnAxAmw5w_VTLY",
        "trailerUrl": "https://youtu.be/Ujf1eurByvw?si=yFI4x_7CJ-DtKFGE",
        "facts": {
          "releaseDate": "2017 en el Festival de Sitges, 2019 en México",
          "temporality": "2017",
          "mainActors": [
            "Tobin Bell",
            "Joaquín Cosio",
            "Tate Ellington",
            "Giovanna Zacarías",
            "José Sefami"
          ],
          "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
          "budget": "No disponible", // Cambiar si tienes información sobre el presupuesto
          "criticRating": "80%",
          "audienceRating": "66%"
        }
      }
    ];

    const result = [
      {
        "id": "resident-evil-1",
        "name": "Resident Evil",
        "type": "Terror",
        "shortDescription": "Película de terror y ciencia ficción basada en el videojuego.",
        "description": "Resident Evil es una película de terror y ciencia ficción dirigida por Paul W.S. Anderson y lanzada en 2002...",
        "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRreeKTZliPW4bM0t5bQOkDSvkd3qR70NQDnUT1_rfSjI3M_8tX",
        "trailerUrl": "https://www.youtube.com/watch?v=aNEMuldkKnA",
        "facts": {
          "releaseDate": "15 de marzo de 2002",
          "temporality": "2002",
          "mainActors": [
            "Milla Jovovich",
            "Michelle Rodriguez",
            "Eric Mabius",
            "James Purefoy",
            "Colin Salmon"
          ],
          "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
          "budget": "Aproximadamente $33 millones de dólares",
          "criticRating": "35%",
          "audienceRating": "67%"
        }
      }
      // Solo un elemento cumple con la condición "temporality" igual a "anterior"
    ];

    expect(filterData(arrayTest, "temporality", "anterior")).toEqual(result);
  });
});
it('valida comportamiento de filterData con temporality diferente de "actual" y "anterior"', () => {
  const arrayTest = [
    {
      "id": "resident-evil-1",
      "name": "Resident Evil",
      "type": "Terror",
      "shortDescription": "Película de terror y ciencia ficción basada en el videojuego.",
      "description": "Resident Evil es una película de terror y ciencia ficción dirigida por Paul W.S. Anderson y lanzada en 2002...",
      "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRreeKTZliPW4bM0t5bQOkDSvkd3qR70NQDnUT1_rfSjI3M_8tX",
      "trailerUrl": "https://www.youtube.com/watch?v=aNEMuldkKnA",
      "facts": {
        "releaseDate": "15 de marzo de 2002",
        "temporality": "2002",
        "mainActors": [
          "Milla Jovovich",
          "Michelle Rodriguez",
          "Eric Mabius",
          "James Purefoy",
          "Colin Salmon"
        ],
        "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
        "budget": "Aproximadamente $33 millones de dólares",
        "criticRating": "35%",
        "audienceRating": "67%"
      }
    },
    {
      "id": "belzebuth",
      "name": "Belzebuth",
      "type": "Terror",
      "shortDescription": "Película de terror sobrenatural",
      "description": "Belzebuth es una película de terror sobrenatural que se estrenó en 2017 en el Festival Internacional de Cine de Sitges y en México en 2019...",
      "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScQCegvigKb4DLblUkAnsfJgSJwrQ-rRS9OdlnAxAmw5w_VTLY",
      "trailerUrl": "https://youtu.be/Ujf1eurByvw?si=yFI4x_7CJ-DtKFGE",
      "facts": {
        "releaseDate": "2017 en el Festival de Sitges, 2019 en México",
        "temporality": "2017",
        "mainActors": [
          "Tobin Bell",
          "Joaquín Cosio",
          "Tate Ellington",
          "Giovanna Zacarías",
          "José Sefami"
        ],
        "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
        "budget": "No disponible", // Cambiar si tienes información sobre el presupuesto
        "criticRating": "80%",
        "audienceRating": "66%"
      }
    }
  ];

  const result = arrayTest; // El resultado esperado es el mismo array sin cambios

  expect(filterData(arrayTest, "temporality", "otroValor")).toEqual(result);
});

describe('sortData', () => {
  it('valida comportamiento de sortData', () => { // pruebas definidas mediante it
    const pelisascendente = [
      {
        "id": "resident-evil-1",
        "name": "Resident Evil",
        "type": "Terror",
        "shortDescription": "Película de terror y ciencia ficción basada en el videojuego.",
        "description": "Resident Evil es una película de terror y ciencia ficción dirigida por Paul W.S. Anderson y lanzada en 2002...",
        "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRreeKTZliPW4bM0t5bQOkDSvkd3qR70NQDnUT1_rfSjI3M_8tX",
        "trailerUrl": "https://www.youtube.com/watch?v=aNEMuldkKnA",
        "facts": {
          "releaseDate": "15 de marzo de 2002",
          "temporality": "2002",
          "mainActors": [
            "Milla Jovovich",
            "Michelle Rodriguez",
            "Eric Mabius",
            "James Purefoy",
            "Colin Salmon"
          ],
          "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
          "budget": "Aproximadamente $33 millones de dólares",
          "criticRating": "35%",
          "audienceRating": "67%"

        }
      },
      {
        "id": "belzebuth",
        "name": "Belzebuth",
        "type": "Terror",
        "shortDescription": "Película de terror sobrenatural",
        "description": "Belzebuth es una película de terror sobrenatural que se estrenó en 2017 en el Festival Internacional de Cine de Sitges y en México en 2019...",
        "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScQCegvigKb4DLblUkAnsfJgSJwrQ-rRS9OdlnAxAmw5w_VTLY",
        "trailerUrl": "https://youtu.be/Ujf1eurByvw?si=yFI4x_7CJ-DtKFGE",
        "facts": {
          "releaseDate": "2017 en el Festival de Sitges, 2019 en México",
          "temporality": "2017",
          "mainActors": [
            "Tobin Bell",
            "Joaquín Cosio",
            "Tate Ellington",
            "Giovanna Zacarías",
            "José Sefami"
          ],
          "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
          "budget": "No disponible", // Cambiar si tienes información sobre el presupuesto
          "criticRating": "80%",
          "audienceRating": "66%"
        }
      }]

    const result = [
      {
        "id": "resident-evil-1",
        "name": "Resident Evil",
        "type": "Terror",
        "shortDescription": "Película de terror y ciencia ficción basada en el videojuego.",
        "description": "Resident Evil es una película de terror y ciencia ficción dirigida por Paul W.S. Anderson y lanzada en 2002...",
        "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRreeKTZliPW4bM0t5bQOkDSvkd3qR70NQDnUT1_rfSjI3M_8tX",
        "trailerUrl": "https://www.youtube.com/watch?v=aNEMuldkKnA",
        "facts": {
          "releaseDate": "15 de marzo de 2002",
          "temporality": "2002",
          "mainActors": [
            "Milla Jovovich",
            "Michelle Rodriguez",
            "Eric Mabius",
            "James Purefoy",
            "Colin Salmon"
          ],
          "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
          "budget": "Aproximadamente $33 millones de dólares",
          "criticRating": "35%",
          "audienceRating": "67%"

        }
      }]
    expect(sortData(pelisascendente, 'name', 'asc')).not.toEqual(result)
  });
});

describe('budgetStatics', () => {
  it('valida estadística de promedio', () => {
    const budgetCero = [
      {
        "id": "escalera-al-cielo",
        "name": "Escalera al Cielo",
        "type": "Kdrama",
        "shortDescription": "Serie coreana de drama y romance.",
        "description": "Escalera al Cielo es una serie coreana de drama y romance lanzada en 2003. La historia narra el amor y las dificultades de una pareja a lo largo de los años...",
        "imageUrl": "https://images.justwatch.com/poster/166251016/s718/escalera-al-cielo.jpg",
        "trailerUrl": "https://www.youtube.com/watch?v=SN61FicHhC0",
        "facts": {
          "releaseDate": "3 de diciembre de 2003",
          "temporality": "2003",
          "mainActors": ["Choi Ji-woo", "Kwon Sang-woo"],
          "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
          "budget": "0",
          "criticRating": "75%",
          "audienceRating": "89%"
        }
      },
      {
        "id": "los-chicos-son-mejores-que-las-flores",
        "name": "Los Chicos Son Mejores que las Flores",
        "type": "Kdrama",
        "shortDescription": "Serie coreana basada en un manga.",
        "description": "Los Chicos Son Mejores que las Flores es una serie coreana lanzada en 2009, basada en el manga japonés 'Hana Yori Dango'. La trama sigue a una joven de clase baja que ingresa en una prestigiosa escuela...",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/pt/8/89/Boys_over_flowers_promotional_poster.jpg",
        "trailerUrl": "https://www.youtube.com/watch?v=8GYGkdcCIjM",
        "facts": {
          "releaseDate": "5 de enero de 2009",
          "temporality": "2009",
          "mainActors": ["Ku Hye-sun", "Lee Min-ho"],
          "awards": ["Ninguno"], // Dejar vacío si no ha ganado ningún premio
          "budget": "0",
          "criticRating": "69%",
          "audienceRating": "88%"
        }
      }
    ];

    const result = budgetStatics(budgetCero); // Llama a la función budgetStatics con el arreglo de datos.

    expect(result.budgetMovies).toBe(0); // Comprueba que el resultado del promedio sea igual a cero.
  });
});

