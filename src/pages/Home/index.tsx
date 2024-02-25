import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

import Feather from "react-native-vector-icons/Feather";

const Home = () => {
	return (
		<View style={styles.container}>
			<Text>Página Home</Text>
			<Feather name="home" size={25} color="#000000" />
		</View>
	);
};

export default Home;
