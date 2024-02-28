import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.blue[600],
		padding: 16,
		width: "100%",
	},
	title: {
		fontSize: 26,
		fontWeight: "bold",
		color: colors.white,
		marginBottom: 16,
		textAlign: "center",
	},
});
