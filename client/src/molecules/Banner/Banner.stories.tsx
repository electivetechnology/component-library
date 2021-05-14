import React from 'react'
import Banner from 'molecules/Banner/Banner'
import { BannerContext } from './base'
import { BannerContent } from 'molecules/Banner/index'
import { Button } from 'atoms'

export default {
  title: 'molecules/Banner',
  component: Banner
}

export const TestBanner = () => (
  <BannerContext.Provider
    value={{
      setBanner: undefined,
      banner: (
        <BannerContent
          message={
            'There are features updates to the app, please click button to update'
          }
          buttons={[
            <Button theme='tertiary' label='Refresh' onClick={() => {}} />
          ]}
        />
      )
    }}
  >
    <Banner />
  </BannerContext.Provider>
)
