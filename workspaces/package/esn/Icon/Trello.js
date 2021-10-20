import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "trello_svg__feather trello_svg__feather-trello" },
        React.createElement("rect", { x: 3, y: 3, width: 18, height: 18, rx: 2, ry: 2 }),
        React.createElement("path", { d: "M7 7h3v9H7zM14 7h3v5h-3z" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Trello.js.map