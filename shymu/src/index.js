import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./views/pages/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Login />
	</React.StrictMode>,
);
