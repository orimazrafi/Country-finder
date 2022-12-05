import { lazy, Suspense, useContext, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  CountryListWrapper,
  ItemWrapper,
  MainContainer,
  SelectionAlphabetTitle,
  Sidebar,
} from '../elements';
import {
  alphabetSelector,
  countrySelector,
  loadingSelector,
  selectedCountrySelector,
  setSelectedCountry,
} from '../features/countrySlice';
import { ContextUtil } from '../inputContext';
import { Country } from '../interface';
import LoadingSpinner from './LoadingSpinner';

const CountryList = lazy(() => import('./CountryList'));

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector(countrySelector);
  const alphabet = useSelector(alphabetSelector);
  const selectedCountry = useSelector(selectedCountrySelector);
  const loading = useSelector(loadingSelector);
  const { countryInput } = useContext(ContextUtil);

  const [alphabetFilter, setAlphabetFilter] = useState('');

  const handleFilter = (str: string) => {
    dispatch(setSelectedCountry(null));
    setAlphabetFilter(alphabetFilter === str ? '' : str);
  };

  const filteredCountries = useMemo(() => {
    if (countries?.length)
      return countries.filter((country: Country) => {
        return (
          country.name.official.toUpperCase().charAt(0) ===
          alphabetFilter.toUpperCase()
        );
      });
  }, [alphabetFilter, countries]);

  const sorted = useMemo(() => {
    if (!countryInput) return filteredCountries;

    return filteredCountries?.filter((country: Country) =>
      country.name.official.toLowerCase().includes(countryInput.toLowerCase())
    );
  }, [countryInput, filteredCountries]);

  const handleSelected = (country: Country) => {
    dispatch(
      setSelectedCountry({
        cca2: country.cca2,
        capital: country.capital?.[0],
        name: country.name.official,
        population: country.population.toLocaleString(),
        flag: country.flag,
      })
    );
  };

  return (
    <MainContainer countrySelected={!!selectedCountry?.name}>
      <Sidebar countrySelected={!!selectedCountry?.name}>
        <SelectionAlphabetTitle>Select a letter </SelectionAlphabetTitle>
        {alphabet.map((str) => (
          <ItemWrapper
            key={str}
            onClick={() => handleFilter(str)}
            active={alphabetFilter === str}
          >
            {str}
          </ItemWrapper>
        ))}
        {loading && <LoadingSpinner margin='1rem auto' />}
      </Sidebar>
      <CountryListWrapper>
        <Suspense fallback={<LoadingSpinner />}>
          <CountryList
            sorted={sorted}
            handleSelected={handleSelected}
            alphabetFilter={alphabetFilter}
            countryInput={countryInput}
          />
        </Suspense>
      </CountryListWrapper>
    </MainContainer>
  );
};

export default Main;
