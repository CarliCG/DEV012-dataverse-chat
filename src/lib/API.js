//Crear una funcion que recibe los parametros necesarios para ejecutar la funcion
//fetch es una promesa que se controla con el then
export const chatCompletions = (Api, data) =>{
   //Devuelvo la peticion
   return fetch('https://api.openai.com/v1/chat/completions',{
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${Api} `,
       },
       body: JSON.stringify(data), // En modo Json
      })
        
}

