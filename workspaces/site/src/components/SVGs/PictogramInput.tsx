import * as React from 'react';

function SvgPictogramInput(props) {
  return (
    <svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        id="pictogram-input_svg__pictogram-input"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="pictogram-input_svg__Rectangle-Copy-6"
          fill="var(--color-text--shade-1)"
          x={4}
          y={28}
          width={240}
          height={40}
          rx={2}
        />
        <rect
          id="pictogram-input_svg__Rectangle-Copy-7"
          fill="var(--color-background--shade-1)"
          x={20}
          y={56}
          width={208}
          height={4}
          rx={1}
        />
      </g>
    </svg>
  );
}

export default SvgPictogramInput;
