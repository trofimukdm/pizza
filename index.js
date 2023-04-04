function render() {
	const productsStore = localStorageUtil.getProducts();

	headerPage.renderHeader(productsStore.length);
	shoppingPage.renderShopping()
	productsPage.renderProducts(productsStore.length);	
	mainPage.renderMain();
	footerPage.renderFooter();
	aboutPage.renderAbout();
	
}

spinnerPage.renderSpinner();

let CATALOG = [];

// https://api.myjson.com/bins/jvsbu
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
		CATALOG = body;

		setTimeout(() => {
			spinnerPage.clearSpinner();
			render();
		}, 1000);
    })
    .catch(() => {
      spinnerPage.clearSpinner();
    	errorPage.renderError();
			footerPage.renderFooter();
			ROOT_SHOPPING.hidden = true;
    })
