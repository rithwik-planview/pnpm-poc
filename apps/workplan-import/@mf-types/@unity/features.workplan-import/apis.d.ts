export type RemoteKeys = '@unity/features.workplan-import' | '@unity/features.workplan-import/App';
type PackageType<T> = T extends '@unity/features.workplan-import/App'
    ? typeof import('@unity/features.workplan-import/App')
    : T extends '@unity/features.workplan-import'
      ? typeof import('@unity/features.workplan-import')
      : any;
