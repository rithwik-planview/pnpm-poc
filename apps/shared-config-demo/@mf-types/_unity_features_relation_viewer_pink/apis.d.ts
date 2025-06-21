
    export type RemoteKeys = '_unity_features_relation_viewer_pink' | '_unity_features_relation_viewer_pink/App';
    type PackageType<T> = T extends '_unity_features_relation_viewer_pink/App' ? typeof import('_unity_features_relation_viewer_pink/App') :T extends '_unity_features_relation_viewer_pink' ? typeof import('_unity_features_relation_viewer_pink') :any;