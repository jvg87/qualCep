import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

export const ButtonSearch = ({ ...rest }: TouchableOpacityProps) => {
	return (
		<TouchableOpacity {...rest} style={styles.container}>
			<Text style={styles.text}>Buscar</Text>
		</TouchableOpacity>
	);
};
