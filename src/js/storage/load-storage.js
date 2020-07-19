import { getStorage } from './get-storage';
import { appendList } from '../list/append-list';
import { showCounter } from '../list/counter/show-counter';
import { deleteDashes } from '../itemUtils/delete-dashes';

export const loadStorage = () => {
	const storedItems = getStorage();
	if (storedItems.length > 0) {
		storedItems.forEach((item) => {
			//correct unit
			if (item.type === 'pcs') {
				item.type = 'x';
			} else if (item.type === 'weight') {
				item.type = 'kg';
			}

			deleteDashes(item);
			//display item
			appendList(item);
			showCounter();
		});
	}
};
