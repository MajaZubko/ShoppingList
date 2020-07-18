import { FormControl } from './form-control';
export class InputValidation {
	constructor() {
		this.formControl = new FormControl();
		this.nameInput = this.formControl.nameInput;
		this.quantityInput = this.formControl.quantity;
		this.categoryInput = this.formControl.category;
		this.submitBtn = document.querySelector('#submitButton');
	}

	validateInputs() {
		this.validateName();
		this.validateQuantity();
		this.validateCategory();
		const errorPs = document.querySelectorAll('.error');
		if (errorPs.length > 0) {
			return false;
		} else {
			return true;
		}
	}

	showError(field, errName, message) {
		if (!this.isError(errName)) {
			const err = document.createElement('p');
			err.classList.add('error');
			err.setAttribute('id', `${errName}Error`);
			err.innerHTML = message;
			field.parentNode.insertBefore(err, field.nextSibling);
		}
	}

	hideError(errName) {
		const err = this.isError(errName);
		if (err) {
			err.parentNode.removeChild(err);
		}
	}

	isError(errName) {
		const err = document.querySelector(`#${errName}Error`);
		if (err) {
			return err;
		}
	}

	validateName() {
		if (this.nameInput.value === '') {
			this.showError(this.nameInput, 'nameInput', 'Please enter item name');
		} else {
			this.hideError('nameInput');
		}
	}

	validateQuantity() {
		const quantity = this.quantityInput.value;
		if (quantity <= 0) {
			this.showError(this.quantityInput, 'quantityInput', 'Must be positive number');
		} else if (!quantity) {
			this.showError(this.quantityInput, 'quantityInput', 'Please enter quantity');
		} else {
			this.hideError('quantityInput');
		}
	}

	validateCategory() {
		const selectedIndex = this.categoryInput.selectedIndex;
		if (selectedIndex < 0) {
			this.showError(this.categoryInput, 'categoryInput', 'Please choose category');
		} else {
			this.hideError('categoryInput');
		}
	}
}
