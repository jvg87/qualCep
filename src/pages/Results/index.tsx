import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";

import ResultsCard from "../../components/ResultsCard";
import { ResultsContext } from "../../contexts/ResultsContext";
import { styles } from "./styles";

const Results = () => {
	const { results, address } = useContext(ResultsContext);

	return (
		<View style={styles.container}>
			<Text style={styles.title}> Resultados para: </Text>
			<Text style={styles.results}>{address}</Text>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={results}
				renderItem={({ item }) => (
					<ResultsCard
						bairro={item.bairro}
						cep={item.cep}
						cidade={item.localidade}
						logradouro={item.logradouro}
						uf={item.uf}
					/>
				)}
			/>
		</View>
	);
};

export default Results;
