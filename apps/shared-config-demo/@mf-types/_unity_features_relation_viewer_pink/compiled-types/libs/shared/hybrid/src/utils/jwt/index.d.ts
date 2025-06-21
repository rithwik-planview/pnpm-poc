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
export declare const decodeToken: (token: string | null) => JwtToken;
export declare const validateToken: (token: string, options: {
    username: string;
    origin: string;
    timeDelta: number;
}) => boolean;
//# sourceMappingURL=index.d.ts.map