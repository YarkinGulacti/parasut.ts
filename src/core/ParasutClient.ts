import axios from "axios";
import { ParasutService } from "../lib/ParasutService";
import { ParasutEndpoints, HTTPMethods } from "../lib/Endpoints";
import { TokenAuthenticationResponse } from "../lib/types/response/TokenAuthentication.response";
import { GetSalesInvoicesParams } from "../lib/types/request/params/GetSalesInvoices.params";
import { GetContactsParams } from "../lib/types/request/params/GetContacts.params";
import { GetCategoriesParams } from "../lib/types/request/params/GetCategories.params";

export class ParasutClient {
    private authentication:
        | (TokenAuthenticationResponse & {
              expire_date: Date;
          })
        | undefined;
    private ParasutService: ParasutService;

    constructor(
        private client_id: string,
        private client_secret: string,
        private username: string,
        private password: string,
        private redirect_uri: string,
        private company_id: number,
    ) {
        this.ParasutService = new ParasutService(this.company_id);

        try {
            this.tokenAuthentication(
                this.client_id,
                this.client_secret,
                this.username,
                this.password,
                this.redirect_uri,
            )
                .then((token) => {
                    this.authentication = {
                        ...token,
                        expire_date: new Date(new Date().getTime() + token.expires_in),
                    };
                })
                .catch((error) => {
                    throw error;
                });
        } catch (error) {
            throw error;
        }
    }

    private buildQueryParameters(params: any): string {
        let queryParameters = [];

        for (const key of Object.keys(params)) {
            queryParameters.push(`${key}=${params[key] as string}`);
        }

        return `?${queryParameters.join("&")}`;
    }

    private async buildRequest<T>(
        baseUrl: string,
        endpoint: ParasutEndpoints,
        method: HTTPMethods,
        params?: any,
        body?: any,
        headers?: any,
    ) {
        try {
            const query = this.buildQueryParameters(params);
            const url = `${baseUrl}${endpoint}${query}`;
            const response = await axios[method](url, body, {
                headers: headers,
            });

            return response.data as T;
        } catch (error) {
            throw error;
        }
    }

    private async tokenAuthentication(
        client_id: string,
        client_secret: string,
        username: string,
        password: string,
        redirect_uri: string,
    ) {
        try {
            return await this.buildRequest<TokenAuthenticationResponse>(
                ParasutEndpoints.BASE_URL,
                ParasutEndpoints.TOKEN_URL,
                HTTPMethods.POST,
                {
                    grant_type: "password",
                    client_id,
                    client_secret,
                    username,
                    password,
                    redirect_uri,
                },
            );
        } catch (error) {
            throw error;
        }
    }

    public async GetSalesInvoices(params?: GetSalesInvoicesParams) {
        try {
            // if (!this.checkIfTokenIsValid()) {
            const token = await this.tokenAuthentication(
                this.client_id,
                this.client_secret,
                this.username,
                this.password,
                this.redirect_uri,
            );
            this.authentication = {
                ...token,
                expire_date: new Date(new Date().getTime() + token.expires_in),
            };
            // }

            const paramsObj = {
                ...params,
                access_token: this.authentication?.access_token as string,
            };

            return await this.ParasutService.GetSalesInvoices(paramsObj);
        } catch (error) {
            throw error;
        }
    }

    public async GetContacts(params?: GetContactsParams) {
        try {
            // if (!this.checkIfTokenIsValid()) {
            const token = await this.tokenAuthentication(
                this.client_id,
                this.client_secret,
                this.username,
                this.password,
                this.redirect_uri,
            );
            this.authentication = {
                ...token,
                expire_date: new Date(new Date().getTime() + token.expires_in),
            };
            // }

            const paramsObj = {
                ...params,
                access_token: this.authentication?.access_token as string,
            };

            return await this.ParasutService.GetContacts(paramsObj);
        } catch (error) {
            throw error;
        }
    }

    public async GetCategories(params?: GetCategoriesParams) {
        try {
            // if (!this.checkIfTokenIsValid()) {
            const token = await this.tokenAuthentication(
                this.client_id,
                this.client_secret,
                this.username,
                this.password,
                this.redirect_uri,
            );
            this.authentication = {
                ...token,
                expire_date: new Date(new Date().getTime() + token.expires_in),
            };
            // }

            const paramsObj = {
                ...params,
                access_token: this.authentication?.access_token as string,
            };

            return await this.ParasutService.GetCategories(paramsObj);
        } catch (error) {
            throw error;
        }
    }
}
