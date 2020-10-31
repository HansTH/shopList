import React from 'react';
import styled from 'styled-components';
import { IShopItem, IShoppingList, toggleChecked } from '../typescript';

import ShoppingCard from './ShoppingCard';

interface IProps {
	shoppingList: IShopItem[];
	toggleChecked: toggleChecked;
}

export default function ShoppingList({ shoppingList, toggleChecked }: IProps) {
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
