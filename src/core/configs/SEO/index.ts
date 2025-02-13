import { SEO } from "./type";

const DefaultSEO: SEO = {
	title: "Crappo",
	description: "Description Crappo",
	keywords: "crappo, jquery template, project website, bilik media",
	timeRefresh: 900,
	siteName: "crappo",
	siteDomain: "crappo.com",
	siteURL: "https://www.crappo.com",
	themeColor: "#0d0d2b",
	author: "Me",
	copyright: "2024 Crappo. All Right Reserved",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		enable: true,
		locale: "en_US",
		type: "website",
		image: "assets/img/default/og-facebook.jpg",
	},
	twitter: {
		enable: true,
		username: "@alphax_id",
		card: "summary_large_image",
		image: "assets/img/default/twitter-card.jpg",
	},
	manifest: "",
	viewport: {
		width: "device-width",
		initialScale: 1,
		userScalable: true,
	},
	icons: {
		src: "/homescreen/",
		shortcut: "favicon.ico",
		android: [16, 32, 96, 144, 192],
		microsoft: 144,
		apple: {
			default: "apple-icon.png",
			items: [57, 60, 72, 76, 114, 120, 144, 152, 180],
		},
	},
};

export default DefaultSEO;
