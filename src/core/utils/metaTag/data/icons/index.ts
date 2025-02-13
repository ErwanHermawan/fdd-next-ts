import DefaultSEO from "@configs/SEO";

import { MetaTagIcons, Icon, OtherIcon } from "./type";

const metaTagIcons = (): MetaTagIcons => {
	const { icons } = DefaultSEO;

	// -- shortcut icon
	const shortcut = `${icons?.src || ""}${icons?.shortcut || "favicon.ico"}`;

	// -- favicon (Android & other devices)
	const iconSizes = icons?.android || [];
	const icon: Icon[] = iconSizes.map((size) => ({
		url: `${icons.src}favicon-${size}x${size}.png`,
		sizes: `${size}x${size}`,
		type: "image/png",
	}));

	// -- Apple touch icons
	const appleSizes = icons?.apple?.items || [];
	const apple: Icon[] = [
		{ url: `${icons.src}${icons.apple?.default || "apple-icon.png"}` },
		...appleSizes.map((size) => ({
			url: `${icons.src}apple-icon-${size}x${size}.png`,
			sizes: `${size}x${size}`,
		})),
	];

	// -- Other icons
	const other: OtherIcon[] = [
		{
			rel: "apple-touch-startup-image",
			url: `${icons.src}${icons.apple?.default || "apple-icon.png"}`,
		},
	];

	return { shortcut, icon, apple, other };
};

export default metaTagIcons;
