export interface Robots {
	index: boolean;
	follow: boolean;
}

export interface OpenGraph {
	enable: boolean;
	locale: string;
	type: string;
	image: string;
}

export interface Twitter {
	enable: boolean;
	username: string;
	card: string;
	image: string;
}

export interface Viewport {
	width: string;
	initialScale: number;
	userScalable: boolean;
}

export interface Icons {
	src: string;
	shortcut: string;
	android: number[];
	microsoft: number;
	apple: {
		default: string;
		items: number[];
	};
}

export interface SEO {
	title: string;
	description: string;
	keywords: string;
	timeRefresh: number;
	siteName: string;
	siteDomain: string;
	siteURL: string;
	siteCapable?: string;
	themeColor: string;
	author: string;
	copyright: string;
	robots: Robots;
	openGraph: OpenGraph;
	twitter: Twitter;
	manifest: string;
	viewport: Viewport;
	icons: Icons;
}
