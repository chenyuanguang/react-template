declare namespace IndexModuleLessNamespace {
    export interface IIndexModuleLess {
        app: string;
        file: string;
        mappings: string;
        names: string;
        section: string;
        sources: string;
        sourcesContent: string;
        version: string;
    }
}

declare const IndexModuleLessModule: IndexModuleLessNamespace.IIndexModuleLess & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: IndexModuleLessNamespace.IIndexModuleLess;
};

export = IndexModuleLessModule;
