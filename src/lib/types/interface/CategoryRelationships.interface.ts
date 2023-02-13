import { ResourceType } from "../enum";

export interface CategoryRelationships {
    parent_category?: {
        data?: {
            id?: string;
            type?: ResourceType.ItemCategories;
        };
    };
    subcategories?: {
        data?: {
            id?: string;
            type?: ResourceType.ItemCategories;
        }[];
    };
}
