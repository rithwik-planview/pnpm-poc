
    export type RemoteKeys = '@unity/features.relation-viewer' | '@unity/features.relation-viewer/App';
    type PackageType<T> = T extends '@unity/features.relation-viewer/App' ? typeof import('@unity/features.relation-viewer/App') :T extends '@unity/features.relation-viewer' ? typeof import('@unity/features.relation-viewer') :any;