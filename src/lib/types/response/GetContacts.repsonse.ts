import { ResourceType } from "../enum/ResourceType.enum";
import { ContactRelationships } from "../interface/ContactRelationships.interface";
import { ContactAttributes } from "../interface/ContactAttributes.interface";
import { Meta } from "../interface/Meta.interface";

export interface GetContactsResponse {
    data?: {
        id?: string;
        type?: ResourceType.Contacts;
        attributes?: ContactAttributes;
        relationships?: ContactRelationships;
        meta?: Meta;
    }[];
    included?: {
        id?: string;
        type?: ResourceType;
        attributes?: Record<string, any>;
        relationships?: Record<string, any>;
        meta?: Meta;
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
        payable_total?: string;
        collectible_total: string;
        supplier_payments_due_in_thirty_days_total?: string;
        customer_payments_due_in_thirty_days_total?: string;
        export_url?: string;
    };
}
