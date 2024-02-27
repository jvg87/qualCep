import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";

import { ResultsContext } from "../../contexts/ResultsContext";
import { styles } from "./styles";

const Results = () => {
	const { results } = useContext(ResultsContext);

	return (
		<View style={styles.container}>
			<FlatList data={results} renderItem={({ item }) => <Text>{item.cep}</Text>} />
		</View>
	);
};

export default Results;
