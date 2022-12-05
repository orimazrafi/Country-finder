import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, CountryCard, CountryText, TitleWrapper } from '../elements';
import {
  selectedCountrySelector,
  setSelectedCountry,
} from '../features/countrySlice';
import { countryKeyArray } from '../helpers';
import { CountryKeyArray } from '../interface';

const Country = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectedCountrySelector);

  const resetSelected = () => {
    dispatch(setSelectedCountry(null));
  };
  if (!selected?.name) return null;
  return (
    <CountryCard>
      <TitleWrapper>
        <div>{selected.name} </div> <div>{selected.flag}</div>
      </TitleWrapper>
      {countryKeyArray.map((country: CountryKeyArray) => {
        return (
          <CountryText key={country.text}>
            {country.text}: {selected[country.key]}
          </CountryText>
        );
      })}
      <Button onClick={resetSelected}>Back</Button>
    </CountryCard>
  );
};

export default memo(Country);
