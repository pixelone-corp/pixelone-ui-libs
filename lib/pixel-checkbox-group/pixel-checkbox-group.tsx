import React, { InputHTMLAttributes } from "react";
import { Form } from "react-bootstrap";
import { FormCheckType } from "react-bootstrap/esm/FormCheck";
import styled from "styled-components";

interface Option {
  label: string;
  value: string;
  type?: any;
  disabled?: boolean;
  checked?: boolean;
}
export interface CheckboxGroupProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className: string;
  options: Option[];
  label: string;
}

const StyledPixelCheckboxGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
`;

const StyledGroup = styled(Form.Group)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  * {
    cursor: pointer;
  }
`;

export const PixelCheckboxGroup = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupProps
>(({ className, label, options, onChange, ...rest }, ref) => {
  const id = `checkbox-group-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <StyledPixelCheckboxGroup>
      {label && <label>{label}</label>}
      <StyledGroup>
        {options.map((option) => (
          <Form.Check
            key={option.value}
            type={option.type}
            label={option.label}
            name={label}
            value={option.value}
            disabled={option.disabled}
            checked={option.checked}
            {...rest}
          >
            <Form.Check.Input
              type={option.type}
              value={option.value}
              disabled={option.disabled}
              checked={option.checked}
              onChange={onChange}
              name={label}
              id={id + option.value}
            />
            <Form.Check.Label htmlFor={id + option.value}>
              {option.label}
            </Form.Check.Label>
          </Form.Check>
        ))}
      </StyledGroup>
    </StyledPixelCheckboxGroup>
  );
});
export default PixelCheckboxGroup;
