import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { ResultsContext } from "../../contexts/ResultsContext";
import { ResultsProps, StackParams } from "../../routes/stackRouter";

import Icon from "react-native-vector-icons/FontAwesome6";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

const FavoritesCard = ({ bairro, cep, ddd, ibge, localidade, logradouro, uf }: ResultsProps) => {
	const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
	const { handleDeleteFavorite } = useContext(ResultsContext);

	const handleDetails = () => {
		navigation.navigate("Detalhes", { bairro, cep, ddd, ibge, localidade, logradouro, uf });
	};

	return (
		<View style={styles.container}>
			<View style={styles.containerText}>
				<Text style={styles.cep}>{cep}</Text>
				<Text style={styles.text}>{logradouro}</Text>
				<Text style={styles.text}>{bairro}</Text>
				<Text style={styles.text}>{localidade}</Text>
			</View>
			<View style={styles.containerButton}>
				<TouchableOpacity style={styles.buttonSearch} onPress={handleDetails} activeOpacity={0.7}>
					<Icon name="magnifying-glass" size={28} color={colors.blue[200]} />
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.buttonDelete}
					onPress={handleDeleteFavorite}
					activeOpacity={0.7}
				>
					<Icon name="trash" size={28} color={colors.blue[200]} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default FavoritesCard;
