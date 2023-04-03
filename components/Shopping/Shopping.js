class Shopping {
  handlerClear() {
    ROOT_SHOPPING.innerHTML = "";
  }

  goToProducts() {
    location.hash = "#products";
  }
  order() {
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

    CATALOG.forEach(({ id, name, price, img }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
				<div class="shopping_itemsContainer">
                    <div class="shopping_item">
                        <div ><img class="shopping-element__image" src="${img}"></div>
                        <div class="shopping-element__name"> ${name}</div>
                        <div class="shopping-element__price">Цена:${price} USD</div>
                    </div>
				</div>
                `;
        sumCatalog += price;
      }
    });

    let totalRow = `<div>
		<span class="shopping-element__name">Итого ${
      productsStore.length
    } шт. на сумму:</span>
		<span class="shopping-element__price">${sumCatalog} USD</span>
		</div>`;
		let linkToProducts = `<button class="products-element__btn" onclick="shoppingPage.goToProducts()">
		Перейти к товарам
</button>`;
    let emptyTitle = `<div><div class="empty-message"><p>У вас пустая корзина.)<br>Добавьте товары!</p>${linkToProducts}</div></div>`;
    let orderBTN = `<button class="product_order products-element__btn" onclick="shoppingPage.order()">
		Заказать!
</button>`;
    let hideOrederBTN = "";
		let hideLinkToProducts = "";
    // <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div> - удалил строку с позиции 26
    const html = `
            <div class="shopping-container order-container">
						
						${sumCatalog == 0 ? " " : `<h2>Ваш заказ:</h2>`}
                <div>
                    ${htmlCatalog}
										</div>
										<div>
										${sumCatalog == 0 ? emptyTitle : totalRow}
										</div>
                    
                <div>
								${sumCatalog == 0 ? hideOrederBTN : orderBTN}
								
								</div>
								
								
								
            </div>
        `;

    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
// ${sumCatalog == 0 ? linkToProducts : hideLinkToProducts}