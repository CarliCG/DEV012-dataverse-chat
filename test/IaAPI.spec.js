import { chatCompletions } from "../src/lib/API.js";

const OpenIAResponse = jest.fn();

// hacer implementación falsa de fetch
global.fetch = jest.fn(() => Promise.resolve({
  json: OpenIAResponse
}));

// Verificar si estamos en un entorno de prueba Jest antes de asignar a globalThis
describe('Endpoint de openIA', () => {
  const userMessage = 'hello';
  const movie = 'YourMovie';
  const systemMessage = `You are ${movie} therefore respond collectively to all questions you can about the movie`;
  const messages = [
    { role: 'system', content: systemMessage },
    { role: 'user', content: userMessage }
  ];

  it('Integración con la API externa se está realizando correctamente', () => {
    OpenIAResponse.mockResolvedValueOnce({ choices: [{ message: 'hello' }] });
  
    chatCompletions('12456', userMessage, movie);
  
    // Asegurarse de que cada propiedad 'content' esté correctamente serializada
    const serializedMessages = messages.map(({ role, content }) => ({
      role,
      content: content // Usa el contenido directamente sin serializar nuevamente
    }));
  
    expect(global.fetch).toBeCalledWith('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer 12456`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'model': 'gpt-3.5-turbo',
        messages: serializedMessages,
      })
    });
  });
  it('El endpoint responde de manera correcta', () => {
    const response = {
      "choices": [
        {
          "message": {
            "role": "system",
            "content": "¡Hola!"
          }
        }
      ]
    };
    OpenIAResponse.mockResolvedValueOnce(response);

    return chatCompletions('12456', [{ role: 'system', content: 'hello' }])
      .then((resolved) => {
        expect(resolved).toEqual(response);
      });
  });
});
