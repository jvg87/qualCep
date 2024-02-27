import React, { useContext, useState } from "react";
import { Modal, Text, View } from "react-native";

import { colors } from "../../styles/colors";
import { styles } from "./styles";

import { ButtonModal } from "../../components/ButtonModal";
import { ButtonSearch } from "../../components/ButtonSearch";
import { InputHome } from "../../components/InputAddress";
import { ModalPicker } from "../../components/ModalPicker";

import { ResultsContext } from "../../contexts/ResultsContext";

export type StateProps = {
	id: string;
	sigla: string;
};

export type CityProps = {
	id: string;
	nome: string;
};

const Home = () => {
	const {
		state,
		city,
		citySelected,
		setCitySelected,
		stateSelected,
		setStateSelected,
		address,
		setAddress,
		handleSearch,
	} = useContext(ResultsContext);

	const [modalStateVisible, setModalStateVisible] = useState(false);
	const [modalCityVisible, setModalCityVisible] = useState(false);

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

				<ButtonSearch onPress={handleSearch} />

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
