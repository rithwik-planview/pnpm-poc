
    export type RemoteKeys = '_unity_features_relation_viewer' | '_unity_features_relation_viewer/App';
    type PackageType<T> = T extends '_unity_features_relation_viewer/App' ? typeof import('_unity_features_relation_viewer/App') :T extends '_unity_features_relation_viewer' ? typeof import('_unity_features_relation_viewer') :any;