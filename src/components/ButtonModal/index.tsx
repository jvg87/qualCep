import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type ButtonProps = {
	text: string;
	handleModal: () => void;
};

const ButtonModal = ({ text, handleModal, ...rest }: ButtonProps & TouchableOpacityProps) => {
	return (
		<TouchableOpacity style={styles.container} {...rest} onPress={handleModal}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

export default ButtonModal;
