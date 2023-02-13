import { ResourceType } from "../enum/ResourceType.enum";
import { CategoryAttributes } from "../interface/CategoryAttributes.interface";
import { CategoryRelationships } from "../interface/CategoryRelationships.interface";
import { Meta } from "../interface/Meta.interface";

export interface GetCategoriesResponse {
    data: {
        id?: string;
        type?: ResourceType.ItemCategories;
        attributes?: CategoryAttributes;
        relationships?: CategoryRelationships;
        meta?: Meta;
    }[];
    included: {
        id: string;
        type: ResourceType;
        attributes: Record<string, any>;
        relationships: Record<string, any>;
        meta?: {
            created_at?: string;
            updated_at?: string;
        };
    }[];
    links?: {
        self?: string;
        first?: string;
        prev?: string;
        next?: string;
        last?: string;
    };
    meta?: {
        current_page?: number;
        total_pages?: number;
        total_count?: number;
        per_page?: number;
    };
}
