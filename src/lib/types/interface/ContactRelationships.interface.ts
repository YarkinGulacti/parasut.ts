import { ResourceType } from "../enum/ResourceType.enum";

export interface ContactRelationships {
    category?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    };
    price_list?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    };
    contact_portal?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    };
    contact_people?: {
        data?: {
            id?: string;
            type?: ResourceType;
        }[];
    };
    activities: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    }[];
    e_invoice_inboxes?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    }[];
    sharings?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    }[];
    tags?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    }[];
    comments?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    }[];
    operated_by?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    }[];
}
