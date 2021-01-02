import faker from 'faker';

const mount = (el) => {
	let products = '';

	for (let i = 0; i <5; i++) {
		const name = faker.commerce.productName();
		products += `<div>${name}</div>`;
	}

	el.innerHTML = products;
	// react example: ReactDom.render(<App />, el);
}

// mode isolation :
if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#dev-products');
	// case there is an id
	if (el) {
		// running in isolation
		mount(el);
	}
}

export { mount };
