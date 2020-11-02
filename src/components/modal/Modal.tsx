import React, { useContext } from 'react';
import styled from 'styled-components';
import { ShoppingListContext } from '../../store/shoppingListState';
import EditItem from './EditItem';

export default function Modal() {
	const { isModalOpen, cancelShoppingItem } = useContext(ShoppingListContext);

	return (
		<>
			<OverlayStyles isOpen={isModalOpen!} onClick={cancelShoppingItem} />
			<ModalStyles isOpen={isModalOpen!}>
				<EditItem />
			</ModalStyles>
		</>
	);
}

interface IStyledProps {
	isOpen: boolean;
}

const ModalStyles = styled.div<IStyledProps>`
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	background-color: var(--white);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	position: absolute;
	top: calc(50vh - 150px);
	left: calc(50vw - 150px);
	z-index: 1000;
	overflow: hidden;
	z-index: 100;
`;

const OverlayStyles = styled.div<IStyledProps>`
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
`;
