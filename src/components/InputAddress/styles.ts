import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.blue[400],
		height: 50,
		borderRadius: 5,
		width: "100%",
		marginBottom: 8,
		flexDirection: "row",
		alignItems: "center",
		paddingRight: 16,
	},
	input: {
		flex: 1,
		fontSize: 18,
		fontWeight: "bold",
		color: colors.blue[800],
		padding: 16,
	},
});
