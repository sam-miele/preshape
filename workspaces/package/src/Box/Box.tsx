/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  createElement,
  forwardRef,
  AllHTMLAttributes,
  RefForwardingComponent,
  SVGAttributes,
} from 'react';
import classnames from 'classnames';
import './Box.css';

export type Attributes<E, P = {}> = P &
  Omit<E extends SVGElement ? SVGAttributes<E> : AllHTMLAttributes<E>, keyof P>;

export type TypeColor =
  | 'black'
  | 'white'
  | 'highlight'
  | 'accent-shade-1'
  | 'accent-shade-2'
  | 'accent-shade-3'
  | 'accent-shade-4'
  | 'accent-shade-5'
  | 'background-shade-1'
  | 'background-shade-2'
  | 'background-shade-3'
  | 'dark-shade-1'
  | 'dark-shade-2'
  | 'dark-shade-3'
  | 'light-shade-1'
  | 'light-shade-2'
  | 'light-shade-3'
  | 'negative-shade-1'
  | 'negative-shade-2'
  | 'negative-shade-3'
  | 'negative-shade-4'
  | 'negative-shade-5'
  | 'positive-shade-1'
  | 'positive-shade-2'
  | 'positive-shade-3'
  | 'positive-shade-4'
  | 'positive-shade-5'
  | 'text-shade-1'
  | 'text-shade-2'
  | 'text-shade-3'
  | 'text-shade-4';

export type TypePosition =
  | 'center'
  | 'edge-to-edge'
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left';

export type TypeSize =
  | 'x0'
  | 'x1'
  | 'x2'
  | 'x3'
  | 'x4'
  | 'x6'
  | 'x8'
  | 'x10'
  | 'x12'
  | 'x16';

export type TypeHTMLTags = keyof HTMLElementTagNameMap;
export type TypeSVGTags = keyof Omit<SVGElementTagNameMap, TypeHTMLTags>;
export type TypeAllElementTags = TypeHTMLTags | TypeSVGTags;

export type TypeTheme = 'day' | 'night';

/**
 * The core component that is the end of the chain for all other components.
 * It provides general utility behaviour and styling.
 */
export interface BoxProps {
  /** Quick way of absolutely position to common places */
  absolute?: TypePosition;
  /**
   * Short cut child alignment property for both alignChildrenHorizontal and
   * alignChildrenVertical.
   */
  alignChildren?: 'start' | 'middle' | 'end';
  /** Horizontal alignment of children flex items. */
  alignChildrenHorizontal?: 'start' | 'middle' | 'end' | 'around' | 'between';
  /** Vertical alignment of children flex items. */
  alignChildrenVertical?: 'start' | 'middle' | 'end' | 'around' | 'between';
  /** Flex item alignment property (changes with parent direction). */
  alignSelf?: 'start' | 'middle' | 'end';
  /** Background color, shades are taken from the current theme.*/
  backgroundColor?: TypeColor | 'overlay';
  /** Flex basis */
  basis?: string;
  /** Border color, shades are taken from the current theme. */
  borderColor?: TypeColor;
  /** Applies just the bottom border. To apply all border, just pass borderSize */
  borderBottom?: boolean;
  /** Applies just the left border. To apply all border, just pass borderSize */
  borderLeft?: boolean;
  /** Applies just the right border. To apply all border, just pass borderSize */
  borderRight?: boolean;
  /** Applies just the top border. To apply all border, just pass borderSize */
  borderTop?: boolean;
  /** Adds styling of a border radius to one of the size multiples */
  borderRadius?: 'full' | 'x1' | 'x2' | 'x3' | string | number;
  /** Thickness of the border to be applied */
  borderSize?: 'x1' | 'x2' | 'x3';
  /** Adds styling to indicate that the element is clickable */
  clickable?: boolean;
  /** Applies relative positioning to contain child elements. */
  container?: boolean;
  /** Applies display styling */
  display?: 'block' | 'inline-block';
  /** Applies a box shadow that gives the appearance of elevation */
  elevate?: 'x1' | 'x2' | 'x3' | boolean;
  /** Quick way of fixed position to common places */
  fixed?: TypePosition;
  /** Flex direction */
  flex?: 'horizontal' | 'vertical';
  /** Spacing applied between child flex items, values are global spacing variables. */
  gap?: TypeSize;
  /** Sets the horizontal distance between items to a multiple value. E.g. 'x1'. */
  gapHorizontal?: TypeSize;
  /** Sets the horizontal distance between items to a multiple value. E.g. 'x1'. */
  gapVertical?: TypeSize;
  /** Flex item property if it should grow with available space. */
  grow?: boolean | string;
  /** Fixed height applied through inline styling */
  height?: number | string;
  /** Margins applied for the global spacing variables */
  margin?: TypeSize;
  /** Max width applied through inline styling */
  maxHeight?: number | string;
  /** Max width applied through inline styling */
  maxWidth?: number | string;
  /** Max height applied through inline styling */
  minHeight?: number | string;
  /** Min width applied through inline style */
  minWidth?: number | string;
  /** Sets how overflown content is handled */
  overflow?: 'auto' | 'hidden';
  /** Padding applied for the global spacing variables */
  padding?: TypeSize;
  /** Horizontal padding applied for the global spacing variables */
  paddingHorizontal?: TypeSize;
  /** Vertical pa?dding applied for the global spacing variables */
  paddingVertical?: TypeSize;
  /** Top padding applied for the global spacing variables */
  paddingTop?: TypeSize;
  /** Right padding applied for the global spacing variables */
  paddingRight?: TypeSize;
  /** Bottom padding applied for the global spacing variables */
  paddingBottom?: TypeSize;
  /** Left padding applied for the global spacing variables */
  paddingLeft?: TypeSize;
  /** Offset horizontal padding with a negative margin, applied for the global spacing variables */
  paddingOffsetHorizontal?: TypeSize;
  /** Offset right padding with a negative margin, applied for the global spacing variables */
  paddingOffsetLeft?: TypeSize;
  /** Offset right padding with a negative margin, applied for the global spacing variables */
  paddingOffsetRight?: TypeSize;
  /** Reverses the flex direction */
  reverse?: boolean;
  /** Flex item property if it should shrink. */
  shrink?: boolean | string;
  /**
   * Any valid HTML or SVG element tag.
   *
   * @reference false
   */
  tag?: TypeAllElementTags;
  /** Text color, shades are taken from the current theme. */
  textColor?: TypeColor;
  /**
   * Theme applied to this element and inherited for child elements (until
   * a descendant theme is applied). Note the accent color remains consistent
   * to the theme applied on the HTML element.
   */
  theme?: TypeTheme;
  /** Transition speed */
  transitionDuration?: 'slow' | 'base' | 'fast';
  /** Quick prop to transition changing CSS properties. */
  transitionProperty?: string;
  /** Fixed width applied through inline styling */
  width?: number | string;
  /** Flag to allow flex items to wrap over to new lines */
  wrap?: boolean;
  /** z-index number for layering elements.  */
  zIndex?: number;
}

type ReactElementProps = Omit<
  AllHTMLAttributes<Element> & SVGAttributes<Element>,
  'crossOrigin' | 'wrap'
>;

const Box: RefForwardingComponent<Element, BoxProps & ReactElementProps> = (
  props,
  ref
) => {
  const {
    absolute,
    alignChildren,
    alignChildrenHorizontal = alignChildren,
    alignChildrenVertical = alignChildren,
    alignSelf,
    backgroundColor,
    basis,
    borderBottom,
    borderColor,
    borderLeft,
    borderRadius,
    borderRight,
    borderSize,
    borderTop,
    children,
    className,
    clickable,
    container,
    display,
    elevate,
    fixed,
    flex,
    gap,
    gapHorizontal = gap,
    gapVertical = gap,
    grow,
    height,
    maxHeight,
    maxWidth,
    minWidth,
    minHeight,
    overflow,
    padding,
    paddingHorizontal = padding,
    paddingVertical = padding,
    paddingTop = paddingVertical,
    paddingBottom = paddingVertical,
    paddingRight = paddingHorizontal,
    paddingLeft = paddingHorizontal,
    paddingOffsetHorizontal,
    paddingOffsetRight = paddingOffsetHorizontal,
    paddingOffsetLeft = paddingOffsetHorizontal,
    margin,
    reverse,
    shrink,
    style,
    tag,
    textColor,
    theme,
    transitionDuration = 'base',
    transitionProperty,
    width,
    wrap,
    zIndex,
    ...rest
  } = props;

  const border = borderTop || borderRight || borderBottom || borderLeft;

  const isPredefinedBorderRadius =
    borderRadius === 'full' ||
    borderRadius === 'x1' ||
    borderRadius === 'x2' ||
    borderRadius === 'x3';

  const classes = classnames(
    'Box',
    {
      'Box--border': border,
      'Box--border-top': borderTop,
      'Box--border-right': borderRight,
      'Box--border-bottom': borderBottom,
      'Box--border-left': borderLeft,
      'Box--clickable': clickable,
      'Box--container': container,
      'Box--elevate': elevate,
      'Box--flex-reverse': reverse,
      'Box--flex-wrap': wrap,
      'Box--max-width': maxWidth,
      [`Box--background-color-${backgroundColor}`]: backgroundColor,
      [`Box--border-color-${borderColor}`]: borderColor,
      [`Box--border-radius-${borderRadius}`]: isPredefinedBorderRadius,
      [`Box--border-size-${borderSize}`]: borderSize,
      [`Box--display-${display}`]: display,
      [`Box--elevate-${elevate}`]: typeof elevate === 'string',
      [`Box--position-absolute`]: absolute,
      [`Box--position-fixed`]: fixed,
      [`Box--position-${fixed || absolute}`]: fixed || absolute,
      [`Box--flex-${flex}`]: flex,
      [`Box--flex-align-horz-${alignChildrenHorizontal}`]:
        alignChildrenHorizontal,
      [`Box--flex-align-self-${alignSelf}`]: alignSelf,
      [`Box--flex-align-vert-${alignChildrenVertical}`]: alignChildrenVertical,
      [`Box--flex-gap-horizontal-${gapHorizontal}`]: gapHorizontal,
      [`Box--flex-gap-vertical-${gapVertical}`]: gapVertical,
      [`Box--margin-${margin}`]: margin,
      [`Box--padding-top-${paddingTop}`]: paddingTop,
      [`Box--padding-bottom-${paddingBottom}`]: paddingBottom,
      [`Box--padding-right-${paddingRight}`]: paddingRight,
      [`Box--padding-left-${paddingLeft}`]: paddingLeft,
      [`Box--padding-offset-right-${paddingOffsetRight}`]: paddingOffsetRight,
      [`Box--padding-offset-left-${paddingOffsetLeft}`]: paddingOffsetLeft,
      [`Box--text-color-${textColor}`]: textColor,
      [`Box--transition-${transitionDuration}`]: transitionProperty,
      [`Theme--${theme}`]: theme,
    },
    className
  );

  return createElement(
    tag || 'div',
    {
      ...rest,
      className: classes,
      ref: ref,
      style: {
        borderRadius: isPredefinedBorderRadius ? undefined : borderRadius,
        flexBasis: basis,
        flexGrow: grow === true ? '1' : grow,
        flexShrink: shrink === true ? '1' : shrink,
        height: height,
        maxHeight: maxHeight,
        minHeight: minHeight,
        maxWidth: maxWidth,
        minWidth: minWidth,
        overflow: overflow,
        transitionProperty: transitionProperty,
        width: width,
        zIndex: zIndex,
        ...style,
      },
    },
    children
  );
};

export default forwardRef(Box);
