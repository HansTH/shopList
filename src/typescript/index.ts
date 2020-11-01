// Types
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>;

export type IShoppingList = IShopItem[];
export type toggleChecked = (shopItem: IShopItem) => void;
export type deleteShopItem = (shopItem: IShopItem) => void;

// Interface
export interface IShopItem {
	id: number;
	item: string;
	isCompleted: boolean;
	date: number;
}

export interface IShopItemProps {
	handleNewShopItem: (inputText: string) => void;
}

export interface IShoppingListState {
	shoppingList?: IShopItem[];
}
