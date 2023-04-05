class Shopping {
  goToProducts() {
    location.hash = "#products";
  }

  order() {
    const TOKEN = "6199591064:AAG25Rj-Th14HZqCMrK9xoYLJhZBvkEC8So";
    const CHAT_ID = "-1001701946476";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    let array_of_IDs = shoppingPage.renderShopping();
    let array_of_names = [];

			array_of_IDs.forEach((item) => {
				array_of_names.push(CATALOG[item].name);
			});
			
    let telegram_message = array_of_names.join(",\n");
    telegram_message = `Заявка с сайта:\n${telegram_message}`;
    console.log(telegram_message);

    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: telegram_message,
    });

    spinnerPage.renderSpinner();
    localStorage.clear();
    render();
    setTimeout(() => {
      spinnerPage.clearSpinner();
    }, 1000);
    location.hash = "#order";
  }

  renderShopping() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price, img }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
					<div class="shopping_itemsContainer">
						<div class="shopping_item">
							<div ><img class="shopping-element__image" src="${img}"></div>
							<div class="shopping-element__name"> ${name}</div>
							<div class="shopping-element__price">Price: ${price} USD</div>
						</div>
					</div>
         `;
        sumCatalog += price;
      }
    });

    let totalRow = `
				<div class="shopping_total">
					<span class="shopping-element__name">Total of ${productsStore.length} units for the sum:</span>
					<span class="shopping-element__price">${sumCatalog} USD</span>
				</div>
		`;

    let linkToProducts = `
				<button class="products-element__btn" onclick="shoppingPage.goToProducts()">Jump to Products</button>
		`;

    let emptyTitle = `
			<div>
				<div class="empty-message">
				<p>You have an empty cart<br>Add Products!</p>${linkToProducts}
				</div>
			</div>
		`;

    let orderBTN = `
			<button  class="products-element__btn" onclick="shoppingPage.order()">Make an order!</button>
		`;
    let hideOrderBTN = "";

    // let hideLinkToProducts = "";

    const html = `
            <div class="shopping-container empty-container">
							${sumCatalog == 0 ? " " : `<div class="shopping_title">Your order:</div>`}
                <div class="shopping_list">${htmlCatalog}</div>	
								${sumCatalog == 0 ? emptyTitle : totalRow}
                <div class="shopping-btn">
								${sumCatalog == 0 ? hideOrderBTN : orderBTN}
								</div>
            </div>
        `;

    ROOT_SHOPPING.innerHTML = html;
    return productsStore;
  }
}
const shoppingPage = new Shopping();
