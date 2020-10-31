import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import { GlobalStyled } from './styles/GlobalStyles';
import { IShopItem } from './typescript';

export default function App() {
	const [shopItems, setShopItem] = useState<IShopItem[]>([]);

	const newShopItem = (inputText: string) => {
		const newItem: IShopItem = {
			id: Date.now(),
			item: inputText,
			isCompleted: false,
			date: Date.now(),
		};

		setShopItem([...shopItems, newItem]);
	};

	const toggleCheckShopItem = (shopItem: IShopItem) => {
		const newList = shopItems.map((item) => {
			if (item.id === shopItem.id) {
				item.isCompleted = !shopItem.isCompleted;
				return item;
			}
			return item;
		});

		setShopItem(newList);
	};

	return (
		<div className='App'>
			<GlobalStyled />
			<Navbar handleNewShopItem={newShopItem} />
			<div className='container'>
				<ShoppingList
					shoppingList={shopItems}
					toggleCheckShopItem={toggleCheckShopItem}
				/>
			</div>
		</div>
	);
}
