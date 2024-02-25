import React, { useEffect, useState } from "react";
import { Modal, Text, View } from "react-native";

import { colors } from "../../styles/colors";
import { styles } from "./styles";

import { ButtonModal } from "../../components/ButtonModal";
import { ButtonSearch } from "../../components/ButtonSearch";
import { InputHome } from "../../components/InputAddress";
import { ModalPicker } from "../../components/ModalPicker";

import apiCity from "../../services/apiCity";

export type StateProps = {
	id: string;
	sigla: string;
};

export type CityProps = {
	id: string;
	nome: string;
};

const Home = () => {
	const [state, setState] = useState<StateProps[] | []>([]);
	const [stateSelected, setStateSelected] = useState<StateProps | undefined>();
	const [modalStateVisible, setModalStateVisible] = useState(false);

	const [city, setCity] = useState<CityProps[] | []>([]);
	const [citySelected, setCitySelected] = useState<CityProps | undefined>();
	const [modalCityVisible, setModalCityVisible] = useState(false);

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
				{state.length !== 0 && (
					<ButtonModal text={stateSelected?.sigla} handleModal={() => setModalStateVisible(true)} />
				)}
				{city.length !== 0 && (
					<ButtonModal text={citySelected?.nome} handleModal={() => setModalCityVisible(true)} />
				)}

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

				<Modal transparent={true} visible={modalStateVisible} animationType="fade">
					<ModalPicker
						handleCloseModal={() => setModalStateVisible(false)}
						data={state}
						selectedItem={(item) => "sigla" in item && setStateSelected(item)}
					/>
				</Modal>

				<Modal transparent={true} visible={modalCityVisible} animationType="fade">
					<ModalPicker
						handleCloseModal={() => setModalCityVisible(false)}
						data={city}
						selectedItem={(item) => "nome" in item && setCitySelected(item)}
					/>
				</Modal>
			</View>
		</View>
	);
};

export default Home;
