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
            sales_offer?: {
                data?: {
                    id?: string;
                    type?: ResourceType;
                };
            };
            sharings?: {
                data?: {
                    id?: string;
                    type?: ResourceType;
                }[];
            };
            recurrence_plan?: {
                data?: {
                    id?: string;
                    type?: ResourceType;
                };
            };
            active_e_document?: {
                data?: {
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
    meta?: {
        current_page?: number;
        total_pages?: number;
        total_count?: number;
    };
}
