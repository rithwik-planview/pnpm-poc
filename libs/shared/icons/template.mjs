export function iconTemplate(variables, { tpl }) {
    return tpl`
import * as React from 'react'
import type { SVGProps, Ref} from 'react'
${variables.interfaces}
import { withIconWrapper } from '@planview/pv-icons'

const ${variables.componentName} = (${variables.props}) => ${variables.jsx}
export default withIconWrapper(React.forwardRef(${
        variables.componentName
    }), "${variables.componentName.replace(/^Svg/, '')}")
`;
}
