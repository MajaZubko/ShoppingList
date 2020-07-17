import { showCounter } from './counter';

export const deleteItem = (deleteItemBtn) => {
	deleteItemBtn.addEventListener('click', () => {
		const li = deleteItemBtn.parentNode;
		const ul = li.parentNode;
		ul.removeChild(li);
		if (!ul.hasChildNodes()) {
			const h2 = ul.previousSibling;
			h2.parentNode.removeChild(h2);
		}
		showCounter();
	});
};
