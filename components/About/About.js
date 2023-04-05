class About {
	renderAbout() {
			const html = `
			<div class="about-container">
				<div class="about-info">
						<div class="about-info-phone"><span>Phone for requests:</span><br>
							+375 (29) 123-45-67</div>
						<div class="about-info-adress"><span>Address:</span><br>
						Brest,<br>
						Sovetskaya St. 71</div>
						<div class="about-info-working"><span>Work schedule:</span><br>
						24 hours a day</div>
				</div>
				<div class="about-map">
					<div class="about-map_content">
						<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1457.6216538210247!2d23.692084784777165!3d52.090330233636266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210bf1106318f1%3A0xc4e3085c78c27450!2z0YPQuy4g0KHQvtCy0LXRgtGB0LrQsNGPIDcxLCDQkdGA0LXRgdGC!5e0!3m2!1sru!2sby!4v1680542544008!5m2!1sru!2sby" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
				</div>
			`;

			ROOT_ABOUT.innerHTML = html;
	}
}

const aboutPage = new About();