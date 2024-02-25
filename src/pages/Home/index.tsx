import React from "react";
import { Text, View } from "react-native";
import ButtonModal from "../../components/ButtonModal";
import ButtonSearch from "../../components/ButtonSearch";
import InputHome from "../../components/InputHome";
import { styles } from "./styles";

const Home = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Encontre seu CEP</Text>
			<View style={styles.content}>
				<ButtonModal text="Teste" handleModal={() => {}} />
				<ButtonModal text="Teste" handleModal={() => {}} />
				<InputHome placeholder="Digite seu endereço..." />
				<ButtonSearch />
			</View>
		</View>
	);
};

export default Home;
