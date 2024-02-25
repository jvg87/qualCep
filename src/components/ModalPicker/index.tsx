import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import { CityProps, StateProps } from "../../pages/Home";

type ModalPickerProps = {
	data: StateProps[] | CityProps[];
	handleCloseModal: () => void;
	selectedItem: (item: StateProps | CityProps) => void;
};

export const ModalPicker = ({ handleCloseModal, data, selectedItem }: ModalPickerProps) => {
	const onPressItem = (item: StateProps | CityProps) => {
		selectedItem(item);
		handleCloseModal();
	};

	return (
		<TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={handleCloseModal}>
			<View style={styles.content}>
				<TextInput style={styles.input} />
				<ScrollView showsVerticalScrollIndicator={false}>
					{data.map((item, index) => (
						<TouchableOpacity key={index} style={styles.data} onPress={() => onPressItem(item)}>
							{"sigla" in item ? (
								<Text style={styles.item}>{item.sigla}</Text>
							) : (
								<Text style={styles.item}>{item.nome}</Text>
							)}
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</TouchableOpacity>
	);
};
