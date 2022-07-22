import React from "react";
import { FormControl } from "react-bootstrap";
import InputMask from "react-input-mask";
import styled from "styled-components";
import { $secondaryWithAlpha } from "../../styleGuide";

const Inputmask = (props) => {
  return (
    <div>
      <InputMask
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        {...props.rest}
      >
        {(inputProps) => (
          <StyledPixelInput
            id={props.name}
            name={props.name}
            type={props.type}
            ref={props.ref}
            className={props.className}
            {...inputProps}
          />
        )}
      </InputMask>
    </div>
  );
};
const StyledPixelInput = styled(FormControl)`
  &:focus {
    box-shadow: 0 0 0 0.25rem ${$secondaryWithAlpha("0.15")} !important;
  }
`;
export default Inputmask;
