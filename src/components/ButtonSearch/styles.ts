import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 50,
		justifyContent: "center",
		backgroundColor: colors.blue[800],
		marginBottom: 8,
		borderRadius: 5,
		alignItems: "center",
	},
	text: {
		fontSize: 22,
		color: colors.blue[200],
		fontWeight: "bold",
	},
});
