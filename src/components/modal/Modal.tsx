import React from 'react';
import styled from 'styled-components';
import { DivClickEvent } from '../../typescript';

interface IProps {
	cancelEditShopItem: () => void;
	isModalOpen: boolean;
}

interface IStyledProps {
	isModalOpen: boolean;
}

export default function Modal({ cancelEditShopItem, isModalOpen }: IProps) {
	const handleCancelEditShopItem = (e: DivClickEvent) => {
		// stop bubbling the DOM tree
		e.stopPropagation();
		cancelEditShopItem();
	};

	return (
		<OverlayStyles
			onClick={(e: DivClickEvent) => handleCancelEditShopItem(e)}
			isModalOpen={isModalOpen}
		>
			<ModalStyles
				onClick={(e: DivClickEvent) => handleCancelEditShopItem(e)}
				isModalOpen={isModalOpen}
			></ModalStyles>
		</OverlayStyles>
	);
}

const ModalStyles = styled.div<IStyledProps>`
	display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};
	width: 300px;
	height: 300px;
	background-color: var(--white);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	position: absolute;
	top: calc(50vh - 150px);
	left: calc(50vw - 150px);
	z-index: 1000;
	transition: all ease-in-out 0.3s;
`;

const OverlayStyles = styled.div<IStyledProps>`
	display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.25);
`;
