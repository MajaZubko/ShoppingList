import { FormControl } from './form-control';
import { AddPanelUtils } from './add-panel-utils';
import { showCounter } from './counter';
import { addItem } from './add-item';
import { showForm } from './show-form';
import { editItem } from './edit-item';
import { deleteHelperP } from './delete-helper-p';

const addPanelUtils = new AddPanelUtils();
const formControl = new FormControl();

//***buttons functionality***//
addPanelUtils.onClick(() => {
	showForm();
});

formControl.onSubmitClick(() => {
	event.preventDefault();
	const panelHeader = document.querySelector('.panelHeader');
	//if adding
	if (panelHeader.innerHTML === 'Add item') {
		addItem();
	} else if (panelHeader.innerHTML === 'Edit item') {
		//if editing
		const liClassList = document.querySelector('.liLink').innerText;
		const lis = document.querySelectorAll('li');
		let foundLi;
		for (let i = 0; i < lis.length; i++) {
			for (let j = 0; j < 4; j++)
				if (lis[i].classList.value === liClassList) {
					foundLi = lis[i];
				}
		}
		if (!foundLi) {
			//error, no such item
		}
		editItem(foundLi);
		deleteHelperP();
	}
});

formControl.onCancelClick(() => {
	event.preventDefault();
	formControl.clearForm();
	addItemContainer.classList.add('hidden');
	showCounter();
});

//****************//
