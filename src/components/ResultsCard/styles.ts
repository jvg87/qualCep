import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.blue[200],
		width: "100%",
		height: 176,
		borderRadius: 8,
		marginBottom: 18,
		flexDirection: "row",
	},
	containerText: {
		width: "80%",
		padding: 16,
	},
	containerButton: {
		backgroundColor: colors.blue[800],
		width: "20%",
		borderRadius: 8,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		justifyContent: "center",
		alignItems: "center",
	},
	cep: {
		fontSize: 26,
		fontWeight: "bold",
		marginBottom: 8,
		color: colors.blue[800],
	},
	text: {
		color: colors.blue[800],
		fontSize: 18,
		marginBottom: 6,
	},
});
