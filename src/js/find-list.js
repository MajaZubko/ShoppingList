export const findList = (category) => {
	const lists = document.querySelectorAll('.main-list');

	lists.forEach((list) => {
		if (list.classList.contains(category)) {
			return list;
		}
	});
};
