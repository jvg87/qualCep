import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.blue[200],
		width: "100%",
		borderRadius: 8,
		padding: 16,
	},
	cep: {
		color: colors.blue[800],
		fontWeight: "bold",
		fontSize: 32,
		marginBottom: 16,
	},
	title: {
		color: colors.blue[800],
		fontSize: 16,
	},
	text: {
		color: colors.blue[800],
		fontSize: 20,
		marginBottom: 8,
	},
	containerBtn: {
		flexDirection: "row",
		gap: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		backgroundColor: colors.blue[800],
		width: "50%",
		height: 45,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
});
