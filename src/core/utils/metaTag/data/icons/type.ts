export interface Icon {
	url: string;
	sizes?: string;
	type?: string;
}

export interface OtherIcon {
	rel: string;
	url: string;
}

export interface MetaTagIcons {
	shortcut: string;
	icon: Icon[];
	apple: Icon[];
	other: OtherIcon[];
}
