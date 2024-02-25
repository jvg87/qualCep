import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

const InputHome = ({ ...rest }: TextInputProps) => {
	return <TextInput style={styles.container} {...rest} placeholderTextColor={colors.blue[600]} />;
};

export default InputHome;
