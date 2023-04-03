class About {
	renderAbout() {
			const html = `
			<div class="section-info">
			<div class="section-info-adress"><span>Телефон для заявок:</span><br>
				+375 (29) 123-45-67</div>
			<div class="section-info-phone"><span>Адрес:</span><br>
				г.Брест,<br>
				ул. Советская, д. 71</div>
			<div class="section-info-working"><span>График работы:</span><br>
				24 часа в сутки</div>
		</div>
		<div class="section-map">
		<div class="section-map_content">
			<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1457.6216538210247!2d23.692084784777165!3d52.090330233636266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210bf1106318f1%3A0xc4e3085c78c27450!2z0YPQuy4g0KHQvtCy0LXRgtGB0LrQsNGPIDcxLCDQkdGA0LXRgdGC!5e0!3m2!1sru!2sby!4v1680542544008!5m2!1sru!2sby" width="100%" height="643" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
	</div>
			`;

			ROOT_ABOUT.innerHTML = html;
	}
}

const aboutPage = new About();