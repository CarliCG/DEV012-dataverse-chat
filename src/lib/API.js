export const chatCompletions = (Api, userMessage, movie) => {
  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Api}`,
    },
    //body: JSON.stringify(data),
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": `You are ${movie} therefore respond collectively to all questions you can about the movie` ,
        },
        {
          "role": "user",
          "content": userMessage
        }
      ]

    }),
  })

    .then((response) => {
      return response.json();
    })
    .catch(() => {
      //console.error(error);
      throw new Error('Error al comunicarse con la API');
    });
};