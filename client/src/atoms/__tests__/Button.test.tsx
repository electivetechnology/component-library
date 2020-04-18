import React from 'react'
import { Button } from 'components/common'
import { shallow } from 'enzyme'

describe('Button component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Button text={'text'} onClick={undefined} theme={'primary'} />
    )
    expect(wrapper.find('[data-qa="ButtonComponent"]').length).toEqual(1)
  })
})
