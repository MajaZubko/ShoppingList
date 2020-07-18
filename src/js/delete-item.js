export const deleteItem = (li) => {
	const ul = li.parentNode;
	ul.removeChild(li);
	if (!ul.hasChildNodes()) {
		const h2 = ul.previousSibling;
		h2.parentNode.removeChild(h2);
	}
};
