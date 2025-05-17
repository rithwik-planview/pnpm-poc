import { getDirname } from './dir-name';

describe('getDirName', () => {
    it('should return the correct directory name for each remote name', () => {
        expect(getDirname(import.meta.url)).toMatchSnapshot();
    });
});
