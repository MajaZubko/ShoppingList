import { showCounter } from './counter/show-counter';
import { deleteItem } from '../itemUtils/delete-item';

export const deleteItemListener = (deleteItemBtn) => {
	deleteItemBtn.addEventListener('click', () => {
		const li = deleteItemBtn.parentNode;
		deleteItem(li);
		showCounter();
	});
};
