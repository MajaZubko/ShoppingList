export const showCounter = () => {
	const counter = document.querySelector('.counter');
	const lis = document.querySelectorAll('li');
	if (lis.length > 0) {
		counter.innerHTML = lis.length;
	}
};
