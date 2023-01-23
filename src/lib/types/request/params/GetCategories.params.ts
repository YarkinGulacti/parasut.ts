export interface GetCategoriesParams {
    "filter[name]"?: string;
    "filter[category_type]"?: string;
    /**
     * Available values;
     * ```js
     * Sort.Id;
     * Sort.Name;
     * Sort.CategoryType;
     * ``
     */
    sort?: string;
    "page[number]"?: number;
    "page[size]"?: number;
    /**
     * Comma seperated string. Available values;
     * ```js
     * Include.ParentCategory;
     * Include.SubCategories;
     * ```
     */
    include?: string;
}
