import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";

export type TabParams = {
	Home: undefined;
	Favorites: undefined;
};

const Tab = createBottomTabNavigator<TabParams>();

const TabRouter = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Favorites" component={Favorites} />
		</Tab.Navigator>
	);
};

export default TabRouter;
