class Header {
  // openShoppingPage() {
  //   shoppingPage.renderShopping();
  // }

	//<div class="header-counter" onclick="headerPage.openShoppingPage();">🔥Корзина ${count}</div> - удалил с позиции 18
  renderHeader(count) {
    const html = `
            <div class="header-container">
						<div class="header-logo">
							<img src="./img/logo.svg" width="127" height="30" alt=""Logo>
						</div>
						<nav class="header-nav">
							<ul class="header-ul">
								<li class="header-li"><a href="#main">Main</a></li>
								<li class="header-li"><a href="#products">Products</a></li>
								<li class="header-li"><a href="#about">About</a></li>
								<li class="header-li"><a href="#shopping">Shopping (${count})</a></li>
							</ul>
						</nav>
								
            </div>
        `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
