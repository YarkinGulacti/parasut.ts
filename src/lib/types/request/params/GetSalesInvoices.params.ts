import { ItemType } from "../../enum/ItemType.enum";
import { PrintStatus } from "../../enum/PrintStatus.enum";
import { PaymentStatus } from "../../enum/PaymentStatus.enum";
import { Include } from "../../enum/Include.enum";

export interface GetSalesInvoicesParams {
    "filter[issue_date]"?: string;
    "filter[due_date]"?: string;
    "filter[contact_id]"?: number;
    "filter[invoice_id]"?: number;
    "filter[invoice_series]"?: string;
    "filter[item_type]"?: ItemType;
    "filter[print_status]"?: PrintStatus;
    "filter[payment_status]"?: PaymentStatus;
    "page[number]"?: number;
    "page[size]"?: number;
    /**
     * @description Comma seperated string.
     * @enum Include `Include.Category`, `Include.Contact`, `Include.Details`, `Include.DetailsDotProduct`, `Include.DetailsDotWarehouse`, `Include.Payments`, `Include.PaymentsDotTransaction`, `Include.Tags`, `Include.Sharings`, `Include.RecurrencePlan`, `Include.ActiveEDocument`.
     */
    include?: string;
}
