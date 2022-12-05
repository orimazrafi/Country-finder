export interface Country {
    name: {
        official: string
    },
    cca2: string,
    capital: string[],
    altSpellings: string[],
    flag: string,
    population: number
}

export type CountryKeyArray = { key: string; text: string }

export interface CountryListProps {
    sorted: Country[] | undefined;
    handleSelected: (country: Country) => void;
    alphabetFilter: string;
    countryInput: string;
}

export interface CountryState {
    country: { countries: Country[], alphabet: string[], loading: boolean, selected: any }
}

export interface ContextState {
    setCountryInput: React.Dispatch<React.SetStateAction<string>>;
    countryInput: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    theme: string;
}