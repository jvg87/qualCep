import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabRouter from "./src/routes/tabRouter";

const App = () => {
	return (
		<NavigationContainer>
			<TabRouter />
		</NavigationContainer>
	);
};

export default App;
