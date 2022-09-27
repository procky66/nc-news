import React from "react";
import "./Loading.css";

const Loading = ({ isLoading, children }) => {
	return isLoading ? (
		<div className="lds-spinner">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	) : (
		children
	);
};

export default Loading;
