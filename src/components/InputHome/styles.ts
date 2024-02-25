import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.blue[400],
		height: 50,
		borderRadius: 5,
		padding: 16,
		width: "100%",
		color: colors.blue[800],
		fontSize: 18,
		marginBottom: 8,
		fontWeight: "bold",
	},
});
