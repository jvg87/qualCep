import React, { ReactNode } from "react";
import {
	TextInput,
	TextInputProps,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from "react-native";

import { colors } from "../../styles/colors";
import { styles } from "./styles";

import Feather from "react-native-vector-icons/Feather";

type InputAddressProps = {
	children: ReactNode;
};

const InputAddress = ({ children }: InputAddressProps) => {
	return <View style={styles.container}>{children}</View>;
};

const InputAddressField = ({ ...rest }: TextInputProps) => {
	return <TextInput style={styles.input} {...rest} placeholderTextColor={colors.blue[600]} />;
};

const InputAddressClearButton = ({ ...rest }: TouchableOpacityProps) => {
	return (
		<TouchableOpacity activeOpacity={0.7} {...rest}>
			<Feather name="delete" size={24} color={colors.blue[800]} />
		</TouchableOpacity>
	);
};

export const InputHome = {
	Container: InputAddress,
	Field: InputAddressField,
	ClearButton: InputAddressClearButton,
};
