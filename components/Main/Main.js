class Main {
	renderMain() {
			const html = `
				<div class="main-container">
						<div class="main-message">
								<h5 class="main-info">by an Italian chef</h5>
								<h2 class="main-title"><span>Best</span>pizza</h2>
								<button class="products-element__btn" onclick="shoppingPage.goToProducts()">
								Choose a pizza
								</button>
						</div>
				</div>
			`;

			ROOT_MAIN.innerHTML = html;
	}
}

const mainPage = new Main();