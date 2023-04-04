class Shopping {
  // handlerClear() {
  //   ROOT_SHOPPING.innerHTML = "";
  // }

  goToProducts() {
    location.hash = "#products";
  }

  order() {
		const TOKEN = "6199591064:AAG25Rj-Th14HZqCMrK9xoYLJhZBvkEC8So";
		const CHAT_ID = "-1001701946476";
		const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
		// console.log(CATALOG[0].name)
		// console.log(shoppingPage.renderShopping()[0])
		let a = shoppingPage.renderShopping();
		let arr = [];
		a.forEach(item => {
			arr.push(CATALOG[item].name)
		})
		let b = arr.join(",\n")
		b = `Заявка с сайта:\n${b}`
		// console.log(a)
		// console.log(arr)
		console.log(b)

		axios.post(URI_API, {
			chat_id: CHAT_ID,
			parse_mode: 'html',
			text: b
		})

    spinnerPage.renderSpinner();
    localStorage.clear();
    render();
    setTimeout(() => {
      spinnerPage.clearSpinner();
    }, 1000);
    location.hash = "#order";
		// orderPage.renderOrder();
  }

	
  renderShopping() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

		// let send;

    CATALOG.forEach(({ id, name, price, img }) => {
			
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
					<div class="shopping_itemsContainer">
						<div class="shopping_item">
							<div ><img class="shopping-element__image" src="${img}"></div>
							<div class="shopping-element__name"> ${name}</div>
							<div class="shopping-element__price">Цена: ${price} BYN</div>
						</div>
					</div>
         `;
        sumCatalog += price;
				
      }
			// console.log(`${name}`)
			// return `${name}`;
    });
		
    let totalRow = `
				<div class="shopping_total">
					<span class="shopping-element__name">Итого ${productsStore.length} шт. на сумму:</span>
					<span class="shopping-element__price">${sumCatalog} BYN</span>
				</div>
		`;

		let linkToProducts = `
				<button class="products-element__btn" onclick="shoppingPage.goToProducts()">Перейти к товарам</button>
		`;

    let emptyTitle = `
			<div>
				<div class="empty-message">
				<p>У вас пустая корзина.)<br>Добавьте товары!</p>${linkToProducts}
				</div>
			</div>
		`;

    let orderBTN = `
			<button  class="products-element__btn" onclick="shoppingPage.order()">Заказать!</button>
		`;
    let hideOrderBTN = "";

		// let hideLinkToProducts = "";

    // <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div> - удалил строку с позиции 26
    const html = `
            <div class="shopping-container empty-container">
							${sumCatalog == 0 ? " " : `<div class="shopping_title">Ваш заказ:</div>`}
                <div class="shopping_list">${htmlCatalog}</div>
								
								${sumCatalog == 0 ? emptyTitle : totalRow}
								
										
										
                    
                <div class="shopping-btn">
								${sumCatalog == 0 ? hideOrderBTN : orderBTN}
								
								</div>
								
								
								
            </div>
        `;

    ROOT_SHOPPING.innerHTML = html;

return productsStore
  }
}
const shoppingPage = new Shopping();
// emptyPage.renderEmpty()

// console.log(renderShopping());
// let a = shoppingPage.renderShopping()
// console.log(a)
// ${sumCatalog == 0 ? linkToProducts : hideLinkToProducts}