import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "rss_svg__feather rss_svg__feather-rss" },
        React.createElement("path", { d: "M4 11a9 9 0 019 9M4 4a16 16 0 0116 16" }),
        React.createElement("circle", { cx: 5, cy: 19, r: 1 })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Rss.js.map