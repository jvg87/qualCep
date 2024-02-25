import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 50,
		paddingHorizontal: 16,
		backgroundColor: colors.blue[400],
		marginBottom: 8,
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	text: {
		fontSize: 18,
		color: colors.blue[800],
		fontWeight: "bold",
	},
});
