class Header {
  // openShoppingPage() {
  //   shoppingPage.renderShopping();
  // }

	//<div class="header-counter" onclick="headerPage.openShoppingPage();">🔥Корзина ${count}</div> - удалил с позиции 18
  renderHeader(count) {
    const html = `
            <div class="header-container">
							<div class="header-logo">
								<img src="./img/logo.svg"  alt=""Logo>
							</div>
							<nav class="header-nav">
								<ul class="header-list">
									<li class="header-item"><a href="#main">Main</a></li>
									<li class="header-item"><a href="#products">Products</a></li>
									<li class="header-item"><a href="#about">About</a></li>
									<li class="header-item"><a href="#shopping">Shopping (${count}) </a></li>
								</ul>
							</nav>
            </div>
        `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
