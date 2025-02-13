// -- cores
import Link from "next/link";
import Image from "next/image";

// -- style
import style from "./style.module.scss";

import logo from "core/assets/img/logo/alpha-x.png";

const Header = () => {
	return (
		<header className={style.header}>
			<div className="container">
				<Link href="/">
					<Image src={logo} alt="Alpha-X" width={48} height={48} />
					Header
				</Link>
			</div>
		</header>
	);
};

export default Header;
