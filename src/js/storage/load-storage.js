import { getStorage } from './get-storage';
import { appendList } from '../list/append-list';
import { showCounter } from '../list/counter/show-counter';

export const loadStorage = () => {
	const storedItems = getStorage();
	console.log(storedItems);
	storedItems.forEach((item) => {
		//correct unit
		if (item.type === 'pcs') {
			item.type = 'x';
		} else if (item.type === 'weight') {
			item.type = 'kg';
		}
		//display item
		appendList(item);
		showCounter();
	});
};
