// -- core
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- type
import { IExampleItem } from "./type";

const ExampleItem = (props: IExampleItem) => {
	const { image, title, description } = props;

	return (
		<div className={style.item}>
			<div className={style.image}>
				<Image
					className={style.imageEl}
					src={image}
					alt={title}
					width={320}
					height={320}
				/>
			</div>
			<div className={style.text}>
				<h4 className={style.title}>{title}</h4>
				<p className={style.description}>{description}</p>
			</div>
		</div>
	);
};

export default ExampleItem;
