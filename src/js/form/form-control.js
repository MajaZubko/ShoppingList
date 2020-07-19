export class FormControl {
	constructor() {
		this.nameInput = document.querySelector('#itemTitle');
		this.quantity = document.querySelector('#itemQuantity');
		this.radioTypePcs = document.querySelector('#pcsRadio');
		this.radioTypeWeight = document.querySelector('#weightRadio');
		this.category = document.querySelector('#categorySelect');
		this.submitBtn = document.querySelector('#submitButton');
		this.cancelBtn = document.querySelector('#cancelButton');
	}

	getName() {
		return this.nameInput.value;
	}
	getQuantity() {
		return this.quantity.value;
	}
	getType() {
		if (this.radioTypePcs.checked) {
			this.type = 'x';
		} else {
			this.type = 'kg';
		}
		return this.type;
	}

	getCategory() {
		return this.category.value;
	}

	onSubmitClick(cb) {
		this.submitBtn.addEventListener('click', cb);
	}

	onCancelClick(cb) {
		this.cancelBtn.addEventListener('click', cb);
	}

	clearForm() {
		this.nameInput.value = '';
		this.quantity.value = '';
		this.category.selectedIndex = -1;
		this.category.value = '';
	}

	setForm({ name, type, quantity, category }) {
		this.nameInput.value = name;
		if (type === 'pcs') {
			this.radioTypePcs.checked = true;
		} else if (type === 'weight') {
			this.radioTypeWeight.checked = true;
		}
		this.quantity.value = quantity;
		this.category.value = category;
	}
}
