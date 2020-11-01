import React from 'react';
import styled from 'styled-components';
import {
	cancelEditShopItem,
	IShopItem,
	updateShopItem,
} from '../../typescript';
import EditItem from './EditItem';

interface IProps {
	cancelEditShopItem: cancelEditShopItem;
	isModalOpen: boolean;
	selectedShopItem: IShopItem;
	updateShopItem: updateShopItem;
}

interface IStyledProps {
	isModalOpen: boolean;
}

export default function Modal({
	cancelEditShopItem,
	isModalOpen,
	selectedShopItem,
	updateShopItem,
}: IProps) {
	return (
		<>
			<OverlayStyles onClick={cancelEditShopItem} isModalOpen={isModalOpen} />
			<ModalStyles isModalOpen={isModalOpen}>
				<EditItem
					cancelEditShopItem={cancelEditShopItem}
					shopItem={selectedShopItem}
					updateShopItem={updateShopItem}
				/>
			</ModalStyles>
		</>
	);
}

const ModalStyles = styled.div<IStyledProps>`
	display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};
	background-color: var(--white);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	position: absolute;
	top: calc(50vh - 150px);
	left: calc(50vw - 150px);
	z-index: 1000;
	overflow: hidden;
	transition: all ease-in-out 0.3s;
	z-index: 100;
`;

const OverlayStyles = styled.div<IStyledProps>`
	display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
`;
