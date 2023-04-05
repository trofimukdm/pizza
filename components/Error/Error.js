class Error {
    renderError() {
        const html = `
        	<div class="error-container">
                <div class="error-message">
                    <h3>No access!</h3>
                    <p>Try coming back later</p>
                </div>
        	</div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();
