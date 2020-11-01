import React from 'react';
import styled from 'styled-components';
import { newShopItem } from '../typescript';
import InputField from './InputField';

interface IProps {
	newShopItem: newShopItem;
}

export default function Navbar({ newShopItem }: IProps) {
	return (
		<NavbarStyles>
			<div className='container'>
				<div className='navbar'>
					<p>Welcome Hans</p>
					<button>Login</button>
				</div>
				<InputField newShopItem={newShopItem} />
			</div>
		</NavbarStyles>
	);
}

const NavbarStyles = styled.nav`
	background-color: var(--green);
	width: 100%;
	height: 100px;

	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 0;
	}

	p {
		color: var(--white);
	}

	button {
		background-color: transparent;
		color: var(--white);
		border: none;
		font-size: 1rem;
	}
`;
