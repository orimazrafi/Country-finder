import styled, { css, keyframes } from 'styled-components';

/**theme destruct */
const modalBackdrop = css`
  ${({ theme }) => theme?.colors?.modal?.backdrop}
`;
const sections = css`
  ${({ theme }) => theme?.colors?.sections?.navbar}
`;
const primary = css`
  ${({ theme }) => theme?.colors?.primary}
`;
const DynamicText = css`
  ${({ theme }) => theme?.colors?.text}
`;
const fontFamily = css`
  ${({ theme }) => theme?.fonts?.fontFamily}
`;
const white = css`
  ${({ theme }) => theme?.colors?.white}
`;
const black = css`
  ${({ theme }) => theme?.colors?.black}
`;

/**devices */
const size = {
  laptop: '1024px',
};
const device = {
  laptop: `(min-width: ${size.laptop})`,
};

/** general styles */
const cardStyle = css`
  background: ${white};
  box-shadow: 0px 4px 8px 8px rgb(196 197 247 / 24%);
  border-radius: 8px;
`;

const loading = keyframes`
  to {
      transform: rotate(360deg);
    }
  `;

const itemText = css`
  font-size: 1.6rem;
  font-family: ${fontFamily};
  cursor: pointer;
`;

/** Navbar */

export const NavbarWrapper = styled.nav<{ selectedCountry: boolean }>`
  height: 8rem;
  padding-left: 1rem;
  background: ${sections};
  display: flex;
  align-items: center;
  box-shadow: 2px 3px 5px 0px #d0cece;
  ${({ selectedCountry }) =>
    selectedCountry &&
    css`
      background-color: ${modalBackdrop};
    `};
  @media ${device.laptop} {
    background: ${sections};
  }
`;

export const ThemeIconsWrapper = styled.div`
  display: flex;
  font-size: 3rem;
  position: absolute;
  left: 8rem;
  &:hover {
    cursor: pointer;
  }
`;

/**MainContainer */

export const MainWrapper = styled.div`
  font-family: ${fontFamily};
  gap: 5rem;
  display: flex;
`;

/**Main */

export const MainContainer = styled.div<{ countrySelected: boolean }>`
  grid-template-columns: 15rem 25rem;
  display: grid;
  ${({ countrySelected }) =>
    countrySelected &&
    css`
      background-color: ${modalBackdrop};
      width: 100%;
    `};

  @media ${device.laptop} {
    width: unset;
    grid-template-columns: 20rem 40rem;
  }
`;

export const Sidebar = styled.section<{ countrySelected: boolean }>`
  text-align: center;
  min-height: calc(100vh - 8rem);
  background: ${sections};
  box-shadow: 2px 3px 5px 0px #d0cece;
  color: ${DynamicText};
  ${({ countrySelected }) =>
    countrySelected &&
    css`
      background-color: unset;
    `};
  @media ${device.laptop} {
    background: ${sections};
  }
  font-family: ${fontFamily};
`;

export const SelectionAlphabetTitle = styled.h2`
  font-size: 2.5rem;
`;

export const ItemWrapper = styled.span<{ active: boolean }>`
  margin: 0.7rem;
  transition: font-weight 0.2s;
  ${itemText};
  ${({ active }) =>
    active &&
    css`
      color: ${primary};
    `};
  &:hover {
    font-weight: 800;
  }
  display: block;
`;

export const CountryListWrapper = styled.section`
  margin-left: 4rem;
`;

/**CountryList */

export const CountryTitle = styled.div`
  ${itemText};
  margin: 0.7rem 2rem;
  transition: font-weight 0.2s;
  &:hover {
    font-weight: 800;
  }
`;

export const NoResults = styled.p`
  margin-top: 2.5rem;
  font-size: 1.8rem;
`;

/**Country */

export const CountryText = styled.span`
  margin: 0.7rem 0;
  ${itemText};
  display: block;
`;
export const CountryCard = styled.section`
  ${cardStyle};
  height: fit-content;
  font-family: ${fontFamily};
  padding: 1rem;
  width: 40rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media ${device.laptop} {
    margin-top: 5rem;
    position: static;
    transform: unset;
  }
`;

export const TitleWrapper = styled.div`
  font-size: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

/** LoadingSpinner */
export const SpinnerWrapper = styled.section``;
export const Spinner = styled.div<{ margin?: string }>`
  width: 50px;
  height: 50px;
  border: 10px solid #dddddd;
  border-top-color: #7d8684;
  border-radius: 50%;
  animation: ${loading} 1s ease infinite;

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};
`;

/**Common */

export const Input = styled.input<{ selectedCountry: boolean }>`
  border-radius: 8px;
  padding: 0.5rem;
  position: absolute;
  margin: auto 0;
  margin-left: 20rem;
  ${({ selectedCountry }) =>
    selectedCountry &&
    css`
      background-color: ${modalBackdrop};
      background: #7f7979;
      color: ${white};
    `};
  @media ${device.laptop} {
    margin-left: 24rem;
    background: ${white};
    color: ${black};
  }
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0.5rem 0;
  cursor: pointer;
  color: ${white};
  background-color: ${primary};
  border-color: ${primary};
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
