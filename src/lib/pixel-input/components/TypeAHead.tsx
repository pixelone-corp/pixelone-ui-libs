import React from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'

const TypeAHead = (props) => {
  const { handleSearch, isLoading, data, labelKey, ...rest } = props
  const filterBy = () => true
  const [options, setOptions] = React.useState(data)
  const ref: any = React.useRef()

  React.useEffect(() => {
    console.log(data)

    setOptions(data)
  }, [data])

  return (
    <AsyncTypeahead
      style={{ overflow: 'visible' }}
      filterBy={filterBy}
      id='async-example'
      ref={ref}
      labelKey={labelKey || 'first_name'}
      isLoading={isLoading}
      onSearch={handleSearch}
      options={options}
      placeholder={props.placeholder}
      renderMenuItemChildren={props.formatter}
      onChange={(d) => {
        props.onChange(d)
        if (ref && ref.current) {
          ref?.current?.clear()
        }
      }}
      {...rest}
    />
  )
}

export default TypeAHead
