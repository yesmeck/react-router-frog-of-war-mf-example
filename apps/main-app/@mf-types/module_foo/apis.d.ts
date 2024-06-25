
    export type RemoteKeys = 'module_foo/entry' | 'module_foo/button';
    type PackageType<T> = T extends 'module_foo/button' ? typeof import('module_foo/button') :T extends 'module_foo/entry' ? typeof import('module_foo/entry') :any;