declare namespace IndexModuleLessNamespace {
    export interface IIndexModuleLess {
        file: string;
        mappings: string;
        names: string;
        sources: string;
        sourcesContent: string;
        ul: string;
        version: string;
    }
}

declare const IndexModuleLessModule: IndexModuleLessNamespace.IIndexModuleLess & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: IndexModuleLessNamespace.IIndexModuleLess;
};

export = IndexModuleLessModule;
