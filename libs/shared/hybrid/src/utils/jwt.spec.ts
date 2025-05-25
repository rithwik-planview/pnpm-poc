import { decodeToken, validateToken, type JwtToken } from './jwt';

describe('JWT Token Functions', () => {
    // Mock window.atob
    const originalAtob = window.atob;
    beforeAll(() => {
        window.atob = jest.fn();
    });

    afterAll(() => {
        window.atob = originalAtob;
    });

    describe('decodeToken', () => {
        it('should return empty object when token is null', () => {
            const result = decodeToken(null);
            expect(result).toEqual({});
        });

        it('should correctly decode a valid JWT token', () => {
            const mockPayload: JwtToken = {
                name: 'John Doe',
                email: 'john@example.com',
                userId: '123',
                organizationId: 'org123',
                organizationName: 'Test Org',
                parentOrgId: 'parent123',
                isDemoAccount: 'false',
                site: 'example.com',
                serviceKey: 'key123',
                isWidget: 'false',
                clzUserIdentifier: 'user123',
                clzUserName: 'johndoe',
                apiBaseURL: 'https://api.example.com',
                clzSessionId: 'session123',
                clzOrganizationId: 'clzorg123',
                clzUserId: 'clzuser123',
                nbf: 1234567890,
                exp: 1234567899,
                iat: 1234567890,
                iss: 1,
                aud: 1,
            };

            const encodedPayload = btoa(JSON.stringify(mockPayload));
            const token = `header.${encodedPayload}.signature`;

            // Mock atob to return our test payload
            (window.atob as jest.Mock).mockImplementation(() => JSON.stringify(mockPayload));

            const result = decodeToken(token);
            expect(result).toEqual(mockPayload);
        });

        it('should handle special characters in token', () => {
            const mockPayload = { name: 'John+Doe/Test' };
            const encodedPayload = btoa(JSON.stringify(mockPayload));
            const token = `header.${encodedPayload}.signature`;

            (window.atob as jest.Mock).mockImplementation(() => JSON.stringify(mockPayload));

            const result = decodeToken(token);
            expect(result).toEqual(mockPayload);
        });
    });

    describe('validateToken', () => {
        const mockToken = 'header.eyJ0ZXN0IjoidmFsdWUifQ.signature';
        const mockOptions = {
            username: 'johndoe',
            origin: 'https://api.example.com',
            timeDelta: 0,
        };

        beforeEach(() => {
            jest.useFakeTimers();
            jest.setSystemTime(new Date('2023-01-01'));
        });

        afterEach(() => {
            jest.useRealTimers();
        });

        it('should validate a valid token', () => {
            const mockPayload = {
                clzUserName: 'johndoe',
                apiBaseURL: 'https://api.example.com',
                exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour from now
            };

            (window.atob as jest.Mock).mockImplementation(() => JSON.stringify(mockPayload));

            const result = validateToken(mockToken, mockOptions);
            expect(result).toBe(true);
        });

        it('should fail validation for expired token', () => {
            const mockPayload = {
                clzUserName: 'johndoe',
                apiBaseURL: 'https://api.example.com',
                exp: Math.floor(Date.now() / 1000) - 3600, // 1 hour ago
            };

            (window.atob as jest.Mock).mockImplementation(() => JSON.stringify(mockPayload));

            const result = validateToken(mockToken, mockOptions);
            expect(result).toBe(false);
        });

        it('should fail validation for wrong username', () => {
            const mockPayload = {
                clzUserName: 'janedoe',
                apiBaseURL: 'https://api.example.com',
                exp: Math.floor(Date.now() / 1000) + 3600,
            };

            (window.atob as jest.Mock).mockImplementation(() => JSON.stringify(mockPayload));

            const result = validateToken(mockToken, mockOptions);
            expect(result).toBe(false);
        });

        it('should fail validation for wrong origin', () => {
            const mockPayload = {
                clzUserName: 'johndoe',
                apiBaseURL: 'https://wrong-api.example.com',
                exp: Math.floor(Date.now() / 1000) + 3600,
            };

            (window.atob as jest.Mock).mockImplementation(() => JSON.stringify(mockPayload));

            const result = validateToken(mockToken, mockOptions);
            expect(result).toBe(false);
        });

        it('should handle case-insensitive username comparison', () => {
            const mockPayload = {
                clzUserName: 'JOHNDOE',
                apiBaseURL: 'https://api.example.com',
                exp: Math.floor(Date.now() / 1000) + 3600,
            };

            (window.atob as jest.Mock).mockImplementation(() => JSON.stringify(mockPayload));

            const result = validateToken(mockToken, mockOptions);
            expect(result).toBe(true);
        });

        it('should consider timeDelta in expiration check', () => {
            const mockPayload = {
                clzUserName: 'johndoe',
                apiBaseURL: 'https://api.example.com',
                exp: Math.floor(Date.now() / 1000) + 3600,
            };

            (window.atob as jest.Mock).mockImplementation(() => JSON.stringify(mockPayload));

            const optionsWithDelta = {
                ...mockOptions,
                timeDelta: 7200, // 2 hours
            };

            const result = validateToken(mockToken, optionsWithDelta);
            expect(result).toBe(false);
        });
    });
});
