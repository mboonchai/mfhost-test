
    export type RemoteKeys = 'component1/button';
    type PackageType<T> = T extends 'component1/button' ? typeof import('component1/button') :any;