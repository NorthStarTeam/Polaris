/* Helper styles and themes for global usage */
export const colors = {
  white: '#F5F6FD',
  blue: '#214BEE',
  darkNavy: '#04264C',
  lightPurpleOne: '#A9A7EB',
  lightPurpleTwo: '#7D74AF',
  gray: '#54575E',
  grey: '#9E9E9E',
  cloudGray: '#8D99AE',
  turqouise: '#2D728F',
  lightBlue: '#B1DDF1',
  pastelBlue: '#006494',
  red: '#F44336',
  green: '#4CAF50',
  shadows: {
    base: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    light: '0px 0px 11px rgba(45, 45, 45, 0.11)',
  },
  gradient: {
    lightPurple:
      'linear-gradient(90deg, rgba(78,113,251,1) 0%, rgba(158,155,255,1) 100%)',
  },
};

/*
import styled from 'styled-components';
import { colors } from '../../utils/styles/helpers'
const { turquoise, shadows: { light } } = colors;
const MyComponentContainer = styled.div`
  width: 100%;
  background-color: ${turquoise};
  box-shadow: ${light};
`;
export { MyComponentContainer };
*/
/*
import styled from 'styled-components';
// we create the style for the element we are trying to reach
const StyledContainer = styled.div`
    color: blue;
`;
// you may notice all we are doing is appending the HTML tag to the styled object, from there on it's regular CSS
export { StyledContainer };
*/
