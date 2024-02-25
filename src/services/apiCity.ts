import axios from "axios";

const apiCity = axios.create({
	baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
});

export default apiCity;
