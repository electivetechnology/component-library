import React, { FC, useContext } from 'react'
import { Card } from 'atoms'
import Page from 'molecules/Pages/Page'
import { PageContext } from './base'
import { CloseIconStyled, PagesContainerStyled, ProgressContainerStyled, ProgressBarStyled, ProgressIndicatorStyled, HelperTextStyled } from 'molecules/Pages/styles'
import CloseIcon from '@material-ui/icons/Close'
import Progress from 'atoms/Progress/Progress';
import { theme } from 'styles/theme';

const Pages: FC = () => {
  const { back, next, progress, handleClose, currentStep, finalStep, helperText } = useContext(
    PageContext
  )

  const renderProgress: any = []

  for (let startIncrement = 1; startIncrement <= finalStep; startIncrement++) {
    const star =
      startIncrement <= currentStep ? (
        <Progress
          label={startIncrement.toString()}
          progressColor={theme.primaryColorValencia}
          borderColor={theme.primaryColorValencia}
        />
      ) : startIncrement <= progress ? (
        <Progress
          label={startIncrement.toString()}
          progressColor={theme.white}
          progressFill={theme.primaryColorValencia}
          borderColor={theme.primaryColorValencia}
        />
      ) : (
        <Progress
          label={startIncrement.toString()}
          progressColor={theme.grey}
          borderColor={theme.grey}
        />
      )

    renderProgress.push(star)
  }

  return (
    <Card theme="primary" fullWidth noBorder>
      <PagesContainerStyled>
        {handleClose && (
          <CloseIconStyled onClick={handleClose}>
            <CloseIcon />
          </CloseIconStyled>
        )}
        {back && <Page handleClick={back} label={'Back'} />}
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
    </Card>
  )
}

export default Pages
