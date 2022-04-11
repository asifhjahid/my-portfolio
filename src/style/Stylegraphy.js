import { createGlobalStyle } from 'styled-components';
import NotoSansRegular from '../assets/fonts/NotoSans-Regular.ttf'
import NotoSerifRegular from '../assets/fonts/NotoSerif-Regular.ttf'
import MerriweatherLight from '../assets/fonts/Merriweather-Light.ttf'


const Stylegraphy = createGlobalStyle`
  @font-face {
    font-family: 'NotoSans Regular';
    src: url(${NotoSansRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'NotoSerif Regular';
    src: url(${NotoSerifRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Merriweather Light';
    src: url(${ MerriweatherLight});
    font-style: normal;
  }
  html{
    font-family: 'Merriweather Light';
    color:#BCB4B4;
  }
  *{
    font-family: 'Hahmle Regular';
    color: #BCB4B4;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Merriweather Light'
  }
  p{
    font-family: 'NotoSerif Regular'
  }
`;

export default Stylegraphy;