export class AddPanelUtils {
	constructor() {
		this.addBtn = document.querySelector('#addBtn');
		this.addItemContainer = document.querySelector('#addItemContainer');
	}

	onClick(cb) {
		this.addBtn.addEventListener('click', cb);
	}
}
