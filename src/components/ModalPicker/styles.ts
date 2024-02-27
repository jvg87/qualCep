import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		width: WIDTH - 10,
		height: HEIGHT / 2,
		backgroundColor: colors.blue[200],
		borderWidth: 1,
		borderColor: colors.blue[400],
		borderRadius: 5,
	},
	data: {
		alignItems: "flex-start",
		borderTopWidth: 0.8,
		borderColor: colors.blue[400],
	},
	item: {
		margin: 18,
		fontSize: 18,
		fontWeight: "bold",
		color: colors.blue[800],
	},
});
