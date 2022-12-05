import { createContext, useState } from 'react';
import { ContextState } from './interface';

const ContextUtil = createContext({} as ContextState);
const Context = ({ children }: { children: JSX.Element }) => {
  const [countryInput, setCountryInput] = useState('');
  const [theme, setTheme] = useState('light');

  return (
    <ContextUtil.Provider
      value={{ countryInput, setCountryInput, theme, setTheme }}
    >
      {children}
    </ContextUtil.Provider>
  );
};

export { Context, ContextUtil };
