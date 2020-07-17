import { FormControl } from './form-control';
export const showForm = (mode, content) => {
	const formControl = new FormControl();
	const addItemContainer = document.querySelector('#addItemContainer');
	const panelHeader = document.querySelector('.panelHeader');
	addItemContainer.classList.remove('hidden');

	if (!content) {
		formControl.clearForm();
	} else {
		const { name, type, quantity, category } = content;
		formControl.setForm({ name, type, quantity, category });
	}
	if (mode === 'add' || !mode) {
		panelHeader.innerHTML = 'Add item';
	} else if (mode === 'edit') {
		panelHeader.innerHTML = 'Edit item';
	}
};
