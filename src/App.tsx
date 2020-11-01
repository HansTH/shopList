import React, { useState } from 'react';
import Modal from './components/modal/Modal';
import Navbar from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import { GlobalStyled } from './styles/GlobalStyles';
import { IShopItem, shoppingList } from './typescript';

export default function App() {
	// initial shop item
	const initialShopItem: IShopItem = {
		id: 0,
		date: 0,
		isCompleted: false,
		item: '',
	};

	const [shoppingList, setShoppingList] = useState<shoppingList>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedShopItem, setSelectedShopItem] = useState<IShopItem>(
		initialShopItem
	);

	// CREATE NEW SHOP ITEM
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

	// TOOGLE SHOP ITEM COMPLEET
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

	// DELETE SHOP ITEM
	const deleteShopItem = (shopItem: IShopItem) => {
		// return a new array that filter out the deleted shop item
		const newList = shoppingList.filter((item) => item.id !== shopItem.id);

		setShoppingList(newList);
	};

	// CANCEL EDIT ITEM
	const cancelEditShopItem = () => {
		// reset shopItem to the intial value
		setSelectedShopItem(initialShopItem);
		// close modal
		setIsModalOpen(false);
	};

	// GET SHOP ITEM
	const getShopItem = (shopItem: IShopItem) => {
		// open modal
		setIsModalOpen(true);
		// set the edit item to the shop
		setSelectedShopItem(shopItem);
	};

	// UPDATE ITEM
	const updateShopItem = (updateItem: IShopItem) => {
		const updateList = shoppingList.map((item) => {
			// if item matched, replace the item with the update item
			if (item.id === updateItem.id) {
				//  return the new update item
				return (item = updateItem);
			} else {
				// if not matched return the current item
				return item;
			}
		});

		setShoppingList(updateList);
		cancelEditShopItem();
	};

	return (
		<div>
			<GlobalStyled />
			<Navbar newShopItem={newShopItem} />
			<div className='container'>
				<ShoppingList
					shoppingList={shoppingList} // show the shopping list
					toggleChecked={toggleChecked} // toggle shop item checked
					deleteShopItem={deleteShopItem} // delete the selected shop item
					getShopItem={getShopItem} // get the selected shop item
				/>
			</div>
			<Modal
				cancelEditShopItem={cancelEditShopItem} // cancel edit
				isModalOpen={isModalOpen} // modal open
				selectedShopItem={selectedShopItem} // selected item to edit
				updateShopItem={updateShopItem} // update the edit item
			/>
		</div>
	);
}
