export const deleteHelperP = () => {
	const helperP = document.querySelector('.liLink');
	const parentPanel = helperP.parentElement;
	parentPanel.removeChild(helperP);
};
