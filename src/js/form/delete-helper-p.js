export const deleteHelperP = () => {
	//deleting a p tag linking the edited item to edit panel
	const helperP = document.querySelector('.liLink');
	const parentPanel = helperP.parentElement;
	parentPanel.removeChild(helperP);
};
