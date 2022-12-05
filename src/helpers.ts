import { Country, CountryKeyArray } from "./interface";

export const alphabetArray = Array.from(Array(26))
    .map((e, i) => i + 65)
    .map((x) => String.fromCharCode(x));

export const countryKeyArray: CountryKeyArray[] = [
    { key: 'capital', text: 'Capital' },
    { key: 'population', text: 'Population' },
    { key: 'cca2', text: 'Cca2' },
];

export const firstAlphabet = 'A';

export const fifteenSeconds = 15000

export const filterParams = 'fields=capital,population,flag,official,cca2,name'

export const filteredStartsWithCountries = (data: Country[], payload: string) => data.filter((country: Country) =>
    country.name.official.startsWith(payload)
)