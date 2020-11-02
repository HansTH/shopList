import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ShoppingListContext } from '../../store/shoppingListState';
import {
	ButtonClickEvent,
	InputChangeEvent,
	IShopItem,
	SubmitFormEvent,
} from '../../typescript';

const initialItem = {
	id: 0,
	date: 0,
	isCompleted: false,
	item: '',
};

export default function EditItem() {
	const [editItem, setEditItem] = useState<IShopItem>(initialItem);
	const { cancelShoppingItem, editShopItem, updateShoppingItem } = useContext(
		ShoppingListContext
	);

	useEffect(() => {
		if (editShopItem !== undefined) setEditItem(editShopItem!);
	}, [editShopItem]);

	const handleChange = (e: InputChangeEvent) => {
		e.preventDefault();
		setEditItem({
			id: editItem.id,
			date: editItem.date,
			isCompleted: editItem.isCompleted,
			item: e.target.value,
		});
	};

	const handleCancelEditShopItem = (e: ButtonClickEvent) => {
		e.preventDefault();
		cancelShoppingItem!();
	};

	const handleSubmit = (e: SubmitFormEvent) => {
		e.preventDefault();
		updateShoppingItem!(editItem);
		cancelShoppingItem!();
	};

	const handleUpdateShopItem = (e: ButtonClickEvent) => {
		e.preventDefault();
		updateShoppingItem!(editItem);
		cancelShoppingItem!();
	};

	return (
		<EditItemStyles>
			<h2>Edit Shop Item</h2>
			<form
				onSubmit={(e: SubmitFormEvent) => {
					handleSubmit(e);
				}}
			>
				<input
					type='text'
					value={editItem.item}
					onChange={(e: InputChangeEvent) => handleChange(e)}
				/>
				<button
					type='button'
					onClick={(e: ButtonClickEvent) => handleUpdateShopItem(e)}
				>
					Update
				</button>
				<button
					type='button'
					onClick={(e: ButtonClickEvent) => handleCancelEditShopItem(e)}
				>
					Cancel
				</button>
			</form>
		</EditItemStyles>
	);
}

const EditItemStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-content: space-between;
	padding: 1rem;

	h2 {
		padding: 0.5rem 2rem;
		text-align: center;
		color: var(--green);
	}

	input {
		width: 100%;
		border: none;
		padding: 0.5rem;
		border-radius: var(--border-radius);
		font-size: 1rem;
	}

	button {
		display: block;
		width: 100%;
		padding: 0.5rem;
		background-color: var(--green);
		color: var(--white);
		font-size: 1.2rem;
		font-weight: bold;
		border: none;
		border-radius: var(--border-radius);
		margin-top: 1rem;
		transition: all ease-in-out 0.3s;

		&:hover {
			background-color: var(--dark-green);
		}
	}
`;
