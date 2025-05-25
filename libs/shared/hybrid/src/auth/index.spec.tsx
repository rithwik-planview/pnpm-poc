import { render, screen, waitFor } from '@testing-library/react';
import { HybridAppShell } from './index';
import { createDataLibrary } from '@unity/core.data-access';
import { decodeToken, validateToken } from '../utils/jwt';
import '@testing-library/jest-dom';

// Mock the required modules
jest.mock('@unity/core.data-access');
jest.mock('../utils/jwt');

describe('HybridAppShell', () => {
    const mockProps = {
        title: 'Test App',
        origin: 'https://test.com',
        username: 'testUser',
        password: 'testPass',
    };

    const mockAuthResponse = {
        sessionId: 'test-session-id',
        userId: 'test-user-id',
        organizationId: 'test-org-id',
        serverTime: '2023-01-01T00:00:00Z',
    };

    const mockDecodedToken = {
        clzUserName: 'Test User',
        email: 'test@example.com',
    };

    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();

        // Mock localStorage
        Storage.prototype.getItem = jest.fn();
        Storage.prototype.setItem = jest.fn();
        Storage.prototype.removeItem = jest.fn();

        // Mock createDataLibrary
        (createDataLibrary as jest.Mock).mockReturnValue({
            fetch: jest.fn().mockResolvedValue(mockAuthResponse),
        });

        // Mock decodeToken
        (decodeToken as jest.Mock).mockReturnValue(mockDecodedToken);

        // Mock validateToken
        (validateToken as jest.Mock).mockReturnValue(true);

        // Mock observers

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));

        global.IntersectionObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it('renders loading state initially', () => {
        render(
            <HybridAppShell {...mockProps}>
                <div>Test Content</div>
            </HybridAppShell>,
        );

        expect(screen.queryAllByTestId('svg-icon-spinner')).toHaveLength(2); // Spinner
        expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
    });

    it('renders content when authenticated', async () => {
        (Storage.prototype.getItem as jest.Mock).mockImplementation((key) => {
            if (key === 'sessionId') return 'valid-session-id';
            if (key === 'timeDelta') return '0';
            return null;
        });

        render(
            <HybridAppShell {...mockProps}>
                <div>Test Content</div>
            </HybridAppShell>,
        );

        await waitFor(() => {
            expect(screen.getByText('Test Content')).toBeInTheDocument();
        });
    });

    it('attempts to login when no valid session exists', async () => {
        const mockFetch = jest.fn().mockResolvedValue(mockAuthResponse);
        (createDataLibrary as jest.Mock).mockReturnValue({ fetch: mockFetch });

        render(
            <HybridAppShell {...mockProps}>
                <div>Test Content</div>
            </HybridAppShell>,
        );

        await waitFor(() => {
            expect(mockFetch).toHaveBeenCalledWith(
                'post',
                '/authentication/login',
                expect.any(Object),
            );
        });
    });
});
