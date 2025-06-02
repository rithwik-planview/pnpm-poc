export type RemoteKeys = '_unity_core_shell';
type PackageType<T> = T extends '_unity_core_shell' ? typeof import('_unity_core_shell') : any;
