import { FormControl } from './form-control';
export class InputValidation {
	constructor() {
		this.formControl = new FormControl();
		this.nameInput = this.formControl.nameInput;
		this.quantityInput = this.formControl.quantity;
		this.categoryInput = this.formControl.category;
	}

	validateName() {
		//not empty
	}

	validateQuantity() {
		//>0
		//zaokrąglanie do 0.01
	}

	validateCategory() {
		//not empty
	}
}
