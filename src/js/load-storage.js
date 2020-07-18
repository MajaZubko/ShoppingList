import { getStorage } from './get-storage';
import { appendList } from './append-list';
import { showCounter } from './show-counter';

export const loadStorage = () => {
	const storedItems = getStorage();
	storedItems.forEach((item) => {
		appendList(item);
		showCounter();
	});
};
