import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import DetailsCard from "../../components/DetailsCard";
import { ResultsProps } from "../../routes/stackRouter";
import { styles } from "./styles";

type DetailRouteParams = {
	Details: ResultsProps;
};

type DetailRouteProps = RouteProp<DetailRouteParams, "Details">;

const Details = () => {
	const route = useRoute<DetailRouteProps>();

	return (
		<View style={styles.container}>
			<DetailsCard
				bairro={route.params.bairro}
				cep={route.params.cep}
				ddd={route.params.ddd}
				ibge={route.params.ibge}
				localidade={route.params.localidade}
				logradouro={route.params.logradouro}
				uf={route.params.uf}
			/>
		</View>
	);
};

export default Details;
