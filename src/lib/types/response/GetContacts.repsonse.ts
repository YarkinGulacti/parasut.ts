import { ResourceType } from "../enum/ResourceType.enum";
import { ContactType } from "../enum/ContactType.enum";
import { AccountType } from "../enum/AccountType.enum";

export interface GetContactsResponse {
    data?: {
        id?: string;
        type?: ResourceType.Contacts;
        attributes?: {
            created_at?: string;
            updated_at?: string;
            contact_type?: ContactType;
            name?: string;
            email?: string;
            short_name?: string;
            balance?: string;
            trl_balance?: string;
            usd_balance?: string;
            eur_balance?: string;
            gbp_balance?: string;
            tax_number?: string;
            tax_office?: string;
            archived?: boolean;
            account_type?: AccountType;
            city?: string;
            district?: string;
            address?: string;
            phone?: string;
            fax?: string;
            is_abroad?: boolean;
            term_days?: number;
            invoicing_preferences?: {
                e_invoice_scenario?: string;
                e_invoice_send_to?: string;
                e_document_note?: string;
                e_document_append_contact_balance?: boolean;
                e_document_accounts?: Array<string>;
            };
            sharings_count?: number;
            ibans?: Array<string>;
            exchange_rate_type?: string;
            opening_balance?: Record<string, any>;
            untrackable?: boolean;
            country?: string;
            postal_code?: string;
            iban?: string;
            sharing_preview_url?: string;
            sharing_preview_path?: string;
            payment_reminder_preview_url?: string;
        };
        relationships?: {
            price_list: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            activities: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            e_invoice_inboxes: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            sharings: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            tags: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            comments: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            operated_by: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                };
            };
            category?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                };
            };
            contact_portal?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                };
            };
            contact_people?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
        };
    }[];
    included?: {
        id?: string;
        type?: ResourceType;
        attributes?: Record<string, any>;
        relationships?: Record<string, any>;
        meta?: {
            created_at?: string;
            updated_at?: string;
        };
    }[];
    meta?: {
        current_page?: number;
        total_pages?: number;
        total_count?: number;
        per_page?: number;
        payable_total?: string;
        collectible_total?: string;
        supplier_payments_due_in_thirty_days_total?: string;
        customer_payments_due_in_thirty_days_total?: string;
        export_url?: string;
    };
}
