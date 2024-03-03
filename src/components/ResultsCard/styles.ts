import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.blue[200],
		width: "100%",
		borderRadius: 8,
		marginBottom: 12,
		padding: 16,
	},
	text: {
		color: colors.blue[800],
		fontSize: 18,
		marginBottom: 4,
	},
	cep: {
		fontSize: 26,
		fontWeight: "bold",
		marginBottom: 8,
		color: colors.blue[800],
	},
});
