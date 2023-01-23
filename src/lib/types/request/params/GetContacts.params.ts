import { AccountType } from "../../enum/AccountType.enum";

export interface GetContactsParams {
    "filter[name]"?: string;
    "filter[tax_number]"?: string;
    "filter[tax_office]"?: string;
    "filter[city]"?: string;
    /**
     * Comma seperated string. Available values;
     * ```js
     * AccountType.Customer;
     * AccountType.Supplier;
     * ```
     */
    "filter[account_type]"?: string;
    /**
     * Available values;
     * ```js
     * Sort.Id;
     * Sort.Balance;
     * Sort.Name;
     * Sort.Email;
     * ```
     */
    sort?: string;
    "page[number]"?: number;
    "page[size]"?: number;
    /**
     * Comma seperated string. Available values;
     * ```js
     * Include.Category;
     * Include.ContactPortal;
     * Include.ContactPeople;
     * ```
     */
    include?: string;
}
