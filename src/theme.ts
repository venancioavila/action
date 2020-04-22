declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    primary: string;
    activeTintColor: string;
    inactiveTintColor: string;
    addActionBackground: string;
    text: string;
    secundary: string;
    terceary: string;
    quarternary: string;
    lightBackground: string;

    inputBackground: string;
    dark: string;
    danger: string;
    gpioBackground: string;
    gpioBackgroundRed: string;
    gpioBackgroundGround: string;
    gpioBackgroundID: string;
  }
}

export default {
  background: '#101112',
  primary: '#42CD67',
  secundary: '#2C8FFF',
  activeTintColor: '#1668DD',
  inactiveTintColor: '#5E5E66',
  addActionBackground: '#936bd4',
  text: '#FFFF',
  terceary: '#926BD5',
  quarternary: '#FF8834',
  inputBackground: 'rgba(44, 143, 255, 0.2)',
  lightBackground: '#242529',

  dark: '#000000',
  danger: '#F37065',
  gpioBackground: '#C2FEE6',
  gpioBackgroundRed: '#FECDC2',
  gpioBackgroundGround: '#D2D2D1 ',
  gpioBackgroundID: '#F9F9C9',
};
