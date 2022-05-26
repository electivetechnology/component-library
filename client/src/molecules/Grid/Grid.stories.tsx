import React, { useState } from 'react'
import { CloseButtonStyled } from './styles'
import { theme } from 'styles/theme'
import { ColumnComponent, Grid, GridColumn } from 'index'

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
    <div style={{ display: 'inline-flex', width: '100%' }}>
      <div
        style={{
          width: '18px',
          height: '100%',
          backgroundColor: 'grey'
        }}
      >
        <CloseButtonStyled onClick={handleShow}>X</CloseButtonStyled>
      </div>
      <Grid
        {...args}
        expandMainColumn={expandMainColumn}
        isActive={showContent}
      >
        <div style={{ display: 'inline-flex' }}>
          <GridColumn
            expandMainColumn={false}
            mainColumnExpanded={expandMainColumn}
            divider={true}
            isClosable={true}
            isOptionalContentClosable={true}
            handleCloseAllContent={handleShow}
            handleCloseOptionalContent={handleExpand}
          >
            <div style={{ width: '100%' }}>Column 1</div>
          </GridColumn>
        </div>
        <GridColumn expandMainColumn={expandMainColumn} isClosable={false}>
          Column 2
        </GridColumn>
      </Grid>
    </div>
  )
}

const ColumnTemplate = (args: any) => {
  const [closeColumn, setCloseColumn] = useState(true)
  const [closeColumnTwo, setCloseColumnTwo] = useState(true)

  const handleCloseColumn = () => {
    setCloseColumn(!closeColumn)
  }
  const handleCloseColumnTwo = () => {
    setCloseColumnTwo(!closeColumnTwo)
  }
  return (
    <div style={{ display: 'inline-flex', width: '100%', height: '600px' }}>
      <ColumnComponent
        {...args}
        handleCloseColumn={handleCloseColumn}
        isColumnClosed={closeColumn}
      >
        <div style={{ width: '100%' }}>Column 1</div>
      </ColumnComponent>
      <ColumnComponent
        {...args}
        handleCloseColumn={handleCloseColumnTwo}
        isColumnClosed={closeColumnTwo}
      >
        <div style={{ width: '100%' }}>Column 2</div>
      </ColumnComponent>
    </div>
  )
}

// Default
export const Default: any = GridTemplate.bind({})

Default.args = {
  columnsSize: '60% 40%',
  columnSize: 'auto',
  transition: '0.6s',
  transform: '124%, -0.5%',
  width: '80%',
  activeTransform: '23.5%,-0.5%',
  backgroundColor: theme.highlight
}

// NewColumn
export const NewColumn: any = ColumnTemplate.bind({})

NewColumn.args = {
  label: 'Label for new column',
  icon: true
}

// ColumnNoLabel
export const ColumnNoLabel: any = ColumnTemplate.bind({})

ColumnNoLabel.args = {
  label: false,
  icon: true
}

export default {
  title: 'molecules/GridColumn',
  component: Grid
}
