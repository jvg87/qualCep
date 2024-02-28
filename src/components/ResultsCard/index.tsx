import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ResultsCardProps = {
	cep: string;
	logradouro: string;
	bairro: string;
	cidade: string;
	uf: string;
};

const ResultsCard = ({ bairro, cep, cidade, logradouro, uf }: ResultsCardProps) => {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.7}>
			<Text style={styles.text}>Cep: {cep}</Text>
			<Text style={styles.text}>Endereço: {logradouro}</Text>
			<Text style={styles.text}>Bairro: {bairro}</Text>
			<Text style={styles.text}>Cidade: {cidade}</Text>
			<Text style={styles.text}>Estado: {uf}</Text>
		</TouchableOpacity>
	);
};

export default ResultsCard;
