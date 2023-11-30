export const Error = () => {
    const itemError = document.createElement("section");
    itemError.innerHTML = `
    <img class="img-error" src="../images/error404.jpeg" alt="Error 404: Page not found">
      `
    itemError.setAttribute("id", "error");

    return itemError;
};