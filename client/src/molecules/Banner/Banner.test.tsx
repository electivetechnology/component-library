import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Banner from 'molecules/Banner/Banner'
import { BannerContext } from 'molecules/Banner/base'
import { BannerContent } from 'molecules/Banner/index'
import { Button } from 'atoms'

afterEach(cleanup)

test('renders Banner', () => {
  const { getByTestId } = render(
    <BannerContext.Provider
      value={{
        setBanner: undefined,
        banner: (
          <BannerContent
            message={
              'There are features updates to the app, please click button to update'
            }
            buttons={[
              <Button theme='primary' label='Refresh' onClick={() => {}} />
            ]}
          />
        )
      }}
    >
      <Banner />
    </BannerContext.Provider>
  )
  expect(getByTestId('Banner')).toBeDefined
})
