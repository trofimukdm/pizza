function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.renderHeader(productsStore.length);
  shoppingPage.renderShopping();
  productsPage.renderProducts(productsStore.length);
  mainPage.renderMain();
  footerPage.renderFooter();
  aboutPage.renderAbout();
}

spinnerPage.renderSpinner();

let CATALOG = [];

fetch("server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;

    setTimeout(() => {
      spinnerPage.clearSpinner();
      render();
    }, 1000);
  })
  .catch(() => {
    spinnerPage.clearSpinner();
		ROOT_ERROR.hidden = false;
    errorPage.renderError();
    ROOT_404.hidden = true;
    ROOT_SHOPPING.hidden = true;
  });
