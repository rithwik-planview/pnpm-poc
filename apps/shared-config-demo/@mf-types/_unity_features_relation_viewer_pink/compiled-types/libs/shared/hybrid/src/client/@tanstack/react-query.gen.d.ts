import { type Options } from '../sdk.gen';
import { type InfiniteData, type DefaultError, type UseMutationOptions } from '@tanstack/react-query';
import type { BugsGetData, BugsGetResponse, BugsGetGroupedData, BugsGetGroupedResponse, BugsGetByIdentifierData, BugsGetByIdentifierResponse, BugsGetByIdsData, BugsGetByIdsResponse, BugsGetCountData, BugsGetCountResponse, BugsGetRelationsData, BugsGetRelationsResponse, BugsGetRelationsCountData, BugsGetRelationsCountResponse, BugsGetGroupedRelationsData, BugsGetGroupedRelationsResponse, BugsGetAvatarsData, BugsGetAvatarsResponse, BugsGetRelationsAvatarsData, BugsGetRelationsAvatarsResponse, CasesGetData, CasesGetResponse, CasesGetGroupedData, CasesGetGroupedResponse, CasesGetByIdentifierData, CasesGetByIdentifierResponse, CasesGetByIdsData, CasesGetByIdsResponse, CasesGetCountData, CasesGetCountResponse, CasesGetRelationsData, CasesGetRelationsResponse, CasesGetRelationsCountData, CasesGetRelationsCountResponse, CasesGetGroupedRelationsData, CasesGetGroupedRelationsResponse, CasesGetAvatarsData, CasesGetAvatarsResponse, CasesGetRelationsAvatarsData, CasesGetRelationsAvatarsResponse, IssuesGetData, IssuesGetResponse, IssuesGetGroupedData, IssuesGetGroupedResponse, IssuesGetByIdentifierData, IssuesGetByIdentifierResponse, IssuesGetByIdsData, IssuesGetByIdsResponse, IssuesGetCountData, IssuesGetCountResponse, IssuesGetRelationsData, IssuesGetRelationsResponse, IssuesGetRelationsCountData, IssuesGetRelationsCountResponse, IssuesGetGroupedRelationsData, IssuesGetGroupedRelationsResponse, IssuesGetAvatarsData, IssuesGetAvatarsResponse, IssuesGetRelationsAvatarsData, IssuesGetRelationsAvatarsResponse, RequestsGetData, RequestsGetResponse, RequestsGetGroupedData, RequestsGetGroupedResponse, RequestsGetByIdentifierData, RequestsGetByIdentifierResponse, RequestsGetByIdsData, RequestsGetByIdsResponse, RequestsGetCountData, RequestsGetCountResponse, RequestsGetRelationsData, RequestsGetRelationsResponse, RequestsGetRelationsCountData, RequestsGetRelationsCountResponse, RequestsGetGroupedRelationsData, RequestsGetGroupedRelationsResponse, RequestsGetAvatarsData, RequestsGetAvatarsResponse, RequestsGetRelationsAvatarsData, RequestsGetRelationsAvatarsResponse, RisksGetData, RisksGetResponse, RisksGetGroupedData, RisksGetGroupedResponse, RisksGetByIdentifierData, RisksGetByIdentifierResponse, RisksGetByIdsData, RisksGetByIdsResponse, RisksGetCountData, RisksGetCountResponse, RisksGetRelationsData, RisksGetRelationsResponse, RisksGetRelationsCountData, RisksGetRelationsCountResponse, RisksGetGroupedRelationsData, RisksGetGroupedRelationsResponse, RisksGetAvatarsData, RisksGetAvatarsResponse, RisksGetRelationsAvatarsData, RisksGetRelationsAvatarsResponse, GenericEntityGetData, GenericEntityGetResponse, GenericEntityGetGroupedData, GenericEntityGetGroupedResponse, GenericEntityGetByIdentifierData, GenericEntityGetByIdentifierResponse, GenericEntityGetByIdsData, GenericEntityGetByIdsResponse, GenericEntityGetCountData, GenericEntityGetCountResponse, GenericEntityGetRelationsData, GenericEntityGetRelationsResponse, GenericEntityGetRelationsCountData, GenericEntityGetRelationsCountResponse, GenericEntityGetGroupedRelationsData, GenericEntityGetGroupedRelationsResponse, GenericEntityGetEntityPicklistData, GenericEntityGetSwimlanesData, GenericEntityGetSwimlanesResponse, GenericEntityGetAvatarsData, GenericEntityGetAvatarsResponse, GenericEntityGetRelationAvatarsData, GenericEntityGetRelationAvatarsResponse, GenericEntityGetCustomPanelByIdentifierData, GenericEntityGetSwimlanesByRelationIdentifierData, GenericEntityGetSwimlanesByRelationIdentifierResponse, GenericEntityGetAvailableEntitiesData, GenericEntityGetAvailableEntitiesResponse, MetadataGetPicklistData, MetadataGetPicklistResponse, MetadataGetFieldsData, MetadataGetFieldsResponse, MetadataGetSystemSettingsData, MetadataGetOrganizationSettingsData, MetadataGetEntitiesDescriptionData, MetadataGetEntitiesDescriptionResponse, MetadataGetAvailableFieldsData, MetadataGetAvailableFieldsResponse, MetadataGetRelationViewerFieldsData, MetadataGetRelationViewerFieldsResponse, PortfoliosGetData, PortfoliosGetResponse, PortfoliosGetGroupedData, PortfoliosGetGroupedResponse, PortfoliosGetByIdentifierData, PortfoliosGetByIdentifierResponse, PortfoliosGetByIdsData, PortfoliosGetByIdsResponse, PortfoliosGetCountData, PortfoliosGetCountResponse, PortfoliosGetRelationsData, PortfoliosGetRelationsResponse, PortfoliosGetRelationsCountData, PortfoliosGetRelationsCountResponse, PortfoliosGetGroupedRelationsData, PortfoliosGetGroupedRelationsResponse, PortfoliosGetAvatarsData, PortfoliosGetAvatarsResponse, PortfoliosGetRelationsAvatarsData, PortfoliosGetRelationsAvatarsResponse, PropertyCardLayoutGetPropertyCardLayoutData, PropertyCardLayoutGetPropertyCardLayoutByEntityIdData, JobTitlesGetCountData, JobTitlesGetCountResponse, JobTitlesGetRelationsCountData, JobTitlesGetRelationsCountResponse, JobTitlesGetData, JobTitlesGetResponse, JobTitlesGetGroupedData, JobTitlesGetGroupedResponse, JobTitlesGetByIdentifierData, JobTitlesGetByIdentifierResponse, JobTitlesGetByIdsData, JobTitlesGetByIdsResponse, JobTitlesGetRelationsData, JobTitlesGetRelationsResponse, JobTitlesGetGroupedRelationsData, JobTitlesGetGroupedRelationsResponse, MembersGetAllMembersData, MembersGetAllMembersResponse, ProfilesGetCountData, ProfilesGetCountResponse, ProfilesGetData, ProfilesGetResponse, ProfilesGetByIdentifierData, ProfilesGetByIdentifierResponse, ProfilesGetByIdsData, ProfilesGetByIdsResponse, ProfilesGetUserProfilesData, SkillsGetData, SkillsGetResponse, SkillsGetGroupedData, SkillsGetGroupedResponse, SkillsGetByIdentifierData, SkillsGetByIdentifierResponse, SkillsGetByIdsData, SkillsGetByIdsResponse, SkillsGetCountData, SkillsGetCountResponse, SkillsGetRelationsData, SkillsGetRelationsResponse, SkillsGetRelationsCountData, SkillsGetRelationsCountResponse, SkillsGetGroupedRelationsData, SkillsGetGroupedRelationsResponse, UserGroupsGetData, UserGroupsGetResponse, UserGroupsGetGroupedData, UserGroupsGetGroupedResponse, UserGroupsGetByIdentifierData, UserGroupsGetByIdentifierResponse, UserGroupsGetByIdsData, UserGroupsGetByIdsResponse, UserGroupsGetCountData, UserGroupsGetCountResponse, UserGroupsGetRelationsData, UserGroupsGetRelationsResponse, UserGroupsGetRelationsCountData, UserGroupsGetRelationsCountResponse, UserGroupsGetGroupedRelationsData, UserGroupsGetGroupedRelationsResponse, UserGroupsGetAuthorizationGroupsData, UserGroupsGetRelatedGroupsForUserData, UserGroupsGetRelatedGroupsForUserResponse, UsersGetData, UsersGetResponse, UsersGetGroupedData, UsersGetGroupedResponse, UsersGetByIdentifierData, UsersGetByIdentifierResponse, UsersGetByIdsData, UsersGetByIdsResponse, UsersGetCountData, UsersGetCountResponse, UsersGetRelationsData, UsersGetRelationsResponse, UsersGetRelationsCountData, UsersGetRelationsCountResponse, UsersGetGroupedRelationsData, UsersGetGroupedRelationsResponse, RibbonActionsGetRibbonActionsData, RibbonActionsGetRibbonActionsResponse, RibbonActionsGetContextMenusData, RibbonActionsGetContextMenusResponse, MilestonesGetData, MilestonesGetResponse, MilestonesGetGroupedData, MilestonesGetGroupedResponse, MilestonesGetByIdentifierData, MilestonesGetByIdentifierResponse, MilestonesGetByIdsData, MilestonesGetByIdsResponse, MilestonesGetCountData, MilestonesGetCountResponse, MilestonesGetRelationsData, MilestonesGetRelationsResponse, MilestonesGetRelationsCountData, MilestonesGetRelationsCountResponse, MilestonesGetGroupedRelationsData, MilestonesGetGroupedRelationsResponse, MilestonesGetAvatarsData, MilestonesGetAvatarsResponse, MilestonesGetRelationsAvatarsData, MilestonesGetRelationsAvatarsResponse, ProgramsGetData, ProgramsGetResponse, ProgramsGetGroupedData, ProgramsGetGroupedResponse, ProgramsGetByIdentifierData, ProgramsGetByIdentifierResponse, ProgramsGetByIdsData, ProgramsGetByIdsResponse, ProgramsGetCountData, ProgramsGetCountResponse, ProgramsGetRelationsData, ProgramsGetRelationsResponse, ProgramsGetRelationsCountData, ProgramsGetRelationsCountResponse, ProgramsGetGroupedRelationsData, ProgramsGetGroupedRelationsResponse, ProgramsGetAvatarsData, ProgramsGetAvatarsResponse, ProgramsGetRelationsAvatarsData, ProgramsGetRelationsAvatarsResponse, ProjectsGetData, ProjectsGetResponse, ProjectsGetGroupedData, ProjectsGetGroupedResponse, ProjectsGetByIdentifierData, ProjectsGetByIdentifierResponse, ProjectsGetByIdsData, ProjectsGetByIdsResponse, ProjectsGetCountData, ProjectsGetCountResponse, ProjectsGetRelationsData, ProjectsGetRelationsResponse, ProjectsGetRelationsCountData, ProjectsGetRelationsCountResponse, ProjectsGetGroupedRelationsData, ProjectsGetGroupedRelationsResponse, ProjectsGetAvatarsData, ProjectsGetAvatarsResponse, ProjectsGetRelationsAvatarsData, ProjectsGetRelationsAvatarsResponse, TasksGetData, TasksGetResponse, TasksGetGroupedData, TasksGetGroupedResponse, TasksGetByIdentifierData, TasksGetByIdentifierResponse, TasksGetByIdsData, TasksGetByIdsResponse, TasksGetCountData, TasksGetCountResponse, TasksGetRelationsData, TasksGetRelationsResponse, TasksGetRelationsCountData, TasksGetRelationsCountResponse, TasksGetGroupedRelationsData, TasksGetGroupedRelationsResponse, TasksGetAvatarsData, TasksGetAvatarsResponse, TasksGetRelationsAvatarsData, TasksGetRelationsAvatarsResponse, DataWarehouseEntityGetCountData, DataWarehouseEntityGetCountResponse, DataWarehouseEntityGetByIdsData, DataWarehouseEntityGetByIdsResponse, DataWarehouseEntityGetIdsData, DataWarehouseEntityGetIdsResponse, ConfigurationGetConfigurationData, ConfigurationGetConfigurationResponse, ConfigurationUpdateConfigurationData, StorageConnectionsTestAzureBlobConnectionData, StorageConnectionsTestAzureBlobConnectionResponse, TriggerExportTriggerExportData, PlanviewAdminVerifyConnectData, PlanviewAdminGetUsersData, PlanviewAdminGetData, PlanviewAdminRegisterData, PlanviewTokenServiceGetPtsTokenForCoPilotData, PlanviewTokenServiceGetPtsTokenInternalData, SentimentAnalysisServiceCalculateSentimentData, SentimentAnalysisServiceCalculateSentimentResponse, WhiteboardPtsTokenForWhiteboardData, WorkloadGetWorkloadResourcesData, WorkloadGetWorkloadResourcesResponse, WorkloadGetWorkloadProjectsData, WorkloadGetWorkloadProjectsResponse, WorkloadGetWorkloadTasksData, WorkloadGetWorkloadTasksResponse, PublicisGetReportableWorkItemsPerUserData, PublicisGetReportableWorkItemsPerUserResponse, PublicisGetReportableTasksByIdsData, PublicisGetReportableTasksByIdsResponse, PublicisGetReportableTasksByIds2Data, PublicisGetReportableTasksByIds2Response, PublicisGetAssignmentsPerUsersData, PublicisGetAssignmentsPerUsersResponse, PublicisGetUsersWorkingHoursData, PublicisGetUsersWorkingHoursResponse, PublicisGetGroupMembershipLinksData, PublicisGetGroupMembershipLinksResponse, PublicisGetResourceProjectsData, PublicisGetResourceProjectsResponse } from '../types.gen';
import type { AxiosError } from 'axios';
export type QueryKey<TOptions extends Options> = [
    Pick<TOptions, 'baseURL' | 'body' | 'headers' | 'path' | 'query'> & {
        _id: string;
        _infinite?: boolean;
    }
];
export declare const bugsGetQueryKey: (options: Options<BugsGetData>) => [Pick<Options<BugsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const bugsGetOptions: (options: Options<BugsGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<BugsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<BugsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<BugsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const bugsGetInfiniteQueryKey: (options: Options<BugsGetData>) => QueryKey<Options<BugsGetData>>;
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
export declare const bugsGetInfiniteOptions: (options: Options<BugsGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<BugsGetData>>, number | Pick<Pick<Options<BugsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<BugsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<BugsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<BugsGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
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
export declare const bugsGetMutation: (options?: Partial<Options<BugsGetData>>) => UseMutationOptions<BugsGetResponse, AxiosError<DefaultError>, Options<BugsGetData>>;
export declare const bugsGetGroupedQueryKey: (options: Options<BugsGetGroupedData>) => [Pick<Options<BugsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const bugsGetGroupedOptions: (options: Options<BugsGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<BugsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<BugsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<BugsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const bugsGetGroupedInfiniteQueryKey: (options: Options<BugsGetGroupedData>) => QueryKey<Options<BugsGetGroupedData>>;
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
export declare const bugsGetGroupedInfiniteOptions: (options: Options<BugsGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<BugsGetGroupedData>>, number | Pick<Pick<Options<BugsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<BugsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<BugsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<BugsGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const bugsGetGroupedMutation: (options?: Partial<Options<BugsGetGroupedData>>) => UseMutationOptions<BugsGetGroupedResponse, AxiosError<DefaultError>, Options<BugsGetGroupedData>>;
export declare const bugsGetByIdentifierQueryKey: (options: Options<BugsGetByIdentifierData>) => [Pick<Options<BugsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const bugsGetByIdentifierOptions: (options: Options<BugsGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<BugsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<BugsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<BugsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const bugsGetByIdentifierMutation: (options?: Partial<Options<BugsGetByIdentifierData>>) => UseMutationOptions<BugsGetByIdentifierResponse, AxiosError<DefaultError>, Options<BugsGetByIdentifierData>>;
export declare const bugsGetByIdsQueryKey: (options: Options<BugsGetByIdsData>) => [Pick<Options<BugsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const bugsGetByIdsOptions: (options: Options<BugsGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<BugsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<BugsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<BugsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const bugsGetByIdsInfiniteQueryKey: (options: Options<BugsGetByIdsData>) => QueryKey<Options<BugsGetByIdsData>>;
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
export declare const bugsGetByIdsInfiniteOptions: (options: Options<BugsGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<BugsGetByIdsData>>, number | Pick<Pick<Options<BugsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<BugsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<BugsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<BugsGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const bugsGetByIdsMutation: (options?: Partial<Options<BugsGetByIdsData>>) => UseMutationOptions<BugsGetByIdsResponse, AxiosError<DefaultError>, Options<BugsGetByIdsData>>;
export declare const bugsGetCountQueryKey: (options: Options<BugsGetCountData>) => [Pick<Options<BugsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const bugsGetCountOptions: (options: Options<BugsGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<BugsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<BugsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<BugsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const bugsGetCountMutation: (options?: Partial<Options<BugsGetCountData>>) => UseMutationOptions<BugsGetCountResponse, AxiosError<DefaultError>, Options<BugsGetCountData>>;
export declare const bugsGetRelationsQueryKey: (options: Options<BugsGetRelationsData>) => [Pick<Options<BugsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const bugsGetRelationsOptions: (options: Options<BugsGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<BugsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<BugsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<BugsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const bugsGetRelationsInfiniteQueryKey: (options: Options<BugsGetRelationsData>) => QueryKey<Options<BugsGetRelationsData>>;
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
export declare const bugsGetRelationsInfiniteOptions: (options: Options<BugsGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<BugsGetRelationsData>>, number | Pick<Pick<Options<BugsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<BugsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<BugsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<BugsGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const bugsGetRelationsMutation: (options?: Partial<Options<BugsGetRelationsData>>) => UseMutationOptions<BugsGetRelationsResponse, AxiosError<DefaultError>, Options<BugsGetRelationsData>>;
export declare const bugsGetRelationsCountQueryKey: (options: Options<BugsGetRelationsCountData>) => [Pick<Options<BugsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const bugsGetRelationsCountOptions: (options: Options<BugsGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<BugsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<BugsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<BugsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const bugsGetRelationsCountMutation: (options?: Partial<Options<BugsGetRelationsCountData>>) => UseMutationOptions<BugsGetRelationsCountResponse, AxiosError<DefaultError>, Options<BugsGetRelationsCountData>>;
export declare const bugsGetGroupedRelationsQueryKey: (options: Options<BugsGetGroupedRelationsData>) => [Pick<Options<BugsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const bugsGetGroupedRelationsOptions: (options: Options<BugsGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<BugsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<BugsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<BugsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const bugsGetGroupedRelationsInfiniteQueryKey: (options: Options<BugsGetGroupedRelationsData>) => QueryKey<Options<BugsGetGroupedRelationsData>>;
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
export declare const bugsGetGroupedRelationsInfiniteOptions: (options: Options<BugsGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<BugsGetGroupedRelationsData>>, number | Pick<Pick<Options<BugsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<BugsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<BugsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<BugsGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const bugsGetGroupedRelationsMutation: (options?: Partial<Options<BugsGetGroupedRelationsData>>) => UseMutationOptions<BugsGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<BugsGetGroupedRelationsData>>;
export declare const bugsGetAvatarsQueryKey: (options: Options<BugsGetAvatarsData>) => [Pick<Options<BugsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const bugsGetAvatarsOptions: (options: Options<BugsGetAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<BugsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<BugsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<BugsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const bugsGetAvatarsMutation: (options?: Partial<Options<BugsGetAvatarsData>>) => UseMutationOptions<BugsGetAvatarsResponse, AxiosError<DefaultError>, Options<BugsGetAvatarsData>>;
export declare const bugsGetRelationsAvatarsQueryKey: (options: Options<BugsGetRelationsAvatarsData>) => [Pick<Options<BugsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const bugsGetRelationsAvatarsOptions: (options: Options<BugsGetRelationsAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<BugsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<BugsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<BugsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const bugsGetRelationsAvatarsMutation: (options?: Partial<Options<BugsGetRelationsAvatarsData>>) => UseMutationOptions<BugsGetRelationsAvatarsResponse, AxiosError<DefaultError>, Options<BugsGetRelationsAvatarsData>>;
export declare const casesGetQueryKey: (options: Options<CasesGetData>) => [Pick<Options<CasesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const casesGetOptions: (options: Options<CasesGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<CasesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<CasesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<CasesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const casesGetInfiniteQueryKey: (options: Options<CasesGetData>) => QueryKey<Options<CasesGetData>>;
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
export declare const casesGetInfiniteOptions: (options: Options<CasesGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<CasesGetData>>, number | Pick<Pick<Options<CasesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<CasesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<CasesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<CasesGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const casesGetMutation: (options?: Partial<Options<CasesGetData>>) => UseMutationOptions<CasesGetResponse, AxiosError<DefaultError>, Options<CasesGetData>>;
export declare const casesGetGroupedQueryKey: (options: Options<CasesGetGroupedData>) => [Pick<Options<CasesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const casesGetGroupedOptions: (options: Options<CasesGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<CasesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<CasesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<CasesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const casesGetGroupedInfiniteQueryKey: (options: Options<CasesGetGroupedData>) => QueryKey<Options<CasesGetGroupedData>>;
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
export declare const casesGetGroupedInfiniteOptions: (options: Options<CasesGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<CasesGetGroupedData>>, number | Pick<Pick<Options<CasesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<CasesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<CasesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<CasesGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const casesGetGroupedMutation: (options?: Partial<Options<CasesGetGroupedData>>) => UseMutationOptions<CasesGetGroupedResponse, AxiosError<DefaultError>, Options<CasesGetGroupedData>>;
export declare const casesGetByIdentifierQueryKey: (options: Options<CasesGetByIdentifierData>) => [Pick<Options<CasesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const casesGetByIdentifierOptions: (options: Options<CasesGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<CasesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<CasesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<CasesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const casesGetByIdentifierMutation: (options?: Partial<Options<CasesGetByIdentifierData>>) => UseMutationOptions<CasesGetByIdentifierResponse, AxiosError<DefaultError>, Options<CasesGetByIdentifierData>>;
export declare const casesGetByIdsQueryKey: (options: Options<CasesGetByIdsData>) => [Pick<Options<CasesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const casesGetByIdsOptions: (options: Options<CasesGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<CasesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<CasesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<CasesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const casesGetByIdsInfiniteQueryKey: (options: Options<CasesGetByIdsData>) => QueryKey<Options<CasesGetByIdsData>>;
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
export declare const casesGetByIdsInfiniteOptions: (options: Options<CasesGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<CasesGetByIdsData>>, number | Pick<Pick<Options<CasesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<CasesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<CasesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<CasesGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const casesGetByIdsMutation: (options?: Partial<Options<CasesGetByIdsData>>) => UseMutationOptions<CasesGetByIdsResponse, AxiosError<DefaultError>, Options<CasesGetByIdsData>>;
export declare const casesGetCountQueryKey: (options: Options<CasesGetCountData>) => [Pick<Options<CasesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const casesGetCountOptions: (options: Options<CasesGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<CasesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<CasesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<CasesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const casesGetCountMutation: (options?: Partial<Options<CasesGetCountData>>) => UseMutationOptions<CasesGetCountResponse, AxiosError<DefaultError>, Options<CasesGetCountData>>;
export declare const casesGetRelationsQueryKey: (options: Options<CasesGetRelationsData>) => [Pick<Options<CasesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const casesGetRelationsOptions: (options: Options<CasesGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<CasesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<CasesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<CasesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const casesGetRelationsInfiniteQueryKey: (options: Options<CasesGetRelationsData>) => QueryKey<Options<CasesGetRelationsData>>;
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
export declare const casesGetRelationsInfiniteOptions: (options: Options<CasesGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<CasesGetRelationsData>>, number | Pick<Pick<Options<CasesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<CasesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<CasesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<CasesGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const casesGetRelationsMutation: (options?: Partial<Options<CasesGetRelationsData>>) => UseMutationOptions<CasesGetRelationsResponse, AxiosError<DefaultError>, Options<CasesGetRelationsData>>;
export declare const casesGetRelationsCountQueryKey: (options: Options<CasesGetRelationsCountData>) => [Pick<Options<CasesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const casesGetRelationsCountOptions: (options: Options<CasesGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<CasesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<CasesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<CasesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const casesGetRelationsCountMutation: (options?: Partial<Options<CasesGetRelationsCountData>>) => UseMutationOptions<CasesGetRelationsCountResponse, AxiosError<DefaultError>, Options<CasesGetRelationsCountData>>;
export declare const casesGetGroupedRelationsQueryKey: (options: Options<CasesGetGroupedRelationsData>) => [Pick<Options<CasesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const casesGetGroupedRelationsOptions: (options: Options<CasesGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<CasesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<CasesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<CasesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const casesGetGroupedRelationsInfiniteQueryKey: (options: Options<CasesGetGroupedRelationsData>) => QueryKey<Options<CasesGetGroupedRelationsData>>;
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
export declare const casesGetGroupedRelationsInfiniteOptions: (options: Options<CasesGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<CasesGetGroupedRelationsData>>, number | Pick<Pick<Options<CasesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<CasesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<CasesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<CasesGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const casesGetGroupedRelationsMutation: (options?: Partial<Options<CasesGetGroupedRelationsData>>) => UseMutationOptions<CasesGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<CasesGetGroupedRelationsData>>;
export declare const casesGetAvatarsQueryKey: (options: Options<CasesGetAvatarsData>) => [Pick<Options<CasesGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const casesGetAvatarsOptions: (options: Options<CasesGetAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<CasesGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<CasesGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<CasesGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const casesGetAvatarsMutation: (options?: Partial<Options<CasesGetAvatarsData>>) => UseMutationOptions<CasesGetAvatarsResponse, AxiosError<DefaultError>, Options<CasesGetAvatarsData>>;
export declare const casesGetRelationsAvatarsQueryKey: (options: Options<CasesGetRelationsAvatarsData>) => [Pick<Options<CasesGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const casesGetRelationsAvatarsOptions: (options: Options<CasesGetRelationsAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<CasesGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<CasesGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<CasesGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const casesGetRelationsAvatarsMutation: (options?: Partial<Options<CasesGetRelationsAvatarsData>>) => UseMutationOptions<CasesGetRelationsAvatarsResponse, AxiosError<DefaultError>, Options<CasesGetRelationsAvatarsData>>;
export declare const issuesGetQueryKey: (options: Options<IssuesGetData>) => [Pick<Options<IssuesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const issuesGetOptions: (options: Options<IssuesGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<IssuesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<IssuesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<IssuesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const issuesGetInfiniteQueryKey: (options: Options<IssuesGetData>) => QueryKey<Options<IssuesGetData>>;
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
export declare const issuesGetInfiniteOptions: (options: Options<IssuesGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<IssuesGetData>>, number | Pick<Pick<Options<IssuesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<IssuesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<IssuesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<IssuesGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const issuesGetMutation: (options?: Partial<Options<IssuesGetData>>) => UseMutationOptions<IssuesGetResponse, AxiosError<DefaultError>, Options<IssuesGetData>>;
export declare const issuesGetGroupedQueryKey: (options: Options<IssuesGetGroupedData>) => [Pick<Options<IssuesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const issuesGetGroupedOptions: (options: Options<IssuesGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<IssuesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<IssuesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<IssuesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const issuesGetGroupedInfiniteQueryKey: (options: Options<IssuesGetGroupedData>) => QueryKey<Options<IssuesGetGroupedData>>;
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
export declare const issuesGetGroupedInfiniteOptions: (options: Options<IssuesGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<IssuesGetGroupedData>>, number | Pick<Pick<Options<IssuesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<IssuesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<IssuesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<IssuesGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const issuesGetGroupedMutation: (options?: Partial<Options<IssuesGetGroupedData>>) => UseMutationOptions<IssuesGetGroupedResponse, AxiosError<DefaultError>, Options<IssuesGetGroupedData>>;
export declare const issuesGetByIdentifierQueryKey: (options: Options<IssuesGetByIdentifierData>) => [Pick<Options<IssuesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const issuesGetByIdentifierOptions: (options: Options<IssuesGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<IssuesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<IssuesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<IssuesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const issuesGetByIdentifierMutation: (options?: Partial<Options<IssuesGetByIdentifierData>>) => UseMutationOptions<IssuesGetByIdentifierResponse, AxiosError<DefaultError>, Options<IssuesGetByIdentifierData>>;
export declare const issuesGetByIdsQueryKey: (options: Options<IssuesGetByIdsData>) => [Pick<Options<IssuesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const issuesGetByIdsOptions: (options: Options<IssuesGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<IssuesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<IssuesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<IssuesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const issuesGetByIdsInfiniteQueryKey: (options: Options<IssuesGetByIdsData>) => QueryKey<Options<IssuesGetByIdsData>>;
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
export declare const issuesGetByIdsInfiniteOptions: (options: Options<IssuesGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<IssuesGetByIdsData>>, number | Pick<Pick<Options<IssuesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<IssuesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<IssuesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<IssuesGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const issuesGetByIdsMutation: (options?: Partial<Options<IssuesGetByIdsData>>) => UseMutationOptions<IssuesGetByIdsResponse, AxiosError<DefaultError>, Options<IssuesGetByIdsData>>;
export declare const issuesGetCountQueryKey: (options: Options<IssuesGetCountData>) => [Pick<Options<IssuesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const issuesGetCountOptions: (options: Options<IssuesGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<IssuesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<IssuesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<IssuesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const issuesGetCountMutation: (options?: Partial<Options<IssuesGetCountData>>) => UseMutationOptions<IssuesGetCountResponse, AxiosError<DefaultError>, Options<IssuesGetCountData>>;
export declare const issuesGetRelationsQueryKey: (options: Options<IssuesGetRelationsData>) => [Pick<Options<IssuesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const issuesGetRelationsOptions: (options: Options<IssuesGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<IssuesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<IssuesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<IssuesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const issuesGetRelationsInfiniteQueryKey: (options: Options<IssuesGetRelationsData>) => QueryKey<Options<IssuesGetRelationsData>>;
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
export declare const issuesGetRelationsInfiniteOptions: (options: Options<IssuesGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<IssuesGetRelationsData>>, number | Pick<Pick<Options<IssuesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<IssuesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<IssuesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<IssuesGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const issuesGetRelationsMutation: (options?: Partial<Options<IssuesGetRelationsData>>) => UseMutationOptions<IssuesGetRelationsResponse, AxiosError<DefaultError>, Options<IssuesGetRelationsData>>;
export declare const issuesGetRelationsCountQueryKey: (options: Options<IssuesGetRelationsCountData>) => [Pick<Options<IssuesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const issuesGetRelationsCountOptions: (options: Options<IssuesGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<IssuesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<IssuesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<IssuesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const issuesGetRelationsCountMutation: (options?: Partial<Options<IssuesGetRelationsCountData>>) => UseMutationOptions<IssuesGetRelationsCountResponse, AxiosError<DefaultError>, Options<IssuesGetRelationsCountData>>;
export declare const issuesGetGroupedRelationsQueryKey: (options: Options<IssuesGetGroupedRelationsData>) => [Pick<Options<IssuesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const issuesGetGroupedRelationsOptions: (options: Options<IssuesGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<IssuesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<IssuesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<IssuesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const issuesGetGroupedRelationsInfiniteQueryKey: (options: Options<IssuesGetGroupedRelationsData>) => QueryKey<Options<IssuesGetGroupedRelationsData>>;
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
export declare const issuesGetGroupedRelationsInfiniteOptions: (options: Options<IssuesGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<IssuesGetGroupedRelationsData>>, number | Pick<Pick<Options<IssuesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<IssuesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<IssuesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<IssuesGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const issuesGetGroupedRelationsMutation: (options?: Partial<Options<IssuesGetGroupedRelationsData>>) => UseMutationOptions<IssuesGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<IssuesGetGroupedRelationsData>>;
export declare const issuesGetAvatarsQueryKey: (options: Options<IssuesGetAvatarsData>) => [Pick<Options<IssuesGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const issuesGetAvatarsOptions: (options: Options<IssuesGetAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<IssuesGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<IssuesGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<IssuesGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const issuesGetAvatarsMutation: (options?: Partial<Options<IssuesGetAvatarsData>>) => UseMutationOptions<IssuesGetAvatarsResponse, AxiosError<DefaultError>, Options<IssuesGetAvatarsData>>;
export declare const issuesGetRelationsAvatarsQueryKey: (options: Options<IssuesGetRelationsAvatarsData>) => [Pick<Options<IssuesGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const issuesGetRelationsAvatarsOptions: (options: Options<IssuesGetRelationsAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<IssuesGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<IssuesGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<IssuesGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const issuesGetRelationsAvatarsMutation: (options?: Partial<Options<IssuesGetRelationsAvatarsData>>) => UseMutationOptions<IssuesGetRelationsAvatarsResponse, AxiosError<DefaultError>, Options<IssuesGetRelationsAvatarsData>>;
export declare const requestsGetQueryKey: (options: Options<RequestsGetData>) => [Pick<Options<RequestsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const requestsGetOptions: (options: Options<RequestsGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<RequestsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<RequestsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RequestsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const requestsGetInfiniteQueryKey: (options: Options<RequestsGetData>) => QueryKey<Options<RequestsGetData>>;
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
export declare const requestsGetInfiniteOptions: (options: Options<RequestsGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<RequestsGetData>>, number | Pick<Pick<Options<RequestsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<RequestsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<RequestsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<RequestsGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const requestsGetMutation: (options?: Partial<Options<RequestsGetData>>) => UseMutationOptions<RequestsGetResponse, AxiosError<DefaultError>, Options<RequestsGetData>>;
export declare const requestsGetGroupedQueryKey: (options: Options<RequestsGetGroupedData>) => [Pick<Options<RequestsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const requestsGetGroupedOptions: (options: Options<RequestsGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<RequestsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<RequestsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RequestsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const requestsGetGroupedInfiniteQueryKey: (options: Options<RequestsGetGroupedData>) => QueryKey<Options<RequestsGetGroupedData>>;
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
export declare const requestsGetGroupedInfiniteOptions: (options: Options<RequestsGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<RequestsGetGroupedData>>, number | Pick<Pick<Options<RequestsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<RequestsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<RequestsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<RequestsGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const requestsGetGroupedMutation: (options?: Partial<Options<RequestsGetGroupedData>>) => UseMutationOptions<RequestsGetGroupedResponse, AxiosError<DefaultError>, Options<RequestsGetGroupedData>>;
export declare const requestsGetByIdentifierQueryKey: (options: Options<RequestsGetByIdentifierData>) => [Pick<Options<RequestsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const requestsGetByIdentifierOptions: (options: Options<RequestsGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<RequestsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<RequestsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RequestsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const requestsGetByIdentifierMutation: (options?: Partial<Options<RequestsGetByIdentifierData>>) => UseMutationOptions<RequestsGetByIdentifierResponse, AxiosError<DefaultError>, Options<RequestsGetByIdentifierData>>;
export declare const requestsGetByIdsQueryKey: (options: Options<RequestsGetByIdsData>) => [Pick<Options<RequestsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const requestsGetByIdsOptions: (options: Options<RequestsGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<RequestsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<RequestsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RequestsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const requestsGetByIdsInfiniteQueryKey: (options: Options<RequestsGetByIdsData>) => QueryKey<Options<RequestsGetByIdsData>>;
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
export declare const requestsGetByIdsInfiniteOptions: (options: Options<RequestsGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<RequestsGetByIdsData>>, number | Pick<Pick<Options<RequestsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<RequestsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<RequestsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<RequestsGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const requestsGetByIdsMutation: (options?: Partial<Options<RequestsGetByIdsData>>) => UseMutationOptions<RequestsGetByIdsResponse, AxiosError<DefaultError>, Options<RequestsGetByIdsData>>;
export declare const requestsGetCountQueryKey: (options: Options<RequestsGetCountData>) => [Pick<Options<RequestsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const requestsGetCountOptions: (options: Options<RequestsGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<RequestsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<RequestsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RequestsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const requestsGetCountMutation: (options?: Partial<Options<RequestsGetCountData>>) => UseMutationOptions<RequestsGetCountResponse, AxiosError<DefaultError>, Options<RequestsGetCountData>>;
export declare const requestsGetRelationsQueryKey: (options: Options<RequestsGetRelationsData>) => [Pick<Options<RequestsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const requestsGetRelationsOptions: (options: Options<RequestsGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<RequestsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<RequestsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RequestsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const requestsGetRelationsInfiniteQueryKey: (options: Options<RequestsGetRelationsData>) => QueryKey<Options<RequestsGetRelationsData>>;
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
export declare const requestsGetRelationsInfiniteOptions: (options: Options<RequestsGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<RequestsGetRelationsData>>, number | Pick<Pick<Options<RequestsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<RequestsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<RequestsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<RequestsGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const requestsGetRelationsMutation: (options?: Partial<Options<RequestsGetRelationsData>>) => UseMutationOptions<RequestsGetRelationsResponse, AxiosError<DefaultError>, Options<RequestsGetRelationsData>>;
export declare const requestsGetRelationsCountQueryKey: (options: Options<RequestsGetRelationsCountData>) => [Pick<Options<RequestsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const requestsGetRelationsCountOptions: (options: Options<RequestsGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<RequestsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<RequestsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RequestsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const requestsGetRelationsCountMutation: (options?: Partial<Options<RequestsGetRelationsCountData>>) => UseMutationOptions<RequestsGetRelationsCountResponse, AxiosError<DefaultError>, Options<RequestsGetRelationsCountData>>;
export declare const requestsGetGroupedRelationsQueryKey: (options: Options<RequestsGetGroupedRelationsData>) => [Pick<Options<RequestsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const requestsGetGroupedRelationsOptions: (options: Options<RequestsGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<RequestsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<RequestsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RequestsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const requestsGetGroupedRelationsInfiniteQueryKey: (options: Options<RequestsGetGroupedRelationsData>) => QueryKey<Options<RequestsGetGroupedRelationsData>>;
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
export declare const requestsGetGroupedRelationsInfiniteOptions: (options: Options<RequestsGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<RequestsGetGroupedRelationsData>>, number | Pick<Pick<Options<RequestsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<RequestsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<RequestsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<RequestsGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const requestsGetGroupedRelationsMutation: (options?: Partial<Options<RequestsGetGroupedRelationsData>>) => UseMutationOptions<RequestsGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<RequestsGetGroupedRelationsData>>;
export declare const requestsGetAvatarsQueryKey: (options: Options<RequestsGetAvatarsData>) => [Pick<Options<RequestsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const requestsGetAvatarsOptions: (options: Options<RequestsGetAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<RequestsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<RequestsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RequestsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const requestsGetAvatarsMutation: (options?: Partial<Options<RequestsGetAvatarsData>>) => UseMutationOptions<RequestsGetAvatarsResponse, AxiosError<DefaultError>, Options<RequestsGetAvatarsData>>;
export declare const requestsGetRelationsAvatarsQueryKey: (options: Options<RequestsGetRelationsAvatarsData>) => [Pick<Options<RequestsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const requestsGetRelationsAvatarsOptions: (options: Options<RequestsGetRelationsAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<RequestsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<RequestsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RequestsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const requestsGetRelationsAvatarsMutation: (options?: Partial<Options<RequestsGetRelationsAvatarsData>>) => UseMutationOptions<RequestsGetRelationsAvatarsResponse, AxiosError<DefaultError>, Options<RequestsGetRelationsAvatarsData>>;
export declare const risksGetQueryKey: (options: Options<RisksGetData>) => [Pick<Options<RisksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const risksGetOptions: (options: Options<RisksGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<RisksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<RisksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RisksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const risksGetInfiniteQueryKey: (options: Options<RisksGetData>) => QueryKey<Options<RisksGetData>>;
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
export declare const risksGetInfiniteOptions: (options: Options<RisksGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<RisksGetData>>, number | Pick<Pick<Options<RisksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<RisksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<RisksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<RisksGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const risksGetMutation: (options?: Partial<Options<RisksGetData>>) => UseMutationOptions<RisksGetResponse, AxiosError<DefaultError>, Options<RisksGetData>>;
export declare const risksGetGroupedQueryKey: (options: Options<RisksGetGroupedData>) => [Pick<Options<RisksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const risksGetGroupedOptions: (options: Options<RisksGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<RisksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<RisksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RisksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const risksGetGroupedInfiniteQueryKey: (options: Options<RisksGetGroupedData>) => QueryKey<Options<RisksGetGroupedData>>;
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
export declare const risksGetGroupedInfiniteOptions: (options: Options<RisksGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<RisksGetGroupedData>>, number | Pick<Pick<Options<RisksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<RisksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<RisksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<RisksGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const risksGetGroupedMutation: (options?: Partial<Options<RisksGetGroupedData>>) => UseMutationOptions<RisksGetGroupedResponse, AxiosError<DefaultError>, Options<RisksGetGroupedData>>;
export declare const risksGetByIdentifierQueryKey: (options: Options<RisksGetByIdentifierData>) => [Pick<Options<RisksGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const risksGetByIdentifierOptions: (options: Options<RisksGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<RisksGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<RisksGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RisksGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const risksGetByIdentifierMutation: (options?: Partial<Options<RisksGetByIdentifierData>>) => UseMutationOptions<RisksGetByIdentifierResponse, AxiosError<DefaultError>, Options<RisksGetByIdentifierData>>;
export declare const risksGetByIdsQueryKey: (options: Options<RisksGetByIdsData>) => [Pick<Options<RisksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const risksGetByIdsOptions: (options: Options<RisksGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<RisksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<RisksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RisksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const risksGetByIdsInfiniteQueryKey: (options: Options<RisksGetByIdsData>) => QueryKey<Options<RisksGetByIdsData>>;
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
export declare const risksGetByIdsInfiniteOptions: (options: Options<RisksGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<RisksGetByIdsData>>, number | Pick<Pick<Options<RisksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<RisksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<RisksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<RisksGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const risksGetByIdsMutation: (options?: Partial<Options<RisksGetByIdsData>>) => UseMutationOptions<RisksGetByIdsResponse, AxiosError<DefaultError>, Options<RisksGetByIdsData>>;
export declare const risksGetCountQueryKey: (options: Options<RisksGetCountData>) => [Pick<Options<RisksGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const risksGetCountOptions: (options: Options<RisksGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<RisksGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<RisksGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RisksGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const risksGetCountMutation: (options?: Partial<Options<RisksGetCountData>>) => UseMutationOptions<RisksGetCountResponse, AxiosError<DefaultError>, Options<RisksGetCountData>>;
export declare const risksGetRelationsQueryKey: (options: Options<RisksGetRelationsData>) => [Pick<Options<RisksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const risksGetRelationsOptions: (options: Options<RisksGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<RisksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<RisksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RisksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const risksGetRelationsInfiniteQueryKey: (options: Options<RisksGetRelationsData>) => QueryKey<Options<RisksGetRelationsData>>;
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
export declare const risksGetRelationsInfiniteOptions: (options: Options<RisksGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<RisksGetRelationsData>>, number | Pick<Pick<Options<RisksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<RisksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<RisksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<RisksGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const risksGetRelationsMutation: (options?: Partial<Options<RisksGetRelationsData>>) => UseMutationOptions<RisksGetRelationsResponse, AxiosError<DefaultError>, Options<RisksGetRelationsData>>;
export declare const risksGetRelationsCountQueryKey: (options: Options<RisksGetRelationsCountData>) => [Pick<Options<RisksGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const risksGetRelationsCountOptions: (options: Options<RisksGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<RisksGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<RisksGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RisksGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const risksGetRelationsCountMutation: (options?: Partial<Options<RisksGetRelationsCountData>>) => UseMutationOptions<RisksGetRelationsCountResponse, AxiosError<DefaultError>, Options<RisksGetRelationsCountData>>;
export declare const risksGetGroupedRelationsQueryKey: (options: Options<RisksGetGroupedRelationsData>) => [Pick<Options<RisksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const risksGetGroupedRelationsOptions: (options: Options<RisksGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<RisksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<RisksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RisksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const risksGetGroupedRelationsInfiniteQueryKey: (options: Options<RisksGetGroupedRelationsData>) => QueryKey<Options<RisksGetGroupedRelationsData>>;
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
export declare const risksGetGroupedRelationsInfiniteOptions: (options: Options<RisksGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<RisksGetGroupedRelationsData>>, number | Pick<Pick<Options<RisksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<RisksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<RisksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<RisksGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const risksGetGroupedRelationsMutation: (options?: Partial<Options<RisksGetGroupedRelationsData>>) => UseMutationOptions<RisksGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<RisksGetGroupedRelationsData>>;
export declare const risksGetAvatarsQueryKey: (options: Options<RisksGetAvatarsData>) => [Pick<Options<RisksGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const risksGetAvatarsOptions: (options: Options<RisksGetAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<RisksGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<RisksGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RisksGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const risksGetAvatarsMutation: (options?: Partial<Options<RisksGetAvatarsData>>) => UseMutationOptions<RisksGetAvatarsResponse, AxiosError<DefaultError>, Options<RisksGetAvatarsData>>;
export declare const risksGetRelationsAvatarsQueryKey: (options: Options<RisksGetRelationsAvatarsData>) => [Pick<Options<RisksGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const risksGetRelationsAvatarsOptions: (options: Options<RisksGetRelationsAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<RisksGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<RisksGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RisksGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const risksGetRelationsAvatarsMutation: (options?: Partial<Options<RisksGetRelationsAvatarsData>>) => UseMutationOptions<RisksGetRelationsAvatarsResponse, AxiosError<DefaultError>, Options<RisksGetRelationsAvatarsData>>;
export declare const genericEntityGetQueryKey: (options: Options<GenericEntityGetData>) => [Pick<Options<GenericEntityGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const genericEntityGetOptions: (options: Options<GenericEntityGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<GenericEntityGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<GenericEntityGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const genericEntityGetInfiniteQueryKey: (options: Options<GenericEntityGetData>) => QueryKey<Options<GenericEntityGetData>>;
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
export declare const genericEntityGetInfiniteOptions: (options: Options<GenericEntityGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<GenericEntityGetData>>, number | Pick<Pick<Options<GenericEntityGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<GenericEntityGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<GenericEntityGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<GenericEntityGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const genericEntityGetMutation: (options?: Partial<Options<GenericEntityGetData>>) => UseMutationOptions<GenericEntityGetResponse, AxiosError<DefaultError>, Options<GenericEntityGetData>>;
export declare const genericEntityGetGroupedQueryKey: (options: Options<GenericEntityGetGroupedData>) => [Pick<Options<GenericEntityGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const genericEntityGetGroupedOptions: (options: Options<GenericEntityGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<GenericEntityGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<GenericEntityGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const genericEntityGetGroupedInfiniteQueryKey: (options: Options<GenericEntityGetGroupedData>) => QueryKey<Options<GenericEntityGetGroupedData>>;
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
export declare const genericEntityGetGroupedInfiniteOptions: (options: Options<GenericEntityGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<GenericEntityGetGroupedData>>, number | Pick<Pick<Options<GenericEntityGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<GenericEntityGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<GenericEntityGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<GenericEntityGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const genericEntityGetGroupedMutation: (options?: Partial<Options<GenericEntityGetGroupedData>>) => UseMutationOptions<GenericEntityGetGroupedResponse, AxiosError<DefaultError>, Options<GenericEntityGetGroupedData>>;
export declare const genericEntityGetByIdentifierQueryKey: (options: Options<GenericEntityGetByIdentifierData>) => [Pick<Options<GenericEntityGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const genericEntityGetByIdentifierOptions: (options: Options<GenericEntityGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<GenericEntityGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<GenericEntityGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const genericEntityGetByIdentifierMutation: (options?: Partial<Options<GenericEntityGetByIdentifierData>>) => UseMutationOptions<GenericEntityGetByIdentifierResponse, AxiosError<DefaultError>, Options<GenericEntityGetByIdentifierData>>;
export declare const genericEntityGetByIdsQueryKey: (options: Options<GenericEntityGetByIdsData>) => [Pick<Options<GenericEntityGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const genericEntityGetByIdsOptions: (options: Options<GenericEntityGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<GenericEntityGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<GenericEntityGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const genericEntityGetByIdsInfiniteQueryKey: (options: Options<GenericEntityGetByIdsData>) => QueryKey<Options<GenericEntityGetByIdsData>>;
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
export declare const genericEntityGetByIdsInfiniteOptions: (options: Options<GenericEntityGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<GenericEntityGetByIdsData>>, number | Pick<Pick<Options<GenericEntityGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<GenericEntityGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<GenericEntityGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<GenericEntityGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const genericEntityGetByIdsMutation: (options?: Partial<Options<GenericEntityGetByIdsData>>) => UseMutationOptions<GenericEntityGetByIdsResponse, AxiosError<DefaultError>, Options<GenericEntityGetByIdsData>>;
export declare const genericEntityGetCountQueryKey: (options: Options<GenericEntityGetCountData>) => [Pick<Options<GenericEntityGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const genericEntityGetCountOptions: (options: Options<GenericEntityGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<GenericEntityGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<GenericEntityGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const genericEntityGetCountMutation: (options?: Partial<Options<GenericEntityGetCountData>>) => UseMutationOptions<GenericEntityGetCountResponse, AxiosError<DefaultError>, Options<GenericEntityGetCountData>>;
export declare const genericEntityGetRelationsQueryKey: (options: Options<GenericEntityGetRelationsData>) => [Pick<Options<GenericEntityGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const genericEntityGetRelationsOptions: (options: Options<GenericEntityGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<GenericEntityGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<GenericEntityGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const genericEntityGetRelationsInfiniteQueryKey: (options: Options<GenericEntityGetRelationsData>) => QueryKey<Options<GenericEntityGetRelationsData>>;
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
export declare const genericEntityGetRelationsInfiniteOptions: (options: Options<GenericEntityGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<GenericEntityGetRelationsData>>, number | Pick<Pick<Options<GenericEntityGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<GenericEntityGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<GenericEntityGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<GenericEntityGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const genericEntityGetRelationsMutation: (options?: Partial<Options<GenericEntityGetRelationsData>>) => UseMutationOptions<GenericEntityGetRelationsResponse, AxiosError<DefaultError>, Options<GenericEntityGetRelationsData>>;
export declare const genericEntityGetRelationsCountQueryKey: (options: Options<GenericEntityGetRelationsCountData>) => [Pick<Options<GenericEntityGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const genericEntityGetRelationsCountOptions: (options: Options<GenericEntityGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<GenericEntityGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<GenericEntityGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const genericEntityGetRelationsCountMutation: (options?: Partial<Options<GenericEntityGetRelationsCountData>>) => UseMutationOptions<GenericEntityGetRelationsCountResponse, AxiosError<DefaultError>, Options<GenericEntityGetRelationsCountData>>;
export declare const genericEntityGetGroupedRelationsQueryKey: (options: Options<GenericEntityGetGroupedRelationsData>) => [Pick<Options<GenericEntityGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const genericEntityGetGroupedRelationsOptions: (options: Options<GenericEntityGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<GenericEntityGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<GenericEntityGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const genericEntityGetGroupedRelationsInfiniteQueryKey: (options: Options<GenericEntityGetGroupedRelationsData>) => QueryKey<Options<GenericEntityGetGroupedRelationsData>>;
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
export declare const genericEntityGetGroupedRelationsInfiniteOptions: (options: Options<GenericEntityGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<GenericEntityGetGroupedRelationsData>>, number | Pick<Pick<Options<GenericEntityGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<GenericEntityGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<GenericEntityGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<GenericEntityGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const genericEntityGetGroupedRelationsMutation: (options?: Partial<Options<GenericEntityGetGroupedRelationsData>>) => UseMutationOptions<GenericEntityGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<GenericEntityGetGroupedRelationsData>>;
export declare const genericEntityGetEntityPicklistQueryKey: (options: Options<GenericEntityGetEntityPicklistData>) => [Pick<Options<GenericEntityGetEntityPicklistData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Returns picklist options honoring dependent field value.
 */
export declare const genericEntityGetEntityPicklistOptions: (options: Options<GenericEntityGetEntityPicklistData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").PicklistData, Error, import("../types.gen").PicklistData, [Pick<Options<GenericEntityGetEntityPicklistData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").PicklistData, [Pick<Options<GenericEntityGetEntityPicklistData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetEntityPicklistData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").PicklistData;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const genericEntityGetSwimlanesQueryKey: (options: Options<GenericEntityGetSwimlanesData>) => [Pick<Options<GenericEntityGetSwimlanesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const genericEntityGetSwimlanesOptions: (options: Options<GenericEntityGetSwimlanesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SwimlaneResponse, Error, import("../types.gen").SwimlaneResponse, [Pick<Options<GenericEntityGetSwimlanesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SwimlaneResponse, [Pick<Options<GenericEntityGetSwimlanesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetSwimlanesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SwimlaneResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const genericEntityGetSwimlanesInfiniteQueryKey: (options: Options<GenericEntityGetSwimlanesData>) => QueryKey<Options<GenericEntityGetSwimlanesData>>;
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
export declare const genericEntityGetSwimlanesInfiniteOptions: (options: Options<GenericEntityGetSwimlanesData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").SwimlaneResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").SwimlaneResponse, unknown>, import("../types.gen").SwimlaneResponse, QueryKey<Options<GenericEntityGetSwimlanesData>>, number | Pick<Pick<Options<GenericEntityGetSwimlanesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").SwimlaneResponse, number | Pick<Pick<Options<GenericEntityGetSwimlanesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").SwimlaneResponse, number | Pick<Pick<Options<GenericEntityGetSwimlanesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<GenericEntityGetSwimlanesData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").SwimlaneResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const genericEntityGetSwimlanesMutation: (options?: Partial<Options<GenericEntityGetSwimlanesData>>) => UseMutationOptions<GenericEntityGetSwimlanesResponse, AxiosError<DefaultError>, Options<GenericEntityGetSwimlanesData>>;
export declare const genericEntityGetAvatarsQueryKey: (options: Options<GenericEntityGetAvatarsData>) => [Pick<Options<GenericEntityGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "ProjectManager",
 * "dataFilters": []
 * }
 */
export declare const genericEntityGetAvatarsOptions: (options: Options<GenericEntityGetAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<GenericEntityGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<GenericEntityGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Returns a list of Unique Users and groups.
 * Sample request:
 *
 * {
 * "fieldName": "ProjectManager",
 * "dataFilters": []
 * }
 */
export declare const genericEntityGetAvatarsMutation: (options?: Partial<Options<GenericEntityGetAvatarsData>>) => UseMutationOptions<GenericEntityGetAvatarsResponse, AxiosError<DefaultError>, Options<GenericEntityGetAvatarsData>>;
export declare const genericEntityGetRelationAvatarsQueryKey: (options: Options<GenericEntityGetRelationAvatarsData>) => [Pick<Options<GenericEntityGetRelationAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const genericEntityGetRelationAvatarsOptions: (options: Options<GenericEntityGetRelationAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<GenericEntityGetRelationAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<GenericEntityGetRelationAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetRelationAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const genericEntityGetRelationAvatarsMutation: (options?: Partial<Options<GenericEntityGetRelationAvatarsData>>) => UseMutationOptions<GenericEntityGetRelationAvatarsResponse, AxiosError<DefaultError>, Options<GenericEntityGetRelationAvatarsData>>;
export declare const genericEntityGetCustomPanelByIdentifierQueryKey: (options: Options<GenericEntityGetCustomPanelByIdentifierData>) => [Pick<Options<GenericEntityGetCustomPanelByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Retrieves list of custom panel associated with Entity
 */
export declare const genericEntityGetCustomPanelByIdentifierOptions: (options: Options<GenericEntityGetCustomPanelByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CustomPanel[], Error, import("../types.gen").CustomPanel[], [Pick<Options<GenericEntityGetCustomPanelByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CustomPanel[], [Pick<Options<GenericEntityGetCustomPanelByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetCustomPanelByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CustomPanel[];
        [dataTagErrorSymbol]: Error;
    };
};
export declare const genericEntityGetSwimlanesByRelationIdentifierQueryKey: (options: Options<GenericEntityGetSwimlanesByRelationIdentifierData>) => [Pick<Options<GenericEntityGetSwimlanesByRelationIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const genericEntityGetSwimlanesByRelationIdentifierOptions: (options: Options<GenericEntityGetSwimlanesByRelationIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SwimlaneResponse, Error, import("../types.gen").SwimlaneResponse, [Pick<Options<GenericEntityGetSwimlanesByRelationIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SwimlaneResponse, [Pick<Options<GenericEntityGetSwimlanesByRelationIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetSwimlanesByRelationIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SwimlaneResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const genericEntityGetSwimlanesByRelationIdentifierInfiniteQueryKey: (options: Options<GenericEntityGetSwimlanesByRelationIdentifierData>) => QueryKey<Options<GenericEntityGetSwimlanesByRelationIdentifierData>>;
export declare const genericEntityGetSwimlanesByRelationIdentifierInfiniteOptions: (options: Options<GenericEntityGetSwimlanesByRelationIdentifierData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").SwimlaneResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").SwimlaneResponse, unknown>, import("../types.gen").SwimlaneResponse, QueryKey<Options<GenericEntityGetSwimlanesByRelationIdentifierData>>, number | Pick<Pick<Options<GenericEntityGetSwimlanesByRelationIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").SwimlaneResponse, number | Pick<Pick<Options<GenericEntityGetSwimlanesByRelationIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").SwimlaneResponse, number | Pick<Pick<Options<GenericEntityGetSwimlanesByRelationIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<GenericEntityGetSwimlanesByRelationIdentifierData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").SwimlaneResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
export declare const genericEntityGetSwimlanesByRelationIdentifierMutation: (options?: Partial<Options<GenericEntityGetSwimlanesByRelationIdentifierData>>) => UseMutationOptions<GenericEntityGetSwimlanesByRelationIdentifierResponse, AxiosError<DefaultError>, Options<GenericEntityGetSwimlanesByRelationIdentifierData>>;
export declare const genericEntityGetAvailableEntitiesQueryKey: (options: Options<GenericEntityGetAvailableEntitiesData>) => [Pick<Options<GenericEntityGetAvailableEntitiesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const genericEntityGetAvailableEntitiesOptions: (options: Options<GenericEntityGetAvailableEntitiesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<GenericEntityGetAvailableEntitiesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<GenericEntityGetAvailableEntitiesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GenericEntityGetAvailableEntitiesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const genericEntityGetAvailableEntitiesInfiniteQueryKey: (options: Options<GenericEntityGetAvailableEntitiesData>) => QueryKey<Options<GenericEntityGetAvailableEntitiesData>>;
export declare const genericEntityGetAvailableEntitiesInfiniteOptions: (options: Options<GenericEntityGetAvailableEntitiesData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<GenericEntityGetAvailableEntitiesData>>, number | Pick<Pick<Options<GenericEntityGetAvailableEntitiesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<GenericEntityGetAvailableEntitiesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<GenericEntityGetAvailableEntitiesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<GenericEntityGetAvailableEntitiesData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
export declare const genericEntityGetAvailableEntitiesMutation: (options?: Partial<Options<GenericEntityGetAvailableEntitiesData>>) => UseMutationOptions<GenericEntityGetAvailableEntitiesResponse, AxiosError<DefaultError>, Options<GenericEntityGetAvailableEntitiesData>>;
export declare const metadataGetPicklistQueryKey: (options: Options<MetadataGetPicklistData>) => [Pick<Options<MetadataGetPicklistData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const metadataGetPicklistOptions: (options: Options<MetadataGetPicklistData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").PicklistData[], Error, import("../types.gen").PicklistData[], [Pick<Options<MetadataGetPicklistData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").PicklistData[], [Pick<Options<MetadataGetPicklistData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MetadataGetPicklistData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").PicklistData[];
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const metadataGetPicklistMutation: (options?: Partial<Options<MetadataGetPicklistData>>) => UseMutationOptions<MetadataGetPicklistResponse, AxiosError<DefaultError>, Options<MetadataGetPicklistData>>;
export declare const metadataGetFieldsQueryKey: (options: Options<MetadataGetFieldsData>) => [Pick<Options<MetadataGetFieldsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const metadataGetFieldsOptions: (options: Options<MetadataGetFieldsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").FieldsResponse[], Error, import("../types.gen").FieldsResponse[], [Pick<Options<MetadataGetFieldsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").FieldsResponse[], [Pick<Options<MetadataGetFieldsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MetadataGetFieldsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").FieldsResponse[];
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const metadataGetFieldsMutation: (options?: Partial<Options<MetadataGetFieldsData>>) => UseMutationOptions<MetadataGetFieldsResponse, AxiosError<DefaultError>, Options<MetadataGetFieldsData>>;
export declare const metadataGetSystemSettingsQueryKey: (options?: Options<MetadataGetSystemSettingsData>) => [Pick<Options<MetadataGetSystemSettingsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Returns basic system settings.
 */
export declare const metadataGetSystemSettingsOptions: (options?: Options<MetadataGetSystemSettingsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SystemSettingsResponse, Error, import("../types.gen").SystemSettingsResponse, [Pick<Options<MetadataGetSystemSettingsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SystemSettingsResponse, [Pick<Options<MetadataGetSystemSettingsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MetadataGetSystemSettingsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SystemSettingsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const metadataGetOrganizationSettingsQueryKey: (options?: Options<MetadataGetOrganizationSettingsData>) => [Pick<Options<MetadataGetOrganizationSettingsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Returns general organization settings.
 */
export declare const metadataGetOrganizationSettingsOptions: (options?: Options<MetadataGetOrganizationSettingsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").OrganizationSettingsResponse, Error, import("../types.gen").OrganizationSettingsResponse, [Pick<Options<MetadataGetOrganizationSettingsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").OrganizationSettingsResponse, [Pick<Options<MetadataGetOrganizationSettingsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MetadataGetOrganizationSettingsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").OrganizationSettingsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const metadataGetEntitiesDescriptionQueryKey: (options: Options<MetadataGetEntitiesDescriptionData>) => [Pick<Options<MetadataGetEntitiesDescriptionData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Returns information about the entity types in your organization.
 */
export declare const metadataGetEntitiesDescriptionOptions: (options: Options<MetadataGetEntitiesDescriptionData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").DescribeEntitiesResponse, Error, import("../types.gen").DescribeEntitiesResponse, [Pick<Options<MetadataGetEntitiesDescriptionData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").DescribeEntitiesResponse, [Pick<Options<MetadataGetEntitiesDescriptionData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MetadataGetEntitiesDescriptionData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").DescribeEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Returns information about the entity types in your organization.
 */
export declare const metadataGetEntitiesDescriptionMutation: (options?: Partial<Options<MetadataGetEntitiesDescriptionData>>) => UseMutationOptions<MetadataGetEntitiesDescriptionResponse, AxiosError<DefaultError>, Options<MetadataGetEntitiesDescriptionData>>;
export declare const metadataGetAvailableFieldsQueryKey: (options: Options<MetadataGetAvailableFieldsData>) => [Pick<Options<MetadataGetAvailableFieldsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Returns available fields for a specific entity and it's children.
 */
export declare const metadataGetAvailableFieldsOptions: (options: Options<MetadataGetAvailableFieldsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").FieldsResponse[], Error, import("../types.gen").FieldsResponse[], [Pick<Options<MetadataGetAvailableFieldsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").FieldsResponse[], [Pick<Options<MetadataGetAvailableFieldsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MetadataGetAvailableFieldsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").FieldsResponse[];
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Returns available fields for a specific entity and it's children.
 */
export declare const metadataGetAvailableFieldsMutation: (options?: Partial<Options<MetadataGetAvailableFieldsData>>) => UseMutationOptions<MetadataGetAvailableFieldsResponse, AxiosError<DefaultError>, Options<MetadataGetAvailableFieldsData>>;
export declare const metadataGetRelationViewerFieldsQueryKey: (options: Options<MetadataGetRelationViewerFieldsData>) => [Pick<Options<MetadataGetRelationViewerFieldsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Returns available fields for a specific realtion.
 */
export declare const metadataGetRelationViewerFieldsOptions: (options: Options<MetadataGetRelationViewerFieldsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").RelationFieldsResponse[], Error, import("../types.gen").RelationFieldsResponse[], [Pick<Options<MetadataGetRelationViewerFieldsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").RelationFieldsResponse[], [Pick<Options<MetadataGetRelationViewerFieldsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MetadataGetRelationViewerFieldsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").RelationFieldsResponse[];
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Returns available fields for a specific realtion.
 */
export declare const metadataGetRelationViewerFieldsMutation: (options?: Partial<Options<MetadataGetRelationViewerFieldsData>>) => UseMutationOptions<MetadataGetRelationViewerFieldsResponse, AxiosError<DefaultError>, Options<MetadataGetRelationViewerFieldsData>>;
export declare const portfoliosGetQueryKey: (options: Options<PortfoliosGetData>) => [Pick<Options<PortfoliosGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const portfoliosGetOptions: (options: Options<PortfoliosGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<PortfoliosGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<PortfoliosGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PortfoliosGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const portfoliosGetInfiniteQueryKey: (options: Options<PortfoliosGetData>) => QueryKey<Options<PortfoliosGetData>>;
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
export declare const portfoliosGetInfiniteOptions: (options: Options<PortfoliosGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<PortfoliosGetData>>, number | Pick<Pick<Options<PortfoliosGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<PortfoliosGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<PortfoliosGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<PortfoliosGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const portfoliosGetMutation: (options?: Partial<Options<PortfoliosGetData>>) => UseMutationOptions<PortfoliosGetResponse, AxiosError<DefaultError>, Options<PortfoliosGetData>>;
export declare const portfoliosGetGroupedQueryKey: (options: Options<PortfoliosGetGroupedData>) => [Pick<Options<PortfoliosGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const portfoliosGetGroupedOptions: (options: Options<PortfoliosGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<PortfoliosGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<PortfoliosGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PortfoliosGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const portfoliosGetGroupedInfiniteQueryKey: (options: Options<PortfoliosGetGroupedData>) => QueryKey<Options<PortfoliosGetGroupedData>>;
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
export declare const portfoliosGetGroupedInfiniteOptions: (options: Options<PortfoliosGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<PortfoliosGetGroupedData>>, number | Pick<Pick<Options<PortfoliosGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<PortfoliosGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<PortfoliosGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<PortfoliosGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const portfoliosGetGroupedMutation: (options?: Partial<Options<PortfoliosGetGroupedData>>) => UseMutationOptions<PortfoliosGetGroupedResponse, AxiosError<DefaultError>, Options<PortfoliosGetGroupedData>>;
export declare const portfoliosGetByIdentifierQueryKey: (options: Options<PortfoliosGetByIdentifierData>) => [Pick<Options<PortfoliosGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const portfoliosGetByIdentifierOptions: (options: Options<PortfoliosGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<PortfoliosGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<PortfoliosGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PortfoliosGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const portfoliosGetByIdentifierMutation: (options?: Partial<Options<PortfoliosGetByIdentifierData>>) => UseMutationOptions<PortfoliosGetByIdentifierResponse, AxiosError<DefaultError>, Options<PortfoliosGetByIdentifierData>>;
export declare const portfoliosGetByIdsQueryKey: (options: Options<PortfoliosGetByIdsData>) => [Pick<Options<PortfoliosGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const portfoliosGetByIdsOptions: (options: Options<PortfoliosGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<PortfoliosGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<PortfoliosGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PortfoliosGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const portfoliosGetByIdsInfiniteQueryKey: (options: Options<PortfoliosGetByIdsData>) => QueryKey<Options<PortfoliosGetByIdsData>>;
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
export declare const portfoliosGetByIdsInfiniteOptions: (options: Options<PortfoliosGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<PortfoliosGetByIdsData>>, number | Pick<Pick<Options<PortfoliosGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<PortfoliosGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<PortfoliosGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<PortfoliosGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const portfoliosGetByIdsMutation: (options?: Partial<Options<PortfoliosGetByIdsData>>) => UseMutationOptions<PortfoliosGetByIdsResponse, AxiosError<DefaultError>, Options<PortfoliosGetByIdsData>>;
export declare const portfoliosGetCountQueryKey: (options: Options<PortfoliosGetCountData>) => [Pick<Options<PortfoliosGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const portfoliosGetCountOptions: (options: Options<PortfoliosGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<PortfoliosGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<PortfoliosGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PortfoliosGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const portfoliosGetCountMutation: (options?: Partial<Options<PortfoliosGetCountData>>) => UseMutationOptions<PortfoliosGetCountResponse, AxiosError<DefaultError>, Options<PortfoliosGetCountData>>;
export declare const portfoliosGetRelationsQueryKey: (options: Options<PortfoliosGetRelationsData>) => [Pick<Options<PortfoliosGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const portfoliosGetRelationsOptions: (options: Options<PortfoliosGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<PortfoliosGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<PortfoliosGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PortfoliosGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const portfoliosGetRelationsInfiniteQueryKey: (options: Options<PortfoliosGetRelationsData>) => QueryKey<Options<PortfoliosGetRelationsData>>;
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
export declare const portfoliosGetRelationsInfiniteOptions: (options: Options<PortfoliosGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<PortfoliosGetRelationsData>>, number | Pick<Pick<Options<PortfoliosGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<PortfoliosGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<PortfoliosGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<PortfoliosGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const portfoliosGetRelationsMutation: (options?: Partial<Options<PortfoliosGetRelationsData>>) => UseMutationOptions<PortfoliosGetRelationsResponse, AxiosError<DefaultError>, Options<PortfoliosGetRelationsData>>;
export declare const portfoliosGetRelationsCountQueryKey: (options: Options<PortfoliosGetRelationsCountData>) => [Pick<Options<PortfoliosGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const portfoliosGetRelationsCountOptions: (options: Options<PortfoliosGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<PortfoliosGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<PortfoliosGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PortfoliosGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const portfoliosGetRelationsCountMutation: (options?: Partial<Options<PortfoliosGetRelationsCountData>>) => UseMutationOptions<PortfoliosGetRelationsCountResponse, AxiosError<DefaultError>, Options<PortfoliosGetRelationsCountData>>;
export declare const portfoliosGetGroupedRelationsQueryKey: (options: Options<PortfoliosGetGroupedRelationsData>) => [Pick<Options<PortfoliosGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const portfoliosGetGroupedRelationsOptions: (options: Options<PortfoliosGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<PortfoliosGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<PortfoliosGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PortfoliosGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const portfoliosGetGroupedRelationsInfiniteQueryKey: (options: Options<PortfoliosGetGroupedRelationsData>) => QueryKey<Options<PortfoliosGetGroupedRelationsData>>;
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
export declare const portfoliosGetGroupedRelationsInfiniteOptions: (options: Options<PortfoliosGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<PortfoliosGetGroupedRelationsData>>, number | Pick<Pick<Options<PortfoliosGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<PortfoliosGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<PortfoliosGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<PortfoliosGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const portfoliosGetGroupedRelationsMutation: (options?: Partial<Options<PortfoliosGetGroupedRelationsData>>) => UseMutationOptions<PortfoliosGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<PortfoliosGetGroupedRelationsData>>;
export declare const portfoliosGetAvatarsQueryKey: (options: Options<PortfoliosGetAvatarsData>) => [Pick<Options<PortfoliosGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const portfoliosGetAvatarsOptions: (options: Options<PortfoliosGetAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<PortfoliosGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<PortfoliosGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PortfoliosGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const portfoliosGetAvatarsMutation: (options?: Partial<Options<PortfoliosGetAvatarsData>>) => UseMutationOptions<PortfoliosGetAvatarsResponse, AxiosError<DefaultError>, Options<PortfoliosGetAvatarsData>>;
export declare const portfoliosGetRelationsAvatarsQueryKey: (options: Options<PortfoliosGetRelationsAvatarsData>) => [Pick<Options<PortfoliosGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const portfoliosGetRelationsAvatarsOptions: (options: Options<PortfoliosGetRelationsAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<PortfoliosGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<PortfoliosGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PortfoliosGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const portfoliosGetRelationsAvatarsMutation: (options?: Partial<Options<PortfoliosGetRelationsAvatarsData>>) => UseMutationOptions<PortfoliosGetRelationsAvatarsResponse, AxiosError<DefaultError>, Options<PortfoliosGetRelationsAvatarsData>>;
export declare const propertyCardLayoutGetPropertyCardLayoutQueryKey: (options: Options<PropertyCardLayoutGetPropertyCardLayoutData>) => [Pick<Options<PropertyCardLayoutGetPropertyCardLayoutData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Returns a Property Card layout for the specific entity type.
 */
export declare const propertyCardLayoutGetPropertyCardLayoutOptions: (options: Options<PropertyCardLayoutGetPropertyCardLayoutData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").PropertyCardLayoutResponse, Error, import("../types.gen").PropertyCardLayoutResponse, [Pick<Options<PropertyCardLayoutGetPropertyCardLayoutData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").PropertyCardLayoutResponse, [Pick<Options<PropertyCardLayoutGetPropertyCardLayoutData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PropertyCardLayoutGetPropertyCardLayoutData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").PropertyCardLayoutResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const propertyCardLayoutGetPropertyCardLayoutByEntityIdQueryKey: (options: Options<PropertyCardLayoutGetPropertyCardLayoutByEntityIdData>) => [Pick<Options<PropertyCardLayoutGetPropertyCardLayoutByEntityIdData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Returns a Property Card layout for the specific internal id of the entity.
 */
export declare const propertyCardLayoutGetPropertyCardLayoutByEntityIdOptions: (options: Options<PropertyCardLayoutGetPropertyCardLayoutByEntityIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").PropertyCardLayoutResponse, Error, import("../types.gen").PropertyCardLayoutResponse, [Pick<Options<PropertyCardLayoutGetPropertyCardLayoutByEntityIdData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").PropertyCardLayoutResponse, [Pick<Options<PropertyCardLayoutGetPropertyCardLayoutByEntityIdData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PropertyCardLayoutGetPropertyCardLayoutByEntityIdData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").PropertyCardLayoutResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const jobTitlesGetCountQueryKey: (options: Options<JobTitlesGetCountData>) => [Pick<Options<JobTitlesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const jobTitlesGetCountOptions: (options: Options<JobTitlesGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<JobTitlesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<JobTitlesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<JobTitlesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const jobTitlesGetCountMutation: (options?: Partial<Options<JobTitlesGetCountData>>) => UseMutationOptions<JobTitlesGetCountResponse, AxiosError<DefaultError>, Options<JobTitlesGetCountData>>;
export declare const jobTitlesGetRelationsCountQueryKey: (options: Options<JobTitlesGetRelationsCountData>) => [Pick<Options<JobTitlesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const jobTitlesGetRelationsCountOptions: (options: Options<JobTitlesGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<JobTitlesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<JobTitlesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<JobTitlesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const jobTitlesGetRelationsCountMutation: (options?: Partial<Options<JobTitlesGetRelationsCountData>>) => UseMutationOptions<JobTitlesGetRelationsCountResponse, AxiosError<DefaultError>, Options<JobTitlesGetRelationsCountData>>;
export declare const jobTitlesGetQueryKey: (options: Options<JobTitlesGetData>) => [Pick<Options<JobTitlesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const jobTitlesGetOptions: (options: Options<JobTitlesGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<JobTitlesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<JobTitlesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<JobTitlesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const jobTitlesGetInfiniteQueryKey: (options: Options<JobTitlesGetData>) => QueryKey<Options<JobTitlesGetData>>;
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
export declare const jobTitlesGetInfiniteOptions: (options: Options<JobTitlesGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<JobTitlesGetData>>, number | Pick<Pick<Options<JobTitlesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<JobTitlesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<JobTitlesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<JobTitlesGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const jobTitlesGetMutation: (options?: Partial<Options<JobTitlesGetData>>) => UseMutationOptions<JobTitlesGetResponse, AxiosError<DefaultError>, Options<JobTitlesGetData>>;
export declare const jobTitlesGetGroupedQueryKey: (options: Options<JobTitlesGetGroupedData>) => [Pick<Options<JobTitlesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const jobTitlesGetGroupedOptions: (options: Options<JobTitlesGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<JobTitlesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<JobTitlesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<JobTitlesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const jobTitlesGetGroupedInfiniteQueryKey: (options: Options<JobTitlesGetGroupedData>) => QueryKey<Options<JobTitlesGetGroupedData>>;
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
export declare const jobTitlesGetGroupedInfiniteOptions: (options: Options<JobTitlesGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<JobTitlesGetGroupedData>>, number | Pick<Pick<Options<JobTitlesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<JobTitlesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<JobTitlesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<JobTitlesGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const jobTitlesGetGroupedMutation: (options?: Partial<Options<JobTitlesGetGroupedData>>) => UseMutationOptions<JobTitlesGetGroupedResponse, AxiosError<DefaultError>, Options<JobTitlesGetGroupedData>>;
export declare const jobTitlesGetByIdentifierQueryKey: (options: Options<JobTitlesGetByIdentifierData>) => [Pick<Options<JobTitlesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const jobTitlesGetByIdentifierOptions: (options: Options<JobTitlesGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<JobTitlesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<JobTitlesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<JobTitlesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const jobTitlesGetByIdentifierMutation: (options?: Partial<Options<JobTitlesGetByIdentifierData>>) => UseMutationOptions<JobTitlesGetByIdentifierResponse, AxiosError<DefaultError>, Options<JobTitlesGetByIdentifierData>>;
export declare const jobTitlesGetByIdsQueryKey: (options: Options<JobTitlesGetByIdsData>) => [Pick<Options<JobTitlesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const jobTitlesGetByIdsOptions: (options: Options<JobTitlesGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<JobTitlesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<JobTitlesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<JobTitlesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const jobTitlesGetByIdsInfiniteQueryKey: (options: Options<JobTitlesGetByIdsData>) => QueryKey<Options<JobTitlesGetByIdsData>>;
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
export declare const jobTitlesGetByIdsInfiniteOptions: (options: Options<JobTitlesGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<JobTitlesGetByIdsData>>, number | Pick<Pick<Options<JobTitlesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<JobTitlesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<JobTitlesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<JobTitlesGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const jobTitlesGetByIdsMutation: (options?: Partial<Options<JobTitlesGetByIdsData>>) => UseMutationOptions<JobTitlesGetByIdsResponse, AxiosError<DefaultError>, Options<JobTitlesGetByIdsData>>;
export declare const jobTitlesGetRelationsQueryKey: (options: Options<JobTitlesGetRelationsData>) => [Pick<Options<JobTitlesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const jobTitlesGetRelationsOptions: (options: Options<JobTitlesGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<JobTitlesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<JobTitlesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<JobTitlesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const jobTitlesGetRelationsInfiniteQueryKey: (options: Options<JobTitlesGetRelationsData>) => QueryKey<Options<JobTitlesGetRelationsData>>;
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
export declare const jobTitlesGetRelationsInfiniteOptions: (options: Options<JobTitlesGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<JobTitlesGetRelationsData>>, number | Pick<Pick<Options<JobTitlesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<JobTitlesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<JobTitlesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<JobTitlesGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const jobTitlesGetRelationsMutation: (options?: Partial<Options<JobTitlesGetRelationsData>>) => UseMutationOptions<JobTitlesGetRelationsResponse, AxiosError<DefaultError>, Options<JobTitlesGetRelationsData>>;
export declare const jobTitlesGetGroupedRelationsQueryKey: (options: Options<JobTitlesGetGroupedRelationsData>) => [Pick<Options<JobTitlesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const jobTitlesGetGroupedRelationsOptions: (options: Options<JobTitlesGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<JobTitlesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<JobTitlesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<JobTitlesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const jobTitlesGetGroupedRelationsInfiniteQueryKey: (options: Options<JobTitlesGetGroupedRelationsData>) => QueryKey<Options<JobTitlesGetGroupedRelationsData>>;
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
export declare const jobTitlesGetGroupedRelationsInfiniteOptions: (options: Options<JobTitlesGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<JobTitlesGetGroupedRelationsData>>, number | Pick<Pick<Options<JobTitlesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<JobTitlesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<JobTitlesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<JobTitlesGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const jobTitlesGetGroupedRelationsMutation: (options?: Partial<Options<JobTitlesGetGroupedRelationsData>>) => UseMutationOptions<JobTitlesGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<JobTitlesGetGroupedRelationsData>>;
export declare const membersGetAllMembersQueryKey: (options: Options<MembersGetAllMembersData>) => [Pick<Options<MembersGetAllMembersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const membersGetAllMembersOptions: (options: Options<MembersGetAllMembersData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<MembersGetAllMembersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<MembersGetAllMembersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MembersGetAllMembersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const membersGetAllMembersInfiniteQueryKey: (options: Options<MembersGetAllMembersData>) => QueryKey<Options<MembersGetAllMembersData>>;
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
export declare const membersGetAllMembersInfiniteOptions: (options: Options<MembersGetAllMembersData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<MembersGetAllMembersData>>, number | Pick<Pick<Options<MembersGetAllMembersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<MembersGetAllMembersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<MembersGetAllMembersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<MembersGetAllMembersData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const membersGetAllMembersMutation: (options?: Partial<Options<MembersGetAllMembersData>>) => UseMutationOptions<MembersGetAllMembersResponse, AxiosError<DefaultError>, Options<MembersGetAllMembersData>>;
export declare const profilesGetCountQueryKey: (options: Options<ProfilesGetCountData>) => [Pick<Options<ProfilesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const profilesGetCountOptions: (options: Options<ProfilesGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<ProfilesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<ProfilesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProfilesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const profilesGetCountMutation: (options?: Partial<Options<ProfilesGetCountData>>) => UseMutationOptions<ProfilesGetCountResponse, AxiosError<DefaultError>, Options<ProfilesGetCountData>>;
export declare const profilesGetQueryKey: (options: Options<ProfilesGetData>) => [Pick<Options<ProfilesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const profilesGetOptions: (options: Options<ProfilesGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<ProfilesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<ProfilesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProfilesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const profilesGetInfiniteQueryKey: (options: Options<ProfilesGetData>) => QueryKey<Options<ProfilesGetData>>;
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
export declare const profilesGetInfiniteOptions: (options: Options<ProfilesGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<ProfilesGetData>>, number | Pick<Pick<Options<ProfilesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProfilesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProfilesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<ProfilesGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const profilesGetMutation: (options?: Partial<Options<ProfilesGetData>>) => UseMutationOptions<ProfilesGetResponse, AxiosError<DefaultError>, Options<ProfilesGetData>>;
export declare const profilesGetByIdentifierQueryKey: (options: Options<ProfilesGetByIdentifierData>) => [Pick<Options<ProfilesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const profilesGetByIdentifierOptions: (options: Options<ProfilesGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<ProfilesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<ProfilesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProfilesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const profilesGetByIdentifierMutation: (options?: Partial<Options<ProfilesGetByIdentifierData>>) => UseMutationOptions<ProfilesGetByIdentifierResponse, AxiosError<DefaultError>, Options<ProfilesGetByIdentifierData>>;
export declare const profilesGetByIdsQueryKey: (options: Options<ProfilesGetByIdsData>) => [Pick<Options<ProfilesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const profilesGetByIdsOptions: (options: Options<ProfilesGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<ProfilesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<ProfilesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProfilesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const profilesGetByIdsInfiniteQueryKey: (options: Options<ProfilesGetByIdsData>) => QueryKey<Options<ProfilesGetByIdsData>>;
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
export declare const profilesGetByIdsInfiniteOptions: (options: Options<ProfilesGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<ProfilesGetByIdsData>>, number | Pick<Pick<Options<ProfilesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProfilesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProfilesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<ProfilesGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const profilesGetByIdsMutation: (options?: Partial<Options<ProfilesGetByIdsData>>) => UseMutationOptions<ProfilesGetByIdsResponse, AxiosError<DefaultError>, Options<ProfilesGetByIdsData>>;
export declare const profilesGetUserProfilesQueryKey: (options: Options<ProfilesGetUserProfilesData>) => [Pick<Options<ProfilesGetUserProfilesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Returns a list of Profiles which are assigned to User.
 */
export declare const profilesGetUserProfilesOptions: (options: Options<ProfilesGetUserProfilesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").ProfilesResponse, Error, import("../types.gen").ProfilesResponse, [Pick<Options<ProfilesGetUserProfilesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").ProfilesResponse, [Pick<Options<ProfilesGetUserProfilesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProfilesGetUserProfilesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").ProfilesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const skillsGetQueryKey: (options: Options<SkillsGetData>) => [Pick<Options<SkillsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const skillsGetOptions: (options: Options<SkillsGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<SkillsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<SkillsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<SkillsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const skillsGetInfiniteQueryKey: (options: Options<SkillsGetData>) => QueryKey<Options<SkillsGetData>>;
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
export declare const skillsGetInfiniteOptions: (options: Options<SkillsGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<SkillsGetData>>, number | Pick<Pick<Options<SkillsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<SkillsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<SkillsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<SkillsGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const skillsGetMutation: (options?: Partial<Options<SkillsGetData>>) => UseMutationOptions<SkillsGetResponse, AxiosError<DefaultError>, Options<SkillsGetData>>;
export declare const skillsGetGroupedQueryKey: (options: Options<SkillsGetGroupedData>) => [Pick<Options<SkillsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const skillsGetGroupedOptions: (options: Options<SkillsGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<SkillsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<SkillsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<SkillsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const skillsGetGroupedInfiniteQueryKey: (options: Options<SkillsGetGroupedData>) => QueryKey<Options<SkillsGetGroupedData>>;
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
export declare const skillsGetGroupedInfiniteOptions: (options: Options<SkillsGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<SkillsGetGroupedData>>, number | Pick<Pick<Options<SkillsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<SkillsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<SkillsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<SkillsGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const skillsGetGroupedMutation: (options?: Partial<Options<SkillsGetGroupedData>>) => UseMutationOptions<SkillsGetGroupedResponse, AxiosError<DefaultError>, Options<SkillsGetGroupedData>>;
export declare const skillsGetByIdentifierQueryKey: (options: Options<SkillsGetByIdentifierData>) => [Pick<Options<SkillsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const skillsGetByIdentifierOptions: (options: Options<SkillsGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<SkillsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<SkillsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<SkillsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const skillsGetByIdentifierMutation: (options?: Partial<Options<SkillsGetByIdentifierData>>) => UseMutationOptions<SkillsGetByIdentifierResponse, AxiosError<DefaultError>, Options<SkillsGetByIdentifierData>>;
export declare const skillsGetByIdsQueryKey: (options: Options<SkillsGetByIdsData>) => [Pick<Options<SkillsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const skillsGetByIdsOptions: (options: Options<SkillsGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<SkillsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<SkillsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<SkillsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const skillsGetByIdsInfiniteQueryKey: (options: Options<SkillsGetByIdsData>) => QueryKey<Options<SkillsGetByIdsData>>;
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
export declare const skillsGetByIdsInfiniteOptions: (options: Options<SkillsGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<SkillsGetByIdsData>>, number | Pick<Pick<Options<SkillsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<SkillsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<SkillsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<SkillsGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const skillsGetByIdsMutation: (options?: Partial<Options<SkillsGetByIdsData>>) => UseMutationOptions<SkillsGetByIdsResponse, AxiosError<DefaultError>, Options<SkillsGetByIdsData>>;
export declare const skillsGetCountQueryKey: (options: Options<SkillsGetCountData>) => [Pick<Options<SkillsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const skillsGetCountOptions: (options: Options<SkillsGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<SkillsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<SkillsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<SkillsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const skillsGetCountMutation: (options?: Partial<Options<SkillsGetCountData>>) => UseMutationOptions<SkillsGetCountResponse, AxiosError<DefaultError>, Options<SkillsGetCountData>>;
export declare const skillsGetRelationsQueryKey: (options: Options<SkillsGetRelationsData>) => [Pick<Options<SkillsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const skillsGetRelationsOptions: (options: Options<SkillsGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<SkillsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<SkillsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<SkillsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const skillsGetRelationsInfiniteQueryKey: (options: Options<SkillsGetRelationsData>) => QueryKey<Options<SkillsGetRelationsData>>;
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
export declare const skillsGetRelationsInfiniteOptions: (options: Options<SkillsGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<SkillsGetRelationsData>>, number | Pick<Pick<Options<SkillsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<SkillsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<SkillsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<SkillsGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const skillsGetRelationsMutation: (options?: Partial<Options<SkillsGetRelationsData>>) => UseMutationOptions<SkillsGetRelationsResponse, AxiosError<DefaultError>, Options<SkillsGetRelationsData>>;
export declare const skillsGetRelationsCountQueryKey: (options: Options<SkillsGetRelationsCountData>) => [Pick<Options<SkillsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const skillsGetRelationsCountOptions: (options: Options<SkillsGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<SkillsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<SkillsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<SkillsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const skillsGetRelationsCountMutation: (options?: Partial<Options<SkillsGetRelationsCountData>>) => UseMutationOptions<SkillsGetRelationsCountResponse, AxiosError<DefaultError>, Options<SkillsGetRelationsCountData>>;
export declare const skillsGetGroupedRelationsQueryKey: (options: Options<SkillsGetGroupedRelationsData>) => [Pick<Options<SkillsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const skillsGetGroupedRelationsOptions: (options: Options<SkillsGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<SkillsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<SkillsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<SkillsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const skillsGetGroupedRelationsInfiniteQueryKey: (options: Options<SkillsGetGroupedRelationsData>) => QueryKey<Options<SkillsGetGroupedRelationsData>>;
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
export declare const skillsGetGroupedRelationsInfiniteOptions: (options: Options<SkillsGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<SkillsGetGroupedRelationsData>>, number | Pick<Pick<Options<SkillsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<SkillsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<SkillsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<SkillsGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const skillsGetGroupedRelationsMutation: (options?: Partial<Options<SkillsGetGroupedRelationsData>>) => UseMutationOptions<SkillsGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<SkillsGetGroupedRelationsData>>;
export declare const userGroupsGetQueryKey: (options: Options<UserGroupsGetData>) => [Pick<Options<UserGroupsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const userGroupsGetOptions: (options: Options<UserGroupsGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<UserGroupsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<UserGroupsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UserGroupsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const userGroupsGetInfiniteQueryKey: (options: Options<UserGroupsGetData>) => QueryKey<Options<UserGroupsGetData>>;
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
export declare const userGroupsGetInfiniteOptions: (options: Options<UserGroupsGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<UserGroupsGetData>>, number | Pick<Pick<Options<UserGroupsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UserGroupsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UserGroupsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<UserGroupsGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const userGroupsGetMutation: (options?: Partial<Options<UserGroupsGetData>>) => UseMutationOptions<UserGroupsGetResponse, AxiosError<DefaultError>, Options<UserGroupsGetData>>;
export declare const userGroupsGetGroupedQueryKey: (options: Options<UserGroupsGetGroupedData>) => [Pick<Options<UserGroupsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const userGroupsGetGroupedOptions: (options: Options<UserGroupsGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<UserGroupsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<UserGroupsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UserGroupsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const userGroupsGetGroupedInfiniteQueryKey: (options: Options<UserGroupsGetGroupedData>) => QueryKey<Options<UserGroupsGetGroupedData>>;
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
export declare const userGroupsGetGroupedInfiniteOptions: (options: Options<UserGroupsGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<UserGroupsGetGroupedData>>, number | Pick<Pick<Options<UserGroupsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<UserGroupsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<UserGroupsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<UserGroupsGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const userGroupsGetGroupedMutation: (options?: Partial<Options<UserGroupsGetGroupedData>>) => UseMutationOptions<UserGroupsGetGroupedResponse, AxiosError<DefaultError>, Options<UserGroupsGetGroupedData>>;
export declare const userGroupsGetByIdentifierQueryKey: (options: Options<UserGroupsGetByIdentifierData>) => [Pick<Options<UserGroupsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const userGroupsGetByIdentifierOptions: (options: Options<UserGroupsGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<UserGroupsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<UserGroupsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UserGroupsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const userGroupsGetByIdentifierMutation: (options?: Partial<Options<UserGroupsGetByIdentifierData>>) => UseMutationOptions<UserGroupsGetByIdentifierResponse, AxiosError<DefaultError>, Options<UserGroupsGetByIdentifierData>>;
export declare const userGroupsGetByIdsQueryKey: (options: Options<UserGroupsGetByIdsData>) => [Pick<Options<UserGroupsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const userGroupsGetByIdsOptions: (options: Options<UserGroupsGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<UserGroupsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<UserGroupsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UserGroupsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const userGroupsGetByIdsInfiniteQueryKey: (options: Options<UserGroupsGetByIdsData>) => QueryKey<Options<UserGroupsGetByIdsData>>;
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
export declare const userGroupsGetByIdsInfiniteOptions: (options: Options<UserGroupsGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<UserGroupsGetByIdsData>>, number | Pick<Pick<Options<UserGroupsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UserGroupsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UserGroupsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<UserGroupsGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const userGroupsGetByIdsMutation: (options?: Partial<Options<UserGroupsGetByIdsData>>) => UseMutationOptions<UserGroupsGetByIdsResponse, AxiosError<DefaultError>, Options<UserGroupsGetByIdsData>>;
export declare const userGroupsGetCountQueryKey: (options: Options<UserGroupsGetCountData>) => [Pick<Options<UserGroupsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const userGroupsGetCountOptions: (options: Options<UserGroupsGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<UserGroupsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<UserGroupsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UserGroupsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const userGroupsGetCountMutation: (options?: Partial<Options<UserGroupsGetCountData>>) => UseMutationOptions<UserGroupsGetCountResponse, AxiosError<DefaultError>, Options<UserGroupsGetCountData>>;
export declare const userGroupsGetRelationsQueryKey: (options: Options<UserGroupsGetRelationsData>) => [Pick<Options<UserGroupsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const userGroupsGetRelationsOptions: (options: Options<UserGroupsGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<UserGroupsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<UserGroupsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UserGroupsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const userGroupsGetRelationsInfiniteQueryKey: (options: Options<UserGroupsGetRelationsData>) => QueryKey<Options<UserGroupsGetRelationsData>>;
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
export declare const userGroupsGetRelationsInfiniteOptions: (options: Options<UserGroupsGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<UserGroupsGetRelationsData>>, number | Pick<Pick<Options<UserGroupsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UserGroupsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UserGroupsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<UserGroupsGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const userGroupsGetRelationsMutation: (options?: Partial<Options<UserGroupsGetRelationsData>>) => UseMutationOptions<UserGroupsGetRelationsResponse, AxiosError<DefaultError>, Options<UserGroupsGetRelationsData>>;
export declare const userGroupsGetRelationsCountQueryKey: (options: Options<UserGroupsGetRelationsCountData>) => [Pick<Options<UserGroupsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const userGroupsGetRelationsCountOptions: (options: Options<UserGroupsGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<UserGroupsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<UserGroupsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UserGroupsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const userGroupsGetRelationsCountMutation: (options?: Partial<Options<UserGroupsGetRelationsCountData>>) => UseMutationOptions<UserGroupsGetRelationsCountResponse, AxiosError<DefaultError>, Options<UserGroupsGetRelationsCountData>>;
export declare const userGroupsGetGroupedRelationsQueryKey: (options: Options<UserGroupsGetGroupedRelationsData>) => [Pick<Options<UserGroupsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const userGroupsGetGroupedRelationsOptions: (options: Options<UserGroupsGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<UserGroupsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<UserGroupsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UserGroupsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const userGroupsGetGroupedRelationsInfiniteQueryKey: (options: Options<UserGroupsGetGroupedRelationsData>) => QueryKey<Options<UserGroupsGetGroupedRelationsData>>;
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
export declare const userGroupsGetGroupedRelationsInfiniteOptions: (options: Options<UserGroupsGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<UserGroupsGetGroupedRelationsData>>, number | Pick<Pick<Options<UserGroupsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<UserGroupsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<UserGroupsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<UserGroupsGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const userGroupsGetGroupedRelationsMutation: (options?: Partial<Options<UserGroupsGetGroupedRelationsData>>) => UseMutationOptions<UserGroupsGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<UserGroupsGetGroupedRelationsData>>;
export declare const userGroupsGetAuthorizationGroupsQueryKey: (options?: Options<UserGroupsGetAuthorizationGroupsData>) => [Pick<Options<UserGroupsGetAuthorizationGroupsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Returns a list of Authorization Groups.
 */
export declare const userGroupsGetAuthorizationGroupsOptions: (options?: Options<UserGroupsGetAuthorizationGroupsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AuthorizationGroupsResponse, Error, import("../types.gen").AuthorizationGroupsResponse, [Pick<Options<UserGroupsGetAuthorizationGroupsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AuthorizationGroupsResponse, [Pick<Options<UserGroupsGetAuthorizationGroupsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UserGroupsGetAuthorizationGroupsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AuthorizationGroupsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const userGroupsGetRelatedGroupsForUserQueryKey: (options: Options<UserGroupsGetRelatedGroupsForUserData>) => [Pick<Options<UserGroupsGetRelatedGroupsForUserData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const userGroupsGetRelatedGroupsForUserOptions: (options: Options<UserGroupsGetRelatedGroupsForUserData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<UserGroupsGetRelatedGroupsForUserData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<UserGroupsGetRelatedGroupsForUserData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UserGroupsGetRelatedGroupsForUserData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const userGroupsGetRelatedGroupsForUserInfiniteQueryKey: (options: Options<UserGroupsGetRelatedGroupsForUserData>) => QueryKey<Options<UserGroupsGetRelatedGroupsForUserData>>;
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
export declare const userGroupsGetRelatedGroupsForUserInfiniteOptions: (options: Options<UserGroupsGetRelatedGroupsForUserData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<UserGroupsGetRelatedGroupsForUserData>>, number | Pick<Pick<Options<UserGroupsGetRelatedGroupsForUserData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UserGroupsGetRelatedGroupsForUserData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UserGroupsGetRelatedGroupsForUserData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<UserGroupsGetRelatedGroupsForUserData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const userGroupsGetRelatedGroupsForUserMutation: (options?: Partial<Options<UserGroupsGetRelatedGroupsForUserData>>) => UseMutationOptions<UserGroupsGetRelatedGroupsForUserResponse, AxiosError<DefaultError>, Options<UserGroupsGetRelatedGroupsForUserData>>;
export declare const usersGetQueryKey: (options: Options<UsersGetData>) => [Pick<Options<UsersGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const usersGetOptions: (options: Options<UsersGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<UsersGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<UsersGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UsersGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const usersGetInfiniteQueryKey: (options: Options<UsersGetData>) => QueryKey<Options<UsersGetData>>;
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
export declare const usersGetInfiniteOptions: (options: Options<UsersGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<UsersGetData>>, number | Pick<Pick<Options<UsersGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UsersGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UsersGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<UsersGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const usersGetMutation: (options?: Partial<Options<UsersGetData>>) => UseMutationOptions<UsersGetResponse, AxiosError<DefaultError>, Options<UsersGetData>>;
export declare const usersGetGroupedQueryKey: (options: Options<UsersGetGroupedData>) => [Pick<Options<UsersGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const usersGetGroupedOptions: (options: Options<UsersGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<UsersGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<UsersGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UsersGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const usersGetGroupedInfiniteQueryKey: (options: Options<UsersGetGroupedData>) => QueryKey<Options<UsersGetGroupedData>>;
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
export declare const usersGetGroupedInfiniteOptions: (options: Options<UsersGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<UsersGetGroupedData>>, number | Pick<Pick<Options<UsersGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<UsersGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<UsersGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<UsersGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const usersGetGroupedMutation: (options?: Partial<Options<UsersGetGroupedData>>) => UseMutationOptions<UsersGetGroupedResponse, AxiosError<DefaultError>, Options<UsersGetGroupedData>>;
export declare const usersGetByIdentifierQueryKey: (options: Options<UsersGetByIdentifierData>) => [Pick<Options<UsersGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const usersGetByIdentifierOptions: (options: Options<UsersGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<UsersGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<UsersGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UsersGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const usersGetByIdentifierMutation: (options?: Partial<Options<UsersGetByIdentifierData>>) => UseMutationOptions<UsersGetByIdentifierResponse, AxiosError<DefaultError>, Options<UsersGetByIdentifierData>>;
export declare const usersGetByIdsQueryKey: (options: Options<UsersGetByIdsData>) => [Pick<Options<UsersGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const usersGetByIdsOptions: (options: Options<UsersGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<UsersGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<UsersGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UsersGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const usersGetByIdsInfiniteQueryKey: (options: Options<UsersGetByIdsData>) => QueryKey<Options<UsersGetByIdsData>>;
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
export declare const usersGetByIdsInfiniteOptions: (options: Options<UsersGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<UsersGetByIdsData>>, number | Pick<Pick<Options<UsersGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UsersGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UsersGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<UsersGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const usersGetByIdsMutation: (options?: Partial<Options<UsersGetByIdsData>>) => UseMutationOptions<UsersGetByIdsResponse, AxiosError<DefaultError>, Options<UsersGetByIdsData>>;
export declare const usersGetCountQueryKey: (options: Options<UsersGetCountData>) => [Pick<Options<UsersGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const usersGetCountOptions: (options: Options<UsersGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<UsersGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<UsersGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UsersGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const usersGetCountMutation: (options?: Partial<Options<UsersGetCountData>>) => UseMutationOptions<UsersGetCountResponse, AxiosError<DefaultError>, Options<UsersGetCountData>>;
export declare const usersGetRelationsQueryKey: (options: Options<UsersGetRelationsData>) => [Pick<Options<UsersGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const usersGetRelationsOptions: (options: Options<UsersGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<UsersGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<UsersGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UsersGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const usersGetRelationsInfiniteQueryKey: (options: Options<UsersGetRelationsData>) => QueryKey<Options<UsersGetRelationsData>>;
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
export declare const usersGetRelationsInfiniteOptions: (options: Options<UsersGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<UsersGetRelationsData>>, number | Pick<Pick<Options<UsersGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UsersGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<UsersGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<UsersGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const usersGetRelationsMutation: (options?: Partial<Options<UsersGetRelationsData>>) => UseMutationOptions<UsersGetRelationsResponse, AxiosError<DefaultError>, Options<UsersGetRelationsData>>;
export declare const usersGetRelationsCountQueryKey: (options: Options<UsersGetRelationsCountData>) => [Pick<Options<UsersGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const usersGetRelationsCountOptions: (options: Options<UsersGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<UsersGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<UsersGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UsersGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const usersGetRelationsCountMutation: (options?: Partial<Options<UsersGetRelationsCountData>>) => UseMutationOptions<UsersGetRelationsCountResponse, AxiosError<DefaultError>, Options<UsersGetRelationsCountData>>;
export declare const usersGetGroupedRelationsQueryKey: (options: Options<UsersGetGroupedRelationsData>) => [Pick<Options<UsersGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const usersGetGroupedRelationsOptions: (options: Options<UsersGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<UsersGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<UsersGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<UsersGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const usersGetGroupedRelationsInfiniteQueryKey: (options: Options<UsersGetGroupedRelationsData>) => QueryKey<Options<UsersGetGroupedRelationsData>>;
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
export declare const usersGetGroupedRelationsInfiniteOptions: (options: Options<UsersGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<UsersGetGroupedRelationsData>>, number | Pick<Pick<Options<UsersGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<UsersGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<UsersGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<UsersGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const usersGetGroupedRelationsMutation: (options?: Partial<Options<UsersGetGroupedRelationsData>>) => UseMutationOptions<UsersGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<UsersGetGroupedRelationsData>>;
export declare const ribbonActionsGetRibbonActionsQueryKey: (options: Options<RibbonActionsGetRibbonActionsData>) => [Pick<Options<RibbonActionsGetRibbonActionsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const ribbonActionsGetRibbonActionsOptions: (options: Options<RibbonActionsGetRibbonActionsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").RibbonActionsResponse, Error, import("../types.gen").RibbonActionsResponse, [Pick<Options<RibbonActionsGetRibbonActionsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").RibbonActionsResponse, [Pick<Options<RibbonActionsGetRibbonActionsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RibbonActionsGetRibbonActionsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").RibbonActionsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const ribbonActionsGetRibbonActionsMutation: (options?: Partial<Options<RibbonActionsGetRibbonActionsData>>) => UseMutationOptions<RibbonActionsGetRibbonActionsResponse, AxiosError<DefaultError>, Options<RibbonActionsGetRibbonActionsData>>;
export declare const ribbonActionsGetContextMenusQueryKey: (options: Options<RibbonActionsGetContextMenusData>) => [Pick<Options<RibbonActionsGetContextMenusData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Return context menus for a related entity
 */
export declare const ribbonActionsGetContextMenusOptions: (options: Options<RibbonActionsGetContextMenusData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").ContextMenusResponse, Error, import("../types.gen").ContextMenusResponse, [Pick<Options<RibbonActionsGetContextMenusData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").ContextMenusResponse, [Pick<Options<RibbonActionsGetContextMenusData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<RibbonActionsGetContextMenusData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").ContextMenusResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Return context menus for a related entity
 */
export declare const ribbonActionsGetContextMenusMutation: (options?: Partial<Options<RibbonActionsGetContextMenusData>>) => UseMutationOptions<RibbonActionsGetContextMenusResponse, AxiosError<DefaultError>, Options<RibbonActionsGetContextMenusData>>;
export declare const milestonesGetQueryKey: (options: Options<MilestonesGetData>) => [Pick<Options<MilestonesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const milestonesGetOptions: (options: Options<MilestonesGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<MilestonesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<MilestonesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MilestonesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const milestonesGetInfiniteQueryKey: (options: Options<MilestonesGetData>) => QueryKey<Options<MilestonesGetData>>;
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
export declare const milestonesGetInfiniteOptions: (options: Options<MilestonesGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<MilestonesGetData>>, number | Pick<Pick<Options<MilestonesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<MilestonesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<MilestonesGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<MilestonesGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const milestonesGetMutation: (options?: Partial<Options<MilestonesGetData>>) => UseMutationOptions<MilestonesGetResponse, AxiosError<DefaultError>, Options<MilestonesGetData>>;
export declare const milestonesGetGroupedQueryKey: (options: Options<MilestonesGetGroupedData>) => [Pick<Options<MilestonesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const milestonesGetGroupedOptions: (options: Options<MilestonesGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<MilestonesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<MilestonesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MilestonesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const milestonesGetGroupedInfiniteQueryKey: (options: Options<MilestonesGetGroupedData>) => QueryKey<Options<MilestonesGetGroupedData>>;
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
export declare const milestonesGetGroupedInfiniteOptions: (options: Options<MilestonesGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<MilestonesGetGroupedData>>, number | Pick<Pick<Options<MilestonesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<MilestonesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<MilestonesGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<MilestonesGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const milestonesGetGroupedMutation: (options?: Partial<Options<MilestonesGetGroupedData>>) => UseMutationOptions<MilestonesGetGroupedResponse, AxiosError<DefaultError>, Options<MilestonesGetGroupedData>>;
export declare const milestonesGetByIdentifierQueryKey: (options: Options<MilestonesGetByIdentifierData>) => [Pick<Options<MilestonesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const milestonesGetByIdentifierOptions: (options: Options<MilestonesGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<MilestonesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<MilestonesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MilestonesGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const milestonesGetByIdentifierMutation: (options?: Partial<Options<MilestonesGetByIdentifierData>>) => UseMutationOptions<MilestonesGetByIdentifierResponse, AxiosError<DefaultError>, Options<MilestonesGetByIdentifierData>>;
export declare const milestonesGetByIdsQueryKey: (options: Options<MilestonesGetByIdsData>) => [Pick<Options<MilestonesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const milestonesGetByIdsOptions: (options: Options<MilestonesGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<MilestonesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<MilestonesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MilestonesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const milestonesGetByIdsInfiniteQueryKey: (options: Options<MilestonesGetByIdsData>) => QueryKey<Options<MilestonesGetByIdsData>>;
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
export declare const milestonesGetByIdsInfiniteOptions: (options: Options<MilestonesGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<MilestonesGetByIdsData>>, number | Pick<Pick<Options<MilestonesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<MilestonesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<MilestonesGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<MilestonesGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const milestonesGetByIdsMutation: (options?: Partial<Options<MilestonesGetByIdsData>>) => UseMutationOptions<MilestonesGetByIdsResponse, AxiosError<DefaultError>, Options<MilestonesGetByIdsData>>;
export declare const milestonesGetCountQueryKey: (options: Options<MilestonesGetCountData>) => [Pick<Options<MilestonesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const milestonesGetCountOptions: (options: Options<MilestonesGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<MilestonesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<MilestonesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MilestonesGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const milestonesGetCountMutation: (options?: Partial<Options<MilestonesGetCountData>>) => UseMutationOptions<MilestonesGetCountResponse, AxiosError<DefaultError>, Options<MilestonesGetCountData>>;
export declare const milestonesGetRelationsQueryKey: (options: Options<MilestonesGetRelationsData>) => [Pick<Options<MilestonesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const milestonesGetRelationsOptions: (options: Options<MilestonesGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<MilestonesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<MilestonesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MilestonesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const milestonesGetRelationsInfiniteQueryKey: (options: Options<MilestonesGetRelationsData>) => QueryKey<Options<MilestonesGetRelationsData>>;
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
export declare const milestonesGetRelationsInfiniteOptions: (options: Options<MilestonesGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<MilestonesGetRelationsData>>, number | Pick<Pick<Options<MilestonesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<MilestonesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<MilestonesGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<MilestonesGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const milestonesGetRelationsMutation: (options?: Partial<Options<MilestonesGetRelationsData>>) => UseMutationOptions<MilestonesGetRelationsResponse, AxiosError<DefaultError>, Options<MilestonesGetRelationsData>>;
export declare const milestonesGetRelationsCountQueryKey: (options: Options<MilestonesGetRelationsCountData>) => [Pick<Options<MilestonesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const milestonesGetRelationsCountOptions: (options: Options<MilestonesGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<MilestonesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<MilestonesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MilestonesGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const milestonesGetRelationsCountMutation: (options?: Partial<Options<MilestonesGetRelationsCountData>>) => UseMutationOptions<MilestonesGetRelationsCountResponse, AxiosError<DefaultError>, Options<MilestonesGetRelationsCountData>>;
export declare const milestonesGetGroupedRelationsQueryKey: (options: Options<MilestonesGetGroupedRelationsData>) => [Pick<Options<MilestonesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const milestonesGetGroupedRelationsOptions: (options: Options<MilestonesGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<MilestonesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<MilestonesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MilestonesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const milestonesGetGroupedRelationsInfiniteQueryKey: (options: Options<MilestonesGetGroupedRelationsData>) => QueryKey<Options<MilestonesGetGroupedRelationsData>>;
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
export declare const milestonesGetGroupedRelationsInfiniteOptions: (options: Options<MilestonesGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<MilestonesGetGroupedRelationsData>>, number | Pick<Pick<Options<MilestonesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<MilestonesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<MilestonesGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<MilestonesGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const milestonesGetGroupedRelationsMutation: (options?: Partial<Options<MilestonesGetGroupedRelationsData>>) => UseMutationOptions<MilestonesGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<MilestonesGetGroupedRelationsData>>;
export declare const milestonesGetAvatarsQueryKey: (options: Options<MilestonesGetAvatarsData>) => [Pick<Options<MilestonesGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const milestonesGetAvatarsOptions: (options: Options<MilestonesGetAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<MilestonesGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<MilestonesGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MilestonesGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const milestonesGetAvatarsMutation: (options?: Partial<Options<MilestonesGetAvatarsData>>) => UseMutationOptions<MilestonesGetAvatarsResponse, AxiosError<DefaultError>, Options<MilestonesGetAvatarsData>>;
export declare const milestonesGetRelationsAvatarsQueryKey: (options: Options<MilestonesGetRelationsAvatarsData>) => [Pick<Options<MilestonesGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const milestonesGetRelationsAvatarsOptions: (options: Options<MilestonesGetRelationsAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<MilestonesGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<MilestonesGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<MilestonesGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const milestonesGetRelationsAvatarsMutation: (options?: Partial<Options<MilestonesGetRelationsAvatarsData>>) => UseMutationOptions<MilestonesGetRelationsAvatarsResponse, AxiosError<DefaultError>, Options<MilestonesGetRelationsAvatarsData>>;
export declare const programsGetQueryKey: (options: Options<ProgramsGetData>) => [Pick<Options<ProgramsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const programsGetOptions: (options: Options<ProgramsGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<ProgramsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<ProgramsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProgramsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const programsGetInfiniteQueryKey: (options: Options<ProgramsGetData>) => QueryKey<Options<ProgramsGetData>>;
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
export declare const programsGetInfiniteOptions: (options: Options<ProgramsGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<ProgramsGetData>>, number | Pick<Pick<Options<ProgramsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProgramsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProgramsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<ProgramsGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const programsGetMutation: (options?: Partial<Options<ProgramsGetData>>) => UseMutationOptions<ProgramsGetResponse, AxiosError<DefaultError>, Options<ProgramsGetData>>;
export declare const programsGetGroupedQueryKey: (options: Options<ProgramsGetGroupedData>) => [Pick<Options<ProgramsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const programsGetGroupedOptions: (options: Options<ProgramsGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<ProgramsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<ProgramsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProgramsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const programsGetGroupedInfiniteQueryKey: (options: Options<ProgramsGetGroupedData>) => QueryKey<Options<ProgramsGetGroupedData>>;
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
export declare const programsGetGroupedInfiniteOptions: (options: Options<ProgramsGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<ProgramsGetGroupedData>>, number | Pick<Pick<Options<ProgramsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<ProgramsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<ProgramsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<ProgramsGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const programsGetGroupedMutation: (options?: Partial<Options<ProgramsGetGroupedData>>) => UseMutationOptions<ProgramsGetGroupedResponse, AxiosError<DefaultError>, Options<ProgramsGetGroupedData>>;
export declare const programsGetByIdentifierQueryKey: (options: Options<ProgramsGetByIdentifierData>) => [Pick<Options<ProgramsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const programsGetByIdentifierOptions: (options: Options<ProgramsGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<ProgramsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<ProgramsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProgramsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const programsGetByIdentifierMutation: (options?: Partial<Options<ProgramsGetByIdentifierData>>) => UseMutationOptions<ProgramsGetByIdentifierResponse, AxiosError<DefaultError>, Options<ProgramsGetByIdentifierData>>;
export declare const programsGetByIdsQueryKey: (options: Options<ProgramsGetByIdsData>) => [Pick<Options<ProgramsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const programsGetByIdsOptions: (options: Options<ProgramsGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<ProgramsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<ProgramsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProgramsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const programsGetByIdsInfiniteQueryKey: (options: Options<ProgramsGetByIdsData>) => QueryKey<Options<ProgramsGetByIdsData>>;
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
export declare const programsGetByIdsInfiniteOptions: (options: Options<ProgramsGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<ProgramsGetByIdsData>>, number | Pick<Pick<Options<ProgramsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProgramsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProgramsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<ProgramsGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const programsGetByIdsMutation: (options?: Partial<Options<ProgramsGetByIdsData>>) => UseMutationOptions<ProgramsGetByIdsResponse, AxiosError<DefaultError>, Options<ProgramsGetByIdsData>>;
export declare const programsGetCountQueryKey: (options: Options<ProgramsGetCountData>) => [Pick<Options<ProgramsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const programsGetCountOptions: (options: Options<ProgramsGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<ProgramsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<ProgramsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProgramsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const programsGetCountMutation: (options?: Partial<Options<ProgramsGetCountData>>) => UseMutationOptions<ProgramsGetCountResponse, AxiosError<DefaultError>, Options<ProgramsGetCountData>>;
export declare const programsGetRelationsQueryKey: (options: Options<ProgramsGetRelationsData>) => [Pick<Options<ProgramsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const programsGetRelationsOptions: (options: Options<ProgramsGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<ProgramsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<ProgramsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProgramsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const programsGetRelationsInfiniteQueryKey: (options: Options<ProgramsGetRelationsData>) => QueryKey<Options<ProgramsGetRelationsData>>;
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
export declare const programsGetRelationsInfiniteOptions: (options: Options<ProgramsGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<ProgramsGetRelationsData>>, number | Pick<Pick<Options<ProgramsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProgramsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProgramsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<ProgramsGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const programsGetRelationsMutation: (options?: Partial<Options<ProgramsGetRelationsData>>) => UseMutationOptions<ProgramsGetRelationsResponse, AxiosError<DefaultError>, Options<ProgramsGetRelationsData>>;
export declare const programsGetRelationsCountQueryKey: (options: Options<ProgramsGetRelationsCountData>) => [Pick<Options<ProgramsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const programsGetRelationsCountOptions: (options: Options<ProgramsGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<ProgramsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<ProgramsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProgramsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const programsGetRelationsCountMutation: (options?: Partial<Options<ProgramsGetRelationsCountData>>) => UseMutationOptions<ProgramsGetRelationsCountResponse, AxiosError<DefaultError>, Options<ProgramsGetRelationsCountData>>;
export declare const programsGetGroupedRelationsQueryKey: (options: Options<ProgramsGetGroupedRelationsData>) => [Pick<Options<ProgramsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const programsGetGroupedRelationsOptions: (options: Options<ProgramsGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<ProgramsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<ProgramsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProgramsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const programsGetGroupedRelationsInfiniteQueryKey: (options: Options<ProgramsGetGroupedRelationsData>) => QueryKey<Options<ProgramsGetGroupedRelationsData>>;
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
export declare const programsGetGroupedRelationsInfiniteOptions: (options: Options<ProgramsGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<ProgramsGetGroupedRelationsData>>, number | Pick<Pick<Options<ProgramsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<ProgramsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<ProgramsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<ProgramsGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const programsGetGroupedRelationsMutation: (options?: Partial<Options<ProgramsGetGroupedRelationsData>>) => UseMutationOptions<ProgramsGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<ProgramsGetGroupedRelationsData>>;
export declare const programsGetAvatarsQueryKey: (options: Options<ProgramsGetAvatarsData>) => [Pick<Options<ProgramsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const programsGetAvatarsOptions: (options: Options<ProgramsGetAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<ProgramsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<ProgramsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProgramsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const programsGetAvatarsMutation: (options?: Partial<Options<ProgramsGetAvatarsData>>) => UseMutationOptions<ProgramsGetAvatarsResponse, AxiosError<DefaultError>, Options<ProgramsGetAvatarsData>>;
export declare const programsGetRelationsAvatarsQueryKey: (options: Options<ProgramsGetRelationsAvatarsData>) => [Pick<Options<ProgramsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const programsGetRelationsAvatarsOptions: (options: Options<ProgramsGetRelationsAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<ProgramsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<ProgramsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProgramsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const programsGetRelationsAvatarsMutation: (options?: Partial<Options<ProgramsGetRelationsAvatarsData>>) => UseMutationOptions<ProgramsGetRelationsAvatarsResponse, AxiosError<DefaultError>, Options<ProgramsGetRelationsAvatarsData>>;
export declare const projectsGetQueryKey: (options: Options<ProjectsGetData>) => [Pick<Options<ProjectsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const projectsGetOptions: (options: Options<ProjectsGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<ProjectsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<ProjectsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProjectsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const projectsGetInfiniteQueryKey: (options: Options<ProjectsGetData>) => QueryKey<Options<ProjectsGetData>>;
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
export declare const projectsGetInfiniteOptions: (options: Options<ProjectsGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<ProjectsGetData>>, number | Pick<Pick<Options<ProjectsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProjectsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProjectsGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<ProjectsGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const projectsGetMutation: (options?: Partial<Options<ProjectsGetData>>) => UseMutationOptions<ProjectsGetResponse, AxiosError<DefaultError>, Options<ProjectsGetData>>;
export declare const projectsGetGroupedQueryKey: (options: Options<ProjectsGetGroupedData>) => [Pick<Options<ProjectsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const projectsGetGroupedOptions: (options: Options<ProjectsGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<ProjectsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<ProjectsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProjectsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const projectsGetGroupedInfiniteQueryKey: (options: Options<ProjectsGetGroupedData>) => QueryKey<Options<ProjectsGetGroupedData>>;
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
export declare const projectsGetGroupedInfiniteOptions: (options: Options<ProjectsGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<ProjectsGetGroupedData>>, number | Pick<Pick<Options<ProjectsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<ProjectsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<ProjectsGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<ProjectsGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const projectsGetGroupedMutation: (options?: Partial<Options<ProjectsGetGroupedData>>) => UseMutationOptions<ProjectsGetGroupedResponse, AxiosError<DefaultError>, Options<ProjectsGetGroupedData>>;
export declare const projectsGetByIdentifierQueryKey: (options: Options<ProjectsGetByIdentifierData>) => [Pick<Options<ProjectsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const projectsGetByIdentifierOptions: (options: Options<ProjectsGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<ProjectsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<ProjectsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProjectsGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const projectsGetByIdentifierMutation: (options?: Partial<Options<ProjectsGetByIdentifierData>>) => UseMutationOptions<ProjectsGetByIdentifierResponse, AxiosError<DefaultError>, Options<ProjectsGetByIdentifierData>>;
export declare const projectsGetByIdsQueryKey: (options: Options<ProjectsGetByIdsData>) => [Pick<Options<ProjectsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const projectsGetByIdsOptions: (options: Options<ProjectsGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<ProjectsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<ProjectsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProjectsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const projectsGetByIdsInfiniteQueryKey: (options: Options<ProjectsGetByIdsData>) => QueryKey<Options<ProjectsGetByIdsData>>;
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
export declare const projectsGetByIdsInfiniteOptions: (options: Options<ProjectsGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<ProjectsGetByIdsData>>, number | Pick<Pick<Options<ProjectsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProjectsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProjectsGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<ProjectsGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const projectsGetByIdsMutation: (options?: Partial<Options<ProjectsGetByIdsData>>) => UseMutationOptions<ProjectsGetByIdsResponse, AxiosError<DefaultError>, Options<ProjectsGetByIdsData>>;
export declare const projectsGetCountQueryKey: (options: Options<ProjectsGetCountData>) => [Pick<Options<ProjectsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const projectsGetCountOptions: (options: Options<ProjectsGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<ProjectsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<ProjectsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProjectsGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const projectsGetCountMutation: (options?: Partial<Options<ProjectsGetCountData>>) => UseMutationOptions<ProjectsGetCountResponse, AxiosError<DefaultError>, Options<ProjectsGetCountData>>;
export declare const projectsGetRelationsQueryKey: (options: Options<ProjectsGetRelationsData>) => [Pick<Options<ProjectsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const projectsGetRelationsOptions: (options: Options<ProjectsGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<ProjectsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<ProjectsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProjectsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const projectsGetRelationsInfiniteQueryKey: (options: Options<ProjectsGetRelationsData>) => QueryKey<Options<ProjectsGetRelationsData>>;
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
export declare const projectsGetRelationsInfiniteOptions: (options: Options<ProjectsGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<ProjectsGetRelationsData>>, number | Pick<Pick<Options<ProjectsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProjectsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<ProjectsGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<ProjectsGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const projectsGetRelationsMutation: (options?: Partial<Options<ProjectsGetRelationsData>>) => UseMutationOptions<ProjectsGetRelationsResponse, AxiosError<DefaultError>, Options<ProjectsGetRelationsData>>;
export declare const projectsGetRelationsCountQueryKey: (options: Options<ProjectsGetRelationsCountData>) => [Pick<Options<ProjectsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const projectsGetRelationsCountOptions: (options: Options<ProjectsGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<ProjectsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<ProjectsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProjectsGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const projectsGetRelationsCountMutation: (options?: Partial<Options<ProjectsGetRelationsCountData>>) => UseMutationOptions<ProjectsGetRelationsCountResponse, AxiosError<DefaultError>, Options<ProjectsGetRelationsCountData>>;
export declare const projectsGetGroupedRelationsQueryKey: (options: Options<ProjectsGetGroupedRelationsData>) => [Pick<Options<ProjectsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const projectsGetGroupedRelationsOptions: (options: Options<ProjectsGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<ProjectsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<ProjectsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProjectsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const projectsGetGroupedRelationsInfiniteQueryKey: (options: Options<ProjectsGetGroupedRelationsData>) => QueryKey<Options<ProjectsGetGroupedRelationsData>>;
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
export declare const projectsGetGroupedRelationsInfiniteOptions: (options: Options<ProjectsGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<ProjectsGetGroupedRelationsData>>, number | Pick<Pick<Options<ProjectsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<ProjectsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<ProjectsGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<ProjectsGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const projectsGetGroupedRelationsMutation: (options?: Partial<Options<ProjectsGetGroupedRelationsData>>) => UseMutationOptions<ProjectsGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<ProjectsGetGroupedRelationsData>>;
export declare const projectsGetAvatarsQueryKey: (options: Options<ProjectsGetAvatarsData>) => [Pick<Options<ProjectsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const projectsGetAvatarsOptions: (options: Options<ProjectsGetAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<ProjectsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<ProjectsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProjectsGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const projectsGetAvatarsMutation: (options?: Partial<Options<ProjectsGetAvatarsData>>) => UseMutationOptions<ProjectsGetAvatarsResponse, AxiosError<DefaultError>, Options<ProjectsGetAvatarsData>>;
export declare const projectsGetRelationsAvatarsQueryKey: (options: Options<ProjectsGetRelationsAvatarsData>) => [Pick<Options<ProjectsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const projectsGetRelationsAvatarsOptions: (options: Options<ProjectsGetRelationsAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<ProjectsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<ProjectsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ProjectsGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const projectsGetRelationsAvatarsMutation: (options?: Partial<Options<ProjectsGetRelationsAvatarsData>>) => UseMutationOptions<ProjectsGetRelationsAvatarsResponse, AxiosError<DefaultError>, Options<ProjectsGetRelationsAvatarsData>>;
export declare const tasksGetQueryKey: (options: Options<TasksGetData>) => [Pick<Options<TasksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const tasksGetOptions: (options: Options<TasksGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<TasksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<TasksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<TasksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const tasksGetInfiniteQueryKey: (options: Options<TasksGetData>) => QueryKey<Options<TasksGetData>>;
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
export declare const tasksGetInfiniteOptions: (options: Options<TasksGetData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<TasksGetData>>, number | Pick<Pick<Options<TasksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<TasksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<TasksGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<TasksGetData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const tasksGetMutation: (options?: Partial<Options<TasksGetData>>) => UseMutationOptions<TasksGetResponse, AxiosError<DefaultError>, Options<TasksGetData>>;
export declare const tasksGetGroupedQueryKey: (options: Options<TasksGetGroupedData>) => [Pick<Options<TasksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const tasksGetGroupedOptions: (options: Options<TasksGetGroupedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<TasksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<TasksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<TasksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const tasksGetGroupedInfiniteQueryKey: (options: Options<TasksGetGroupedData>) => QueryKey<Options<TasksGetGroupedData>>;
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
export declare const tasksGetGroupedInfiniteOptions: (options: Options<TasksGetGroupedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<TasksGetGroupedData>>, number | Pick<Pick<Options<TasksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<TasksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<TasksGetGroupedData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<TasksGetGroupedData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const tasksGetGroupedMutation: (options?: Partial<Options<TasksGetGroupedData>>) => UseMutationOptions<TasksGetGroupedResponse, AxiosError<DefaultError>, Options<TasksGetGroupedData>>;
export declare const tasksGetByIdentifierQueryKey: (options: Options<TasksGetByIdentifierData>) => [Pick<Options<TasksGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const tasksGetByIdentifierOptions: (options: Options<TasksGetByIdentifierData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntityDetailsResponse, Error, import("../types.gen").EntityDetailsResponse, [Pick<Options<TasksGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntityDetailsResponse, [Pick<Options<TasksGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<TasksGetByIdentifierData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntityDetailsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const tasksGetByIdentifierMutation: (options?: Partial<Options<TasksGetByIdentifierData>>) => UseMutationOptions<TasksGetByIdentifierResponse, AxiosError<DefaultError>, Options<TasksGetByIdentifierData>>;
export declare const tasksGetByIdsQueryKey: (options: Options<TasksGetByIdsData>) => [Pick<Options<TasksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const tasksGetByIdsOptions: (options: Options<TasksGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<TasksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<TasksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<TasksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const tasksGetByIdsInfiniteQueryKey: (options: Options<TasksGetByIdsData>) => QueryKey<Options<TasksGetByIdsData>>;
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
export declare const tasksGetByIdsInfiniteOptions: (options: Options<TasksGetByIdsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<TasksGetByIdsData>>, number | Pick<Pick<Options<TasksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<TasksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<TasksGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<TasksGetByIdsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const tasksGetByIdsMutation: (options?: Partial<Options<TasksGetByIdsData>>) => UseMutationOptions<TasksGetByIdsResponse, AxiosError<DefaultError>, Options<TasksGetByIdsData>>;
export declare const tasksGetCountQueryKey: (options: Options<TasksGetCountData>) => [Pick<Options<TasksGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const tasksGetCountOptions: (options: Options<TasksGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<TasksGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<TasksGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<TasksGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const tasksGetCountMutation: (options?: Partial<Options<TasksGetCountData>>) => UseMutationOptions<TasksGetCountResponse, AxiosError<DefaultError>, Options<TasksGetCountData>>;
export declare const tasksGetRelationsQueryKey: (options: Options<TasksGetRelationsData>) => [Pick<Options<TasksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const tasksGetRelationsOptions: (options: Options<TasksGetRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EntitiesResponse, Error, import("../types.gen").EntitiesResponse, [Pick<Options<TasksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EntitiesResponse, [Pick<Options<TasksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<TasksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const tasksGetRelationsInfiniteQueryKey: (options: Options<TasksGetRelationsData>) => QueryKey<Options<TasksGetRelationsData>>;
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
export declare const tasksGetRelationsInfiniteOptions: (options: Options<TasksGetRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").EntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").EntitiesResponse, unknown>, import("../types.gen").EntitiesResponse, QueryKey<Options<TasksGetRelationsData>>, number | Pick<Pick<Options<TasksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<TasksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").EntitiesResponse, number | Pick<Pick<Options<TasksGetRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<TasksGetRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").EntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const tasksGetRelationsMutation: (options?: Partial<Options<TasksGetRelationsData>>) => UseMutationOptions<TasksGetRelationsResponse, AxiosError<DefaultError>, Options<TasksGetRelationsData>>;
export declare const tasksGetRelationsCountQueryKey: (options: Options<TasksGetRelationsCountData>) => [Pick<Options<TasksGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const tasksGetRelationsCountOptions: (options: Options<TasksGetRelationsCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<TasksGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<TasksGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<TasksGetRelationsCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const tasksGetRelationsCountMutation: (options?: Partial<Options<TasksGetRelationsCountData>>) => UseMutationOptions<TasksGetRelationsCountResponse, AxiosError<DefaultError>, Options<TasksGetRelationsCountData>>;
export declare const tasksGetGroupedRelationsQueryKey: (options: Options<TasksGetGroupedRelationsData>) => [Pick<Options<TasksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const tasksGetGroupedRelationsOptions: (options: Options<TasksGetGroupedRelationsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedEntitiesResponse, Error, import("../types.gen").GroupedEntitiesResponse, [Pick<Options<TasksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedEntitiesResponse, [Pick<Options<TasksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<TasksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const tasksGetGroupedRelationsInfiniteQueryKey: (options: Options<TasksGetGroupedRelationsData>) => QueryKey<Options<TasksGetGroupedRelationsData>>;
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
export declare const tasksGetGroupedRelationsInfiniteOptions: (options: Options<TasksGetGroupedRelationsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").GroupedEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>, import("../types.gen").GroupedEntitiesResponse, QueryKey<Options<TasksGetGroupedRelationsData>>, number | Pick<Pick<Options<TasksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<TasksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").GroupedEntitiesResponse, number | Pick<Pick<Options<TasksGetGroupedRelationsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<TasksGetGroupedRelationsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").GroupedEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const tasksGetGroupedRelationsMutation: (options?: Partial<Options<TasksGetGroupedRelationsData>>) => UseMutationOptions<TasksGetGroupedRelationsResponse, AxiosError<DefaultError>, Options<TasksGetGroupedRelationsData>>;
export declare const tasksGetAvatarsQueryKey: (options: Options<TasksGetAvatarsData>) => [Pick<Options<TasksGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const tasksGetAvatarsOptions: (options: Options<TasksGetAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<TasksGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<TasksGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<TasksGetAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const tasksGetAvatarsMutation: (options?: Partial<Options<TasksGetAvatarsData>>) => UseMutationOptions<TasksGetAvatarsResponse, AxiosError<DefaultError>, Options<TasksGetAvatarsData>>;
export declare const tasksGetRelationsAvatarsQueryKey: (options: Options<TasksGetRelationsAvatarsData>) => [Pick<Options<TasksGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const tasksGetRelationsAvatarsOptions: (options: Options<TasksGetRelationsAvatarsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AvatarsResponse, Error, import("../types.gen").AvatarsResponse, [Pick<Options<TasksGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AvatarsResponse, [Pick<Options<TasksGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<TasksGetRelationsAvatarsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AvatarsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
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
export declare const tasksGetRelationsAvatarsMutation: (options?: Partial<Options<TasksGetRelationsAvatarsData>>) => UseMutationOptions<TasksGetRelationsAvatarsResponse, AxiosError<DefaultError>, Options<TasksGetRelationsAvatarsData>>;
export declare const dataWarehouseEntityGetCountQueryKey: (options: Options<DataWarehouseEntityGetCountData>) => [Pick<Options<DataWarehouseEntityGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const dataWarehouseEntityGetCountOptions: (options: Options<DataWarehouseEntityGetCountData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CountResponse, Error, import("../types.gen").CountResponse, [Pick<Options<DataWarehouseEntityGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CountResponse, [Pick<Options<DataWarehouseEntityGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<DataWarehouseEntityGetCountData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CountResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const dataWarehouseEntityGetCountMutation: (options?: Partial<Options<DataWarehouseEntityGetCountData>>) => UseMutationOptions<DataWarehouseEntityGetCountResponse, AxiosError<DefaultError>, Options<DataWarehouseEntityGetCountData>>;
export declare const dataWarehouseEntityGetByIdsQueryKey: (options: Options<DataWarehouseEntityGetByIdsData>) => [Pick<Options<DataWarehouseEntityGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const dataWarehouseEntityGetByIdsOptions: (options: Options<DataWarehouseEntityGetByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").DataWarehouseEntitiesByIdsResponse, Error, import("../types.gen").DataWarehouseEntitiesByIdsResponse, [Pick<Options<DataWarehouseEntityGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").DataWarehouseEntitiesByIdsResponse, [Pick<Options<DataWarehouseEntityGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<DataWarehouseEntityGetByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").DataWarehouseEntitiesByIdsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const dataWarehouseEntityGetByIdsMutation: (options?: Partial<Options<DataWarehouseEntityGetByIdsData>>) => UseMutationOptions<DataWarehouseEntityGetByIdsResponse, AxiosError<DefaultError>, Options<DataWarehouseEntityGetByIdsData>>;
export declare const dataWarehouseEntityGetIdsQueryKey: (options: Options<DataWarehouseEntityGetIdsData>) => [Pick<Options<DataWarehouseEntityGetIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const dataWarehouseEntityGetIdsOptions: (options: Options<DataWarehouseEntityGetIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").DataWarehouseGetIdsResponse, Error, import("../types.gen").DataWarehouseGetIdsResponse, [Pick<Options<DataWarehouseEntityGetIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").DataWarehouseGetIdsResponse, [Pick<Options<DataWarehouseEntityGetIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<DataWarehouseEntityGetIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").DataWarehouseGetIdsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const dataWarehouseEntityGetIdsMutation: (options?: Partial<Options<DataWarehouseEntityGetIdsData>>) => UseMutationOptions<DataWarehouseEntityGetIdsResponse, AxiosError<DefaultError>, Options<DataWarehouseEntityGetIdsData>>;
export declare const configurationGetConfigurationQueryKey: (options: Options<ConfigurationGetConfigurationData>) => [Pick<Options<ConfigurationGetConfigurationData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const configurationGetConfigurationOptions: (options: Options<ConfigurationGetConfigurationData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").DataWarehouseEntityDetailsResponseOfBiConfiguration, Error, import("../types.gen").DataWarehouseEntityDetailsResponseOfBiConfiguration, [Pick<Options<ConfigurationGetConfigurationData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").DataWarehouseEntityDetailsResponseOfBiConfiguration, [Pick<Options<ConfigurationGetConfigurationData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<ConfigurationGetConfigurationData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").DataWarehouseEntityDetailsResponseOfBiConfiguration;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const configurationGetConfigurationMutation: (options?: Partial<Options<ConfigurationGetConfigurationData>>) => UseMutationOptions<ConfigurationGetConfigurationResponse, AxiosError<DefaultError>, Options<ConfigurationGetConfigurationData>>;
export declare const configurationUpdateConfigurationMutation: (options?: Partial<Options<ConfigurationUpdateConfigurationData>>) => UseMutationOptions<unknown, AxiosError<DefaultError>, Options<ConfigurationUpdateConfigurationData>>;
export declare const storageConnectionsTestAzureBlobConnectionQueryKey: (options: Options<StorageConnectionsTestAzureBlobConnectionData>) => [Pick<Options<StorageConnectionsTestAzureBlobConnectionData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const storageConnectionsTestAzureBlobConnectionOptions: (options: Options<StorageConnectionsTestAzureBlobConnectionData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").StorageConnectionResponse, Error, import("../types.gen").StorageConnectionResponse, [Pick<Options<StorageConnectionsTestAzureBlobConnectionData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").StorageConnectionResponse, [Pick<Options<StorageConnectionsTestAzureBlobConnectionData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<StorageConnectionsTestAzureBlobConnectionData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").StorageConnectionResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const storageConnectionsTestAzureBlobConnectionMutation: (options?: Partial<Options<StorageConnectionsTestAzureBlobConnectionData>>) => UseMutationOptions<StorageConnectionsTestAzureBlobConnectionResponse, AxiosError<DefaultError>, Options<StorageConnectionsTestAzureBlobConnectionData>>;
export declare const triggerExportTriggerExportQueryKey: (options?: Options<TriggerExportTriggerExportData>) => [Pick<Options<TriggerExportTriggerExportData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const triggerExportTriggerExportOptions: (options?: Options<TriggerExportTriggerExportData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<unknown, Error, unknown, [Pick<Options<TriggerExportTriggerExportData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<unknown, [Pick<Options<TriggerExportTriggerExportData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<TriggerExportTriggerExportData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: unknown;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const triggerExportTriggerExportMutation: (options?: Partial<Options<TriggerExportTriggerExportData>>) => UseMutationOptions<unknown, AxiosError<DefaultError>, Options<TriggerExportTriggerExportData>>;
export declare const planviewAdminVerifyConnectQueryKey: (options: Options<PlanviewAdminVerifyConnectData>) => [Pick<Options<PlanviewAdminVerifyConnectData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const planviewAdminVerifyConnectOptions: (options: Options<PlanviewAdminVerifyConnectData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<unknown, Error, unknown, [Pick<Options<PlanviewAdminVerifyConnectData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<unknown, [Pick<Options<PlanviewAdminVerifyConnectData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PlanviewAdminVerifyConnectData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: unknown;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const planviewAdminVerifyConnectMutation: (options?: Partial<Options<PlanviewAdminVerifyConnectData>>) => UseMutationOptions<unknown, AxiosError<DefaultError>, Options<PlanviewAdminVerifyConnectData>>;
export declare const planviewAdminGetUsersQueryKey: (options?: Options<PlanviewAdminGetUsersData>) => [Pick<Options<PlanviewAdminGetUsersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const planviewAdminGetUsersOptions: (options?: Options<PlanviewAdminGetUsersData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetUsersResponse, Error, import("../types.gen").GetUsersResponse, [Pick<Options<PlanviewAdminGetUsersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetUsersResponse, [Pick<Options<PlanviewAdminGetUsersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PlanviewAdminGetUsersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetUsersResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const planviewAdminGetQueryKey: (options?: Options<PlanviewAdminGetData>) => [Pick<Options<PlanviewAdminGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const planviewAdminGetOptions: (options?: Options<PlanviewAdminGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetTenantResponse, Error, import("../types.gen").GetTenantResponse, [Pick<Options<PlanviewAdminGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetTenantResponse, [Pick<Options<PlanviewAdminGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PlanviewAdminGetData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetTenantResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const planviewAdminRegisterQueryKey: (options: Options<PlanviewAdminRegisterData>) => [Pick<Options<PlanviewAdminRegisterData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const planviewAdminRegisterOptions: (options: Options<PlanviewAdminRegisterData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<unknown, Error, unknown, [Pick<Options<PlanviewAdminRegisterData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<unknown, [Pick<Options<PlanviewAdminRegisterData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PlanviewAdminRegisterData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: unknown;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const planviewAdminRegisterMutation: (options?: Partial<Options<PlanviewAdminRegisterData>>) => UseMutationOptions<unknown, AxiosError<DefaultError>, Options<PlanviewAdminRegisterData>>;
export declare const planviewTokenServiceGetPtsTokenForCoPilotQueryKey: (options?: Options<PlanviewTokenServiceGetPtsTokenForCoPilotData>) => [Pick<Options<PlanviewTokenServiceGetPtsTokenForCoPilotData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const planviewTokenServiceGetPtsTokenForCoPilotOptions: (options?: Options<PlanviewTokenServiceGetPtsTokenForCoPilotData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetTokenResponse, Error, import("../types.gen").GetTokenResponse, [Pick<Options<PlanviewTokenServiceGetPtsTokenForCoPilotData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetTokenResponse, [Pick<Options<PlanviewTokenServiceGetPtsTokenForCoPilotData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PlanviewTokenServiceGetPtsTokenForCoPilotData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetTokenResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const planviewTokenServiceGetPtsTokenInternalQueryKey: (options?: Options<PlanviewTokenServiceGetPtsTokenInternalData>) => [Pick<Options<PlanviewTokenServiceGetPtsTokenInternalData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const planviewTokenServiceGetPtsTokenInternalOptions: (options?: Options<PlanviewTokenServiceGetPtsTokenInternalData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetTokenResponse, Error, import("../types.gen").GetTokenResponse, [Pick<Options<PlanviewTokenServiceGetPtsTokenInternalData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetTokenResponse, [Pick<Options<PlanviewTokenServiceGetPtsTokenInternalData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PlanviewTokenServiceGetPtsTokenInternalData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetTokenResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const sentimentAnalysisServiceCalculateSentimentQueryKey: (options: Options<SentimentAnalysisServiceCalculateSentimentData>) => [Pick<Options<SentimentAnalysisServiceCalculateSentimentData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const sentimentAnalysisServiceCalculateSentimentOptions: (options: Options<SentimentAnalysisServiceCalculateSentimentData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CalculateSentimentResponse, Error, import("../types.gen").CalculateSentimentResponse, [Pick<Options<SentimentAnalysisServiceCalculateSentimentData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CalculateSentimentResponse, [Pick<Options<SentimentAnalysisServiceCalculateSentimentData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<SentimentAnalysisServiceCalculateSentimentData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CalculateSentimentResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const sentimentAnalysisServiceCalculateSentimentMutation: (options?: Partial<Options<SentimentAnalysisServiceCalculateSentimentData>>) => UseMutationOptions<SentimentAnalysisServiceCalculateSentimentResponse, AxiosError<DefaultError>, Options<SentimentAnalysisServiceCalculateSentimentData>>;
export declare const whiteboardPtsTokenForWhiteboardQueryKey: (options: Options<WhiteboardPtsTokenForWhiteboardData>) => [Pick<Options<WhiteboardPtsTokenForWhiteboardData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const whiteboardPtsTokenForWhiteboardOptions: (options: Options<WhiteboardPtsTokenForWhiteboardData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").WhiteboardTokenResponse, Error, import("../types.gen").WhiteboardTokenResponse, [Pick<Options<WhiteboardPtsTokenForWhiteboardData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").WhiteboardTokenResponse, [Pick<Options<WhiteboardPtsTokenForWhiteboardData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<WhiteboardPtsTokenForWhiteboardData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").WhiteboardTokenResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const workloadGetWorkloadResourcesQueryKey: (options: Options<WorkloadGetWorkloadResourcesData>) => [Pick<Options<WorkloadGetWorkloadResourcesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const workloadGetWorkloadResourcesOptions: (options: Options<WorkloadGetWorkloadResourcesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").WorkloadEntitiesResponse, Error, import("../types.gen").WorkloadEntitiesResponse, [Pick<Options<WorkloadGetWorkloadResourcesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").WorkloadEntitiesResponse, [Pick<Options<WorkloadGetWorkloadResourcesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<WorkloadGetWorkloadResourcesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").WorkloadEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const workloadGetWorkloadResourcesInfiniteQueryKey: (options: Options<WorkloadGetWorkloadResourcesData>) => QueryKey<Options<WorkloadGetWorkloadResourcesData>>;
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
export declare const workloadGetWorkloadResourcesInfiniteOptions: (options: Options<WorkloadGetWorkloadResourcesData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").WorkloadEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").WorkloadEntitiesResponse, unknown>, import("../types.gen").WorkloadEntitiesResponse, QueryKey<Options<WorkloadGetWorkloadResourcesData>>, number | Pick<Pick<Options<WorkloadGetWorkloadResourcesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").WorkloadEntitiesResponse, number | Pick<Pick<Options<WorkloadGetWorkloadResourcesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").WorkloadEntitiesResponse, number | Pick<Pick<Options<WorkloadGetWorkloadResourcesData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<WorkloadGetWorkloadResourcesData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").WorkloadEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const workloadGetWorkloadResourcesMutation: (options?: Partial<Options<WorkloadGetWorkloadResourcesData>>) => UseMutationOptions<WorkloadGetWorkloadResourcesResponse, AxiosError<DefaultError>, Options<WorkloadGetWorkloadResourcesData>>;
export declare const workloadGetWorkloadProjectsQueryKey: (options: Options<WorkloadGetWorkloadProjectsData>) => [Pick<Options<WorkloadGetWorkloadProjectsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const workloadGetWorkloadProjectsOptions: (options: Options<WorkloadGetWorkloadProjectsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").WorkloadEntitiesResponse, Error, import("../types.gen").WorkloadEntitiesResponse, [Pick<Options<WorkloadGetWorkloadProjectsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").WorkloadEntitiesResponse, [Pick<Options<WorkloadGetWorkloadProjectsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<WorkloadGetWorkloadProjectsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").WorkloadEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const workloadGetWorkloadProjectsInfiniteQueryKey: (options: Options<WorkloadGetWorkloadProjectsData>) => QueryKey<Options<WorkloadGetWorkloadProjectsData>>;
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
export declare const workloadGetWorkloadProjectsInfiniteOptions: (options: Options<WorkloadGetWorkloadProjectsData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").WorkloadEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").WorkloadEntitiesResponse, unknown>, import("../types.gen").WorkloadEntitiesResponse, QueryKey<Options<WorkloadGetWorkloadProjectsData>>, number | Pick<Pick<Options<WorkloadGetWorkloadProjectsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").WorkloadEntitiesResponse, number | Pick<Pick<Options<WorkloadGetWorkloadProjectsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").WorkloadEntitiesResponse, number | Pick<Pick<Options<WorkloadGetWorkloadProjectsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<WorkloadGetWorkloadProjectsData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").WorkloadEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const workloadGetWorkloadProjectsMutation: (options?: Partial<Options<WorkloadGetWorkloadProjectsData>>) => UseMutationOptions<WorkloadGetWorkloadProjectsResponse, AxiosError<DefaultError>, Options<WorkloadGetWorkloadProjectsData>>;
export declare const workloadGetWorkloadTasksQueryKey: (options: Options<WorkloadGetWorkloadTasksData>) => [Pick<Options<WorkloadGetWorkloadTasksData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
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
export declare const workloadGetWorkloadTasksOptions: (options: Options<WorkloadGetWorkloadTasksData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").WorkloadEntitiesResponse, Error, import("../types.gen").WorkloadEntitiesResponse, [Pick<Options<WorkloadGetWorkloadTasksData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").WorkloadEntitiesResponse, [Pick<Options<WorkloadGetWorkloadTasksData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<WorkloadGetWorkloadTasksData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").WorkloadEntitiesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const workloadGetWorkloadTasksInfiniteQueryKey: (options: Options<WorkloadGetWorkloadTasksData>) => QueryKey<Options<WorkloadGetWorkloadTasksData>>;
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
export declare const workloadGetWorkloadTasksInfiniteOptions: (options: Options<WorkloadGetWorkloadTasksData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<import("../types.gen").WorkloadEntitiesResponse, AxiosError<Error, any>, InfiniteData<import("../types.gen").WorkloadEntitiesResponse, unknown>, import("../types.gen").WorkloadEntitiesResponse, QueryKey<Options<WorkloadGetWorkloadTasksData>>, number | Pick<Pick<Options<WorkloadGetWorkloadTasksData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}, "body" | "path" | "headers" | "query">> & {
    initialData: InfiniteData<import("../types.gen").WorkloadEntitiesResponse, number | Pick<Pick<Options<WorkloadGetWorkloadTasksData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">> | (() => InfiniteData<import("../types.gen").WorkloadEntitiesResponse, number | Pick<Pick<Options<WorkloadGetWorkloadTasksData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }, "body" | "path" | "headers" | "query">>) | undefined;
} & {
    queryKey: QueryKey<Options<WorkloadGetWorkloadTasksData>> & {
        [dataTagSymbol]: InfiniteData<import("../types.gen").WorkloadEntitiesResponse, unknown>;
        [dataTagErrorSymbol]: AxiosError<Error, any>;
    };
};
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
export declare const workloadGetWorkloadTasksMutation: (options?: Partial<Options<WorkloadGetWorkloadTasksData>>) => UseMutationOptions<WorkloadGetWorkloadTasksResponse, AxiosError<DefaultError>, Options<WorkloadGetWorkloadTasksData>>;
export declare const publicisGetReportableWorkItemsPerUserQueryKey: (options: Options<PublicisGetReportableWorkItemsPerUserData>) => [Pick<Options<PublicisGetReportableWorkItemsPerUserData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const publicisGetReportableWorkItemsPerUserOptions: (options: Options<PublicisGetReportableWorkItemsPerUserData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetReportableWorkItemsResponse, Error, import("../types.gen").GetReportableWorkItemsResponse, [Pick<Options<PublicisGetReportableWorkItemsPerUserData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetReportableWorkItemsResponse, [Pick<Options<PublicisGetReportableWorkItemsPerUserData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PublicisGetReportableWorkItemsPerUserData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetReportableWorkItemsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const publicisGetReportableWorkItemsPerUserMutation: (options?: Partial<Options<PublicisGetReportableWorkItemsPerUserData>>) => UseMutationOptions<PublicisGetReportableWorkItemsPerUserResponse, AxiosError<DefaultError>, Options<PublicisGetReportableWorkItemsPerUserData>>;
export declare const publicisGetReportableTasksByIdsQueryKey: (options: Options<PublicisGetReportableTasksByIdsData>) => [Pick<Options<PublicisGetReportableTasksByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const publicisGetReportableTasksByIdsOptions: (options: Options<PublicisGetReportableTasksByIdsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetReportableTasksByIdsResponse, Error, import("../types.gen").GetReportableTasksByIdsResponse, [Pick<Options<PublicisGetReportableTasksByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetReportableTasksByIdsResponse, [Pick<Options<PublicisGetReportableTasksByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PublicisGetReportableTasksByIdsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetReportableTasksByIdsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const publicisGetReportableTasksByIdsMutation: (options?: Partial<Options<PublicisGetReportableTasksByIdsData>>) => UseMutationOptions<PublicisGetReportableTasksByIdsResponse, AxiosError<DefaultError>, Options<PublicisGetReportableTasksByIdsData>>;
export declare const publicisGetReportableTasksByIds2QueryKey: (options: Options<PublicisGetReportableTasksByIds2Data>) => [Pick<Options<PublicisGetReportableTasksByIds2Data>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const publicisGetReportableTasksByIds2Options: (options: Options<PublicisGetReportableTasksByIds2Data>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetReportableTasksByIdsResponse, Error, import("../types.gen").GetReportableTasksByIdsResponse, [Pick<Options<PublicisGetReportableTasksByIds2Data>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetReportableTasksByIdsResponse, [Pick<Options<PublicisGetReportableTasksByIds2Data>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PublicisGetReportableTasksByIds2Data>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetReportableTasksByIdsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const publicisGetReportableTasksByIds2Mutation: (options?: Partial<Options<PublicisGetReportableTasksByIds2Data>>) => UseMutationOptions<PublicisGetReportableTasksByIds2Response, AxiosError<DefaultError>, Options<PublicisGetReportableTasksByIds2Data>>;
export declare const publicisGetAssignmentsPerUsersQueryKey: (options: Options<PublicisGetAssignmentsPerUsersData>) => [Pick<Options<PublicisGetAssignmentsPerUsersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const publicisGetAssignmentsPerUsersOptions: (options: Options<PublicisGetAssignmentsPerUsersData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetAssignmentsPerUsersResponse, Error, import("../types.gen").GetAssignmentsPerUsersResponse, [Pick<Options<PublicisGetAssignmentsPerUsersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetAssignmentsPerUsersResponse, [Pick<Options<PublicisGetAssignmentsPerUsersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PublicisGetAssignmentsPerUsersData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetAssignmentsPerUsersResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const publicisGetAssignmentsPerUsersMutation: (options?: Partial<Options<PublicisGetAssignmentsPerUsersData>>) => UseMutationOptions<PublicisGetAssignmentsPerUsersResponse, AxiosError<DefaultError>, Options<PublicisGetAssignmentsPerUsersData>>;
export declare const publicisGetUsersWorkingHoursQueryKey: (options: Options<PublicisGetUsersWorkingHoursData>) => [Pick<Options<PublicisGetUsersWorkingHoursData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const publicisGetUsersWorkingHoursOptions: (options: Options<PublicisGetUsersWorkingHoursData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetUsersWorkingHoursResponse, Error, import("../types.gen").GetUsersWorkingHoursResponse, [Pick<Options<PublicisGetUsersWorkingHoursData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetUsersWorkingHoursResponse, [Pick<Options<PublicisGetUsersWorkingHoursData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PublicisGetUsersWorkingHoursData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetUsersWorkingHoursResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const publicisGetUsersWorkingHoursMutation: (options?: Partial<Options<PublicisGetUsersWorkingHoursData>>) => UseMutationOptions<PublicisGetUsersWorkingHoursResponse, AxiosError<DefaultError>, Options<PublicisGetUsersWorkingHoursData>>;
export declare const publicisGetGroupMembershipLinksQueryKey: (options: Options<PublicisGetGroupMembershipLinksData>) => [Pick<Options<PublicisGetGroupMembershipLinksData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const publicisGetGroupMembershipLinksOptions: (options: Options<PublicisGetGroupMembershipLinksData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetGroupMembershipLinksResponse, Error, import("../types.gen").GetGroupMembershipLinksResponse, [Pick<Options<PublicisGetGroupMembershipLinksData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetGroupMembershipLinksResponse, [Pick<Options<PublicisGetGroupMembershipLinksData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PublicisGetGroupMembershipLinksData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetGroupMembershipLinksResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const publicisGetGroupMembershipLinksMutation: (options?: Partial<Options<PublicisGetGroupMembershipLinksData>>) => UseMutationOptions<PublicisGetGroupMembershipLinksResponse, AxiosError<DefaultError>, Options<PublicisGetGroupMembershipLinksData>>;
export declare const publicisGetResourceProjectsQueryKey: (options: Options<PublicisGetResourceProjectsData>) => [Pick<Options<PublicisGetResourceProjectsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}];
export declare const publicisGetResourceProjectsOptions: (options: Options<PublicisGetResourceProjectsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetResourceProjectsResponse, Error, import("../types.gen").GetResourceProjectsResponse, [Pick<Options<PublicisGetResourceProjectsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetResourceProjectsResponse, [Pick<Options<PublicisGetResourceProjectsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PublicisGetResourceProjectsData>, "body" | "path" | "headers" | "baseURL" | "query"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetResourceProjectsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const publicisGetResourceProjectsMutation: (options?: Partial<Options<PublicisGetResourceProjectsData>>) => UseMutationOptions<PublicisGetResourceProjectsResponse, AxiosError<DefaultError>, Options<PublicisGetResourceProjectsData>>;
//# sourceMappingURL=react-query.gen.d.ts.map