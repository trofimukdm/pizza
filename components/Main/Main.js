class Main {
	renderMain() {
			const html = `
				<div class="main-container">
						<div class="main-message">
							<h5 class="main-info">от итальянского повара</h5>
							<h2 class="main-title"><span>Лучшая</span> пицца</h2>
							<button class="products-element__btn" onclick="shoppingPage.goToProducts()">
								Выбрать пиццу
							</button>
						</div>
				</div>
			`;

			ROOT_MAIN.innerHTML = html;
	}
}

const mainPage = new Main();