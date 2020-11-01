// Types
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>;
export type DivClickEvent = React.MouseEvent<HTMLDivElement>;
export type ReactChildrenComponent = React.ReactNode;
export type SubmitFormEvent = React.FormEvent<HTMLFormElement>;

// Functions types
export type toggleChecked = (shopItem: IShopItem) => void;
export type deleteShopItem = (shopItem: IShopItem) => void;
export type cancelEditShopItem = () => void;
export type getShopItem = (shopItem: IShopItem) => void;
export type updateShopItem = (shopItem: IShopItem) => void;
export type newShopItem = (inputText: string) => void;
export type shoppingList = IShopItem[];

// Interface
export interface IShopItem {
	id: number;
	item: string;
	isCompleted: boolean;
	date: number;
}
