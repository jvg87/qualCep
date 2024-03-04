import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Alert, Keyboard } from "react-native";
import { CityProps, StateProps } from "../pages/Home";
import { ResultsProps, StackParams } from "../routes/stackRouter";
import apiCep from "../services/apiCep";
import apiCity from "../services/apiCity";

type ResultsContextData = {
	state: StateProps[] | [];
	stateSelected: StateProps | undefined;
	setStateSelected: (state: StateProps) => void;
	citySelected: CityProps | undefined;
	setCitySelected: (city: CityProps) => void;
	city: CityProps[] | [];
	results: ResultsProps[] | undefined;
	address: string;
	setAddress: (address: string) => void;
	handleSearch: () => void;
	loading: boolean;
	handleFavorite: (data: ResultsProps) => Promise<void>;
	handleDeleteFavorite: () => void;
};

type ResultsProviderProps = {
	children: ReactNode;
};

export const ResultsContext = createContext({} as ResultsContextData);

const ResultsProvider = ({ children }: ResultsProviderProps) => {
	const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

	const [state, setState] = useState<StateProps[] | []>([]);
	const [stateSelected, setStateSelected] = useState<StateProps | undefined>();

	const [city, setCity] = useState<CityProps[] | []>([]);
	const [citySelected, setCitySelected] = useState<CityProps | undefined>();

	const [address, setAddress] = useState("");

	const [results, setResults] = useState<ResultsProps[]>([]);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchState() {
			await loadState();
		}

		setResults([]);

		fetchState();
	}, []);

	useEffect(() => {
		async function fetchCity() {
			await loadCity();
		}

		fetchCity();
	}, [stateSelected]);

	const loadState = async () => {
		try {
			const response = await apiCity.get("/estados?orderBy=nome");

			setState(response.data);
			setStateSelected(response.data[0]);
		} catch (error) {
			console.log(error);
		}
	};

	const loadCity = async () => {
		try {
			const response = await apiCity.get(`/estados/${stateSelected?.id}/municipios`);

			setCity(response.data);
			setCitySelected(response.data[0]);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSearch = async () => {
		if (address === "") {
			Alert.alert("Preencha o endereço!");
			return;
		}

		setLoading(true);
		Keyboard.dismiss();
		try {
			const response = await apiCep.get(
				`/${stateSelected?.sigla}/${citySelected?.nome}/${address}/json`
			);

			setResults(response.data);

			navigation.navigate("Resultados");

			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const handleFavorite = async ({
		bairro,
		cep,
		ddd,
		ibge,
		localidade,
		logradouro,
		uf,
	}: ResultsProps) => {
		const newData = { bairro, cep, ddd, ibge, localidade, logradouro, uf };
		try {
			const response = await AsyncStorage.getItem("@saveCep");

			// console.log(response);

			// await AsyncStorage.removeItem("@saveCep");

			const previousData = response ? JSON.parse(response) : [];

			const data = [...previousData, newData];
			await AsyncStorage.setItem("@saveCep", JSON.stringify(data));
			Alert.alert("Salvo com sucesso!");
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteFavorite = async () => {
		Alert.alert("Teste de funcionalidade");
	};

	return (
		<ResultsContext.Provider
			value={{
				results,
				city,
				state,
				citySelected,
				setCitySelected,
				stateSelected,
				setStateSelected,
				address,
				setAddress,
				handleSearch,
				loading,
				handleFavorite,
				handleDeleteFavorite,
			}}
		>
			{children}
		</ResultsContext.Provider>
	);
};

export default ResultsProvider;
