import React, { useContext } from 'react';
import { ShoppingListContext } from '../store/shoppingListState';
import styled from 'styled-components';
import { IShopItem } from '../typescript';
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
			<>
				{uncheckedShoppingList.map((item) => (
					<ShoppingCard key={item.id} shopItem={item} />
				))}
			</>

			{checkedShoppingList.length > 0 && <div className='list-seperator' />}

			<>
				{checkedShoppingList.map(
					(item) =>
						item.isCompleted && <ShoppingCard key={item.id} shopItem={item} />
				)}
			</>
		</ShoppingListStyles>
	);
}

const ShoppingListStyles = styled.div`
	.list-seperator {
		width: 80%;
		height: 1px;
		background-color: var(--light-gray);
		margin: 2rem auto;
	}
`;
