import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PixelTopBar from '../pixel-top-bar/pixel-top-bar'

import PixelBreadcrumbs from './pixel-breadcrumbs'

export default {
  title: 'Pixel Breadcrumbs',
  component: PixelBreadcrumbs
} as ComponentMeta<typeof PixelBreadcrumbs>

const Template: ComponentStory<typeof PixelBreadcrumbs> = (args) => {
  const breadcrumbs = [
    {
      name: 'Home',
      active: false
    },
    {
      name: 'Sub Page',
      active: false
    },
    {
      name: 'Inner Page',
      active: true
    }
  ]
  return (
    <React.Fragment>
      <PixelTopBar className='abc'>
        <PixelBreadcrumbs {...args} data={breadcrumbs} />
      </PixelTopBar>
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {}
