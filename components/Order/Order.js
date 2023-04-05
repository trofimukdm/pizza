class Order {
	renderOrder() {
			const html = `
				<div class="order-container">
							<div class="order-message">
									<h3>Your order is accepted!</h3>
									<button class="products-element__btn" onclick="shoppingPage.goToProducts()">
									Jump to Products
	</button>
							</div>
				</div>
			`;

			ROOT_ORDER.innerHTML = html;
	}
}

const orderPage = new Order();

