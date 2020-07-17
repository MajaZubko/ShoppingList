import { FormControl } from './form-control';
import { AddPanelUtils } from './add-panel-utils';
import { Item } from './item-class';
import { appendList } from './append-list';
import { InputValidation } from './input-validation';

const formControl = new FormControl();
const addPanelUtils = new AddPanelUtils();

const addItemContainer = document.querySelector('#addItemContainer');

const allItems = [];

//***buttons functionality***//
addPanelUtils.onClick(() => {
	addItemContainer.classList.remove('hidden');
	formControl.clearForm();
});

formControl.onSubmitClick(() => {
	event.preventDefault();

	const newItem = new Item();
	const inputValidation = new InputValidation();
	if (inputValidation.validateInputs()) {
		appendList({
			category: newItem.category,
			name: newItem.name,
			quantity: newItem.quantity,
			type: newItem.type
		});
		allItems.push(newItem);
		addItemContainer.classList.add('hidden');
	}
});

formControl.onCancelClick(() => {
	event.preventDefault();
	formControl.clearForm();
	addItemContainer.classList.add('hidden');
});

//****************//
