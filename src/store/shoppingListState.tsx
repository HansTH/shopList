import React, { createContext, useReducer } from 'react';
import {
	IShopItem,
	IShoppingListState,
	ReactChildrenComponent,
} from '../typescript';
import shoppingListReducer from './shoppingListReducer';

// TYPES
import {
	NEW_SHOPPING_ITEM,
	TOGGLE_COMPLETED,
	DELETE_SHOPPING_ITEM,
	CANCEL_SHOPPING_ITEM,
	EDIT_SHOPPING_ITEM,
	UPDATA_SHOPPING_ITEM,
} from './types';

const initialState: IShoppingListState = {
	shoppingList: [],
};

export const ShoppingListContext = createContext<IShoppingListState>(
	initialState
);

interface IProps {
	children: ReactChildrenComponent;
}

export default function ShoppingListState({ children }: IProps) {
	const [state, dispatch] = useReducer(shoppingListReducer, initialState);

	// New shopping item
	const newShoppingItem = (newItem: IShopItem) => {
		dispatch({
			type: NEW_SHOPPING_ITEM,
			payload: newItem,
		});
	};

	// Toggle isCompleted
	const toggleCompleted = (toggleShopItem: IShopItem) => {
		dispatch({
			type: TOGGLE_COMPLETED,
			payload: toggleShopItem,
		});
	};

	// Delete shopping item
	const deleteShoppingItem = (shopItem: IShopItem) => {
		dispatch({
			type: DELETE_SHOPPING_ITEM,
			payload: shopItem,
		});
	};

	// Cancel
	const cancelShoppingItem = () => {
		dispatch({
			type: CANCEL_SHOPPING_ITEM,
			payload: null,
		});
	};

	const editShoppingItem = (editItem: IShopItem) => {
		dispatch({
			type: EDIT_SHOPPING_ITEM,
			payload: editItem,
		});
	};

	// Update shop item
	const updateShoppingItem = (shopItem: IShopItem) => {
		dispatch({
			type: UPDATA_SHOPPING_ITEM,
			payload: shopItem,
		});
	};

	return (
		<ShoppingListContext.Provider
			value={{
				shoppingList: state.shoppingList,
				editShopItem: state.editShopItem,
				isModalOpen: state.isModalOpen,
				newShoppingItem,
				toggleCompleted,
				deleteShoppingItem,
				cancelShoppingItem,
				editShoppingItem,
				updateShoppingItem,
			}}
		>
			{children}
		</ShoppingListContext.Provider>
	);
}
