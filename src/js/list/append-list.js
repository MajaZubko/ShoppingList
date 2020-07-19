import { editItemListener } from './edit-item-listener';
import { deleteItemListener } from './delete-item-listener';

export const appendList = ({ category, name, quantity, type }) => {
	let ul;
	let categoryName = category;
	const categoryClassSplit = categoryName.split(' ');
	//checking if category contains spaces
	if (categoryClassSplit.length > 1) {
		categoryName = categoryClassSplit.join('-');
	}
	const uls = document.getElementsByClassName(categoryName);
	if (uls.length === 0) {
		//create new ul
		const newUl = document.createElement('ul');

		newUl.classList.add('main-list', `${categoryName}`);
		const parent = document.querySelector('.list');
		parent.appendChild(newUl);
		ul = newUl;
	} else {
		//take the ul from the list
		ul = uls[0];
	}

	if (ul) {
		//creating a heading for category
		if (!ul.hasChildNodes()) {
			const h2 = document.createElement('h2');
			h2.classList.add('category-header');
			const headerText = category;
			h2.innerText = headerText;
			const parentDiv = ul.parentNode;
			parentDiv.insertBefore(h2, ul);
		}

		//creating an item on a list + a checkbox
		const li = document.createElement('li');
		li.classList.add(`${categoryName}-category`, `${quantity}-quantity`, `${type}-type`, `${name}-name`);
		li.innerHTML = `<input type="checkbox" class="checkbox"> ${quantity} ${type} ${name}`;
		ul.appendChild(li);

		//adding edit and delete btns to every li
		const editItemBtn = document.createElement('button');
		editItemBtn.classList.add('editItemBtn');
		editItemBtn.innerHTML = '<i class="fas fa-edit"></i>';
		const deleteItemBtn = document.createElement('button');
		deleteItemBtn.classList.add('deleteItemBtn');
		deleteItemBtn.innerHTML = '<i class="fas fa-trash"></i>';
		li.appendChild(editItemBtn);
		li.appendChild(deleteItemBtn);

		//adding event listeners to every button
		editItemListener(editItemBtn);
		deleteItemListener(deleteItemBtn);
	}
};
