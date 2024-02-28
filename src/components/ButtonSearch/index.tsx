import React, { useContext } from "react";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ResultsContext } from "../../contexts/ResultsContext";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

export const ButtonSearch = ({ ...rest }: TouchableOpacityProps) => {
	const { loading } = useContext(ResultsContext);
	return (
		<TouchableOpacity {...rest} style={styles.container}>
			{loading ? (
				<ActivityIndicator size={26} color={colors.blue[200]} />
			) : (
				<Text style={styles.text}>Buscar</Text>
			)}
		</TouchableOpacity>
	);
};
