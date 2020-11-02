import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import plusIcon from '../assets/images/plusIcon.png';
import { ShoppingListContext } from '../store/shoppingListState';
import { ButtonClickEvent, InputChangeEvent, IShopItem } from '../typescript';

export default function InputField() {
	const [inputText, setInputText] = useState('');

	// disable submit when inputfield is empty
	const disableSubmit = inputText === '';

	const { newShoppingItem } = useContext(ShoppingListContext);

	function handleClick(e: ButtonClickEvent, inputText: string) {
		e.preventDefault();

		const newItem: IShopItem = {
			id: Date.now(),
			isCompleted: false,
			item: inputText,
			date: Date.now(),
		};

		newShoppingItem!(newItem);
		// reset inputfield
		setInputText('');
	}

	return (
		<InputFieldStyles disableSubmit={disableSubmit}>
			<input
				onChange={(e: InputChangeEvent) => setInputText(e.target.value)}
				type='text'
				value={inputText}
				placeholder='Add new shopping item'
			/>
			<button
				onClick={(e) => handleClick(e, inputText)}
				type='submit'
				disabled={disableSubmit}
			>
				<img src={plusIcon} alt='plus icon' />
			</button>
		</InputFieldStyles>
	);
}

interface IStyledProps {
	disableSubmit: boolean;
}

const InputFieldStyles = styled.form<IStyledProps>`
	display: flex;
	background-color: var(--dark-green);
	width: 100%;
	height: 40px;
	border-radius: 4px 20px 20px 4px;

	input {
		width: 100%;
		background-color: transparent;
		border: none;
		padding: 0 0.5rem;
		color: var(--white);
		font-size: 1.5rem;

		&::placeholder {
			color: var(--green);
		}
	}

	button img {
		/* rotate plusIcon 45deg when inputfield is empty */
		transform: rotate(
			${({ disableSubmit }) => (disableSubmit ? '45deg' : '0deg')}
		);
		width: 40px;
		transition: all ease-in-out 0.3s;
	}
`;
