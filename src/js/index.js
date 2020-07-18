import { FormControl } from './form-control';
import { MainBtnUtils } from './main-btn-utils';
import { showCounter } from './show-counter';
import { addItem } from './add-item';
import { showForm } from './show-form';
import { editItem } from './edit-item';
import { deleteHelperP } from './delete-helper-p';
import { deleteItem } from './delete-item';
import { loadStorage } from './load-storage';

const addBtnUtils = new MainBtnUtils('addBtn');
const deleteAllBtnUtils = new MainBtnUtils('deleteAllBtn');
const formControl = new FormControl();

loadStorage();

//***buttons functionality***//
addBtnUtils.onClick(() => {
	showForm();
});

deleteAllBtnUtils.onClick(() => {
	const lis = document.querySelectorAll('li');
	lis.forEach((li) => {
		deleteItem(li);
		showCounter();
	});
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
		for (let li of lis) {
			if (li.classList.value === liClassList) {
				foundLi = li;
			}
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
