import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
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
		try {
			const response = await apiCep.get(
				`/${stateSelected?.sigla}/${citySelected?.nome}/${address}/json`
			);

			setResults(response.data);

			navigation.navigate("Resultados");

			loadState();
			loadCity();
			setAddress("");
		} catch (error) {
			console.log(error);
		}
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
			}}
		>
			{children}
		</ResultsContext.Provider>
	);
};

export default ResultsProvider;
