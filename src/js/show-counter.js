import { getItemProps } from './get-item-props';
import { sumQuantity } from './sum-quantity';

export const showCounter = () => {
	const counter = document.querySelector('.counter');
	const lis = document.querySelectorAll('li');
	//creating array of allItems
	const allItems = [];
	lis.forEach((li) => {
		allItems.push(getItemProps(li));
	});
	//sorting items depending on type
	const pcsItems = [];
	const weightItems = [];
	for (let i = 0; i < allItems.length; i++) {
		const type = allItems[i].type;
		if (type === 'pcs') {
			pcsItems.push(allItems[i]);
		} else if (type === 'weight') {
			weightItems.push(allItems[i]);
		}
	}
	//summing quantity of each type of items
	let totalPieces = sumQuantity(pcsItems);
	let totalWeight = sumQuantity(weightItems);
	//setting the detailed counter text
	let totalText;
	if (totalPieces === 0 && totalWeight === 0) {
		totalText = '';
	} else if (totalPieces === 0) {
		totalText = `Total of ${totalWeight} kg`;
	} else if (totalWeight === 0) {
		totalText = `Total of ${totalPieces} pcs`;
	} else {
		totalText = `Total of ${totalPieces} pcs and ${totalWeight} kg`;
	}
	//displaying the counter
	if (lis.length > 1) {
		counter.innerHTML = `
		<p>${lis.length} items on the list</p>
		<p>${totalText}</p>
		`;
	} else if (lis.length === 1) {
		counter.innerHTML = `1 item on the list`;
	} else if (lis.length === 0) {
		counter.innerHTML = '';
	}

	//save to local storage
	const localStorage = window.localStorage;
	localStorage.setItem('items', JSON.stringify(allItems));
};
