import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Favorites from "../pages/Favorites";

import Icon from "react-native-vector-icons/Foundation";
import { colors } from "../styles/colors";
import StackRouter from "./stackRouter";

export type TabParams = {
	HomeStack: undefined;
	Favoritos: undefined;
};

const Tab = createBottomTabNavigator<TabParams>();

const TabRouter = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: colors.blue[200],
				tabBarInactiveTintColor: colors.blue[400],
				tabBarStyle: {
					backgroundColor: colors.blue[600],
					borderBlockColor: colors.blue[600],
				},
			}}
		>
			<Tab.Screen
				name="HomeStack"
				component={StackRouter}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => <Icon name="home" size={32} color={color} />,
				}}
			/>
			<Tab.Screen
				name="Favoritos"
				component={Favorites}
				options={{
					headerStyle: { backgroundColor: colors.blue[600] },
					headerTintColor: colors.blue[200],
					tabBarIcon: ({ color }) => <Icon name="heart" size={32} color={color} />,
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabRouter;
