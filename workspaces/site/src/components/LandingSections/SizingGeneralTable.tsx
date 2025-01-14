import React from 'react';
import {
  sizeX1Px,
  sizeX2Px,
  sizeX3Px,
  sizeX4Px,
  sizeX6Px,
  sizeX8Px,
  sizeX10Px,
  sizeX12Px,
  sizeX16Px,
  sizeX1Rem,
  sizeX2Rem,
  sizeX3Rem,
  sizeX4Rem,
  sizeX6Rem,
  sizeX8Rem,
  sizeX10Rem,
  sizeX12Rem,
  sizeX16Rem,
} from 'preshape';
import SizingTable, { Props, TypeSizingVariables } from './SizingTable';

export const variables: TypeSizingVariables = (
  [
    ['x1', sizeX1Px, sizeX1Rem],
    ['x2', sizeX2Px, sizeX2Rem],
    ['x3', sizeX3Px, sizeX3Rem],
    ['x4', sizeX4Px, sizeX4Rem],
    ['x6', sizeX6Px, sizeX6Rem],
    ['x8', sizeX8Px, sizeX8Rem],
    ['x10', sizeX10Px, sizeX10Rem],
    ['x12', sizeX12Px, sizeX12Rem],
    ['x16', sizeX16Px, sizeX16Rem],
  ] as [string, number, number][]
).map(([size, px, rem]) => ({
  name: size,
  css: `--size--${size}`,
  js: `size${size.toUpperCase()}Px / size${size.toUpperCase()}Rem`,
  value: `${px}px / ${rem}rem`,
}));

const SizingGeneralTable = (props: Omit<Props, 'variables'>) => {
  return <SizingTable {...props} name="General" variables={variables} />;
};

export default SizingGeneralTable;
