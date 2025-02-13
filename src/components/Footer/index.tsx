// -- cores
import Link from "next/link";
import Image from "next/image";

// -- style
import style from "./style.module.scss";

import logo from "core/assets/img/logo/alpha-x.png";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className="container">
				<Link href="/" className={style.logo}>
					<Image
						className={style.logoImg}
						src={logo}
						alt="Alpha-X"
						width={48}
						height={48}
					/>
					<span className={style.logoText}>Footer</span>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
