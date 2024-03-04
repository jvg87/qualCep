import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { ResultsContext } from "../../contexts/ResultsContext";

import { ResultsProps } from "../../routes/stackRouter";

import Icon from "react-native-vector-icons/Foundation";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

const DetailsCard = ({ bairro, cep, ddd, ibge, localidade, logradouro, uf }: ResultsProps) => {
	const { handleFavorite } = useContext(ResultsContext);

	return (
		<View style={styles.container}>
			<Text style={styles.cep}>{cep}</Text>
			<Text style={styles.title}>Logradouro</Text>
			<Text style={styles.text}>{logradouro}</Text>
			<Text style={styles.title}>Bairro</Text>
			<Text style={styles.text}>{bairro}</Text>
			<Text style={styles.title}>Cidade / Estado</Text>
			<Text style={styles.text}>
				{localidade} / {uf}
			</Text>
			<Text style={styles.title}>DDD</Text>
			<Text style={styles.text}>{ddd}</Text>
			<Text style={styles.title}>IBGE</Text>
			<Text style={styles.text}>{ibge}</Text>
			<View style={styles.containerBtn}>
				<TouchableOpacity
					style={styles.button}
					activeOpacity={0.7}
					onPress={() => handleFavorite({ bairro, cep, ddd, ibge, localidade, logradouro, uf })}
				>
					<Text>
						<Icon name="heart" size={32} color={colors.blue[200]} />
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} activeOpacity={0.7}>
					<Text>
						<Icon name="map" size={32} color={colors.blue[200]} />
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default DetailsCard;
