## Import Form Component Example

    import { Form } from 'components/common'

    const someEntityForm = useSelector(getSomeEntityForm)

    const updateSomeEntity = (entity: any) => {
        // Update method here
    }

    <Form
        handleSave={updateSomeEntity}
        inputs={someEntityForm}
        customInputs={{ customName: <CustomName /> }}
    />

## Form Selector Example

    export const getSomeEntityForm = createSelector(
      getSomeEntity,
      (someEntity: any) => {
        return {
          someEntityTitle: {
            label: 'Edit Some Entity',
            type: 'title',
          },
          someEntityValue: {
            label: 'Value',
            value: someEntity.value,
            type: 'text',
          },
        }
      }
    )

You can implement the following possible form components:

## Form Title

    titleName: {
        label: string,
        type: 'title',
        width?: number,
        permission?: AuthPermissionsTypeConst,
    },

## Form Text

    textName: {
        label: string,
        value: string,
        type: 'text',
        multiline?: boolean,
        affix?: string,
        helperText?: string,
        width?: number,
        permission?: AuthPermissionsTypeConst,
        disabled?: AuthPermissionsTypeConst,
        readOnly?: boolean,
        commaSeparated? boolean
    },

## Form Number

    numberName: {
        label: string,
        value: string,
        type: 'number',
        affix?: string,
        helperText?: string,
        width?: number,
        permission?: AuthPermissionsTypeConst,
        disabled?: AuthPermissionsTypeConst,
        readOnly?: boolean,
    },

## Form Select

    selectName: {
        label,
        selected: {
            label,
            value,
        },
        options,
        type: 'select',
        width?: number,
        permission?: AuthPermissionsTypeConst,
        disabled?: AuthPermissionsTypeConst,
        readOnly?: boolean,
    },

## Form Date

    dateName: {
        label: string,
        value: date,
        type: 'date',
        width?: number,
        permission?: AuthPermissionsTypeConst,
        disabled?: AuthPermissionsTypeConst,
        readOnly?: boolean,
    },

## Form Checkbox

    checkboxName: {
        label: string,
        value: boolean,
        type: 'checkbox',
        width?: number,
        permission?: AuthPermissionsTypeConst,
        disabled?: AuthPermissionsTypeConst,
        readOnly?: boolean,
    },

## Form Custom

    customName: {
        type: 'custom',
        width?: number,
        permission?: AuthPermissionsTypeConst,
    },
