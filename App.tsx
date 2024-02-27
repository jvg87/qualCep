import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import ResultsProvider from "./src/contexts/ResultsContext";
import TabRouter from "./src/routes/tabRouter";
import { colors } from "./src/styles/colors";

const App = () => {
	return (
		<NavigationContainer>
			<ResultsProvider>
				<StatusBar barStyle={"light-content"} backgroundColor={colors.blue[600]} />
				<TabRouter />
			</ResultsProvider>
		</NavigationContainer>
	);
};

export default App;
