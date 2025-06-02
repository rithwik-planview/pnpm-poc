import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-axios';
import type {
    BugsGetData,
    BugsGetGroupedData,
    BugsGetByIdentifierData,
    BugsGetByIdsData,
    BugsGetCountData,
    BugsGetRelationsData,
    BugsGetRelationsCountData,
    BugsGetGroupedRelationsData,
    BugsGetAvatarsData,
    BugsGetRelationsAvatarsData,
    CasesGetData,
    CasesGetGroupedData,
    CasesGetByIdentifierData,
    CasesGetByIdsData,
    CasesGetCountData,
    CasesGetRelationsData,
    CasesGetRelationsCountData,
    CasesGetGroupedRelationsData,
    CasesGetAvatarsData,
    CasesGetRelationsAvatarsData,
    IssuesGetData,
    IssuesGetGroupedData,
    IssuesGetByIdentifierData,
    IssuesGetByIdsData,
    IssuesGetCountData,
    IssuesGetRelationsData,
    IssuesGetRelationsCountData,
    IssuesGetGroupedRelationsData,
    IssuesGetAvatarsData,
    IssuesGetRelationsAvatarsData,
    RequestsGetData,
    RequestsGetGroupedData,
    RequestsGetByIdentifierData,
    RequestsGetByIdsData,
    RequestsGetCountData,
    RequestsGetRelationsData,
    RequestsGetRelationsCountData,
    RequestsGetGroupedRelationsData,
    RequestsGetAvatarsData,
    RequestsGetRelationsAvatarsData,
    RisksGetData,
    RisksGetGroupedData,
    RisksGetByIdentifierData,
    RisksGetByIdsData,
    RisksGetCountData,
    RisksGetRelationsData,
    RisksGetRelationsCountData,
    RisksGetGroupedRelationsData,
    RisksGetAvatarsData,
    RisksGetRelationsAvatarsData,
    GenericEntityGetData,
    GenericEntityGetGroupedData,
    GenericEntityGetByIdentifierData,
    GenericEntityGetByIdsData,
    GenericEntityGetCountData,
    GenericEntityGetRelationsData,
    GenericEntityGetRelationsCountData,
    GenericEntityGetGroupedRelationsData,
    GenericEntityGetEntityPicklistData,
    GenericEntityGetSwimlanesData,
    GenericEntityGetAvatarsData,
    GenericEntityGetRelationAvatarsData,
    GenericEntityGetCustomPanelByIdentifierData,
    GenericEntityGetSwimlanesByRelationIdentifierData,
    GenericEntityGetAvailableEntitiesData,
    MetadataGetPicklistData,
    MetadataGetFieldsData,
    MetadataGetSystemSettingsData,
    MetadataGetOrganizationSettingsData,
    MetadataGetEntitiesDescriptionData,
    MetadataGetAvailableFieldsData,
    MetadataGetRelationViewerFieldsData,
    PortfoliosGetData,
    PortfoliosGetGroupedData,
    PortfoliosGetByIdentifierData,
    PortfoliosGetByIdsData,
    PortfoliosGetCountData,
    PortfoliosGetRelationsData,
    PortfoliosGetRelationsCountData,
    PortfoliosGetGroupedRelationsData,
    PortfoliosGetAvatarsData,
    PortfoliosGetRelationsAvatarsData,
    PropertyCardLayoutGetPropertyCardLayoutData,
    PropertyCardLayoutGetPropertyCardLayoutByEntityIdData,
    JobTitlesGetCountData,
    JobTitlesGetRelationsCountData,
    JobTitlesGetData,
    JobTitlesGetGroupedData,
    JobTitlesGetByIdentifierData,
    JobTitlesGetByIdsData,
    JobTitlesGetRelationsData,
    JobTitlesGetGroupedRelationsData,
    MembersGetAllMembersData,
    ProfilesGetCountData,
    ProfilesGetData,
    ProfilesGetByIdentifierData,
    ProfilesGetByIdsData,
    ProfilesGetUserProfilesData,
    SkillsGetData,
    SkillsGetGroupedData,
    SkillsGetByIdentifierData,
    SkillsGetByIdsData,
    SkillsGetCountData,
    SkillsGetRelationsData,
    SkillsGetRelationsCountData,
    SkillsGetGroupedRelationsData,
    UserGroupsGetData,
    UserGroupsGetGroupedData,
    UserGroupsGetByIdentifierData,
    UserGroupsGetByIdsData,
    UserGroupsGetCountData,
    UserGroupsGetRelationsData,
    UserGroupsGetRelationsCountData,
    UserGroupsGetGroupedRelationsData,
    UserGroupsGetAuthorizationGroupsData,
    UserGroupsGetRelatedGroupsForUserData,
    UsersGetData,
    UsersGetGroupedData,
    UsersGetByIdentifierData,
    UsersGetByIdsData,
    UsersGetCountData,
    UsersGetRelationsData,
    UsersGetRelationsCountData,
    UsersGetGroupedRelationsData,
    RibbonActionsGetRibbonActionsData,
    RibbonActionsGetContextMenusData,
    MilestonesGetData,
    MilestonesGetGroupedData,
    MilestonesGetByIdentifierData,
    MilestonesGetByIdsData,
    MilestonesGetCountData,
    MilestonesGetRelationsData,
    MilestonesGetRelationsCountData,
    MilestonesGetGroupedRelationsData,
    MilestonesGetAvatarsData,
    MilestonesGetRelationsAvatarsData,
    ProgramsGetData,
    ProgramsGetGroupedData,
    ProgramsGetByIdentifierData,
    ProgramsGetByIdsData,
    ProgramsGetCountData,
    ProgramsGetRelationsData,
    ProgramsGetRelationsCountData,
    ProgramsGetGroupedRelationsData,
    ProgramsGetAvatarsData,
    ProgramsGetRelationsAvatarsData,
    ProjectsGetData,
    ProjectsGetGroupedData,
    ProjectsGetByIdentifierData,
    ProjectsGetByIdsData,
    ProjectsGetCountData,
    ProjectsGetRelationsData,
    ProjectsGetRelationsCountData,
    ProjectsGetGroupedRelationsData,
    ProjectsGetAvatarsData,
    ProjectsGetRelationsAvatarsData,
    TasksGetData,
    TasksGetGroupedData,
    TasksGetByIdentifierData,
    TasksGetByIdsData,
    TasksGetCountData,
    TasksGetRelationsData,
    TasksGetRelationsCountData,
    TasksGetGroupedRelationsData,
    TasksGetAvatarsData,
    TasksGetRelationsAvatarsData,
    DataWarehouseEntityGetCountData,
    DataWarehouseEntityGetByIdsData,
    DataWarehouseEntityGetIdsData,
    ConfigurationGetConfigurationData,
    ConfigurationUpdateConfigurationData,
    StorageConnectionsTestAzureBlobConnectionData,
    TriggerExportTriggerExportData,
    PlanviewAdminVerifyConnectData,
    PlanviewAdminGetUsersData,
    PlanviewAdminGetData,
    PlanviewAdminRegisterData,
    PlanviewTokenServiceGetPtsTokenForCoPilotData,
    PlanviewTokenServiceGetPtsTokenInternalData,
    SentimentAnalysisServiceCalculateSentimentData,
    WhiteboardPtsTokenForWhiteboardData,
    WorkloadGetWorkloadResourcesData,
    WorkloadGetWorkloadProjectsData,
    WorkloadGetWorkloadTasksData,
    PublicisGetReportableWorkItemsPerUserData,
    PublicisGetReportableTasksByIdsData,
    PublicisGetReportableTasksByIds2Data,
    PublicisGetAssignmentsPerUsersData,
    PublicisGetUsersWorkingHoursData,
    PublicisGetGroupMembershipLinksData,
    PublicisGetResourceProjectsData,
} from './types.gen';
export type Options<
    TData extends TDataShape = TDataShape,
    ThrowOnError extends boolean = boolean,
> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
/**
 * Returns a list of Bugs.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Bug",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const bugsGet: <ThrowOnError extends boolean = false>(
    options: Options<BugsGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Bugs.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Bug",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Submitted"
 * }
 */
export declare const bugsGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<BugsGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Bug by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const bugsGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<BugsGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Bugs by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Bug",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const bugsGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<BugsGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Bugs.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Bug",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const bugsGetCount: <ThrowOnError extends boolean = false>(
    options: Options<BugsGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a Bug.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const bugsGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<BugsGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a Bug.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const bugsGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<BugsGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a Bug.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const bugsGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<BugsGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "Owner",
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Bug",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const bugsGetAvatars: <ThrowOnError extends boolean = false>(
    options: Options<BugsGetAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "relation": {
 * "name": "ResourcesAndPlaceholders",
 * "filteredEntityType": "User"
 * },
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "case",
 * "fieldName": "title"
 * },
 * "operator": "Contains",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "111111"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const bugsGetRelationsAvatars: <ThrowOnError extends boolean = false>(
    options: Options<BugsGetRelationsAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Cases.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Case",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const casesGet: <ThrowOnError extends boolean = false>(
    options: Options<CasesGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Cases.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Case",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Submitted"
 * }
 */
export declare const casesGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<CasesGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Case by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Case",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const casesGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<CasesGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Cases by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Case",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const casesGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<CasesGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Cases.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Case",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const casesGetCount: <ThrowOnError extends boolean = false>(
    options: Options<CasesGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a Case.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const casesGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<CasesGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a Case.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const casesGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<CasesGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a Case.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const casesGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<CasesGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "Owner",
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Case",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const casesGetAvatars: <ThrowOnError extends boolean = false>(
    options: Options<CasesGetAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "relation": {
 * "name": "ResourcesAndPlaceholders",
 * "filteredEntityType": "User"
 * },
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "case",
 * "fieldName": "title"
 * },
 * "operator": "Contains",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "111111"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const casesGetRelationsAvatars: <ThrowOnError extends boolean = false>(
    options: Options<CasesGetRelationsAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Issues.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Issue",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const issuesGet: <ThrowOnError extends boolean = false>(
    options: Options<IssuesGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Issues.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Issue",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Submitted"
 * }
 */
export declare const issuesGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<IssuesGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns an Issue by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const issuesGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<IssuesGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Issues by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Issue",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const issuesGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<IssuesGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Issues.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Issue",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const issuesGetCount: <ThrowOnError extends boolean = false>(
    options: Options<IssuesGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to an Issue.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const issuesGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<IssuesGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to an Issue.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const issuesGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<IssuesGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to an Issue.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const issuesGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<IssuesGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "Owner",
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Issue",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const issuesGetAvatars: <ThrowOnError extends boolean = false>(
    options: Options<IssuesGetAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "relation": {
 * "name": "ResourcesAndPlaceholders",
 * "filteredEntityType": "User"
 * },
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "case",
 * "fieldName": "title"
 * },
 * "operator": "Contains",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "111111"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const issuesGetRelationsAvatars: <ThrowOnError extends boolean = false>(
    options: Options<IssuesGetRelationsAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Requests (EnhancementRequest).
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "EnhancementRequest",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "itemType": "Numeric",
 * "value": 10
 * },
 * {
 * "itemType": "Numeric",
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const requestsGet: <ThrowOnError extends boolean = false>(
    options: Options<RequestsGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Requests (EnhancementRequest).
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "EnhancementRequest",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Submitted"
 * }
 */
export declare const requestsGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<RequestsGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Request (EnhancementRequest) by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const requestsGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<RequestsGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Requests (EnhancementRequest) by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "EnhancementRequest",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const requestsGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<RequestsGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Requests (EnhancementRequest).
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "EnhancementRequest",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const requestsGetCount: <ThrowOnError extends boolean = false>(
    options: Options<RequestsGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a Request (EnhancementRequest).
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const requestsGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<RequestsGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a Request (EnhancementRequest).
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const requestsGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<RequestsGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a Request (EnhancementRequest).
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const requestsGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<RequestsGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "Owner",
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "EnhancementRequest",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const requestsGetAvatars: <ThrowOnError extends boolean = false>(
    options: Options<RequestsGetAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "relation": {
 * "name": "ResourcesAndPlaceholders",
 * "filteredEntityType": "User"
 * },
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "case",
 * "fieldName": "title"
 * },
 * "operator": "Contains",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "111111"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const requestsGetRelationsAvatars: <ThrowOnError extends boolean = false>(
    options: Options<RequestsGetRelationsAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Risks.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const risksGet: <ThrowOnError extends boolean = false>(
    options: Options<RisksGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Risks.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Submitted"
 * }
 */
export declare const risksGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<RisksGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Risk by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const risksGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<RisksGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Risks by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const risksGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<RisksGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Risks.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const risksGetCount: <ThrowOnError extends boolean = false>(
    options: Options<RisksGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a Risk.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const risksGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<RisksGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a Risk.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const risksGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<RisksGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a Risk.
 * Sample request:
 *
 * {
 * "fields": [
 * "title",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "title",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const risksGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<RisksGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "Onwer",
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const risksGetAvatars: <ThrowOnError extends boolean = false>(
    options: Options<RisksGetAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "relation": {
 * "name": "ResourcesAndPlaceholders",
 * "filteredEntityType": "User"
 * },
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "case",
 * "fieldName": "title"
 * },
 * "operator": "Contains",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "111111"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const risksGetRelationsAvatars: <ThrowOnError extends boolean = false>(
    options: Options<RisksGetRelationsAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of entities.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "entityType"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "Name"
 * },
 * "operator": "Contains",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "ABC"
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const genericEntityGet: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of entities.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "entityType"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Portfolio",
 * "fieldName": "InvestmentYear"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 2000
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "entityType",
 * "groupName": "Active"
 * }
 */
export declare const genericEntityGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns an entity by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "fieldName1",
 * "fieldName2",
 * ],
 * "relations": [
 * "relationName
 * ],
 * "excludePermissions": true
 * }
 */
export declare const genericEntityGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of entities by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "PortfolioState"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Portfolio",
 * "fieldName": "InvestmentYear"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 2000
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const genericEntityGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of entities.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Portfolio",
 * "fieldName": "InvestmentYear"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 2000
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const genericEntityGetCount: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to the entity.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const genericEntityGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to the entity.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const genericEntityGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to the entity.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const genericEntityGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns picklist options honoring dependent field value.
 */
export declare const genericEntityGetEntityPicklist: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetEntityPicklistData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').PicklistData,
    import('./types.gen').ProblemDetails,
    ThrowOnError
>;
/**
 * Returns distinct list of related items with global aggregate for group by field.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "entityType"
 * ],
 * "dataFilters": [],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "entityType",
 * "groupName": "Active"
 * }
 */
export declare const genericEntityGetSwimlanes: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetSwimlanesData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').SwimlaneResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "ProjectManager",
 * "dataFilters": []
 * }
 */
export declare const genericEntityGetAvatars: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "relation": {
 * "name": "ResourcesAndPlaceholders",
 * "filteredEntityType": "User"
 * },
 * "dataFilters": []
 * }
 */
export declare const genericEntityGetRelationAvatars: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetRelationAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Retrieves list of custom panel associated with Entity
 */
export declare const genericEntityGetCustomPanelByIdentifier: <
    ThrowOnError extends boolean = false,
>(
    options: Options<GenericEntityGetCustomPanelByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CustomPanel[],
    unknown,
    ThrowOnError
>;
export declare const genericEntityGetSwimlanesByRelationIdentifier: <
    ThrowOnError extends boolean = false,
>(
    options: Options<GenericEntityGetSwimlanesByRelationIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').SwimlaneResponse,
    unknown,
    ThrowOnError
>;
export declare const genericEntityGetAvailableEntities: <ThrowOnError extends boolean = false>(
    options: Options<GenericEntityGetAvailableEntitiesData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns picklist options for specific entity type.
 * Sample request:
 *
 * {
 * "entityType": "Task",
 * "propertyNames": [
 * "State",
 * "Phase"
 * ]
 * }
 */
export declare const metadataGetPicklist: <ThrowOnError extends boolean = false>(
    options: Options<MetadataGetPicklistData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').PicklistData[],
    unknown,
    ThrowOnError
>;
/**
 * Returns fields and relations details for specific entity.
 * Sample request:
 *
 * {
 * "entityType": "Task",
 * "propertyNames": [
 * "State",
 * "Phase"
 * ],
 * "relationNames": [
 * "RelatedRisks"
 * ],
 * "includeFields": true,
 * "includeRelations": true
 * }
 */
export declare const metadataGetFields: <ThrowOnError extends boolean = false>(
    options: Options<MetadataGetFieldsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').FieldsResponse[],
    unknown,
    ThrowOnError
>;
/**
 * Returns basic system settings.
 */
export declare const metadataGetSystemSettings: <ThrowOnError extends boolean = false>(
    options?: Options<MetadataGetSystemSettingsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').SystemSettingsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns general organization settings.
 */
export declare const metadataGetOrganizationSettings: <ThrowOnError extends boolean = false>(
    options?: Options<MetadataGetOrganizationSettingsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').OrganizationSettingsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns information about the entity types in your organization.
 */
export declare const metadataGetEntitiesDescription: <ThrowOnError extends boolean = false>(
    options: Options<MetadataGetEntitiesDescriptionData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').DescribeEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns available fields for a specific entity and it's children.
 */
export declare const metadataGetAvailableFields: <ThrowOnError extends boolean = false>(
    options: Options<MetadataGetAvailableFieldsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').FieldsResponse[],
    unknown,
    ThrowOnError
>;
/**
 * Returns available fields for a specific realtion.
 */
export declare const metadataGetRelationViewerFields: <ThrowOnError extends boolean = false>(
    options: Options<MetadataGetRelationViewerFieldsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').RelationFieldsResponse[],
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Portfolios.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "PortfolioState"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Portfolio",
 * "fieldName": "InvestmentYear"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 2000
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const portfoliosGet: <ThrowOnError extends boolean = false>(
    options: Options<PortfoliosGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Portfolios.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "PortfolioState"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Portfolio",
 * "fieldName": "InvestmentYear"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 2000
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "PortfolioState",
 * "groupName": "Active"
 * }
 */
export declare const portfoliosGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<PortfoliosGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Portfolio by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "PortfolioState"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const portfoliosGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<PortfoliosGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Portfolios by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "PortfolioState"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Portfolio",
 * "fieldName": "InvestmentYear"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 2000
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const portfoliosGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<PortfoliosGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Portfolios.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Portfolio",
 * "fieldName": "InvestmentYear"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 2000
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const portfoliosGetCount: <ThrowOnError extends boolean = false>(
    options: Options<PortfoliosGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a Portfolio.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const portfoliosGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<PortfoliosGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a Portfolio.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const portfoliosGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<PortfoliosGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a Portfolio.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const portfoliosGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<PortfoliosGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "Owner",
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Portfolio",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const portfoliosGetAvatars: <ThrowOnError extends boolean = false>(
    options: Options<PortfoliosGetAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "relation": {
 * "name": "ResourcesAndPlaceholders",
 * "filteredEntityType": "User"
 * },
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Portfolio",
 * "fieldName": "name"
 * },
 * "operator": "Contains",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "111111"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const portfoliosGetRelationsAvatars: <ThrowOnError extends boolean = false>(
    options: Options<PortfoliosGetRelationsAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Property Card layout for the specific entity type.
 */
export declare const propertyCardLayoutGetPropertyCardLayout: <
    ThrowOnError extends boolean = false,
>(
    options: Options<PropertyCardLayoutGetPropertyCardLayoutData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').PropertyCardLayoutResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Property Card layout for the specific internal id of the entity.
 */
export declare const propertyCardLayoutGetPropertyCardLayoutByEntityId: <
    ThrowOnError extends boolean = false,
>(
    options: Options<PropertyCardLayoutGetPropertyCardLayoutByEntityIdData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').PropertyCardLayoutResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Job Titles.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "JobTitle",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const jobTitlesGetCount: <ThrowOnError extends boolean = false>(
    options: Options<JobTitlesGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a Job Title.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const jobTitlesGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<JobTitlesGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Job Titles.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "JobTitle",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const jobTitlesGet: <ThrowOnError extends boolean = false>(
    options: Options<JobTitlesGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Job Titles.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "JobTitle",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const jobTitlesGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<JobTitlesGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Job Title by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const jobTitlesGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<JobTitlesGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Job Titles by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "JobTitle",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const jobTitlesGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<JobTitlesGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a Job Title.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const jobTitlesGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<JobTitlesGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a Job Title.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const jobTitlesGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<JobTitlesGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Members(AuthorizationGroups, UserGroups, ProfileGroups, Users).
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "fieldName": "name"
 * },
 * "operator": "Contains",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "user",
 * "itemType": "Text"
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const membersGetAllMembers: <ThrowOnError extends boolean = false>(
    options: Options<MembersGetAllMembersData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Profiles.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Profile",
 * "fieldName": "Name"
 * },
 * "operator": "Equals",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "Test"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const profilesGetCount: <ThrowOnError extends boolean = false>(
    options: Options<ProfilesGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Profiles.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Profile",
 * "fieldName": "Name"
 * },
 * "operator": "Equals",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "Test"
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const profilesGet: <ThrowOnError extends boolean = false>(
    options: Options<ProfilesGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Profile by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const profilesGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<ProfilesGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Profiles by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Profile",
 * "fieldName": "Name"
 * },
 * "operator": "Equals",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "Test"
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const profilesGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<ProfilesGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Profiles which are assigned to User.
 */
export declare const profilesGetUserProfiles: <ThrowOnError extends boolean = false>(
    options: Options<ProfilesGetUserProfilesData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').ProfilesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Skills.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Skill",
 * "fieldName": "NLRCategory"
 * },
 * "operator": "In",
 * "filterValueType": "PickList",
 * "values": [
 * {
 * "value": "Labor"
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const skillsGet: <ThrowOnError extends boolean = false>(
    options: Options<SkillsGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Skills.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Skill",
 * "fieldName": "NLRCategory"
 * },
 * "operator": "In",
 * "filterValueType": "PickList",
 * "values": [
 * {
 * "value": "Labor"
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const skillsGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<SkillsGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Skill by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const skillsGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<SkillsGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Skills by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Skill",
 * "fieldName": "NLRCategory"
 * },
 * "operator": "In",
 * "filterValueType": "PickList",
 * "values": [
 * {
 * "value": "Labor"
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const skillsGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<SkillsGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Skills.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Skill",
 * "fieldName": "NLRCategory"
 * },
 * "operator": "In",
 * "filterValueType": "PickList",
 * "values": [
 * {
 * "value": "Labor"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const skillsGetCount: <ThrowOnError extends boolean = false>(
    options: Options<SkillsGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a Skill.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "ResourceEntity",
 * "fieldName": "Name"
 * },
 * "operator": "Equals",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "User1"
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const skillsGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<SkillsGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a Skill.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "ResourceEntity",
 * "fieldName": "Name"
 * },
 * "operator": "Equals",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "User1"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const skillsGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<SkillsGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a Skill.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "ResourceEntity",
 * "fieldName": "Name"
 * },
 * "operator": "Equals",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "User1"
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const skillsGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<SkillsGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of User Groups.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "UserGroup",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const userGroupsGet: <ThrowOnError extends boolean = false>(
    options: Options<UserGroupsGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of User Groups.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "UserGroup",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const userGroupsGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<UserGroupsGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a User Group by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const userGroupsGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<UserGroupsGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of User Groups by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "UserGroup",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const userGroupsGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<UserGroupsGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of User Groups.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "UserGroup",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const userGroupsGetCount: <ThrowOnError extends boolean = false>(
    options: Options<UserGroupsGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a User Group.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const userGroupsGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<UserGroupsGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a User Group.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const userGroupsGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<UserGroupsGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a User Group.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const userGroupsGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<UserGroupsGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Authorization Groups.
 */
export declare const userGroupsGetAuthorizationGroups: <ThrowOnError extends boolean = false>(
    options?: Options<UserGroupsGetAuthorizationGroupsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AuthorizationGroupsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Groups which the User is a member of.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "UserGroup",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const userGroupsGetRelatedGroupsForUser: <ThrowOnError extends boolean = false>(
    options: Options<UserGroupsGetRelatedGroupsForUserData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Users.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "User",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const usersGet: <ThrowOnError extends boolean = false>(
    options: Options<UsersGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Users.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "User",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const usersGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<UsersGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a User by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const usersGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<UsersGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Users by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "User",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const usersGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<UsersGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Users.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "User",
 * "fieldName": "RevenueRegularRate"
 * },
 * "operator": "GreaterThan",
 * "filterValueType": "NumericWithUnit",
 * "values": [
 * {
 * "value":{
 * "amount": 5,
 * "unit": "USD"
 * }
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const usersGetCount: <ThrowOnError extends boolean = false>(
    options: Options<UsersGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a User.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const usersGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<UsersGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a User.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const usersGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<UsersGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a User.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "WorkItem",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const usersGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<UsersGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Ribbon Actions
 * Sample request:
 *
 * {
 * "Ids": [],
 * "RibbonType": "Subsystem",
 * "EntityType": "Project",
 * "MainEntityId": "",
 * "ParentEntityId": ""
 * }
 */
export declare const ribbonActionsGetRibbonActions: <ThrowOnError extends boolean = false>(
    options: Options<RibbonActionsGetRibbonActionsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').RibbonActionsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Return context menus for a related entity
 */
export declare const ribbonActionsGetContextMenus: <ThrowOnError extends boolean = false>(
    options: Options<RibbonActionsGetContextMenusData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').ContextMenusResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Milestones.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Milestone",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const milestonesGet: <ThrowOnError extends boolean = false>(
    options: Options<MilestonesGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Milestones.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Milestone",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const milestonesGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<MilestonesGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Milestone by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const milestonesGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<MilestonesGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Milestones by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Milestone",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const milestonesGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<MilestonesGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Milestones.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Milestone",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const milestonesGetCount: <ThrowOnError extends boolean = false>(
    options: Options<MilestonesGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a Milestone.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const milestonesGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<MilestonesGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a Milestone.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const milestonesGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<MilestonesGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a Milestone.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Submitted"
 * }
 */
export declare const milestonesGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<MilestonesGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "Owner",
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Milestone",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const milestonesGetAvatars: <ThrowOnError extends boolean = false>(
    options: Options<MilestonesGetAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "relation": {
 * "name": "ResourcesAndPlaceholders",
 * "filteredEntityType": "User"
 * },
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "workitem",
 * "fieldName": "name"
 * },
 * "operator": "Contains",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "111111"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const milestonesGetRelationsAvatars: <ThrowOnError extends boolean = false>(
    options: Options<MilestonesGetRelationsAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Programs.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Program",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const programsGet: <ThrowOnError extends boolean = false>(
    options: Options<ProgramsGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Programs.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Program",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const programsGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<ProgramsGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Program by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const programsGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<ProgramsGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Programs by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Program",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const programsGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<ProgramsGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Programs.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Program",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const programsGetCount: <ThrowOnError extends boolean = false>(
    options: Options<ProgramsGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a Program.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const programsGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<ProgramsGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a Program.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const programsGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<ProgramsGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a Program.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Submitted"
 * }
 */
export declare const programsGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<ProgramsGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "Owner",
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Program",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const programsGetAvatars: <ThrowOnError extends boolean = false>(
    options: Options<ProgramsGetAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "relation": {
 * "name": "ResourcesAndPlaceholders",
 * "filteredEntityType": "User"
 * },
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "workitem",
 * "fieldName": "name"
 * },
 * "operator": "Contains",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "111111"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const programsGetRelationsAvatars: <ThrowOnError extends boolean = false>(
    options: Options<ProgramsGetRelationsAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Projects.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const projectsGet: <ThrowOnError extends boolean = false>(
    options: Options<ProjectsGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Projects.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const projectsGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<ProjectsGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Project by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const projectsGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<ProjectsGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Projects by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const projectsGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<ProjectsGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Projects.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const projectsGetCount: <ThrowOnError extends boolean = false>(
    options: Options<ProjectsGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a Project.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const projectsGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<ProjectsGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a Project.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const projectsGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<ProjectsGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a Project.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Submitted"
 * }
 */
export declare const projectsGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<ProjectsGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "ProjectManager",
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Project",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const projectsGetAvatars: <ThrowOnError extends boolean = false>(
    options: Options<ProjectsGetAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "relation": {
 * "name": "ResourcesAndPlaceholders",
 * "filteredEntityType": "User"
 * },
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "workitem",
 * "fieldName": "name"
 * },
 * "operator": "Contains",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "111111"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const projectsGetRelationsAvatars: <ThrowOnError extends boolean = false>(
    options: Options<ProjectsGetRelationsAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Tasks.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Task",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const tasksGet: <ThrowOnError extends boolean = false>(
    options: Options<TasksGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of Tasks.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Task",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Active"
 * }
 */
export declare const tasksGetGrouped: <ThrowOnError extends boolean = false>(
    options: Options<TasksGetGroupedData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a Task by its identifier.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "excludePermissions": true
 * }
 */
export declare const tasksGetByIdentifier: <ThrowOnError extends boolean = false>(
    options: Options<TasksGetByIdentifierData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntityDetailsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Tasks by their identifiers.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Task",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "ids": ["11.222.333", "44.555.66"]
 * }
 */
export declare const tasksGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<TasksGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of Tasks.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Task",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const tasksGetCount: <ThrowOnError extends boolean = false>(
    options: Options<TasksGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of items related to a Task.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true
 * }
 */
export declare const tasksGetRelations: <ThrowOnError extends boolean = false>(
    options: Options<TasksGetRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').EntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the number of items related to a Task.
 * Sample request:
 *
 * {
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const tasksGetRelationsCount: <ThrowOnError extends boolean = false>(
    options: Options<TasksGetRelationsCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a grouped list of items related to a Task.
 * Sample request:
 *
 * {
 * "fields": [
 * "name",
 * "createdOn",
 * "state"
 * ],
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Risk",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ],
 * "offset": 0,
 * "limit": 25,
 * "sortBy": "name",
 * "sortStrategy": "Asc",
 * "excludePermissions": true,
 * "groupBy": "state",
 * "groupName": "Submitted"
 * }
 */
export declare const tasksGetGroupedRelations: <ThrowOnError extends boolean = false>(
    options: Options<TasksGetGroupedRelationsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GroupedEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "Owner",
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "Task",
 * "fieldName": "percentCompleted"
 * },
 * "operator": "Between",
 * "filterValueType": "Numeric",
 * "values": [
 * {
 * "value": 10
 * },
 * {
 * "value": 20
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const tasksGetAvatars: <ThrowOnError extends boolean = false>(
    options: Options<TasksGetAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "relation": {
 * "name": "ResourcesAndPlaceholders",
 * "filteredEntityType": "User"
 * },
 * "dataFilters": [
 * {
 * "field": {
 * "entityType": "workitem",
 * "fieldName": "name"
 * },
 * "operator": "Contains",
 * "filterValueType": "Text",
 * "values": [
 * {
 * "value": "111111"
 * }
 * ]
 * }
 * ]
 * }
 */
export declare const tasksGetRelationsAvatars: <ThrowOnError extends boolean = false>(
    options: Options<TasksGetRelationsAvatarsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').AvatarsResponse,
    unknown,
    ThrowOnError
>;
export declare const dataWarehouseEntityGetCount: <ThrowOnError extends boolean = false>(
    options: Options<DataWarehouseEntityGetCountData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CountResponse,
    unknown,
    ThrowOnError
>;
export declare const dataWarehouseEntityGetByIds: <ThrowOnError extends boolean = false>(
    options: Options<DataWarehouseEntityGetByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').DataWarehouseEntitiesByIdsResponse,
    unknown,
    ThrowOnError
>;
export declare const dataWarehouseEntityGetIds: <ThrowOnError extends boolean = false>(
    options: Options<DataWarehouseEntityGetIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').DataWarehouseGetIdsResponse,
    unknown,
    ThrowOnError
>;
export declare const configurationGetConfiguration: <ThrowOnError extends boolean = false>(
    options: Options<ConfigurationGetConfigurationData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').DataWarehouseEntityDetailsResponseOfBiConfiguration,
    unknown,
    ThrowOnError
>;
export declare const configurationUpdateConfiguration: <ThrowOnError extends boolean = false>(
    options: Options<ConfigurationUpdateConfigurationData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<unknown, unknown, ThrowOnError>;
export declare const storageConnectionsTestAzureBlobConnection: <
    ThrowOnError extends boolean = false,
>(
    options: Options<StorageConnectionsTestAzureBlobConnectionData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').StorageConnectionResponse,
    unknown,
    ThrowOnError
>;
export declare const triggerExportTriggerExport: <ThrowOnError extends boolean = false>(
    options?: Options<TriggerExportTriggerExportData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<unknown, unknown, ThrowOnError>;
export declare const planviewAdminVerifyConnect: <ThrowOnError extends boolean = false>(
    options: Options<PlanviewAdminVerifyConnectData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<unknown, unknown, ThrowOnError>;
export declare const planviewAdminGetUsers: <ThrowOnError extends boolean = false>(
    options?: Options<PlanviewAdminGetUsersData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GetUsersResponse,
    unknown,
    ThrowOnError
>;
export declare const planviewAdminGet: <ThrowOnError extends boolean = false>(
    options?: Options<PlanviewAdminGetData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GetTenantResponse,
    unknown,
    ThrowOnError
>;
export declare const planviewAdminRegister: <ThrowOnError extends boolean = false>(
    options: Options<PlanviewAdminRegisterData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<unknown, unknown, ThrowOnError>;
export declare const planviewTokenServiceGetPtsTokenForCoPilot: <
    ThrowOnError extends boolean = false,
>(
    options?: Options<PlanviewTokenServiceGetPtsTokenForCoPilotData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GetTokenResponse,
    unknown,
    ThrowOnError
>;
export declare const planviewTokenServiceGetPtsTokenInternal: <
    ThrowOnError extends boolean = false,
>(
    options?: Options<PlanviewTokenServiceGetPtsTokenInternalData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GetTokenResponse,
    unknown,
    ThrowOnError
>;
export declare const sentimentAnalysisServiceCalculateSentiment: <
    ThrowOnError extends boolean = false,
>(
    options: Options<SentimentAnalysisServiceCalculateSentimentData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').CalculateSentimentResponse,
    unknown,
    ThrowOnError
>;
export declare const whiteboardPtsTokenForWhiteboard: <ThrowOnError extends boolean = false>(
    options: Options<WhiteboardPtsTokenForWhiteboardData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').WhiteboardTokenResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the Resources with planning data.
 * Sample request:
 *
 * {
 * "workloadSettings": {
 * "aggregationTypes": "None",
 * "loadBaseType": "ProjectAssignment",
 * "measureType": "Hours",
 * "slicePeriodType": "Day",
 * "slicesAmount": 5,
 * "sliceStartDate": "2024-04-16T10:00:00.000Z",
 * "workloadRootEntityType": "Resources"
 * },
 * "sourceEntity": {
 * "entityType": "ResourceEntity",
 * "entityKeys": [
 * {
 * "businessUnitId": "2.2.2",
 * "entityId": "1.1.1"
 * },
 * {
 * "businessUnitId": "2.2.2",
 * "entityId": "1.2.1"
 * }
 * ]
 * },
 * "offset": 0,
 * "limit": 25
 * }
 */
export declare const workloadGetWorkloadResources: <ThrowOnError extends boolean = false>(
    options: Options<WorkloadGetWorkloadResourcesData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').WorkloadEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the Projects for a particular resource with planning data
 * Sample request:
 *
 * {
 * "workloadSettings": {
 * "aggregationTypes": "None",
 * "loadBaseType": "ProjectAssignment",
 * "measureType": "Hours",
 * "slicePeriodType": "Day",
 * "slicesAmount": 5,
 * "sliceStartDate": "2024-04-16T10:57:02.635Z",
 * "workloadRootEntityType": "Resources"
 * },
 * "resourceEntityKey": {
 * "businessUnitId": "2.2.2",
 * "entityId": "1.1.1"
 * },
 * "offset": 0,
 * "limit": 25
 * }
 */
export declare const workloadGetWorkloadProjects: <ThrowOnError extends boolean = false>(
    options: Options<WorkloadGetWorkloadProjectsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').WorkloadEntitiesResponse,
    unknown,
    ThrowOnError
>;
/**
 * Returns the Tasks for a particular project with planning data
 * Sample request:
 *
 * {
 * "workloadSettings": {
 * "aggregationTypes": "None",
 * "businessUnitId": 0,
 * "loadBaseType": "ProjectAssignment",
 * "measureType": "Hours",
 * "slicePeriodType": "Day",
 * "slicesAmount": 5,
 * "sliceStartDate": "2024-04-16T10:57:02.635Z",
 * "workloadRootEntityType": "Resources"
 * },
 * "resourceEntityKey": {
 * "businessUnitId": "2.2.2",
 * "entityId": "1.1.1"
 * },
 * "offset": 0,
 * "limit": 25,
 * }
 */
export declare const workloadGetWorkloadTasks: <ThrowOnError extends boolean = false>(
    options: Options<WorkloadGetWorkloadTasksData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').WorkloadEntitiesResponse,
    unknown,
    ThrowOnError
>;
export declare const publicisGetReportableWorkItemsPerUser: <ThrowOnError extends boolean = false>(
    options: Options<PublicisGetReportableWorkItemsPerUserData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GetReportableWorkItemsResponse,
    unknown,
    ThrowOnError
>;
export declare const publicisGetReportableTasksByIds: <ThrowOnError extends boolean = false>(
    options: Options<PublicisGetReportableTasksByIdsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GetReportableTasksByIdsResponse,
    unknown,
    ThrowOnError
>;
export declare const publicisGetReportableTasksByIds2: <ThrowOnError extends boolean = false>(
    options: Options<PublicisGetReportableTasksByIds2Data, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GetReportableTasksByIdsResponse,
    unknown,
    ThrowOnError
>;
export declare const publicisGetAssignmentsPerUsers: <ThrowOnError extends boolean = false>(
    options: Options<PublicisGetAssignmentsPerUsersData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GetAssignmentsPerUsersResponse,
    unknown,
    ThrowOnError
>;
export declare const publicisGetUsersWorkingHours: <ThrowOnError extends boolean = false>(
    options: Options<PublicisGetUsersWorkingHoursData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GetUsersWorkingHoursResponse,
    unknown,
    ThrowOnError
>;
export declare const publicisGetGroupMembershipLinks: <ThrowOnError extends boolean = false>(
    options: Options<PublicisGetGroupMembershipLinksData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GetGroupMembershipLinksResponse,
    unknown,
    ThrowOnError
>;
export declare const publicisGetResourceProjects: <ThrowOnError extends boolean = false>(
    options: Options<PublicisGetResourceProjectsData, ThrowOnError>,
) => import('@hey-api/client-axios').RequestResult<
    import('./types.gen').GetResourceProjectsResponse,
    unknown,
    ThrowOnError
>;
//# sourceMappingURL=sdk.gen.d.ts.map
