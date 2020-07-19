export const getItemProps = (li) => {
	const classList = li.classList;
	let item = {};
	for (let i = 0; i < classList.length; i++) {
		const parts = classList[i].split('-');
		let values = [];
		for (let i = 0; i < parts.length - 1; i++) {
			values.push(parts[i]);
		}
		let value = values.join('-');
		let key = parts[parts.length - 1];
		if (value === 'x') {
			value = 'pcs';
		} else if (value === 'kg') {
			value = 'weight';
		}
		item[key] = value;
	}
	return item;
};
