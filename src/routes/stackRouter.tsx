import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pages/Home";
import Results from "../pages/Results";

export type ResultsProps = {
	cep: string;
	logradouro: string;
	bairro: string;
	localidade: string;
	uf: string;
};

export type StackParams = {
	Home: undefined;
	Resultados: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

const StackRouter = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen name="Resultados" component={Results} />
		</Stack.Navigator>
	);
};

export default StackRouter;
