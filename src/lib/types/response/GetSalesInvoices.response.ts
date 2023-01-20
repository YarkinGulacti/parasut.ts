import { ItemType } from "../enum/ItemType.enum";
import { PaymentStatus } from "../enum/PaymentStatus.enum";

export interface GetSalesInvoicesResponse {
    data: {
        id: string;
        type: string;
        attributes: {
            archived: boolean;
            invoice_no: string;
            net_total: number;
            gross_total: number;
            withholding: number;
            total_excise_duty: number;
            total_communications_tax: number;
            total_vat: number;
            vat_withholding: number;
            total_discount: number;
            total_invoice_discount: number;
            before_taxes_total: number;
            remaining: number;
            remaining_in_trl: number;
            payment_status: PaymentStatus;
            created_at: string;
            updated_at: string;
            item_type: ItemType;
            description: string;
            issue_date: string;
            due_date: string;
            invoice_series: string;
            invoice_id: number;
            currency: string;
            exchange_rate: number;
            withholding_rate: number;
            vat_withholding_rate: number;
            invoice_discount_type: string;
            invoice_discount: number;
            billing_address: string;
            billing_phone: string;
            billing_fax: string;
            tax_office: string;
            tax_number: string;
            country: string;
            city: string;
            district: string;
            is_abroad: boolean;
            order_no: string;
            order_date: string;
            shipment_addres: string;
            shipment_included: boolean;
            cash_sale: boolean;
        };
        relationships: {
            category: {
                data: {
                    id: string;
                    type: string;
                };
            };
            contact: {
                data: {
                    id: string;
                    type: string;
                };
            };
            details: {
                data: [
                    {
                        id: string;
                        type: string;
                    }
                ];
            };
            payments: {
                data: [
                    {
                        id: string;
                        type: string;
                    }
                ];
            };
            tags: {
                data: [
                    {
                        id: string;
                        type: string;
                    }
                ];
            };
            sales_offer: {
                data: {
                    id: string;
                    type: string;
                };
            };
            sharings: {
                data: [
                    {
                        id: string;
                        type: string;
                    }
                ];
            };
            recurrence_plan: {
                data: {
                    id: string;
                    type: string;
                };
            };
            active_e_document: {
                data: {
                    id: string;
                    type: string;
                };
            };
        };
    }[];
    included: {
        id: string;
        type: string;
        attributes: Record<string, any>;
        relationships: Record<string, any>;
    }[];
    meta: {
        current_page: number;
        total_pages: number;
        total_count: number;
    };
}
