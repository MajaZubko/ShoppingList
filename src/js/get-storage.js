export const getStorage = () => {
	const localStorage = window.localStorage;
	const itemsToParse = localStorage.getItem('items');
	if (itemsToParse) {
		const storedItems = JSON.parse(itemsToParse);
		return storedItems;
	} else {
		return [];
	}
};
