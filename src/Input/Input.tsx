import * as React from 'react';
import { TypeBaseSize } from '../Base/Base';
import InputLabel from '../InputLabel/InputLabel';
import Text, { Props as TextProps } from '../Text/Text';
import './Input.css';

interface Props extends TextProps {
  /** A styled disabled state that disables all interactions */
  disabled?: boolean;
  /** A label that gives describes what the input is for */
  label?: string;
  /** @Ignore */
  margin?: TypeBaseSize;
  /** @Ignore */
  padding?: TypeBaseSize;
  /** @Ignore */
  paddingHorizontal?: TypeBaseSize;
  /** @Ignore */
  paddingVertical?: TypeBaseSize;
}

const Input: React.FunctionComponent<Props> = (props: Props) => {
  const {
    disabled,
    label,
    margin,
    padding,
    paddingHorizontal,
    paddingVertical,
    ...rest
  } = props;

  return (
    <InputLabel
        disabled={ disabled }
        label={ label }
        margin={ margin }
        paddingHorizontal={ padding || paddingHorizontal }
        paddingVertical={ padding || paddingVertical }>
      <Text { ...rest }
          Component="input"
          className="Input"
          disabled={ disabled }
          paddingHorizontal={ padding || paddingHorizontal }
          paddingVertical={ padding || paddingVertical }
          size="x1"
          strong />
    </InputLabel>
  );
};

Input.defaultProps = {
  paddingHorizontal: 'x3',
  paddingVertical: 'x2',
};

export default Input;