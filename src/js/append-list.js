import { editItem } from './edit-item';
import { deleteItem } from './delete-item';

export const appendList = ({ category, name, quantity, type }) => {
	const ul = document.getElementsByClassName(category)[0];
	if (ul) {
		if (!ul.hasChildNodes()) {
			const h2 = document.createElement('h2');
			h2.classList.add('category-header');
			const headerText = category.toUpperCase();
			h2.innerText = headerText;
			const parentDiv = ul.parentNode;
			parentDiv.insertBefore(h2, ul);
		}
		const li = document.createElement('li');
		li.classList.add(`${category}-category`, `${quantity}-quantity`, `${type}-type`, `${name}-name`);
		li.appendChild(document.createTextNode(`${quantity} ${type} ${name}`));
		ul.appendChild(li);

		const editItemBtn = document.createElement('button');
		editItemBtn.classList.add('editItemBtn');
		editItemBtn.innerText = 'Edit';
		const deleteItemBtn = document.createElement('button');
		deleteItemBtn.classList.add('deleteItemBtn');
		deleteItemBtn.innerText = 'Delete';
		li.appendChild(editItemBtn);
		li.appendChild(deleteItemBtn);
		editItem(editItemBtn);
		deleteItem(deleteItemBtn);
	}
};
