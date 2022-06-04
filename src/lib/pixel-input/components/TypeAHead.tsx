import React from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const TypeAHead = (props) => {
  const { handleSearch, isLoading, data, labelKey } = props;
  const filterBy = () => true;
  const [options, setOptions] = React.useState(data);

  React.useEffect(() => {
    console.log(data);

    setOptions(data);
  }, [data]);

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      labelKey={labelKey || "first_name"}
      isLoading={isLoading}
      onSearch={handleSearch}
      options={options}
      placeholder={props.placeholder}
      renderMenuItemChildren={props.formatter}
      onChange={props.onChange}
    />
  );
};

export default TypeAHead;
