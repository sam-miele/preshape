import React, { forwardRef, ReactNode, RefForwardingComponent } from 'react';
import { Attributes, TypeSize } from '../Box/Box';
import RadioButtonIndicator from './RadioButtonIndicator';
import SelectInputLabel from '../SelectInputLabel/SelectInputLabel';
import './RadioButton.css';

export interface RadioButtonProps {
  /** Contents that is rendered next to the indicator */
  children?: ReactNode;
  /** A styled disabled state that disables all interactions */
  disabled?: boolean;
  /** @Ignore */
  margin?: TypeSize;
  /** @Ignore */
  padding?: TypeSize;
  /** @Ignore */
  paddingHorizontal?: TypeSize;
  /** @Ignore */
  paddingVertical?: TypeSize;
}

const RadioButton: RefForwardingComponent<
  HTMLInputElement,
  Attributes<HTMLInputElement, RadioButtonProps>
> = (props, ref) => {
  const {
    children,
    disabled,
    margin,
    padding,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    ...rest
  } = props;

  return (
    <SelectInputLabel
      className="RadioButton__label"
      disabled={disabled}
      label={children}
      margin={margin}
      padding={padding}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
    >
      <RadioButtonIndicator {...rest} disabled={disabled} ref={ref} />
    </SelectInputLabel>
  );
};

export default forwardRef(RadioButton);
