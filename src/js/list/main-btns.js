import { FormControl } from '../form/form-control';
import { MainBtnUtils } from './main-btn-utils';
import { showCounter } from './counter/show-counter';
import { addItem } from '../itemUtils/add-item';
import { showForm } from '../form/show-form';
import { editItem } from '../itemUtils/edit-item';
import { deleteHelperP } from '../form/delete-helper-p';
import { deleteItem } from '../itemUtils/delete-item';
import { InputValidation } from '../form/input-validation';

export const mainBtns = () => {
	const addBtnUtils = new MainBtnUtils('addBtn');
	const deleteAllBtnUtils = new MainBtnUtils('deleteAllBtn');
	const printListUtils = new MainBtnUtils('printBtn');

	const inputValidation = new InputValidation();
	const formControl = new FormControl();

	addBtnUtils.onClick(() => {
		showForm();
	});

	deleteAllBtnUtils.onClick(() => {
		const checkboxes = document.querySelectorAll('.checkbox');
		checkboxes.forEach((checkbox) => {
			const checked = [];
			if (checkbox.checked) {
				checked.push(checkbox);
			}
			checked.forEach((cb) => {
				const li = cb.parentNode;
				deleteItem(li);
				showCounter();
			});
		});
	});

	printListUtils.onClick(() => {
		const listToPrint = document.querySelector('.list');
		window.print();
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
		inputValidation.hideAllErrors();
	});
};
