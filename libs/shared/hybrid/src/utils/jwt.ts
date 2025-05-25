export interface JwtToken {
    name: string;
    email: string;
    userId: string;
    organizationId: string;
    organizationName: string;
    parentOrgId: string;
    isDemoAccount: string;
    site: string;
    serviceKey: string;
    isWidget: string;
    clzUserIdentifier: string;
    clzUserName: string;
    apiBaseURL: string;
    clzSessionId: string;
    clzOrganizationId: string;
    clzUserId: string;
    nbf: number;
    exp: number;
    iat: number;
    iss: number;
    aud: number;
}

export const decodeToken = (token: string | null): JwtToken => {
    if (!token) {
        return {} as JwtToken;
    }

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedData = window.atob(base64);

    const jsonPayload = decodeURIComponent(
        decodedData
            .split('')
            .map((c) => {
                const hex = c.charCodeAt(0).toString(16);
                return `%${`00${hex}`.slice(-2)}`;
            })
            .join(''),
    );

    return JSON.parse(jsonPayload);
};

export const validateToken = (
    token: string,
    options: {
        username: string;
        origin: string;
        timeDelta: number;
    },
) => {
    const decodedToken = decodeToken(token);
    const now = Math.floor(Date.now() / 1000) + options.timeDelta;
    return (
        decodedToken.clzUserName.toLowerCase() === options.username.toLowerCase() &&
        decodedToken.apiBaseURL.startsWith(options.origin) &&
        decodedToken.exp > now
    );
};
