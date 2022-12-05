import { filteredStartsWithCountries, filterParams } from "../helpers";
import { setCountries, setAlphabet, setLoading } from "./countrySlice";

export const countryMiddleware =
    (store: any) => (next: any) => async (action: any) => {
        const { type, payload } = action;
        const { dispatch } = store;
        if (type === 'country/getCountries') {
            dispatch(setLoading(true))
            fetch(`https://restcountries.com/v3.1/name/${payload}?${filterParams}`)

                .then(res => res.json())
                .then(data => {
                    const countries = filteredStartsWithCountries(data, payload)
                    const { countries: reduxCountries, alphabet } = store.getState().country
                    dispatch(setCountries([...reduxCountries, ...countries]))
                    dispatch(setAlphabet([...alphabet, ...payload]))
                }
                ).catch(err => {
                    console.error(err)
                    dispatch(setLoading(false))
                })
            dispatch(setLoading(false))
        }
        next(action);
    }
