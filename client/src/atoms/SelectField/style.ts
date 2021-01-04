import { theme } from 'styles/theme'
import styled from 'styled-components'

type AutoCompleteContainerProps = {
  theme: string
}

export const AutoCompleteContainerStyled = styled.div<
  AutoCompleteContainerProps
>`
  ${(props) =>
    props.theme === 'light' &&
    props.theme &&
    `
        background-image: linear-gradient(
          ${theme.gradientBlue},
          ${theme.gradientRed}
        );
        height: 100px;
    `};
`
