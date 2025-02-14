interface Item {
	image: string;
	title: string;
	description: string;
}

interface Data {
	title: string;
	subtitle: string;
	description: string;
	item: Item[];
}

const data: Data = {
	title: "Next.js Template FDD Project Website by Bilik Dev",
	subtitle: "Example Component",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati voluptatem consectetur sequi quisquam exercitationem. Facere ut ex in mollitia.",
	item: [
		{
			image: "/dummy/1.jpeg",
			title: "Lorem ipsum dolor sit amet.",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati voluptatem consectetur sequi quisquam exercitationem. Facere ut ex in mollitia.",
		},
		{
			image: "/dummy/2.jpeg",
			title: "Lorem ipsum dolor sit amet.",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati voluptatem consectetur sequi quisquam exercitationem. Facere ut ex in mollitia.",
		},
		{
			image: "/dummy/3.jpeg",
			title: "Lorem ipsum dolor sit amet.",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati voluptatem consectetur sequi quisquam exercitationem. Facere ut ex in mollitia.",
		},
	],
};

export default data;
