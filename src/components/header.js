export const createHeader = () => {
  const htmlTemplate = `
    
  <header class="header-container">
    <h1 class="header-title">PelisInfo</h1>
  </header>
  `;

  const header = document.createElement('header');
  header.classList.add('encabezado');
  header.innerHTML = htmlTemplate;

  return header;
};