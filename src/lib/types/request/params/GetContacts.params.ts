import { AccountType } from "../../enum/AccountType.enum";

export interface GetContactsParams {
    "filter[name]"?: string;
    "filter[tax_number]"?: string;
    "filter[tax_office]"?: string;
    "filter[city]"?: string;
    "filter[account_type]"?: AccountType;
    sort?: string;
    "page[number]"?: number;
    "page[size]"?: number;
    /**
     * @description Comma seperated string. Can have `Include.Category`, `Include.ContactPortal` and `Include.ContactPeople`.
     */
    include?: string;
}
