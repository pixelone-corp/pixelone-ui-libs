import React from "react";
import { FormControl } from "react-bootstrap";
import { $secondaryWithAlpha } from "../../styleGuide";
import styled, { css } from "styled-components";

const Input = (props) => {
  return (
    <React.Fragment>
      <StyledPixelInput
        id={props.id}
        name={props.name}
        type={props.type}
        ref={props.ref}
        className={props.className}
        disabled={props.disabled}
        value={props.value}
        spellCheck={props.spellCheck}
        onChange={props.onChange}
        aria-invalid={props.error}
        height={props.height}
        {...props.rest}
      />
    </React.Fragment>
  );
};
const StyledPixelInput = styled(FormControl)`
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  &:focus {
    box-shadow: 0 0 0 0.25rem ${$secondaryWithAlpha("0.15")} !important;
  }
`;
export default Input;
