import React, { FC, useContext } from 'react'
import { Card, Font } from 'atoms'
import Page from 'molecules/Pages/Page'
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined'
import { PageContext } from './base'
import { CloseIconStyled } from 'molecules/Pages/styles'
import CloseIcon from '@material-ui/icons/Close'

const Pages: FC = () => {
  const { back, next, progress, handleClose, currentStep, finalStep } = useContext(
    PageContext
  )

  const renderProgress: any = []

  for (let startIncrement = 1; startIncrement <= finalStep; startIncrement++) {
    const star =
      startIncrement <= currentStep ? (
        <FiberManualRecordIcon />
      ) : startIncrement <= progress ? (
        <AlbumOutlinedIcon />
      ) : (
        <FiberManualRecordOutlinedIcon />
      )

    renderProgress.push(star)
  }

  return (
    <Card theme="primary" fullWidth>
      {handleClose && (
        <CloseIconStyled onClick={handleClose}>
          <CloseIcon />
        </CloseIconStyled>
      )}
      <Font variant="h4" component="h1" gutterBottom align="center">
        {back && <Page handleClick={back} label={'Back'} />}
        {renderProgress}
        {next && (
          <Page
            handleClick={next}
            label={currentStep === finalStep ? 'Finish' : 'Next'}
          />
        )}
      </Font>
    </Card>
  )
}

export default Pages
