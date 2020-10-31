// Types
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>;

// State
export interface IShopItem {
	id: number;
	item: string;
	isCompleted: boolean;
	date: number;
}

export interface IShopItemProps {
	handleNewShopItem: (inputText: string) => void;
}

export interface IShoppingList {
	shopItem?: IShopItem;
	shoppingList?: IShopItem[];
}

export type toggleChecked = (shopItem: IShopItem) => void;
