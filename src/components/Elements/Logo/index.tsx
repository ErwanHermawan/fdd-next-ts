// --- core
import Image from "next/image";
import logo from "core/assets/img/logo/alpha-x.png";

// --- interface type
import { ILogo } from "./type";

const Logo = (props: ILogo) => {
	const { filename, name } = props;

	console.log("filename", filename);

	// Ensure the src path starts with a leading slash
	return <Image {...props} src={logo} alt={name} />;
};

export default Logo;
