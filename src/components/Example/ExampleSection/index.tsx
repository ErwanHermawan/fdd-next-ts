// -- components
import ExampleItem from "../ExampleItem";

// -- style
import style from "./style.module.scss";

// -- data
import data from "./data";

const ExampleSection = () => {
	return (
		<section className={style.section}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{data.title}</h2>
					<h4 className={style.title}>{data.subtitle}</h4>
					<p className={style.description}>{data.description}</p>
				</div>
				<div className={style.body}>
					{data.item.map((val, idx) => (
						<ExampleItem key={`ei-${idx}`} {...val} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ExampleSection;
