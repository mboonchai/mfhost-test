
    export type RemoteKeys = 'component1/button' | 'component1/short-text' | 'component1/generic';
    type PackageType<T> = T extends 'component1/generic' ? typeof import('component1/generic') :T extends 'component1/short-text' ? typeof import('component1/short-text') :T extends 'component1/button' ? typeof import('component1/button') :any;