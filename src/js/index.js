import { FormControl } from './form-control';
import { AddPanelUtils } from './add-panel-utils';
import { Item } from './item-class';
import { appendList } from './append-list';
import { findList } from './find-list';
import { InputValidation } from './input-validation';

const formControl = new FormControl();
const addPanelUtils = new AddPanelUtils();

const mainList = document.querySelector('.main-list');
const addItemContainer = document.querySelector('#addItemContainer');

//***buttons functionality***//
addPanelUtils.onClick(() => {
	addItemContainer.classList.remove('hidden');
	formControl.clearForm();
});

formControl.onSubmitClick(() => {
	event.preventDefault();

	const newItem = new Item();
	appendList({
		category: newItem.category,
		name: newItem.name,
		quantity: newItem.quantity,
		type: newItem.type
	});
	addItemContainer.classList.add('hidden');
});

formControl.onCancelClick(() => {
	event.preventDefault();
	formControl.clearForm();
	addItemContainer.classList.add('hidden');
});

//****************//
