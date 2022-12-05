import { lazy, Suspense, useCallback, useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';

import './App.css';
import { useInterval } from './hooks/useInterval';
import { getCountries } from './features/countrySlice';
import { MainWrapper } from './elements';
import { ContextUtil } from './inputContext';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './themes';
import { alphabetArray, fifteenSeconds, firstAlphabet } from './helpers';
import LoadingSpinner from './components/LoadingSpinner';
import Main from './components/Main';

const Country = lazy(() => import('./components/Country'));

let secondIndex = 1;

function App() {
  const dispatch = useDispatch();
  const { theme } = useContext(ContextUtil);

  useEffect(() => {
    dispatch(getCountries(firstAlphabet));
  }, [dispatch]);

  const execution = useCallback(() => {
    dispatch(getCountries(alphabetArray[secondIndex]));
    ++secondIndex;
  }, [dispatch]);

  useInterval(fifteenSeconds, secondIndex, alphabetArray, execution);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Navbar />
      <MainWrapper>
        <Main />
        <Suspense fallback={<LoadingSpinner />}>
          <Country />
        </Suspense>
      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;
