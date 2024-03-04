import React, { useCallback, useState } from "react";
import { FlatList, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import FavoritesCard from "../../components/FavoritesCard";
import { ResultsProps } from "../../routes/stackRouter";
import { styles } from "./styles";

const Favorites = () => {
	const [favoritesCep, setFavoritesCep] = useState<ResultsProps[]>([]);

	useFocusEffect(
		useCallback(() => {
			const getFavorites = async () => {
				const response = await AsyncStorage.getItem("@saveCep");
				const data = response ? JSON.parse(response) : [];
				setFavoritesCep(data);
			};

			getFavorites();
		}, [])
	);

	return (
		<View style={styles.container}>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={favoritesCep}
				renderItem={({ item }) => (
					<FavoritesCard
						bairro={item.bairro}
						cep={item.cep}
						localidade={item.localidade}
						logradouro={item.logradouro}
						ddd={item.ddd}
						ibge={item.ibge}
						uf={item.uf}
					/>
				)}
			/>
		</View>
	);
};

export default Favorites;
