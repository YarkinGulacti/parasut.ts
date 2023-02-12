import { ResourceType } from "../enum/ResourceType.enum";

export interface SalesInvoiceRelationships {
    category?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    };
    contact?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    };
    details?: {
        data?: {
            id?: string;
            type?: ResourceType;
        }[];
    };
    payments?: {
        data?: {
            id?: string;
            type?: ResourceType;
        }[];
    };
    tags?: {
        data?: {
            id?: string;
            type?: ResourceType;
        }[];
    };
    activities?: {
        data?: {
            id?: string;
            type?: ResourceType;
        }[];
    };
    refund_of?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    };
    refunds?: {
        data?: {
            id?: string;
            type?: ResourceType;
        }[];
    };
    sharings?: {
        data?: {
            id?: string;
            type?: ResourceType;
        }[];
    };
    active_e_document?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    };
    recurrence_of: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    };
    shipment_documents: {
        data?: {
            id?: string;
            type?: ResourceType;
        }[];
    };
    sales_offer?: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    };
    price_list: {
        data?: {
            id?: string;
            type?: ResourceType;
        }[];
    };
    operated_by: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    };
    failed_e_invoice: {
        data?: {
            id?: string;
            type?: ResourceType;
        };
    };
}
