import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.blue[200],
		width: "100%",
		borderRadius: 8,
		padding: 8,
		marginBottom: 12,
	},
	text: {
		color: colors.blue[800],
		fontSize: 18,
		marginBottom: 6,
	},
});
