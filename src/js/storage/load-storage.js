import { getStorage } from './get-storage';
import { appendList } from '../list/append-list';
import { showCounter } from '../list/counter/show-counter';

export const loadStorage = () => {
	const storedItems = getStorage();
	storedItems.forEach((item) => {
		appendList(item);
		showCounter();
	});
};
