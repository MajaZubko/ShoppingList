export class MainBtnUtils {
	constructor(btn) {
		this.btn = document.querySelector(`#${btn}`);
	}

	onClick(cb) {
		this.btn.addEventListener('click', cb);
	}
}
