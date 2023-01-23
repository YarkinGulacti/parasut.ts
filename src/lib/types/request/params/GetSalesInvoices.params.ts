import { PrintStatus } from "../../enum/PrintStatus.enum";
import { PaymentStatus } from "../../enum/PaymentStatus.enum";

export interface GetSalesInvoicesParams {
    "filter[issue_date]"?: string;
    "filter[due_date]"?: string;
    "filter[contact_id]"?: number;
    "filter[invoice_id]"?: number;
    "filter[invoice_series]"?: string;
    /**
     * Comma seperated string. Available values;
     * ```js
     * ItemType.Invoice;
     * ItemType.Refund;
     * ItemType.Estimate;
     * ItemType.Export;
     * ```
     */
    "filter[item_type]"?: string;
    /**
     * Comma seperated string. Available values;
     * ```js
     * PrintStatus.Printed;
     * PrintStatus.NotPrinted;
     * PrintStatus.InvoicesNotSent;
     * PrintStatus.EInvoicesSent;
     * PrintStatus.EArchiveSent;
     * PrintStatus.ESMMSent;
     * ```
     */
    "filter[print_status]"?: string;
    /**
     * Comma seperated string. Available values;
     * ```js
     * PaymentStatus.Overdue;
     * PaymentStatus.NotDue;
     * PaymentStatus.Unscheduled;
     * PaymentStatus.Paid;
     * ```
     */
    "filter[payment_status]"?: string;
    /**
     * Available values;
     * ```js
     * Sort.Id
     * Sort.IssueDate
     * Sort.DueDate
     * Sort.Remaining
     * Sort.RemainingInTrl
     * Sort.Description
     * Sort.NetTotal
     * ```
     */
    sort?: string;
    "page[number]"?: number;
    "page[size]"?: number;
    /**
     * Comma seperated string. Available values;
     * ```js
     * Include.Category;
     * Include.Contact;
     * Include.Details;
     * Include.DetailsDotProduct;
     * Include.DetailsDotWarehouse;
     * Include.Payments;
     * Include.PaymentsDotTransaction;
     * Include.Tags;
     * Include.Sharings;
     * Include.RecurrencePlan;
     * Include.ActiveEDocument;
     * ```
     */
    include?: string;
}
