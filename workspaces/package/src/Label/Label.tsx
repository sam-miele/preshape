import React, { forwardRef, RefForwardingComponent } from 'react';
import { sizeX3Px } from '../variables';
import { Attributes } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import './Label.css';

export interface LabelProps extends TextProps {}

const Label: RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLDivElement, LabelProps>
> = (props, ref) => {
  const {
    backgroundColor = 'text-shade-1',
    borderRadius = sizeX3Px,
    paddingHorizontal = 'x2',
    paddingVertical = 'x1',
    size = 'x2',
    textColor = 'background-shade-1',
    ...rest
  } = props;

  return (
    <Text
      {...rest}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      className="Label"
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      ref={ref}
      size={size}
      strong
      tag="div"
      textColor={textColor}
    />
  );
};

export default forwardRef(Label);
