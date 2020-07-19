export const deleteDashes = (item) => {
	for (let char of item.category) {
		if (char === '-') {
			const splitCategory = item.category.split('-');
			const newCategory = splitCategory.join(' ');
			item.category = newCategory;
		}
	}
};
