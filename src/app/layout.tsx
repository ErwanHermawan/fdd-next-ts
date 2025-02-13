import { ReactNode } from "react";

// -- utils
import metaTag, { MetaTagDefault } from "@utils/metaTag";
import { SchemaDefault } from "@utils/schema";
import { GoogleAnalytics } from "@next/third-parties/google";

// -- style
import "@styles/app.scss";

// -- metadata
const metadata = metaTag.data();

// -- viewport
const viewport = metaTag.viewport();

interface LayoutProps {
	children: ReactNode;
}

// -- RootLayout --
const RootLayout = (props: LayoutProps) => {
	const { children } = props;

	return (
		<html lang="en">
			{/* -- THE HEAD -- */}
			<head>
				<MetaTagDefault />
				<GoogleAnalytics gaId="G-MWDGM2FQET" />
			</head>

			{/* -- THE HEAD -- */}
			<body>
				{children}
				<SchemaDefault />
			</body>
		</html>
	);
};

export { metadata, viewport };
export default RootLayout;
