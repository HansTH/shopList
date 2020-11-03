import React, { useContext } from 'react';
import { ShoppingListContext } from '../../store/shoppingListState';
import styled from 'styled-components';
import { IShopItem } from '../../typescript';
import ShoppingCard from './ShoppingCard';

export default function ShoppingList() {
	const { shoppingList } = useContext(ShoppingListContext);

	let checkedShoppingList: IShopItem[] = [];
	let uncheckedShoppingList: IShopItem[] = [];

	if (shoppingList! !== undefined) {
		checkedShoppingList = shoppingList.filter((item) => item.isCompleted);
		uncheckedShoppingList = shoppingList.filter((item) => !item.isCompleted);
	}

	return (
		<ShoppingListStyles>
			{/* if both lists are empty, show message */}
			{uncheckedShoppingList.length === 0 &&
			checkedShoppingList.length === 0 ? (
				<h3>Your shopping list is empty. Add new item to your list.</h3>
			) : (
				<>
					{/* if unchecked list is NOT empty, show the list with the unchecked shopping items */}
					{uncheckedShoppingList.length > 0 ? (
						uncheckedShoppingList.map((item) => (
							<ShoppingCard key={item.id} shopItem={item} />
						))
					) : (
						<h3>
							All your shopping items are checked. Add new items or uncheck
							items in the complete list below.
						</h3>
					)}
				</>
			)}
			{/* if checked list is NOT empty show seperator line and the checked shopping items */}
			{checkedShoppingList.length > 0 &&
				checkedShoppingList.map(
					(item) =>
						item.isCompleted && (
							<>
								<div className='list-seperator' />
								<ShoppingCard key={item.id} shopItem={item} />
							</>
						)
				)}
		</ShoppingListStyles>
	);
}

const ShoppingListStyles = styled.div`
	h3 {
		padding-top: 2rem;
		text-align: center;
	}

	.list-seperator {
		width: 80%;
		height: 1px;
		background-color: var(--light-gray);
		margin: 1.3rem auto;
	}
`;
