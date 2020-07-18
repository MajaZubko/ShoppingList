import { Item } from './item-class';
import { appendList } from './append-list';
import { InputValidation } from './input-validation';
import { showCounter } from './show-counter';

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
	}
};
