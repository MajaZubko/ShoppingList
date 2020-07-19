import { Item } from './item-class';
import { appendList } from '../list/append-list';
import { InputValidation } from '../form/input-validation';
import { showCounter } from '../list/counter/show-counter';

export const addItem = () => {
	const newItem = new Item();
	const inputValidation = new InputValidation();
	if (inputValidation.validateInputs()) {
		let newCategory = newItem.category;
		for (let char of newItem.category) {
			if (char === '-') {
				const splitCategory = category.split('-');
				newCategory = splitCategory.join(' ');
			}
		}
		appendList({
			category: newCategory,
			name: newItem.name,
			quantity: newItem.quantity,
			type: newItem.type
		});
		addItemContainer.classList.add('hidden');
		showCounter();
		inputValidation.hideAllErrors();
	}
};
