import React, { useState } from 'react'
import { Grid, GridColumn } from 'atoms'
import { CloseButtonStyled } from './styles'
import { theme } from 'styles/theme'

const GridTemplate = (args: any) => {
  const [expandMainColumn, setExpandMainColumn] = useState(false)
  const [showContent, setShowContent] = useState(false)
  
  const handleExpand = () => {
    setExpandMainColumn(!expandMainColumn)
  }

  const handleShow = () => {
    setShowContent(!showContent)
  }
  return (
    <div style={{display: "inline-flex", width: "100%"}}>
      <div style={{
        width: "18px",
        height: "100%",
        backgroundColor: "grey"
      }}>
        <CloseButtonStyled onClick={handleShow}>
          X
        </CloseButtonStyled>
      </div>
      <Grid
        {...args}
        expandMainColumn={expandMainColumn}
        isActive={showContent}>
        <div style={{display: "inline-flex"}}>
          <GridColumn
            expandMainColumn={false}
            mainColumnExpanded={expandMainColumn}
            divider={true}
            isClosable={true}
            isOptionalContentClosable={true}
            handleCloseAllContent={handleShow}
            handleCloseOptionalContent={handleExpand}>
            <div style={{width: "100%"}}>
              Column 1
            </div>
          </GridColumn>
        </div>
        <GridColumn
          expandMainColumn={expandMainColumn}
          isClosable={false}>
          Column 2
        </GridColumn>
      </Grid>
    </div>
  )
}

// Default
export const Default: any = GridTemplate.bind({})

Default.args = {
  columnsSize: "60% 40%",
  columnSize: "auto",
  transition: "0.6s",
  transform: "124%, -0.5%",
  width: "80%",
  activeTransform: "23.5%,-0.5%",
  backgroundColor: theme.dividerGrey,
}

export default {
  title: 'atoms/Grid',
  component: Grid
}
