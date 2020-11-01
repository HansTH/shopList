import React from 'react';
import styled from 'styled-components';
import {
	deleteShopItem,
	IShopItem,
	IShoppingList,
	toggleChecked,
} from '../typescript';

import ShoppingCard from './ShoppingCard';

interface IProps {
	shoppingList: IShopItem[];
	toggleChecked: toggleChecked;
	deleteShopItem: deleteShopItem;
}

export default function ShoppingList({
	shoppingList,
	toggleChecked,
	deleteShopItem,
}: IProps) {
	const checkedShoppingList: IShoppingList = [];
	const uncheckedShoppingList: IShoppingList = [];

	shoppingList.map((item) => {
		if (item.isCompleted) {
			return checkedShoppingList.push(item);
		} else {
			return uncheckedShoppingList.push(item);
		}
	});

	return (
		<ShoppingListStyles>
			<>
				{uncheckedShoppingList.map((item) => (
					<ShoppingCard
						key={item.id}
						shopItem={item}
						toggleChecked={toggleChecked}
						deleteShopItem={deleteShopItem}
					/>
				))}
			</>
			{checkedShoppingList.length > 0 && <div className='list-seperator' />}
			<>
				{checkedShoppingList.map((item) => (
					<ShoppingCard
						key={item.id}
						shopItem={item}
						toggleChecked={toggleChecked}
						deleteShopItem={deleteShopItem}
					/>
				))}
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
