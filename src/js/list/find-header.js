export const findHeader = (category) => {
	let h2;
	switch (category) {
		case 'beverages':
			h2 = 'Beverages';
			break;
		case 'bakery':
			h2 = 'Bakery';
			break;
		case 'dairy':
			h2 = 'Dairy';
			break;
		case 'frozenFoods':
			h2 = 'Frozen foods';
			break;
		case 'fruit':
			h2 = 'Fruit';
			break;
		case 'paperGoods':
			h2 = 'Paper goods';
			break;
		case 'personalCare':
			h2 = 'Personal care';
			break;
		case 'vegetables':
			h2 = 'Vegetables';
			break;
	}
	return h2;
};
