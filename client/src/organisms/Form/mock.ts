export const basicFormMock = {
  title: {
    label: 'From Title',
    type: 'title'
  },
  text: {
    label: 'Form Text',
    value: '',
    type: 'text'
  },
  select: {
    label: 'Form Select',
    selected: {
      label: 'Acme',
      value: ''
    },
    options: [
      {
        value: '',
        label: 'Acme'
      },
      {
        value: '',
        label: 'MakeMe'
      }
    ],
    type: 'select'
  },
  number: {
    label: 'Form Text Number',
    value: '',
    type: 'number'
  },
  date: {
    label: 'Form Date',
    value: '',
    type: 'date'
  },
  checkbox: {
    label: 'Form Checkbox',
    value: false,
    type: 'checkbox'
  },
  phone: {
    label: 'Form Phone',
    value: '',
    type: 'phone'
  },
  colour: {
    label: 'Form Colour',
    value: '',
    type: 'colour'
  },
  info: {
    value: 'Form Info',
    type: 'info'
  },
  showDate: {
    value: '2019-03-25 14:39:06.000000',
    type: 'showDate'
  },
  delete: {
    type: 'delete'
  }
}

export function selectedOption(options: any, value: any) {
  const found = options.find(function(option: any) {
    const selectedValue =
      typeof value === 'string' ? value.toLowerCase() : value
    const optionValue =
      typeof option.value === 'string'
        ? option.value.toLowerCase()
        : option.value

    return optionValue === selectedValue
  })

  return found ? found : { value, label: '' }
}

export const candidateStatusOptions = [
  { label: 'Available', value: 'available' },
  { label: 'Not looking', value: 'notLooking' },
  { label: 'Archive', value: 'archive' },
  { label: 'Removed', value: 'removed' },
]
