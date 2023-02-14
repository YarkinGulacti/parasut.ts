import axios from "axios";
import _ from "lodash";
import { HTTPMethods, ParasutEndpoints } from "./Endpoints";
import { GetSalesInvoicesParams } from "./types/request/params/GetSalesInvoices.params";
import { GetSalesInvoicesResponse } from "./types/response/GetSalesInvoices.response";
import { GetContactsParams } from "./types/request/params/GetContacts.params";
import { GetContactsResponse } from "./types/response/GetContacts.repsonse";
import { GetCategoriesParams } from "./types/request/params/GetCategories.params";
import { GetCategoriesResponse } from "./types/response/GetCategories.response";

export class ParasutService {
    constructor(private company_id: number) {}

    private async buildRequest<T>(
        baseUrl: string,
        endpoint: string,
        method: HTTPMethods,
        params?: any,
        body?: any,
        headers?: any,
    ) {
        const url = `${baseUrl}${endpoint}`;
        const config = {
            method,
            url,
            headers,
            params,
        };

        const response = await axios(config);

        return response.data as T;
    }

    private queryBuilder(params: any) {
        const replicate: any = _.cloneDeep(params);
        const query: any = {};

        delete replicate["access_token"];

        if (params)
            for (const k of Object.keys(params)) {
                if (!replicate[k]) continue;

                if (typeof replicate[k] === "object") {
                    let definedQuery = "";
                    let definedValue: any;

                    for (const key of Object.keys(replicate[k])) {
                        if (replicate[k][key] !== undefined) {
                            definedQuery = key;
                            definedValue = replicate[k][key];
                            break;
                        }
                    }

                    query[`${k}${definedQuery}`] = definedValue;
                } else if (replicate[k]) {
                    query[k] = replicate[k];
                }
            }

        return query;
    }

    public async GetSalesInvoices(
        params?: GetSalesInvoicesParams & {
            access_token: string;
        },
    ) {
        try {
            return await this.buildRequest<GetSalesInvoicesResponse>(
                ParasutEndpoints.BASE_URL,
                `${ParasutEndpoints.VERSION}/${this.company_id}${ParasutEndpoints.GET_SALES_INVOICES}`,
                HTTPMethods.GET,
                this.queryBuilder(params),
                undefined,
                {
                    Authorization: "Bearer " + params?.access_token,
                },
            );
        } catch (error) {
            throw error;
        }
    }

    public async GetContacts(
        params?: GetContactsParams & {
            access_token: string;
        },
    ) {
        try {
            return await this.buildRequest<GetContactsResponse>(
                ParasutEndpoints.BASE_URL,
                `${ParasutEndpoints.VERSION}/${this.company_id}${ParasutEndpoints.GET_CONTACTS}`,
                HTTPMethods.GET,
                this.queryBuilder(params),
                undefined,
                {
                    Authorization: "Bearer " + params?.access_token,
                },
            );
        } catch (error) {
            throw error;
        }
    }

    public async GetCategories(
        params?: GetCategoriesParams & {
            access_token: string;
        },
    ) {
        try {
            return await this.buildRequest<GetCategoriesResponse>(
                ParasutEndpoints.BASE_URL,
                `${ParasutEndpoints.VERSION}/${this.company_id}${ParasutEndpoints.GET_CATEGORIES}`,
                HTTPMethods.GET,
                this.queryBuilder(params),
                undefined,
                {
                    Authorization: "Bearer " + params?.access_token,
                },
            );
        } catch (error) {
            throw error;
        }
    }
}
