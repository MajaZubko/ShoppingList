import { editItemListener } from './edit-item-listener';
import { deleteItemListener } from './delete-item-listener';
import { findHeader } from './find-header';

export const appendList = ({ category, name, quantity, type }) => {
	const ul = document.getElementsByClassName(category)[0];
	if (ul) {
		//creating a heading for category
		if (!ul.hasChildNodes()) {
			const h2 = document.createElement('h2');
			h2.classList.add('category-header');
			const headerText = findHeader(category);
			h2.innerText = headerText;
			const parentDiv = ul.parentNode;
			parentDiv.insertBefore(h2, ul);
		}

		//creating an item on a list
		const li = document.createElement('li');
		li.classList.add(`${category}-category`, `${quantity}-quantity`, `${type}-type`, `${name}-name`);
		li.appendChild(document.createTextNode(`${quantity} ${type} ${name}`));
		ul.appendChild(li);

		//adding edit and delete btns to every li
		const editItemBtn = document.createElement('button');
		editItemBtn.classList.add('editItemBtn');
		editItemBtn.innerText = 'Edit';
		const deleteItemBtn = document.createElement('button');
		deleteItemBtn.classList.add('deleteItemBtn');
		deleteItemBtn.innerText = 'Delete';
		li.appendChild(editItemBtn);
		li.appendChild(deleteItemBtn);

		//adding event listeners to every button
		editItemListener(editItemBtn);
		deleteItemListener(deleteItemBtn);
	}
};