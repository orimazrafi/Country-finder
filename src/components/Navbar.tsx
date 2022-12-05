import { memo, useContext, useRef } from 'react';
import { useSelector } from 'react-redux';

import { Input, NavbarWrapper, ThemeIconsWrapper } from '../elements';
import {
  loadingSelector,
  selectedCountrySelector,
} from '../features/countrySlice';
import { ContextUtil } from '../inputContext';
import LoadingSpinner from './LoadingSpinner';

const Navbar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setCountryInput, setTheme } = useContext(ContextUtil);

  const selectedCountry = useSelector(selectedCountrySelector);
  const loading = useSelector(loadingSelector);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryInput(e.target.value);
  };
  const handleTheme = (str: string) => {
    setTheme(str);
  };

  return (
    <NavbarWrapper selectedCountry={!!selectedCountry?.name}>
      {loading && <LoadingSpinner />}
      <ThemeIconsWrapper>
        <span onClick={() => handleTheme('dark')}>🌜 </span>
        <span onClick={() => handleTheme('light')}>🌞</span>
      </ThemeIconsWrapper>
      <Input
        selectedCountry={!!selectedCountry?.name}
        name='country'
        onChange={handleInput}
        autoComplete='off'
        ref={inputRef}
      />
    </NavbarWrapper>
  );
};

export default memo(Navbar);
