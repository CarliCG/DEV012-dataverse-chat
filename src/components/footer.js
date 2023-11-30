export const createFooter = () => {
  const htmlTemplate = 
  `
      <div class="footer-content">
          <!-- Logo -->
          <img src="../images/logo.jpeg" alt="Logo de la Empresa">

          <p>Desarrollado por: Carla Campaña</p>

          <p>© 2023 - Todos los derechos reservados</p>

      </div>
  `;

  const footer = document.createElement('footer');
  footer.classList.add('container');
  footer.innerHTML = htmlTemplate;

  return footer;
};
