import axios from "axios";
import { HTTPMethods, ParasutEndpoints } from "./Endpoints";
import { GetSalesInvoicesParams } from "./types/request/params/GetSalesInvoices.params";
import { GetSalesInvoicesResponse } from "./types/response/GetSalesInvoices.response";
import { GetContactsParams } from "./types/request/params/GetContacts.params";
import { GetContactsResponse } from "./types/response/GetContacts.repsonse";
import { GetCategoriesParams } from "./types/request/params/GetCategories.params";
import { GetCategoriesResponse } from "./types/response/GetCategories.response";

export class ParasutService {
    constructor(private company_id: number) {}

    private buildQueryParameters(params: any): string {
        let queryParameters = [];

        for (const key of Object.keys(params)) {
            queryParameters.push(`${key}=${params[key] as string}`);
        }

        return `?${queryParameters.join("&")}`;
    }

    private async buildRequest<T>(
        baseUrl: string,
        endpoint: string,
        method: HTTPMethods,
        params?: any,
        body?: any,
        headers?: any
    ) {
        const query = this.buildQueryParameters(params);
        const url = `${baseUrl}${endpoint}${query}`;
        const response = await axios[method](url, body, {
            headers: headers,
        });

        return response.data as T;
    }

    public async GetSalesInvoices(
        params?: GetSalesInvoicesParams & {
            access_token: string;
        }
    ) {
        try {
            return await this.buildRequest<GetSalesInvoicesResponse>(
                ParasutEndpoints.BASE_URL,
                `${ParasutEndpoints.VERSION}/${this.company_id}${ParasutEndpoints.GET_SALES_INVOICES}`,
                HTTPMethods.GET,
                params
            );
        } catch (error) {
            throw error;
        }
    }

    public async GetContacts(
        params?: GetContactsParams & {
            access_token: string;
        }
    ) {
        try {
            return await this.buildRequest<GetContactsResponse>(
                ParasutEndpoints.BASE_URL,
                `${ParasutEndpoints.VERSION}/${this.company_id}${ParasutEndpoints.GET_CONTACTS}`,
                HTTPMethods.GET,
                params
            );
        } catch (error) {
            throw error;
        }
    }

    public async GetCategories(
        params?: GetCategoriesParams & {
            access_token: string;
        }
    ) {
        try {
            return await this.buildRequest<GetCategoriesResponse>(
                ParasutEndpoints.BASE_URL,
                `${ParasutEndpoints.VERSION}/${this.company_id}${ParasutEndpoints.GET_CATEGORIES}`,
                HTTPMethods.GET,
                params
            );
        } catch (error) {
            throw error;
        }
    }
}
