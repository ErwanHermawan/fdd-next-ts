"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "core/states/header";

const Home = (props) => {
	// numbers

	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("");
	}, [setMenu]);

	return (
		<>
			<div className="container">
				<h1>Hello World</h1>
			</div>
		</>
	);
};

export default Home;
