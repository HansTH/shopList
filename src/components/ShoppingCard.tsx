import React, { useContext } from 'react';
import styled from 'styled-components';
import { IShopItem } from '../typescript';
import { ShoppingListContext } from '../store/shoppingListState';

// Icons
import uncheckedIcon from '../assets/images/uncheckedIcon.png';
import checkedIcon from '../assets/images/checkedIcon.png';
import editIcon from '../assets/images/editIcon.png';
import deleteIcon from '../assets/images/deleteIcon.png';

interface IProps {
	shopItem: IShopItem;
}

export default function ShoppingCard({ shopItem }: IProps) {
	const { toggleCompleted, deleteShoppingItem, editShoppingItem } = useContext(
		ShoppingListContext
	);

	return (
		<ShoppingCardStyles>
			<h2>{shopItem.item}</h2>
			<button onClick={() => toggleCompleted!(shopItem)} type='submit'>
				<img
					src={shopItem.isCompleted ? checkedIcon : uncheckedIcon}
					alt='unchecked icon'
				/>
			</button>
			<div className='seperator' />
			<button
				onClick={
					shopItem.isCompleted
						? () => deleteShoppingItem!(shopItem)
						: () => editShoppingItem!(shopItem)
				}
			>
				<img
					src={shopItem.isCompleted ? deleteIcon : editIcon}
					alt='edit icon'
				/>
			</button>
		</ShoppingCardStyles>
	);
}

const ShoppingCardStyles = styled.div`
	display: flex;
	align-items: center;
	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
	border-radius: 4px;
	padding: 0 0.2rem 0 0.5rem;
	margin: 1rem 0;

	h2 {
		width: 100%;
		font-weight: normal;
	}

	.seperator {
		background-color: #f0f0f0;
		border: 1px solid var(--light-gray);
		width: 1px;
		height: 30px;
		margin: 0 0.25rem;
	}

	button {
		border: none;
		background-color: transparent;
		width: 40px;
		height: 40px;
	}
	button img {
		height: 22px;
	}
`;
