import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

import ButtonModal from "../../components/ButtonModal";
import ButtonSearch from "../../components/ButtonSearch";
import InputHome from "../../components/InputHome";
import apiCity from "../../services/apiCity";

export type StateProps = {
	id: string;
	sigla: string;
	nome: string;
};

export type CityProps = {
	id: string;
	sigla: string;
	nome: string;
};

const Home = () => {
	const [state, setState] = useState<StateProps[] | []>([]);
	const [stateSelected, setStateSelected] = useState<StateProps | undefined>();
	const [modalStateVisible, setModalStateVisible] = useState(false);

	const [city, setCity] = useState<CityProps[] | []>([]);
	const [citySelected, setCitySelected] = useState<CityProps | undefined>();
	const [modalCitySelected, setModalCitySelected] = useState(false);

	useEffect(() => {
		async function loadState() {
			const response = await apiCity.get("/estados?orderBy=nome");

			setState(response.data);
			setStateSelected(response.data[0]);
		}

		loadState();
	}, []);

	useEffect(() => {
		async function loadCity() {
			const response = await apiCity.get(`/estados/${stateSelected?.id}/municipios`);

			setCity(response.data);
			setCitySelected(response.data[0]);
		}

		loadCity();
	}, [stateSelected]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Encontre seu CEP</Text>
			<View style={styles.content}>
				{state.length !== 0 && <ButtonModal text={stateSelected?.sigla} handleModal={() => {}} />}
				{city.length !== 0 && <ButtonModal text={citySelected?.nome} handleModal={() => {}} />}
				<InputHome placeholder="Digite seu endereço..." />
				<ButtonSearch />
			</View>
		</View>
	);
};

export default Home;
