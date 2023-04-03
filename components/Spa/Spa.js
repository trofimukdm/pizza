const hideAll = () => {
  ROOT_PRODUCTS.hidden = true;
  ROOT_SHOPPING.hidden = true;
  ROOT_ABOUT.hidden = true; // доделать страницу
  ROOT_MAIN.hidden = true; // доделать страницу
  ROOT_404.hidden = true; // доделать страницу
  ROOT_ORDER.hidden = true; // доделать страницу
  
};
const onLocationChange = () => {
  hideAll();
  switch (location.hash) {
    case "#products":
      ROOT_PRODUCTS.hidden = false;
      break;
    case "#shopping":
      ROOT_SHOPPING.hidden = false;
      shoppingPage.renderShopping();
      break;
    case "#about":
      ROOT_ABOUT.hidden = false;
      break;
    case "#main":
      ROOT_MAIN.hidden = false;
      break;
    case "#order":
      ROOT_ORDER.hidden = false;
			orderPage.renderOrder();
      break;
    case "":
      location.hash = "#main";
      break;
    default:
      ROOT_404.hidden = false;
      break;
  }
};
onLocationChange();
window.addEventListener("hashchange", onLocationChange);
