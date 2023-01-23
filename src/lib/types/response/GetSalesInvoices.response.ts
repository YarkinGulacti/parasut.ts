import { ResourceType } from "../enum/ResourceType.enum";
import { ItemType } from "../enum/ItemType.enum";
import { PaymentStatus } from "../enum/PaymentStatus.enum";
import { Currency } from "../enum/Currency.enum";

export interface GetSalesInvoicesResponse {
    data?: {
        id?: string;
        type?: ResourceType.SalesInvoices;
        attributes?: {
            archived?: boolean;
            invoice_no?: string;
            net_total?: number;
            gross_total?: number;
            withholding?: number;
            total_excise_duty?: number;
            total_communications_tax?: number;
            total_vat?: number;
            vat_withholding?: number;
            total_discount?: number;
            total_invoice_discount?: number;
            before_taxes_total?: number;
            remaining?: number;
            remaining_in_trl?: number;
            payment_status?: PaymentStatus;
            created_at?: string;
            updated_at?: string;
            item_type?: ItemType;
            description?: string;
            issue_date?: string;
            due_date?: string;
            invoice_series?: string;
            invoice_id?: number;
            currency?: Currency;
            exchange_rate?: number;
            withholding_rate?: number;
            vat_withholding_rate?: number;
            invoice_discount_type?: "percentage" | "amount";
            invoice_discount?: number;
            billing_address?: string;
            billing_phone?: string;
            billing_fax?: string;
            tax_office?: string;
            tax_number?: string;
            country?: string;
            city?: string;
            district?: string;
            is_abroad?: boolean;
            order_no?: string;
            order_date?: string;
            shipment_addres?: string;
            shipment_included?: boolean;
            cash_sale?: boolean;
            billing_postal_code?: string;
            contact_type?: string;
            days_overdue?: number;
            days_till_due_date?: number;
            is_recurred_item?: boolean;
            item_type_before_cancellation?: ItemType;
            net_total_in_trl?: number;
            payer_tax_numbers?: string;
            print_note?: string;
            print_url?: string;
            printed_at?: string;
            sharing_preview_path?: string;
            sharing_preview_url?: string;
            sharings_count?: number;
            shipment_date?: string;
            shipment_document_no?: number;
            total_paid?: string;
        };
        relationships?: {
            category?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                };
            };
            contact?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                };
            };
            details?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            payments?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            tags?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            activities?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            refund_of?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                };
            };
            refunds?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            sharings?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            active_e_document?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                };
            };
            recurrence_of: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                };
            };
            shipment_documents: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            sales_offer?: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                };
            };
            price_list: {
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
            failed_e_invoice: {
                meta?: {
                    id?: string;
                    type?: ResourceType;
                };
            };
        };
    }[];
    included?: {
        id?: string;
        type?: ResourceType;
        attributes?: Record<string, any>;
        relationships?: Record<string, any>;
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
