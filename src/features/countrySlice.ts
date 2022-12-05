import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import { CountryState } from './../interface';

const countrySlice = createSlice({
    name: 'country',
    initialState: {
        countries: [],
        loading: false,
        alphabet: [],
        selected: undefined,
    },
    reducers: {
        setCountries: (state, { payload }) => {
            state.countries = payload;
        },
        setAlphabet: (state, { payload }) => {
            state.alphabet = payload;
        },
        getCountries: (state, { payload }) => {
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        },
        setSelectedCountry: (state, { payload }) => {
            state.selected = payload;
        },
    },
});

export const {
    setCountries, getCountries, setAlphabet, setSelectedCountry, setLoading
} = countrySlice.actions;
export default countrySlice.reducer;

export const alphabetSelector = (state: CountryState) =>
    state.country.alphabet;

export const loadingSelector = (state: CountryState) =>
    state.country.loading;

/**memo selectors */
export const countrySelector = createSelector(
    (state: CountryState) => state.country,
    (country) => country.countries
);
export const selectedCountrySelector = createSelector(
    (state: CountryState) => state.country,
    (country) => country.selected
);