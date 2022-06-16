import React from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const TypeAHead = (props) => {
  const { handleSearch, isLoading, data, labelKey } = props;
  const filterBy = () => true;
  const [options, setOptions] = React.useState(data);
  const ref = React.createRef();

  React.useEffect(() => {
    console.log(data);

    setOptions(data);
  }, [data]);

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      ref={ref}
      labelKey={labelKey || "first_name"}
      isLoading={isLoading}
      onSearch={handleSearch}
      options={options}
      placeholder={props.placeholder}
      renderMenuItemChildren={props.formatter}
      onChange={(d) => {
        props.onChange(d);
        ref.current.clear();
      }}
    />
  );
};

export default TypeAHead;
