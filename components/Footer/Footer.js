class Footer {
	renderFooter() {
			const html = `
				<div class="footer-container">
							<div class="footer-message">
									PizzaTime 2023
							</div>
				</div>
			`;

			ROOT_FOOTER.innerHTML = html;
	}
}

const footerPage = new Footer();