import { showForm } from '../form/show-form';
import { getItemProps } from '../itemUtils/get-item-props';
import { deleteDashes } from '../itemUtils/delete-dashes';

export const editItemListener = (editItemBtn) => {
	editItemBtn.addEventListener('click', () => {
		const li = editItemBtn.parentNode;
		const item = getItemProps(li);
		deleteDashes(item);
		showForm('edit', item, editItemBtn);
	});
};
