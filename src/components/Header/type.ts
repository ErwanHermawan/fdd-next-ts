// Importing the logo image
import logo from "core/assets/img/logo/alpha-x.png";

// Define the HeaderData interface
export interface HeaderData {
	logo: string;
	alt: string;
}

// Define the actual data
const headerData: HeaderData = {
	logo: logo, // logo will be a string path to the image
	alt: "Logo",
};

export default headerData;
