import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ResultsCardProps = {
	cep: string;
	logradouro: string;
	bairro: string;
	cidade: string;
};

const ResultsCard = ({ bairro, cep, cidade, logradouro }: ResultsCardProps) => {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.7}>
			<Text style={styles.cep}>{cep}</Text>
			<Text style={styles.text}>{logradouro}</Text>
			<Text style={styles.text}>{bairro}</Text>
			<Text style={styles.text}>{cidade}</Text>
		</TouchableOpacity>
	);
};

export default ResultsCard;
