import { ResourceType } from "../enum/ResourceType.enum";
import { SalesInvoiceAttributes } from "../interface/SalesInvoiceAttributes.interface";
import { SalesInvoiceRelationships } from "../interface/SalesInvoiceRelationships.interface";
import { Meta } from "../interface/Meta.interface";

export interface GetSalesInvoicesResponse {
    data?: {
        id?: string;
        type?: ResourceType.SalesInvoices;
        attributes?: SalesInvoiceAttributes;
        relationships?: Array<SalesInvoiceRelationships>;
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
        outstanding_total?: string;
        net_total?: string;
        export_url?: string;
        e_documents_download_url?: string;
    };
}
