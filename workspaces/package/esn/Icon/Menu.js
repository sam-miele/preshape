import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "menu_svg__feather menu_svg__feather-menu" },
        React.createElement("path", { d: "M3 12h18M3 6h18M3 18h18" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Menu.js.map