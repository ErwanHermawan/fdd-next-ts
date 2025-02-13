// --- core
import Link from "next/link";

// --- style
import style from "./style.module.scss";

// --- interface type
import { IButton } from "./type";

const Button = (props: IButton) => {
	const { variant, children, link, ...rest } = props;

	let variantStyle = style.btn;

	// Using switch case for variant
	switch (variant) {
		case "primary":
			variantStyle += ` ${style.btnPrimary}`;
			break;
		case "secondary":
			variantStyle += ` ${style.btnSecondary}`;
			break;
		case "tertiary":
			variantStyle += ` ${style.btnTertiary}`;
			break;
		default:
			variantStyle += ` ${style.btnPrimary}`;
			break;
	}

	if (link) {
		return (
			<Link {...rest} className={variantStyle} href={props.href}>
				{children}
			</Link>
		);
	}

	return (
		<button {...rest} className={variantStyle}>
			{children}
		</button>
	);
};

export default Button;
