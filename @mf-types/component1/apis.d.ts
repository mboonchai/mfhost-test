
    export type RemoteKeys = 'component1/button' | 'component1/short-text';
    type PackageType<T> = T extends 'component1/short-text' ? typeof import('component1/short-text') :T extends 'component1/button' ? typeof import('component1/button') :any;