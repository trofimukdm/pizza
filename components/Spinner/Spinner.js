class Spinner {
    clearSpinner() {
        ROOT_SPINNER.innerHTML = '';
    }
		
    renderSpinner() {
        const html = `
        	<div class="spinner-container">
        		<img class="spinner__img" src="components/Spinner/img/spinner.svg" />
        	</div>
        `;

        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();
