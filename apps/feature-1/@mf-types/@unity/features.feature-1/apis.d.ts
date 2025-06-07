
    export type RemoteKeys = '@unity/features.feature-1' | '@unity/features.feature-1/App';
    type PackageType<T> = T extends '@unity/features.feature-1/App' ? typeof import('@unity/features.feature-1/App') :T extends '@unity/features.feature-1' ? typeof import('@unity/features.feature-1') :any;