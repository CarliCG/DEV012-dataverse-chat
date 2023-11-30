export const createHeader = () => {
    const htmlTemplate = `
      
    <div class="header-container">
         <h1>PelisInfo</h1>
          
        <img src="../images/logo.jpeg" alt="Logo" class="logo" />
      </div>
    `;
  
    // Crea un elemento div para el encabezado
    const header = document.createElement('header');
    //header.classList.add('encabezado');
    //header.innerHTML = htmlTemplate;
  const h1 = document.createElement("h1")
  h1.textContent="Titulo"
  header.appendChild(h1)
    return header;
  };