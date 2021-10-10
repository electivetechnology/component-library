import { createMuiTheme } from '@material-ui/core/styles'

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
  secondaryLight: '#A0AED4', //
  secondaryHover: '#FFC9CE', //
  secondaryGray: '#AAAAAA',
  selected: '#EBEFFB', //
  shadow: '#000000', //
  textBody: '#000000', //
  warning: '#F9A725', //
  white: '#ffffff', //
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

export const appTheme = createMuiTheme({
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
    }
  },
  overrides: {
    MuiChip: {
      deleteIcon: {
        color: `${theme.white}`
      }
    }
  }
})

export const font = {
  primary: 'Roboto, Helvetica, Arial, sans-serif',
}
