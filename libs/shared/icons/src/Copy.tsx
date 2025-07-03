import * as React from 'react';
import type { SVGProps, Ref } from 'react';
import { withIconWrapper } from '@planview/pv-icons';
const SvgCopy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" ref={ref} {...props}>
        <path
            fill="currentColor"
            d="M10.284 2.652c.732 0 1.326.594 1.326 1.327v10.61c0 .732-.593 1.326-1.326 1.326H2.326A1.326 1.326 0 0 1 1 14.589V3.979c0-.733.594-1.327 1.326-1.327zM2.326 14.59h7.958V3.979H2.326zM13.6 0c.366 0 .663.297.663.663V12.6a.663.663 0 0 1-1.326 0V1.326H4.315a.663.663 0 0 1 0-1.326z"
        />
    </svg>
);
export default withIconWrapper(React.forwardRef(SvgCopy), 'Copy');
