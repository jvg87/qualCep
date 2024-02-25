import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../styles/colors";

type ButtonProps = {
	text: string | undefined;
	handleModal: () => void;
};

export const ButtonModal = ({
	text,
	handleModal,
	...rest
}: ButtonProps & TouchableOpacityProps) => {
	return (
		<TouchableOpacity activeOpacity={0.7} style={styles.container} {...rest} onPress={handleModal}>
			<Text style={styles.text}>{text}</Text>
			<Feather name="arrow-down-circle" size={24} color={colors.blue[800]} />
		</TouchableOpacity>
	);
};
