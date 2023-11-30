export const createHeader = () => {
    const htmlTemplate = `
      
    <div class="header-container">
         <h1>PelisInfo</h1>
          
        <img src="../images/logo.jpeg" alt="Logo" class="logo" />
      </div>
    `;
  
    // Crea un elemento div para el encabezado
    const header = document.createElement('div');
    header.classList.add('encabezado');
    header.innerHTML = htmlTemplate;
  
    return header;
  };