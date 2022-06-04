import React from "react";
import { Dropdown } from "react-bootstrap";
import styled, { css } from "styled-components";
import { $primaryColor, $secondaryColor } from "../styleGuide";
export interface MenuProps {
  className?: string;
  variant?: "outline" | "primary" | "secondary" | "link" | string;
  size?: "lg" | "sm";
  active?: boolean;
  disabled?: boolean;
  margin?: string;
  padding?: string;
  tooltip?: string;
  toggleText?: boolean;
  options?: OptionsData[];
}
interface OptionsData {
  label: string;
  disabled?: boolean;
  clickHandler: any;
}
const StyledPixelButton = styled(Dropdown.Toggle)`
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  margin: ${(props: MenuProps) => props.margin || "0px"};
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
  ${(props: MenuProps) =>
    props.variant === "outline" &&
    css`
      background-color: transparent;
      border-color: ${$primaryColor} !important;
      color: ${$primaryColor} !important;
      outline: none;
    `}
  ${(props: MenuProps) =>
    props.variant === "primary" &&
    css`
      background-color: ${$primaryColor} !important;
      border-color: ${$primaryColor} !important;
      color: #fff !important;
      &:hover,
      &:active,
      &:focus {
        background-color: ${$secondaryColor} !important;
        border-color: ${$secondaryColor} !important;
      }
    `}

    ${(props: MenuProps) =>
    props.variant === "link" &&
    css`
      background-color: transparent;
      border-color: transparent;
      color: ${$primaryColor};
      padding: ${(props: MenuProps) => props.padding || "0.375rem 0.75rem"};
      &:hover,
      &:hover a,
      &:active,
      &:active a,
      &:focus,
      &:focus a {
        color: ${$secondaryColor} !important;
      }
      a {
        color: ${$primaryColor} !important;
      }
    `}
    ${(props: MenuProps) =>
    props.active &&
    css`
      background-color: ${$secondaryColor} !important;
      border-color: ${$secondaryColor} !important;
    `}
`;
const StyledPixelDropDownMenu = styled.div``;

export const PixelDropDownMenu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      className,
      toggleText = "drop-down-button",
      options,
      active,
      variant = "primary",
      disabled = false,
      margin = "0px",
      tooltip = false,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledPixelDropDownMenu>
        <Dropdown>
          <StyledPixelButton
            aria-pressed={active}
            variant={variant}
            ref={ref}
            className={className}
            disabled={disabled}
            margin={margin}
            {...rest}
          >
            {toggleText}
          </StyledPixelButton>
          <Dropdown.Menu>
            {options?.map((data) => (
              <Dropdown.Item
                disabled={data.disabled}
                onClick={data.clickHandler}
              >
                {data.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </StyledPixelDropDownMenu>
    );
  }
);
export default PixelDropDownMenu;
