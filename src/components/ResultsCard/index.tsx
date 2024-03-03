import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { ResultsProps, StackParams } from "../../routes/stackRouter";

import { styles } from "./styles";

import Icon from "react-native-vector-icons/FontAwesome6";
import { colors } from "../../styles/colors";

const ResultsCard = ({ bairro, cep, ddd, ibge, localidade, logradouro, uf }: ResultsProps) => {
	const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

	const handleDetails = () => {
		navigation.navigate("Detalhes", { bairro, cep, ddd, ibge, localidade, logradouro, uf });
	};

	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={handleDetails}>
			<View style={styles.contentText}>
				<Text style={styles.cep}>{cep}</Text>
				<Text style={styles.text}>{logradouro}</Text>
				<Text style={styles.text}>{bairro}</Text>
				<Text style={styles.text}>{localidade}</Text>
			</View>
			<View style={styles.contentIcon}>
				<Icon name="magnifying-glass" size={28} color={colors.blue[200]} />
			</View>
		</TouchableOpacity>
	);
};

export default ResultsCard;
