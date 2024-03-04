import React, { useCallback, useContext } from "react";
import { FlatList, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import FavoritesCard from "../../components/FavoritesCard";
import { ResultsContext } from "../../contexts/ResultsContext";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

const Favorites = () => {
	const { setFavoritesCep, favoritesCep } = useContext(ResultsContext);

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
			{favoritesCep.length > 0 ? (
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
			) : (
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
					<Text style={{ color: colors.white, fontSize: 18 }}>Nenhum CEP foi salvo ainda!</Text>
				</View>
			)}
		</View>
	);
};

export default Favorites;
