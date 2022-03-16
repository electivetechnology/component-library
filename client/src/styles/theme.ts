import { createTheme, adaptV4Theme } from '@mui/material/styles';

export const theme = {
  accent1: '#6745C3', //
  accent1Secondary: '#311B91', //
  accent2: '#5DDDF3', //
  accent2Secondary: '#00ABC1', //
  accent3: '#FFD959', //
  accent3Secondary: '#C17900', //
  accent4: '#8ADC8A', //
  accent4Secondary: '#169E16', //
  blue: '#4267B2',
  darkBlue: '#397CE1',
  disabledButton: '#EBEBEB', //
  disabledText: '#B0B7BB', //
  grayAthens: '#F6F7F9',
  Gray: '#BBBBBB',
  grayCommentDark: '#474e68',
  grey: '#95989A',
  labels: '#747474',
  links: '#0037FF', //
  highlight: '#DBE1E7', //
  hover: '#F6F7F9', //
  primary: '#D53947', //
  primaryColor: '#D53947', //
  primaryColorDark: '#9D0021', //
  primaryColorLight: '#FF6D73', //
  primaryDark: '#9D0021', //
  primaryHover: ' #DE5C68', //
  primaryLight: '#FF6D73', //
  navBlack: '#0D1121',
  navGrey: '#343B53',
  secondary: '#5B637A', //
  secondaryColorDark: '#2C3246', //
  secondaryDark: '#2C3246', //
  secondaryLight: '160,174,212', // change to primaryLight later
  secondaryHover: '#FFC9CE', //
  secondaryGray: '#AAAAAA',
  selected: '#EBEFFB', //
  shadow: '0, 0, 0', //
  textBody: '#000000', //
  warning: '#F9A725', //
  white: '#ffffff', //
  // Above to be removed later
  // Below needs to be converted to RGB values and then updated across the comp library / app as hex and RGB are used differently
  // V2 colors below
  accent: '#D03D4A',
  background: '#F1F1F1',
  black: '#000000',
  error: '#9D0021',
  primary900: '#272B36',
  primary800: '#2C3246',
  primary700: '#40485C',
  primary600: '#474F68',
  primary500: '91,99,122',
  primary400: '#707EA4',
  primary300: '#8895BA',
  primary200: '#A0AED4',
  primary100: '#B6C4E9',
  grey900: '#383838',
  grey800: '#767676',
  grey700: '#A8A8A8',
  grey600: '#B8B8B8',
  grey500: '#C8C8C8',
  grey400: '#D8D8D8',
  grey300: '#E8E8E8',
  grey200: '#F1F1F1',
  grey100: '#F8F8F8',
  hyperlink: '#5867ED',
  primaryAccent900: '#85021E',
  primaryAccent800: '#9D0021',
  primaryAccent700: '#B0192B',
  primaryAccent600: '#BB2B38',
  primaryAccent500: '#D03D4A',
  primaryAccent400: '#E14F55',
  primaryAccent300: '#EC5D63',
  primaryAccent200: '#FF6D73',
  primaryAccent100: '#FF9499',
  // primaryDark: '#2C3246',
  primarySurface: '#5B637A',
  onAccent: '#FFFFFF',
  onBackground: '#000000',
  onError: '#FFFFFF',
  onPrimary: '#FFFFFF',
  onSurface: '0,0,0',
  onSuccess: '#FFFFFF',
  onWarning: '#000000',
  secondaryAccent900: '10,117,131',
  secondaryAccent800: '#098D9E',
  secondaryAccent700: '#00ABC1',
  secondaryAccent600: '#25B8D1',
  secondaryAccent500: '#25B8D1',
  secondaryAccent400: '#4DD3EA',
  secondaryAccent300: '#5DDDF3',
  secondaryAccent200: '#6FE7FC',
  secondaryAccent100: '#9BF0FF',
  tertiaryAccent900: '#23136B',
  tertiaryAccent800: '#311B91',
  tertiaryAccent700: '#4C23BF',
  tertiaryAccent600: '#5733B7',
  tertiaryAccent500: '#6745C3',
  tertiaryAccent400: '#7B57DE',
  tertiaryAccent300: '#916CF4',
  tertiaryAccent200: '#AB8BFF',
  tertiaryAccent100: '#C7B2FD',
  surface: '#FFFFFF',
  success: '#169E16',
  // warning: '#F9A725',
  // white: '#FFFFFF'
}

export const zindex = {
  fabOverlay: 10,
  fabMenu: 11,
  mobileNav: 12,
  selectOverlay: 12,
  selectWrapper: 13, // only when active
  notificationOverlay: 10,
  notificationWrapper: 12
}

export const appTheme = createTheme(adaptV4Theme({
  typography: {
    h1: {
      fontSize: '24px'
    },
    h2: {
      fontSize: '20px'
    },
    h3: {
      fontSize: '16px'
    },
    h4: {
      fontSize: '14px'
    },
    h5: {
      fontSize: '14px'
    },
    h6: {
      fontSize: '12px'
    },
    body1: {
      fontSize: '14px'
    },
    overline: {
      fontSize: '10px'
    },
  },
  overrides: {
    MuiChip: {
      deleteIcon: {
        color: `${theme.white}`
      }
    }
  }
}))

export const font = {
  primary: 'Roboto, Helvetica, Arial, sans-serif',
}
