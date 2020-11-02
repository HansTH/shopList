// Types
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>;
export type DivClickEvent = React.MouseEvent<HTMLDivElement>;
export type ReactChildrenComponent = React.ReactNode;
export type SubmitFormEvent = React.FormEvent<HTMLFormElement>;

// Interface
export interface IShopItem {
	id: number;
	item: string;
	isCompleted: boolean;
	date: number;
}

export interface IShoppingListState {
	shoppingList?: IShopItem[];
	editShopItem?: IShopItem;
	isModalOpen?: boolean;
	newShoppingItem?: (newItem: IShopItem) => void;
	toggleCompleted?: (toggleShopItem: IShopItem) => void;
	deleteShoppingItem?: (shopItem: IShopItem) => void;
	cancelShoppingItem?: () => void;
	editShoppingItem?: (shopItem: IShopItem) => void;
	updateShoppingItem?: (shopItem: IShopItem) => void;
}

export interface IShoppingListReducerAction {
	type: string;
	payload: IShopItem | any;
}
