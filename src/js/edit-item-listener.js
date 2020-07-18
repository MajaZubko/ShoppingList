import { showForm } from './show-form';
import { getItemProps } from './get-item-props';

export const editItemListener = (editItemBtn) => {
	editItemBtn.addEventListener('click', () => {
		const item = getItemProps(editItemBtn);
		showForm('edit', item, editItemBtn);
	});
};
