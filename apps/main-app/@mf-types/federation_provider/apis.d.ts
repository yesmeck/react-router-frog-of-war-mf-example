
    export type RemoteKeys = 'federation_provider/entry';
    type PackageType<T> = T extends 'federation_provider/entry' ? typeof import('federation_provider/entry') :any;