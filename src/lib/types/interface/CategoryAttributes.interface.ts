import { CategoryType } from "../enum";

export interface CategoryAttributes {
    full_path?: Array<string>;
    created_at?: string;
    updated_at?: string;
    name?: string;
    bg_color?: string;
    text_color?: string;
    category_type?: CategoryType;
    parent_id?: number;
}
