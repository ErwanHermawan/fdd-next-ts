// -- config
import DefaultSchema from "@configs/schema";
import { SchemaDynamicData } from "./type";

// -- schemaDynamic
const schemaDynamic = (data?: SchemaDynamicData) => {
	return {
		webpage: {
			url:
				DefaultSchema.webpage.url +
				(data?.page ? data?.page.toLowerCase() : ""),
			name: data?.page
				? data?.page + " | " + DefaultSchema.webpage.name
				: DefaultSchema.webpage.name,
		},
	};
};

export default schemaDynamic;
