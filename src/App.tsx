import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import { GlobalStyled } from './styles/GlobalStyles';
import { IShopItem, IShoppingList } from './typescript';

export default function App() {
	const [shoppingList, setShoppingList] = useState<IShoppingList>([]);

	const newShopItem = (inputText: string) => {
		// create new shop item
		const newItem: IShopItem = {
			id: Date.now(),
			item: inputText,
			isCompleted: false,
			date: Date.now(),
		};

		// add the new shop item to the shopping list
		setShoppingList([...shoppingList, newItem]);
	};

	const toggleChecked = (shopItem: IShopItem) => {
		// map through the shopping list and when both id's matched
		// toogle the item isCompleted property with the NOT(!) operator
		const newList = shoppingList.map((item) => {
			if (item.id === shopItem.id) {
				item.isCompleted = !shopItem.isCompleted;
				// return the other properties
				return item;
			}
			// return the other shop items that don't mached
			return item;
		});

		// replace the old shopping list with the updates list
		setShoppingList(newList);
	};

	const deleteShopItem = (shopItem: IShopItem) => {
		// return a new array that filter out the deleted shop item
		const newList = shoppingList.filter((item) => item.id !== shopItem.id);

		setShoppingList(newList);
	};

	return (
		<div className='App'>
			<GlobalStyled />
			<Navbar handleNewShopItem={newShopItem} />
			<div className='container'>
				<ShoppingList
					shoppingList={shoppingList}
					toggleChecked={toggleChecked}
					deleteShopItem={deleteShopItem}
				/>
			</div>
		</div>
	);
}
