export type RemoteKeys = '@unity/features.feature-2' | '@unity/features.feature-2/App';
type PackageType<T> = T extends '@unity/features.feature-2/App'
    ? typeof import('@unity/features.feature-2/App')
    : T extends '@unity/features.feature-2'
      ? typeof import('@unity/features.feature-2')
      : any;
