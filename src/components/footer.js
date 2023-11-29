export const createFooter = () => {
    const htmlTemplate = '<p>created by Carla Campana 2023</p>'
  
    const footer = document.createElement('footer');
    footer.classList.add('container');
    footer.innerHTML = htmlTemplate;
  
    return footer;
  };
  