import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import TabRouter from "./src/routes/tabRouter";
import { colors } from "./src/styles/colors";

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle={"light-content"} backgroundColor={colors.blue[600]} />
			<TabRouter />
		</NavigationContainer>
	);
};

export default App;
