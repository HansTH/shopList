import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	ButtonClickEvent,
	cancelEditShopItem,
	InputChangeEvent,
	IShopItem,
	SubmitFormEvent,
	updateShopItem,
} from '../../typescript';

interface IProps {
	cancelEditShopItem: cancelEditShopItem;
	shopItem: IShopItem;
	updateShopItem: updateShopItem;
}

export default function EditItem({
	cancelEditShopItem,
	shopItem,
	updateShopItem,
}: IProps) {
	const [editItem, setEditItem] = useState<IShopItem>(shopItem);

	useEffect(() => {
		if (shopItem.item !== '') {
			setEditItem(shopItem);
		}
	}, [shopItem]);

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
		cancelEditShopItem();
	};

	const handleSubmit = (e: SubmitFormEvent, updateItem: IShopItem) => {
		e.preventDefault();
		updateShopItem(updateItem);
	};

	const handleUpdateShopItem = (e: ButtonClickEvent, updateItem: IShopItem) => {
		e.preventDefault();
		updateShopItem(updateItem);
	};

	return (
		<EditItemStyles>
			<h2>Edit Shop Item</h2>
			<form
				onSubmit={(e: SubmitFormEvent) => {
					handleSubmit(e, editItem);
				}}
			>
				<input
					type='text'
					value={editItem.item}
					onChange={(e: InputChangeEvent) => handleChange(e)}
				/>
				<button
					type='button'
					onClick={(e: ButtonClickEvent) => handleUpdateShopItem(e, editItem)}
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
