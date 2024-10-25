
    export type RemoteKeys = 'federation_provider/button' | 'federation_provider/short-text';
    type PackageType<T> = T extends 'federation_provider/short-text' ? typeof import('federation_provider/short-text') :T extends 'federation_provider/button' ? typeof import('federation_provider/button') :any;