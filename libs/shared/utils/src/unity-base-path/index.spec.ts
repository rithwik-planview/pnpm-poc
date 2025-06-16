import { getUnityBasePath } from './index';

describe('getUnityBasePath', () => {
    const originalLocation = window.location;

    beforeEach(() => {
        Object.defineProperty(window, 'location', {
            value: { href: '' },
            writable: true,
        });
    });

    afterEach(() => {
        Object.defineProperty(window, 'location', {
            value: originalLocation,
            writable: true,
        });
    });

    it('should return the origin when no @unity path is present', () => {
        const mockUrl = 'https://example.com/some/path';
        window.location.href = mockUrl;
        expect(getUnityBasePath()).toBe('https://example.com');
    });

    it('should return the base path up to @unity when it exists', () => {
        const mockUrl = 'https://example.com/some/path/@unity/feature';
        window.location.href = mockUrl;
        expect(getUnityBasePath()).toBe('https://example.com/some/path');
    });

    it('should handle trailing slashes correctly', () => {
        const mockUrl = 'https://example.com/some/path/@unity/feature/';
        window.location.href = mockUrl;
        expect(getUnityBasePath()).toBe('https://example.com/some/path');
    });
});
