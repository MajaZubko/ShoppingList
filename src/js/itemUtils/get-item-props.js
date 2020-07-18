export const getItemProps = (li) => {
	const classList = li.classList;
	let item = {};
	for (let i = 0; i < classList.length; i++) {
		const parts = classList[i].split('-');
		let value = parts[0];
		let key = parts[1];
		if (value === 'x') {
			value = 'pcs';
		} else if (value === 'kg') {
			value = 'weight';
		}
		item[key] = value;
	}
	return item;
};
