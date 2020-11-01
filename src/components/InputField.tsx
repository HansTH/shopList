import React, { useState } from 'react';
import styled from 'styled-components';
import plusIcon from '../assets/images/plusIcon.png';
import { ButtonClickEvent, newShopItem, InputChangeEvent } from '../typescript';

interface IProps {
	newShopItem: newShopItem;
}

export default function InputField({ newShopItem }: IProps) {
	const [inputText, setInputText] = useState('');

	function handleClick(e: ButtonClickEvent, inputText: string) {
		e.preventDefault();
		// submit the inputText for a new shopping item
		newShopItem(inputText);
		// reset the inputText state
		setInputText('');
	}

	return (
		<InputFieldStyles>
			<input
				onChange={(e: InputChangeEvent) => setInputText(e.target.value)}
				type='text'
				value={inputText}
				placeholder='Add new shopping item'
			/>
			<button onClick={(e) => handleClick(e, inputText)} type='submit'>
				<img src={plusIcon} alt='plus icon' />
			</button>
		</InputFieldStyles>
	);
}

const InputFieldStyles = styled.form`
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
		width: 40px;
	}
`;
