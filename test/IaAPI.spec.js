import { chatCompletions } from "../src/lib/API.js";

const OpenIAResponse = jest.fn();

// hacer implementación falsa de fetch
global.fetch = jest.fn(() => Promise.resolve({
  json: OpenIAResponse
}));

// Verificar si estamos en un entorno de prueba Jest antes de asignar a globalThis
describe('Endpoint de openIA', () => {
  it('Integración con la API externa se está realizando correctamente', () => {
    OpenIAResponse.mockResolvedValueOnce({ choices: [{ message: 'hello' }] });

    const messages = [{ role: 'system', content: 'hello' }];

    chatCompletions('12456', messages);

    expect(global.fetch).toBeCalledWith('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer 12456`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'model': 'gpt-3.5-turbo',
        messages,
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