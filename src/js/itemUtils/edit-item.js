import { deleteItem } from './delete-item';
import { addItem } from './add-item';

export const editItem = (li) => {
	deleteItem(li);
	addItem();
};
