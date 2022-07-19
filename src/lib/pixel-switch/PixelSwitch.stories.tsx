import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelSwitch from './pixel-switch'
import { Section, SectionActions } from '../common-styled-component/section'

export default {
  title: 'Pixel Switch',
  component: PixelSwitch
} as ComponentMeta<typeof PixelSwitch>

const Template: ComponentStory<typeof PixelSwitch> = (args) => {
  const [checked, setChecked] = React.useState(false)
  return (
    <React.Fragment>
      <Section>
        <SectionActions>
          <PixelSwitch
            {...args}
            onChange={() => setChecked(!checked)}
            label={checked ? 'ON' : 'OFF'}
          />
        </SectionActions>
      </Section>
    </React.Fragment>
  )
}
export const Small = Template.bind({})
Small.args = {
  size: 'sm'
}
export const large = Template.bind({})
large.args = {
  size: 'lg'
}
export const Disabled = Template.bind({})
Disabled.args = {
  size: 'lg',
  disabled: true
}
