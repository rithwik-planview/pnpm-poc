import { getPortFromName } from './get-port-from-name';

describe('getPortFromName', () => {
    it('should return the correct port for each remote name', () => {
        expect(getPortFromName('@unity/tools')).toMatchSnapshot();
        expect(getPortFromName('@unity/shared.ui')).toMatchSnapshot();
        expect(getPortFromName('@unity/shared.state')).toMatchSnapshot();
        expect(getPortFromName('@unity/features.feature')).toMatchSnapshot();
        expect(getPortFromName('@unity/apps.app')).toMatchSnapshot();
    });
});
