"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "core/states/header";

// -- components
import ExampleSection from "@components/Example/ExampleSection";

const Home = () => {
	// numbers

	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("");
	}, [setMenu]);

	return (
		<>
			<ExampleSection />
		</>
	);
};

export default Home;
