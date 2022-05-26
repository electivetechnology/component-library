import React, { FC, useContext } from 'react'
import Page from 'molecules/Pages/Page'
import { PageContext } from './base'
import { CloseIconStyled, PagesContainerStyled, ProgressContainerStyled, ProgressBarStyled, ProgressIndicatorStyled, HelperTextStyled, MobileProgressNavStyled } from 'molecules/Pages/styles'
import CloseIcon from '@mui/icons-material/Close'
import Progress from 'atoms/Progress/Progress'
import { theme } from 'styles/theme'

type PagesProps = {
  sticky?: boolean
  transparent?: boolean
}

const Pages: FC<PagesProps> = ({ sticky = false, transparent = false }) => {
  const isMobile = window.innerWidth < 750

  const { back, next, progress, handleClose, currentStep, finalStep, helperText } = useContext(
    PageContext
  )

  const renderProgress: any = []

  for (let startIncrement = 1; startIncrement <= finalStep; startIncrement++) {
    const star =
      startIncrement === currentStep ? (
        <Progress
          key={startIncrement}
          label={startIncrement.toString()}
          progressFill={theme.primaryColor}
          progressColor={theme.white}
          borderColor={theme.primaryColor}
        />
      ) : startIncrement <= progress && !isMobile ? (
        <Progress
          key={startIncrement}
          label={startIncrement.toString()}
          progressColor={theme.primaryColor}
          borderColor={theme.primaryColor}
        />
      ) : !isMobile && (
        <Progress
          key={startIncrement}
          label={startIncrement.toString()}
          progressColor={theme.grey}
          borderColor={theme.grey}
        />
      )

    renderProgress.push(star)
  }

  return (
    <PagesContainerStyled sticky={sticky} transparent={transparent}>
      {handleClose && (
        <CloseIconStyled onClick={handleClose}>
          <CloseIcon />
        </CloseIconStyled>
      )}
      {back && <Page handleClick={back} label={'Back'} buttonTheme='secondary'/>}
      <ProgressBarStyled isMobile>
        {renderProgress}
      </ProgressBarStyled>
      <MobileProgressNavStyled>
        {next && (
          <Page
            handleClick={next}
            label={currentStep === finalStep ? 'Finish' : 'Next'}
          />
        )}
      </MobileProgressNavStyled>
      <ProgressContainerStyled>
        <ProgressIndicatorStyled>
          <ProgressBarStyled>
            {renderProgress}
          </ProgressBarStyled>
          {next && (
            <Page
              handleClick={next}
              label={currentStep === finalStep ? 'Finish' : 'Next'}
            />
          )}
        </ProgressIndicatorStyled>
        <HelperTextStyled>
          {helperText}
        </HelperTextStyled>
      </ProgressContainerStyled>
    </PagesContainerStyled>
  )
}

export default Pages
