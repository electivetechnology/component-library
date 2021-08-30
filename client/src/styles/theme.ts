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
  disabledButton: '#EBEBEB', //
  disabledText: '#B0B7BB', //
  labels: '#747474',
  links: '#0037FF', //
  highlight: '#DBE1E7', //
  hover: '#F6F7F9', //
  primary: '#D53947', //
  primaryDark: '#9D0021', //
  primaryHover: ' #DE5C68', //
  primaryLight: '#FF6D73', //
  secondary: '#5B637A', //
  secondaryDark: '#2C3246', //
  secondaryLight: '#A0AED4', //
  secondaryHover: '#FFC9CE', //
  selected: '#EBEFFB', //
  shadow: '#000000', //
  warning: '#F9A725', //
  white: '#ffffff', //
  primaryColorValencia: '#D63948',
  primaryColorValenciaDark: '#BD202F',
  primaryColorValenciaLight: '#D86C75',
  grayCommentDark: '#474e68',
  pickledBlueWood: '#313950',
  grayGeyser: '#DCE1E8',
  blackText: 'rgba(0,0,0,0.87)',
  Gray: '#BBBBBB',
  secondaryBlue: '#00ACC1',
  secondaryGray: '#AAAAAA',
  secondaryYellow: '#F9A825',
  secondaryGreen: '#128C7E', 
  blue: '#4267B2',
  secondaryPurple: '#665CAC',
  secondaryLime: '#2BA245', 
  gradientBlue: '#190E49',
  gradientRed: '#583D12',
  primaryGrey: '#5B6379',
  borderGrey: '#CCCCCC',
  primaryBlue: '#1F78B4', 
  grey: '#95989A', 
  darkBlue: '#397CE1',
  lightBlue: '#92BBF9',
  navGrey: '#343B53', 
  disabledGrey: '#EBEBEB',
  primaryGreenHover: '#AEDFAE',
  toggleGrey: '#F1F1F1',
  lightText: '#747779'
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
