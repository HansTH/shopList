import React from 'react';
import Modal from './components/modal/Modal';
import Navbar from './components/navbar/Navbar';
import ShoppingList from './components/shoppingList/ShoppingList';
import ShoppingListState from './store/shoppingListState';
import { GlobalStyled } from './styles/GlobalStyles';

export default function App() {
	return (
		<div>
			<ShoppingListState>
				<GlobalStyled />
				<Navbar />
				<div className='container'>
					<ShoppingList />
				</div>
				<Modal />
			</ShoppingListState>
		</div>
	);
}
