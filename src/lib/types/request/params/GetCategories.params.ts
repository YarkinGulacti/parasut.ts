export interface GetCategoriesParams {
    "filter[name]"?: string;
    "filter[category_type]"?: string;
    "page[number]"?: number;
    "page[size]"?: number;
    /**
     * @description Comma seperated string. Can have `Include.ParentCategory` and `Include.SubCategories`.
     */
    include?: string;
}
