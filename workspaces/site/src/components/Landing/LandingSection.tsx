import React from 'react';
import { Attributes, Box, BoxProps, Text } from 'preshape';
import { widthMedium } from '../Root';

export interface Props extends BoxProps {
  id?: string;
  title?: string;
}

const LandingSection = (props: Attributes<HTMLElement, Props>) => {
  const { children, id, maxWidth = widthMedium, title, ...rest } = props;

  return (
    <Box {...rest} id={id} maxWidth={maxWidth} paddingVertical="x12">
      {title && (
        <Text margin="x4" size="x6" strong>
          {title}
        </Text>
      )}

      <Box>{children}</Box>
    </Box>
  );
};

export default LandingSection;
