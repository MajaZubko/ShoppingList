import { FormControl } from './form-control';
import { AddPanelUtils } from './add-panel-utils';
import { Item } from './item-class';
import { appendList } from './append-list';
import { InputValidation } from './input-validation';
import { showForm } from './show-form';
import { showCounter } from './counter';

const formControl = new FormControl();
const addPanelUtils = new AddPanelUtils();

const addItemContainer = document.querySelector('#addItemContainer');

//***buttons functionality***//
addPanelUtils.onClick(() => {
	showForm();
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
		addItemContainer.classList.add('hidden');
		showCounter();
	}
});

formControl.onCancelClick(() => {
	event.preventDefault();
	formControl.clearForm();
	addItemContainer.classList.add('hidden');
	showCounter();
});

//****************//
