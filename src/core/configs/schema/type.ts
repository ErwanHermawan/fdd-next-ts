export interface ContactPoint {
	"@type": "ContactPoint";
	telephone: string;
	contactType: string;
	areaServed: string;
}

export interface Organization {
	context: string;
	id: string;
	type: "Organization";
	name: string;
	url: string;
	logo: string;
	contactPoint: ContactPoint[];
	sameAs: string[];
}

export interface WebSite {
	context: string;
	id: string;
	type: "WebSite";
	url: string;
	name: string;
}

export interface WebPage {
	context: string;
	id: string;
	type: "WebPage";
	url: string;
	name: string;
}

export interface Schema {
	organization: Organization;
	website: WebSite;
	webpage: WebPage;
}
