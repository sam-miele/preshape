import React, { forwardRef, RefForwardingComponent } from 'react';
import { Attributes } from '../Box/Box';
import Link from '../Link/Link';
import Text, { TextProps } from '../Text/Text';

export interface TableHeaderCellProps extends TextProps {
  /** Applies styling indication that this column is sortable */
  sortable?: boolean;
  /** Applies styling indication that this column is currently being sorted */
  sorted?: boolean;
}

const TableHeaderCell: RefForwardingComponent<
  HTMLTableHeaderCellElement,
  Attributes<HTMLTableHeaderCellElement, TableHeaderCellProps>
> = (props, ref) => {
  const {
    children,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    sortable,
    sorted,
    ...rest
  } = props;

  return (
    <Text
      {...rest}
      className="Table__header-cell"
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      ref={ref}
      strong
      tag="th"
      uppercase
    >
      {sortable ? <Link active={sorted}>{children}</Link> : children}
    </Text>
  );
};

export default forwardRef(TableHeaderCell);
