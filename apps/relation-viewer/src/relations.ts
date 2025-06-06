export const relations = {
    Project: [
        {
            relationName: 'customers',
            title: 'Customers',
            relationEntityType: 'Customer',
            displayField: 'name',
        },
        {
            relationName: 'expenseSheets',
            title: 'Expense Sheets',
            relationEntityType: 'ExpenseSheet',
            displayField: 'description',
        },
        {
            relationName: 'children',
            title: 'Sub Items',
            relationEntityType: 'WorkItem',
            displayField: 'name',
        },
        {
            relationName: 'shortcuts',
            title: 'Shortcuts',
            relationEntityType: 'WorkItem',
            displayField: 'name',
        },
        {
            relationName: 'impacting',
            title: 'Impacting',
            relationEntityType: 'WorkItem',
            displayField: 'name',
        },
        {
            relationName: 'impactedBy',
            title: 'Impacted By',
            relationEntityType: 'GenericProject',
            displayField: 'name',
        },
        {
            relationName: 'directLaborResources',
            title: 'Labor Resources',
            relationEntityType: 'ResourceEntity',
            displayField: 'name',
        },
        {
            relationName: 'whereUsedAsShortcut',
            title: 'Shortcut in',
            relationEntityType: 'Project',
            displayField: 'name',
        },
        {
            relationName: 'portfolios',
            title: 'Portfolios',
            relationEntityType: 'Portfolio',
            displayField: 'name',
        },
        {
            relationName: 'directAssetResources',
            title: "Work Item's direct Asset Resources",
            relationEntityType: 'GenericAsset',
            displayField: 'displayName',
        },
        {
            relationName: 'r_RudysCOs',
            title: 'My COs',
            relationEntityType: 'C_RudysCO',
            displayField: 'name',
        },
        {
            relationName: 'r_reverseproject',
            title: 'reverse project',
            relationEntityType: 'Project',
            displayField: 'name',
        },
        {
            relationName: 'groups',
            title: 'Groups',
            relationEntityType: 'Group',
            displayField: 'name',
        },
        {
            relationName: 'targetedIssues',
            title: 'Targeted Cases',
            relationEntityType: 'Case',
            displayField: 'title',
        },
        {
            relationName: 'jobTitles',
            title: 'Job Titles',
            relationEntityType: 'JobTitle',
            displayField: 'name',
        },
        {
            relationName: 'aggregatedNonLaborResources',
            title: 'Aggregated Non-Labor Resources',
            relationEntityType: 'NonLaborResource',
            displayField: 'name',
        },
        {
            relationName: 'aggregatedLaborResources',
            title: 'Aggregated Labor Resources',
            relationEntityType: 'ResourceEntity',
            displayField: 'name',
        },
        {
            relationName: 'directNonLaborResources',
            title: 'Non-Labor Resources',
            relationEntityType: 'NonLaborResource',
            displayField: 'name',
        },
        {
            relationName: 'directFixedPriceResources',
            title: "Work Item's direct Fixed Price Resources",
            relationEntityType: 'FixedPriceResource',
            displayField: 'name',
        },
        {
            relationName: 'aggregatedFixedPriceResources',
            title: "Work Item's aggregated Fixed Price Resources",
            relationEntityType: 'FixedPriceResource',
            displayField: 'name',
        },
        {
            relationName: 'aggregatedAssetResources',
            title: "Work Item's aggregated Asset Resources",
            relationEntityType: 'GenericAsset',
            displayField: 'displayName',
        },
        {
            relationName: 'successors',
            title: 'Successors',
            relationEntityType: 'WorkItem',
            displayField: 'name',
        },
        {
            relationName: 'predecessors',
            title: 'Predecessors',
            relationEntityType: 'WorkItem',
            displayField: 'name',
        },
        {
            relationName: 'documents',
            title: 'Files',
            relationEntityType: 'Document',
            displayField: 'name',
        },
        {
            relationName: 'usersOpenedStopwatches',
            title: 'Active Stopwatch Users',
            relationEntityType: 'User',
            displayField: 'displayName',
        },
        {
            relationName: 'expenses',
            title: 'Expenses',
            relationEntityType: 'Expense',
            displayField: 'description',
        },
        {
            relationName: 'issues',
            title: 'Cases',
            relationEntityType: 'Case',
            displayField: 'title',
        },
        {
            relationName: 'resourcesAndPlaceholders',
            title: 'Resources',
            relationEntityType: 'ResourceEntity',
            displayField: 'name',
        },
        {
            relationName: 'reviewers',
            title: 'Reviewers',
            relationEntityType: 'User',
            displayField: 'displayName',
        },
        {
            relationName: 'managers',
            title: 'Managers',
            relationEntityType: 'User',
            displayField: 'displayName',
        },
        {
            relationName: 'projectCustomers',
            title: 'Project Customers',
            relationEntityType: 'Customer',
            displayField: 'name',
        },
        {
            relationName: 'topics',
            title: 'Topics',
            relationEntityType: 'Topic',
            displayField: 'name',
        },
        {
            relationName: 'relatedIssues',
            title: 'Issues',
            relationEntityType: 'Issue',
            displayField: 'title',
        },
        {
            relationName: 'relatedRisks',
            title: 'Risks',
            relationEntityType: 'Risk',
            displayField: 'title',
        },
        {
            relationName: 'relatedBugs',
            title: 'Bugs',
            relationEntityType: 'Bug',
            displayField: 'title',
        },
        {
            relationName: 'relatedRequests',
            title: 'Requests',
            relationEntityType: 'EnhancementRequest',
            displayField: 'title',
        },
        {
            relationName: 'originatedIssues',
            title: 'Originated Cases',
            relationEntityType: 'Case',
            displayField: 'title',
        },
        {
            relationName: 'snapshotVersionData',
            title: 'Snapshot Versions',
            relationEntityType: 'WorkItemVersion',
            displayField: 'name',
        },
        {
            relationName: 'decisions',
            title: 'Decisions',
            relationEntityType: 'Decision',
            displayField: 'name',
        },
        {
            relationName: 'meetingNotes',
            title: 'Meeting Notes',
            relationEntityType: 'MeetingNote',
            displayField: 'title',
        },
        {
            relationName: 'actionItems',
            title: 'Action Items',
            relationEntityType: 'ActionItem',
            displayField: 'name',
        },
        {
            relationName: 'targets',
            title: 'Targets',
            relationEntityType: 'Target',
            displayField: 'name',
        },
        {
            relationName: 'contributions',
            title: 'Contributions',
            relationEntityType: 'Contribution',
            displayField: 'name',
        },
        {
            relationName: 'objectives',
            title: 'Objectives',
            relationEntityType: 'Objective',
            displayField: 'name',
        },
        {
            relationName: 'r_WI_refwork',
            title: 'WI_refwork',
            relationEntityType: 'C_RudysCO',
            displayField: 'name',
        },
    ],
};
