import {
	IShopItem,
	IShoppingListReducerAction,
	IShoppingListState,
} from '../typescript';

import {
	NEW_SHOPPING_ITEM,
	TOGGLE_COMPLETED,
	DELETE_SHOPPING_ITEM,
	CANCEL_SHOPPING_ITEM,
	EDIT_SHOPPING_ITEM,
	UPDATA_SHOPPING_ITEM,
} from './types';

export default function shoppingListReducer(
	state: IShoppingListState,
	action: IShoppingListReducerAction
) {
	switch (action.type) {
		// Add new shopping item
		case NEW_SHOPPING_ITEM:
			return {
				...state,
				shoppingList: [action.payload, ...state.shoppingList!],
			};

		// Toggle isCompleted
		case TOGGLE_COMPLETED:
			const toggleList = state.shoppingList!.map((item) => {
				if (item.id === action.payload.id) {
					const newItem: IShopItem = {
						id: action.payload.id,
						isCompleted: !action.payload.isCompleted,
						date: action.payload.date,
						item: action.payload.item,
					};
					return newItem;
				}
				return item;
			});

			return {
				...state,
				shoppingList: toggleList,
			};

		// Delete shopping item
		case DELETE_SHOPPING_ITEM:
			const newList = state.shoppingList!.filter(
				(item) => item.id !== action.payload.id
			);

			return {
				...state,
				shoppingList: newList,
			};

		// Edit shopping item
		case EDIT_SHOPPING_ITEM:
			return {
				...state,
				editShopItem: action.payload,
				isModalOpen: true,
			};

		// Cancel
		case CANCEL_SHOPPING_ITEM:
			return {
				...state,
				// editShopItem: action.payload,
				isModalOpen: false,
			};

		// Update shop item
		case UPDATA_SHOPPING_ITEM:
			const updateList = state.shoppingList!.map((item) => {
				if (item.id === action.payload.id) {
					return action.payload;
				} else {
					return item;
				}
			});

			return {
				...state,
				shoppingList: updateList,
			};

		// Return the unchanged state when the above cases not matched
		default:
			return state;
	}
}
