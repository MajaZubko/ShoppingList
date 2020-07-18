import { showCounter } from './counter';
import { deleteItem } from './delete-item';

export const deleteItemListener = (deleteItemBtn) => {
	deleteItemBtn.addEventListener('click', () => {
		const li = deleteItemBtn.parentNode;
		deleteItem(li);
		showCounter();
	});
};
