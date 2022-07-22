import React from "react";
import styled from "styled-components";

import DataTable, { createTheme } from "react-data-table-component";
interface PixelTableProps {
  columns: any;
  data: any;
  progressPending?: boolean;
  isSearchable?: boolean;
  paginationPerPage?: number;
}
import "./table.scss";
import { PixelFactoryContext } from "../pixel-factory/pixel-factory";
import PixelInput from "../pixel-input/pixel-input";


createTheme(
  "solarized",
  {
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
    background: {
      default: "#ffffff",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#cecece",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "light"
);

const StyledBootstrapTable = styled(DataTable)`
header {
  display:none !important;
}`;
const StyledLoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
`;
const SearchPixelInput = styled.div`
  width: 30%;
`;
const CustomLoader = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { showLoader, hideLoader } = React.useContext(PixelFactoryContext);

  React.useEffect(() => {
    if (ref.current) {
      showLoader(ref);
    }
    return () => {
      hideLoader(ref);
    };
  }, []);
  return (
    <React.Fragment>
      <StyledLoaderContainer className="pixeltable" ref={ref} />
    </React.Fragment>
  );
};
const customFilter = (val, data) => {
  return data.filter((e) =>
    Object.values(e).some((v) => String(v).includes(val))
  );
};

export const PixelTable = React.forwardRef<HTMLTableElement, PixelTableProps>(
  (
    {
      columns,
      paginationPerPage = 25,
      data = [],
      progressPending,
      isSearchable = false,
      ...rest
    },
    ref
  ) => {
    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] =
      React.useState(false);

    const subHeaderComponentMemo = React.useMemo(() => {
      const handleClear = () => {
        if (filterText) {
          setResetPaginationToggle(!resetPaginationToggle);
          setFilterText("");
        }
      };

      return (
        <SearchPixelInput>
          <PixelInput
            placeholder="Search"
            name="search"
            onChange={(e) => setFilterText(e.target.value)}
            value={filterText}
          />
        </SearchPixelInput>
      );
    }, [filterText, resetPaginationToggle]);

    return (
      <StyledBootstrapTable
        keyField="id"
        classes="pixeltable"
        headerClasses="tableheader"
        bordered={false}
        columns={columns}
        pagination={true}
        paginationPerPage={paginationPerPage}
        theme="solarized"
        data={customFilter(filterText, data)}
        bootstrap4
        responsive
        subHeader={isSearchable}
        subHeaderComponent={subHeaderComponentMemo}
        progressPending={progressPending}
        progressComponent={<CustomLoader />}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default PixelTable;
