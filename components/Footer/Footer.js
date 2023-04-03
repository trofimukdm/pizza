class Footer {
	renderFooter() {
			const html = `
				<div class="footer-container">
							<div class="footer-message">
									<div>PizzaTime 2023</div>
							</div>
				</div>
			`;

			ROOT_FOOTER.innerHTML = html;
	}
}

const footerPage = new Footer();