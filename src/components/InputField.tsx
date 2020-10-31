import React, { useState } from 'react';
import styled from 'styled-components';
import plusIcon from '../assets/images/plusIcon.png';
import {
	ButtonClickEvent,
	IShopItemProps,
	InputChangeEvent,
} from '../typescript';

export default function InputField({ handleNewShopItem }: IShopItemProps) {
	const [inputText, setInputText] = useState('');

	// update the inputText state when the <input/> changed
	const handleInputChange = (e: InputChangeEvent) => {
		setInputText(e.target.value);
	};

	function handleClick(e: ButtonClickEvent, inputText: string) {
		e.preventDefault();
		// submit the inputText for a new shopping item
		handleNewShopItem(inputText);
		// reset the inputText state
		setInputText('');
	}

	return (
		<InputFieldStyles>
			<input
				onChange={(e) => handleInputChange(e)}
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
