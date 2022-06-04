import React, { InputHTMLAttributes } from "react";
import { FormSelect } from "react-bootstrap";
import styled from "styled-components";
import { $secondaryWithAlpha } from "../styleGuide";
export interface DropDownProps extends InputHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options?: OptionsData[];
  error?: "string";
  isgrouped?: boolean;
  groupOptionData?: any;
  selectlabel?: string;
}
interface OptionsData {
  value: string;
  label: string;
  disabled?: boolean;
}

const InputError = styled.span`
  font-size: 90%;
  color: rgb(255 0 0 / 64%);
`;
const StyledPixelSwitch = styled(FormSelect)`
  &:focus {
    box-shadow: 0 0 0 0.25rem ${$secondaryWithAlpha("0.15")} !important;
  }
`;
export const PixelDropDown = React.forwardRef<HTMLSelectElement, DropDownProps>(
  (
    {
      className,
      options = [],
      error,
      groupOptionData = {},
      isgrouped = false,
      selectlabel = "Please select",
      ...rest
    },
    ref
  ) => {
    return (
      <DropDown className="abc">
        <StyledPixelSwitch
          aria-invalid={error ? "true" : "false"}
          className={className}
          ref={ref}
          {...rest}
        >
          {isgrouped ? (
            <React.Fragment>
              <Option value="">{selectlabel}</Option>
              {Object.keys(groupOptionData).map((key) => {
                return (
                  <OptGroup label={key}>
                    {groupOptionData[key].map((option) => {
                      return (
                        <Option
                          key={option.value}
                          value={option.value}
                          disabled={option.disabled}
                        >
                          {option.label}
                        </Option>
                      );
                    })}
                  </OptGroup>
                );
              })}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {options.map((option) => {
                return (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                );
              })}
            </React.Fragment>
          )}
        </StyledPixelSwitch>
        {error && <InputError>{error}</InputError>}
      </DropDown>
    );
  }
);

const DropDown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Option = styled.option`
  background-color: #ffffff;
  height: 40px;
  padding: 10px 0px !important;
  &:hover {
    background-color: #f5f5f5;
  }
`;
const OptGroup = styled.optgroup`
  background-color: #f9f9f9;
`;

export default PixelDropDown;
