import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.blue[600],
		paddingHorizontal: 16,
		paddingBottom: 16,
		paddingTop: 32,
		width: "100%",
		alignItems: "center",
	},
	text: {
		color: colors.white,
	},
});
