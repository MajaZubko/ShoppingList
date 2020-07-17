export const appendList = ({ category, name, quantity, type }) => {
	const ul = document.getElementsByClassName(category)[0];
	if (!ul.hasChildNodes()) {
		const h2 = document.createElement('h2');
		h2.classList.add('category-header');
		const headerText = category.toUpperCase();
		h2.innerText = headerText;
		const parentDiv = ul.parentNode;
		parentDiv.insertBefore(h2, ul);
	}
	console.log(ul);
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(`${quantity} ${type} ${name}`));
	ul.appendChild(li);
};
