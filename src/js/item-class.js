import { FormControl } from './form-control';

export class Item {
	constructor() {
		const formControl = new FormControl();
		this.name = formControl.getName();
		this.quantity = formControl.getQuantity();
		this.type = formControl.getType();
		this.category = formControl.getCategory();
	}
}
