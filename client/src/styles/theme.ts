import { createMuiTheme } from '@material-ui/core/styles'

export const theme = {
  primaryColorValencia: '#D63948',
  primaryColorValenciaDark: '#BD202F',
  primaryColorValenciaLight: '#D86C75',
  white: '#ffffff',
  black: '#000000',
  grayComment: '#5B637A', // darkest
  grayCommentDark: '#474e68',
  pickledBlueWood: '#313950',
  grayGeyser: '#DCE1E8',
  grayAthens: '#F6F7F9', // lightest
  blackText: 'rgba(0,0,0,0.87)',
  Gray: '#BBBBBB',
  secondaryBlue: '#00ACC1',
  secondaryGray: '#AAAAAA',
  secondaryYellow: '#F9A825',
  secondaryGreen: '#128C7E', // WhatsApp
  blue: '#4267B2', // Messenger
  secondaryPurple: '#665CAC', // Viber
  secondaryLime: '#2BA245', // WeChat
  gradientBlue: '#190E49',
  gradientRed: '#583D12',
  hoverBlue: '#EBEFFB',
  primaryGrey: '#5B6379', // selected / font grey / icon fill
  borderGrey: '#CCCCCC',
  primaryRed: '#D53947', // title
  primaryBlue: '#1F78B4', // font blue
  grey: '#95989A', // sub-heading
  primaryTurquoise: '#00ABC1',
  dividerGrey: '#DBE1E7', // hover
  darkBlue: '#397CE1',
  lightBlue: '#92BBF9',
  mustard: '#F9A725',
  navGrey: '#343B53', // main nav bar
  primaryHover: ' #DE5C68',
  secondaryHover: '#FFC9CE',
  disabledGrey: '#EBEBEB',
  disabledTextGrey: '#B0B7BB',
  primaryGreen: '#8ADC8A',
  primaryGreenHover: '#AEDFAE'
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
      fontSize: '36px'
    },
    h2: {
      fontSize: '30px'
    },
    h3: {
      fontSize: '26px'
    },
    h4: {
      fontSize: '18px'
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
