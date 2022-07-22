import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PixelTable from './pixel-table'

export default {
  title: 'Pixel Table',
  component: PixelTable
} as ComponentMeta<typeof PixelTable>
const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
    grow: 1
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
    grow: 1
  },
  {
    name: 'City',
    selector: 'city',
    sortable: true,
    grow: 1
  }
]
const data = [
  {
    id: 1,
    name: 'John',
    age: 20,
    city: 'New York'
  },
  {
    id: 2,
    name: 'Sara',
    age: 21,
    city: 'San Francisco'
  },
  {
    id: 3,
    name: 'Jane',
    age: 22,
    city: 'London'
  }
]
const Template: ComponentStory<typeof PixelTable> = (args) => {
  return (
    <React.Fragment>
      <PixelTable {...args} />
    </React.Fragment>
  )
}
export const Simple = Template.bind({})
Simple.args = {
  columns,
  data
}
export const WithPagination = Template.bind({})
WithPagination.args = {
  columns,
  data,
  paginationPerPage: 2
}
export const WithSearch = Template.bind({})
WithSearch.args = {
  columns,
  data,
  isSearchable: true
}
