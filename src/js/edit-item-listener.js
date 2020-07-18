import { showForm } from './show-form';
import { getItemProps } from './get-item-props';

export const editItemListener = (editItemBtn) => {
	editItemBtn.addEventListener('click', () => {
		const li = editItemBtn.parentNode;
		const item = getItemProps(li);
		showForm('edit', item, editItemBtn);
	});
};
