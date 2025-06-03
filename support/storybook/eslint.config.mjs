import react from '../../configs/eslint/react.mjs';
import storybook from 'eslint-plugin-storybook';
export default [...react, ...storybook.configs['flat/csf']];
