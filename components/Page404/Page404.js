class Page404 {
	renderPage404() {
			const html = `
				<div class="page404-container">
							<div class="page404-message">
									<h3>Ooooops!</h3>
									<p>Requested page was not found</p>
							</div>
				</div>
			`;

			ROOT_404.innerHTML = html;
	}
}

const page404 = new Page404();
