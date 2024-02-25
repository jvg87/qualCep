import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const ButtonSearch = () => {
	return (
		<TouchableOpacity style={styles.container}>
			<Text style={styles.text}>Buscar</Text>
		</TouchableOpacity>
	);
};
