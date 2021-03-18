import React, {Fragment} from 'react'
import PopUp from 'molecules/PopUp/PopUp'
import { action } from '@storybook/addon-actions'

export default {
  title: 'molecules/PopUp',
  component: PopUp
}

export const NoClosePopUp = () => (
  <Fragment>
    <div id="pop-up"/>
    <PopUp open={true} setOpen={action('open')}>Do not allow close</PopUp>
  </Fragment>

)

export const ClosePopUp = () => (
  <Fragment>
    <div id="pop-up"/>
    <PopUp open={true} setOpen={action('open')} isCloseable>Allow close</PopUp>
  </Fragment>
)
