import { ResourceType } from "../enum/ResourceType.enum";

export interface GetCategoriesResponse {
    data: {
        id: string;
        type: ResourceType.ItemCategories;
        attributes: {
            full_path: string;
            created_at: string;
            updated_at: string;
            name: string;
            bg_color: string;
            text_color: string;
            category_type: string;
            parent_id: number;
        };
        relationships: {
            parent_category: {
                data: {
                    id: string;
                    type: ResourceType.ItemCategories;
                };
            };
            subcategories: {
                data: {
                    id: string;
                    type: ResourceType.ItemCategories;
                }[];
            };
        };
    }[];
    included: {
        id: string;
        type: ResourceType;
        attributes: Record<string, any>;
        relationships: Record<string, any>;
    }[];
    meta: {
        current_page: number;
        total_pages: number;
        total_count: number;
    };
}
