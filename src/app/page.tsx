// -- utils
import metaTag from "@utils/metaTag";
import schema from "@utils/schema";

// -- model

// -- modules
import Home from "@modules/Home";

// -- metadata
const metadata = metaTag.dynamic();

// -- schemadata
const schemadata = schema.dynamic();

// ==================
// HomePage
// ==================

const HomePage = async () => {
	return <Home />;
};

export { metadata, schemadata };
export default HomePage;
