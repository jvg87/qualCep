import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

import ButtonModal from "../../components/ButtonModal";
import ButtonSearch from "../../components/ButtonSearch";

import { InputHome } from "../../components/InputAddress";
import apiCity from "../../services/apiCity";
import { colors } from "../../styles/colors";

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

	const [address, setAddress] = useState("");

	useEffect(() => {
		async function loadState() {
			try {
				const response = await apiCity.get("/estados?orderBy=nome");

				setState(response.data);
				setStateSelected(response.data[0]);
			} catch (error) {
				console.log(error);
			}
		}

		loadState();
	}, []);

	useEffect(() => {
		async function loadCity() {
			try {
				const response = await apiCity.get(`/estados/${stateSelected?.id}/municipios`);

				setCity(response.data);
				setCitySelected(response.data[0]);
			} catch (error) {
				console.log(error);
			}
		}

		loadCity();
	}, [stateSelected]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Encontre seu CEP</Text>
			<View style={styles.content}>
				{state.length !== 0 && <ButtonModal text={stateSelected?.sigla} handleModal={() => {}} />}
				{city.length !== 0 && <ButtonModal text={citySelected?.nome} handleModal={() => {}} />}
				<InputHome.Container>
					<InputHome.Field
						placeholder="Digite seu endereço..."
						cursorColor={colors.blue[800]}
						onChangeText={setAddress}
						value={address}
					/>
					<InputHome.ClearButton onPress={() => setAddress("")} />
				</InputHome.Container>
				<ButtonSearch />
			</View>
		</View>
	);
};

export default Home;
