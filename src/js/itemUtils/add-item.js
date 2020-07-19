import { Item } from './item-class';
import { appendList } from '../list/append-list';
import { InputValidation } from '../form/input-validation';
import { showCounter } from '../list/counter/show-counter';

export const addItem = () => {
	const newItem = new Item();
	const inputValidation = new InputValidation();
	if (inputValidation.validateInputs()) {
		appendList({
			category: newItem.category,
			name: newItem.name,
			quantity: newItem.quantity,
			type: newItem.type
		});
		addItemContainer.classList.add('hidden');
		showCounter();
		inputValidation.hideAllErrors();
	}
};
