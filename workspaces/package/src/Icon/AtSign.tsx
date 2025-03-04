import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

const Icon: RefForwardingComponent<SVGSVGElement, Attributes<Omit<SVGSVGElement, 'display'>, BoxProps & {
  size?: string | number;
}>> = (props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <Box {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="at-sign_svg__feather at-sign_svg__feather-at-sign"><circle cx={12} cy={12} r={4} /><path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" /></svg>}
    </Box>;
};

export default forwardRef(Icon);