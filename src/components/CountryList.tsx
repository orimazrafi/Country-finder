import { useSelector } from 'react-redux';

import { ItemWrapper, NoResults, SelectionAlphabetTitle } from '../elements';
import { selectedCountrySelector } from '../features/countrySlice';
import { Country, CountryListProps } from '../interface';

const CountryList: React.FC<CountryListProps> = ({
  sorted,
  handleSelected,
  alphabetFilter,
  countryInput,
}) => {
  const selectedCountry = useSelector(selectedCountrySelector);

  if (sorted?.length === 0 && alphabetFilter)
    return <NoResults>No results with that filters. Try other one.</NoResults>;

  if (countryInput && !alphabetFilter) {
    return (
      <NoResults>
        You should choose a letter before filtering by text.
      </NoResults>
    );
  }
  const thereIsResults = sorted && sorted.length > 0;
  return (
    <div>
      {thereIsResults && (
        <SelectionAlphabetTitle>Select a Country </SelectionAlphabetTitle>
      )}
      {thereIsResults &&
        sorted?.map((country: Country) => (
          <ItemWrapper
            key={country.name.official}
            onClick={() => handleSelected(country)}
            active={selectedCountry?.name === country.name.official}
          >
            {country.name.official}
          </ItemWrapper>
        ))}
    </div>
  );
};

export default CountryList;
