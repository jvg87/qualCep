import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.blue[600],
		paddingHorizontal: 8,
	},
	content: {
		width: "100%",
		borderRadius: 8,
		backgroundColor: colors.blue[200],
		paddingHorizontal: 8,
		paddingTop: 8,
	},
	title: {
		color: colors.blue[200],
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: 16,
	},
});
