class Order {
	renderOrder() {
			const html = `
				<div class="order-container">
							<div class="order-message">
									<h3>Ваш заказ принят!</h3>
									<button class="products-element__btn" onclick="shoppingPage.goToProducts()">
			Перейти к товарам
	</button>
							</div>
				</div>
			`;

			ROOT_ORDER.innerHTML = html;
	}
}

const orderPage = new Order();

