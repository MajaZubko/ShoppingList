export const sumQuantity = (arr) => {
	let total = 0;
	for (let item of arr) {
		const quantity = parseFloat(item.quantity);
		total += quantity;
	}
	return total;
};
