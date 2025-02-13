import { ReactNode } from "react";
// -- widgets
import HeaderWidget from "@widgets/HeaderWidget";
import FooterWidget from "@widgets/FooterWidget";

interface TemplateProps {
	children: ReactNode;
}

const Template = (props: TemplateProps) => {
	return (
		<>
			<HeaderWidget />
			<main className="main">{props.children}</main>
			<FooterWidget />
		</>
	);
};

export default Template;
